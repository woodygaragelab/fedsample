"""
Lambda: GET /members/search

Query params:
    keyword           - search word (partial match on memberNo, corporateName, facilityName)
    excludeWithdrawal - exclude withdrawn members when "true"
    pageSize          - records per page (default 30, max 100)
    page              - page number (1-based)

Response: { total: int, members: list }
"""

import json

MEMBER_MASTER = [
    {"id": 689, "memberNo": "",      "memberType": "正会員",    "corporateName": "ＸＸ法人三河会",     "facilityName": "岡崎施設",       "joinDate": "2021/07/14", "prefecture": "愛知",    "withdrawn": False},
    {"id": 688, "memberNo": "",      "memberType": "正会員",    "corporateName": "ＸＸ法人大阪Ａ",   "facilityName": "テストＡ施設",    "joinDate": "2021/07/13", "prefecture": "東京",    "withdrawn": False},
    {"id": 685, "memberNo": "",      "memberType": "正会員",    "corporateName": "法人小田",     "facilityName": "岐阜施設",  "joinDate": "2021/07/08", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 684, "memberNo": "",      "memberType": "正会員",    "corporateName": "テスト法人",        "facilityName": "テスト施設",      "joinDate": "2021/07/08", "prefecture": "東京",    "withdrawn": False},
    {"id": 681, "memberNo": "B1995", "memberType": "個人会員",  "corporateName": "浅井株式会社",          "facilityName": "施設小谷",                "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 680, "memberNo": "C1994", "memberType": "賛助会員",  "corporateName": "株式会社朝倉",      "facilityName": "",                "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 679, "memberNo": "A1993", "memberType": "正会員",    "corporateName": "ＸＸ法人足利会",    "facilityName": "（テスト）二条施設", "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 677, "memberNo": "B2004", "memberType": "個人会員",  "corporateName": "明智十平",          "facilityName": "",                   "joinDate": "2021/06/29", "prefecture": "滋賀",  "withdrawn": False},
    {"id": 676, "memberNo": "B2003", "memberType": "個人会員",  "corporateName": "木下三郎",          "facilityName": "",                   "joinDate": "2021/06/29", "prefecture": "神奈川",    "withdrawn": False},
    {"id": 675, "memberNo": "B2002", "memberType": "個人会員",  "corporateName": "柴田勝",          "facilityName": "",                   "joinDate": "2021/03/25", "prefecture": "埼玉",    "withdrawn": False},
    {"id": 670, "memberNo": "A1990", "memberType": "正会員",    "corporateName": "退会済みテスト会",   "facilityName": "退会施設",           "joinDate": "2020/01/01", "prefecture": "大阪",    "withdrawn": True},
    {"id": 660, "memberNo": "B1980", "memberType": "個人会員",  "corporateName": "退会会員小早川",       "facilityName": "",                  "joinDate": "2019/04/01", "prefecture": "兵庫",    "withdrawn": True},
]


def handler(event, context):
    params = event.get("queryStringParameters") or {}

    keyword = (params.get("keyword") or "").strip()
    exclude_withdrawal = params.get("excludeWithdrawal", "true").lower() != "false"
    page_size = max(1, min(100, int(params.get("pageSize") or 30)))
    page = max(1, int(params.get("page") or 1))

    filtered = MEMBER_MASTER

    if exclude_withdrawal:
        filtered = [m for m in filtered if not m["withdrawn"]]

    if keyword:
        kw = keyword.lower()
        filtered = [
            m for m in filtered
            if kw in m["memberNo"].lower()
            or kw in m["corporateName"].lower()
            or kw in m["facilityName"].lower()
        ]

    total = len(filtered)
    offset = (page - 1) * page_size
    members = [
        {k: v for k, v in m.items() if k != "withdrawn"}
        for m in filtered[offset: offset + page_size]
    ]

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        "body": json.dumps({"total": total, "members": members}),
    }
