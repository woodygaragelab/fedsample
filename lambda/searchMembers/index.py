"""
Lambda: GET /members/search

Query params:
    keyword           - 検索ワード（会員No・法人名・施設名の部分一致）
    excludeWithdrawal - "true" のとき退会者を除外
    pageSize          - 1ページの件数（デフォルト30）
    page              - ページ番号（1始まり）

Response: { total: int, members: list[MemberRecord] }
"""

import json

# ダミーの会員マスターデータ
MEMBER_MASTER = [
    {"id": 689, "memberNo": "",      "memberType": "正会員",   "corporateName": "XX法人サンプル会",                "facilityName": "サンプルリリ施設",               "joinDate": "2021/07/14", "prefecture": "東京都", "withdrawn": False},
    {"id": 688, "memberNo": "",      "memberType": "正会員",   "corporateName": "XX法人テストA",                   "facilityName": "テストAリリリリ施設",            "joinDate": "2021/07/13", "prefecture": "東京都", "withdrawn": False},
    {"id": 685, "memberNo": "",      "memberType": "正会員",   "corporateName": "あいうえお法人",                  "facilityName": "あいうえおリリ施設",             "joinDate": "2021/07/08", "prefecture": "東京都", "withdrawn": False},
    {"id": 684, "memberNo": "",      "memberType": "正会員",   "corporateName": "てすと法人",                      "facilityName": "てすとリリ施設",                 "joinDate": "2021/07/08", "prefecture": "東京都", "withdrawn": False},
    {"id": 681, "memberNo": "B1995", "memberType": "個人会員", "corporateName": "（テスト）志賀親",                "facilityName": "",                               "joinDate": "2021/07/06", "prefecture": "",       "withdrawn": False},
    {"id": 680, "memberNo": "C1994", "memberType": "賛助会員", "corporateName": "（テスト）株式会社 社会保険情報", "facilityName": "",                               "joinDate": "2021/07/06", "prefecture": "",       "withdrawn": False},
    {"id": 679, "memberNo": "A1993", "memberType": "正会員",   "corporateName": "（テスト）XX法人 水野会",         "facilityName": "（テスト）水野出版制作即印刷業施設", "joinDate": "2021/07/06", "prefecture": "",      "withdrawn": False},
    {"id": 677, "memberNo": "B2004", "memberType": "個人会員", "corporateName": "豊田 哲平",                       "facilityName": "",                               "joinDate": "2021/06/29", "prefecture": "茨城県", "withdrawn": False},
    {"id": 676, "memberNo": "B2003", "memberType": "個人会員", "corporateName": "井会　木下三郎",                  "facilityName": "",                               "joinDate": "2021/06/29", "prefecture": "東京都", "withdrawn": False},
    {"id": 675, "memberNo": "B2002", "memberType": "個人会員", "corporateName": "山田 三郎",                       "facilityName": "",                               "joinDate": "2021/03/25", "prefecture": "東京都", "withdrawn": False},
    {"id": 670, "memberNo": "A1990", "memberType": "正会員",   "corporateName": "退会済みテスト会",                "facilityName": "退会施設",                       "joinDate": "2020/01/01", "prefecture": "大阪府", "withdrawn": True},
    {"id": 660, "memberNo": "B1980", "memberType": "個人会員", "corporateName": "退会会員 田中",                   "facilityName": "",                               "joinDate": "2019/04/01", "prefecture": "愛知県", "withdrawn": True},
]


def handler(event, context):
    params = event.get("queryStringParameters") or {}

    keyword = (params.get("keyword") or "").strip()
    exclude_withdrawal = params.get("excludeWithdrawal", "true").lower() != "false"
    page_size = max(1, min(100, int(params.get("pageSize", 30) or 30)))
    page = max(1, int(params.get("page", 1) or 1))

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
        "body": json.dumps({"total": total, "members": members}, ensure_ascii=False),
    }
