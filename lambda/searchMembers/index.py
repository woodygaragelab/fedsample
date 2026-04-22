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
    {"id": 689, "memberNo": "",      "memberType": "Sei-kaiin",    "corporateName": "XX Hojin Sample-kai",              "facilityName": "Sample施設",              "joinDate": "2021/07/14", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 688, "memberNo": "",      "memberType": "Sei-kaiin",    "corporateName": "XX Hojin Test-A",                  "facilityName": "Test-A 施設",              "joinDate": "2021/07/13", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 685, "memberNo": "",      "memberType": "Sei-kaiin",    "corporateName": "Aiueo Hojin",                      "facilityName": "Aiueo 施設",               "joinDate": "2021/07/08", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 684, "memberNo": "",      "memberType": "Sei-kaiin",    "corporateName": "Test Hojin",                       "facilityName": "Test 施設",                "joinDate": "2021/07/08", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 681, "memberNo": "B1995", "memberType": "Kojin-kaiin",  "corporateName": "(Test) Shiga Chika",               "facilityName": "",                         "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 680, "memberNo": "C1994", "memberType": "Sanjo-kaiin",  "corporateName": "(Test) Kabushiki Shakai Hoken",    "facilityName": "",                         "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 679, "memberNo": "A1993", "memberType": "Sei-kaiin",    "corporateName": "(Test) XX Hojin Mizuno-kai",       "facilityName": "(Test) Mizuno 施設",       "joinDate": "2021/07/06", "prefecture": "",         "withdrawn": False},
    {"id": 677, "memberNo": "B2004", "memberType": "Kojin-kaiin",  "corporateName": "Toyota Teppei",                    "facilityName": "",                         "joinDate": "2021/06/29", "prefecture": "Ibaraki",  "withdrawn": False},
    {"id": 676, "memberNo": "B2003", "memberType": "Kojin-kaiin",  "corporateName": "Ikai Kinoshita Saburo",            "facilityName": "",                         "joinDate": "2021/06/29", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 675, "memberNo": "B2002", "memberType": "Kojin-kaiin",  "corporateName": "Yamada Saburo",                    "facilityName": "",                         "joinDate": "2021/03/25", "prefecture": "Tokyo",    "withdrawn": False},
    {"id": 670, "memberNo": "A1990", "memberType": "Sei-kaiin",    "corporateName": "Taikai-zumi Test-kai",             "facilityName": "Taikai 施設",              "joinDate": "2020/01/01", "prefecture": "Osaka",    "withdrawn": True},
    {"id": 660, "memberNo": "B1980", "memberType": "Kojin-kaiin",  "corporateName": "Taikai Kaiin Tanaka",              "facilityName": "",                         "joinDate": "2019/04/01", "prefecture": "Aichi",    "withdrawn": True},
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
