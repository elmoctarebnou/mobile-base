const transactions = [
    {
        "id": 303000,
        "date": "2021-07-21",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 2461.2,
        "price": 1,
        "value": 2461.2,
        "cost_basis": null
    },
    {
        "id": 299843,
        "date": "2021-07-26",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 24,
        "price": 101.03,
        "value": 2424.72,
        "cost_basis": null
    },
    {
        "id": 297334,
        "date": "2021-07-28",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 2424.72,
        "price": 1,
        "value": 2424.72,
        "cost_basis": null
    },
    {
        "id": 303002,
        "date": "2021-07-21",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 2217.45,
        "price": 1,
        "value": 2217.45,
        "cost_basis": null
    },
    {
        "id": 238097,
        "date": "2021-05-04",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 1546.88,
        "price": 1,
        "value": 1546.88,
        "cost_basis": null
    },
    {
        "id": 246957,
        "date": "2021-05-10",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 1530.71,
        "price": 1,
        "value": 1530.71,
        "cost_basis": null
    },
    {
        "id": 243323,
        "date": "2021-05-06",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 16,
        "price": 95.6694,
        "value": 1530.71,
        "cost_basis": null
    },
    {
        "id": 238099,
        "date": "2021-05-04",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 1303.13,
        "price": 1,
        "value": 1303.13,
        "cost_basis": null
    },
    {
        "id": 4462074,
        "date": "2022-02-16",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 927.9,
        "price": 1,
        "value": 927.9,
        "cost_basis": null
    },
    {
        "id": 4463724,
        "date": "2022-02-17",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 9,
        "price": 98.4697,
        "value": 886.23,
        "cost_basis": null
    },
    {
        "id": 4461694,
        "date": "2022-02-16",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 665.4,
        "price": 1,
        "value": 665.4,
        "cost_basis": null
    },
    {
        "id": 4278425,
        "date": "2021-11-02",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 105.775,
        "value": 317.33,
        "cost_basis": null
    },
    {
        "id": 4283233,
        "date": "2021-11-04",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 317.33,
        "price": 1,
        "value": 317.33,
        "cost_basis": null
    },
    {
        "id": 333272,
        "date": "2021-08-26",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 102.2524,
        "value": 306.76,
        "cost_basis": null
    },
    {
        "id": 2110386,
        "date": "2021-08-30",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 306.76,
        "price": 1,
        "value": 306.76,
        "cost_basis": null
    },
    {
        "id": 4468565,
        "date": "2022-03-28",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 101.3923,
        "value": 304.18,
        "cost_basis": null
    },
    {
        "id": 1731342,
        "date": "2021-07-06",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 99.4859,
        "value": 298.46,
        "cost_basis": null
    },
    {
        "id": 1746306,
        "date": "2021-07-08",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 298.46,
        "price": 1,
        "value": 298.46,
        "cost_basis": null
    },
    {
        "id": 2237707,
        "date": "2021-10-06",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 99.1673,
        "value": 297.5,
        "cost_basis": null
    },
    {
        "id": 2251797,
        "date": "2021-10-08",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 297.5,
        "price": 1,
        "value": 297.5,
        "cost_basis": null
    },
    {
        "id": 4607831,
        "date": "2022-06-08",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 293.1,
        "price": 1,
        "value": 293.1,
        "cost_basis": null
    },
    {
        "id": 4523491,
        "date": "2022-04-21",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 97.56,
        "value": 292.68,
        "cost_basis": null
    },
    {
        "id": 4527328,
        "date": "2022-04-25",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 292.68,
        "price": 1,
        "value": 292.68,
        "cost_basis": null
    },
    {
        "id": 288162,
        "date": "2021-06-18",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 291.78,
        "price": 1,
        "value": 291.78,
        "cost_basis": null
    },
    {
        "id": 293046,
        "date": "2021-06-16",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 97.26,
        "value": 291.78,
        "cost_basis": null
    },
    {
        "id": 4430277,
        "date": "2022-01-24",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 95.775,
        "value": 287.33,
        "cost_basis": null
    },
    {
        "id": 4431993,
        "date": "2022-01-26",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 287.33,
        "price": 1,
        "value": 287.33,
        "cost_basis": null
    },
    {
        "id": 4581575,
        "date": "2022-05-23",
        "ticker": "SCHX",
        "type": "Buy Exchange",
        "shares": 6,
        "price": 46.9487,
        "value": 281.69,
        "cost_basis": null
    },
    {
        "id": 4584623,
        "date": "2022-05-25",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 281.69,
        "price": 1,
        "value": 281.69,
        "cost_basis": null
    },
    {
        "id": 4476470,
        "date": "2022-03-30",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 274.64,
        "price": 1,
        "value": 274.64,
        "cost_basis": null
    },
    {
        "id": 4671120,
        "date": "2022-07-11",
        "ticker": "SCHX",
        "type": "Buy Exchange",
        "shares": 6,
        "price": 45.7629,
        "value": 274.58,
        "cost_basis": null
    },
    {
        "id": 4625394,
        "date": "2022-06-22",
        "ticker": "SCHX",
        "type": "Buy Exchange",
        "shares": 6,
        "price": 44.7595,
        "value": 268.56,
        "cost_basis": null
    },
    {
        "id": 4630320,
        "date": "2022-06-24",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 268.56,
        "price": 1,
        "value": 268.56,
        "cost_basis": null
    },
    {
        "id": 4556092,
        "date": "2022-05-09",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 3,
        "price": 88.55,
        "value": 265.65,
        "cost_basis": null
    },
    {
        "id": 4561806,
        "date": "2022-05-11",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 265.65,
        "price": 1,
        "value": 265.65,
        "cost_basis": null
    },
    {
        "id": 4462482,
        "date": "2022-02-16",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4499015,
        "date": "2022-04-04",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4501131,
        "date": "2022-04-04",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4522090,
        "date": "2022-04-20",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4522103,
        "date": "2022-04-20",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4551104,
        "date": "2022-05-06",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4554906,
        "date": "2022-05-06",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4578004,
        "date": "2022-05-20",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4578380,
        "date": "2022-05-20",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4600788,
        "date": "2022-06-03",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4602401,
        "date": "2022-06-03",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4667386,
        "date": "2022-07-08",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 4668954,
        "date": "2022-07-08",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 262.5,
        "price": 1,
        "value": 262.5,
        "cost_basis": null
    },
    {
        "id": 238098,
        "date": "2021-05-04",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 265088,
        "date": "2021-06-03",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 265089,
        "date": "2021-06-03",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 288166,
        "date": "2021-06-18",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 329115,
        "date": "2021-08-20",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 329117,
        "date": "2021-08-20",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 3993124,
        "date": "2021-11-01",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 3993841,
        "date": "2021-11-01",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2167820,
        "date": "2021-09-17",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4301045,
        "date": "2021-11-17",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4301389,
        "date": "2021-11-17",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4328361,
        "date": "2021-12-02",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4330236,
        "date": "2021-12-02",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 303001,
        "date": "2021-07-21",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2133042,
        "date": "2021-09-02",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2140986,
        "date": "2021-09-02",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2147536,
        "date": "2021-08-04",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2159252,
        "date": "2021-08-04",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2167578,
        "date": "2021-09-17",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2230123,
        "date": "2021-10-04",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2232390,
        "date": "2021-10-04",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2265792,
        "date": "2021-10-18",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 2266228,
        "date": "2021-10-18",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 1729335,
        "date": "2021-05-17",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 1730975,
        "date": "2021-07-02",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 288165,
        "date": "2021-06-18",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 1755144,
        "date": "2021-07-02",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 1758042,
        "date": "2021-05-17",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4377261,
        "date": "2021-12-21",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4378220,
        "date": "2021-12-21",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4423129,
        "date": "2022-01-10",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 243.75,
        "price": 1,
        "value": 243.75,
        "cost_basis": null
    },
    {
        "id": 4304601,
        "date": "2021-11-19",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 107.23,
        "value": 214.46,
        "cost_basis": null
    },
    {
        "id": 4307214,
        "date": "2021-11-23",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 214.46,
        "price": 1,
        "value": 214.46,
        "cost_basis": null
    },
    {
        "id": 4423988,
        "date": "2022-01-11",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 105.1831,
        "value": 210.37,
        "cost_basis": null
    },
    {
        "id": 4382132,
        "date": "2021-12-22",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 105.1799,
        "value": 210.36,
        "cost_basis": null
    },
    {
        "id": 4383116,
        "date": "2021-12-27",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 210.36,
        "price": 1,
        "value": 210.36,
        "cost_basis": null
    },
    {
        "id": 2268487,
        "date": "2021-10-19",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 103.2869,
        "value": 206.57,
        "cost_basis": null
    },
    {
        "id": 2275102,
        "date": "2021-10-21",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 206.57,
        "price": 1,
        "value": 206.57,
        "cost_basis": null
    },
    {
        "id": 362329,
        "date": "2021-09-08",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 103.1011,
        "value": 206.2,
        "cost_basis": null
    },
    {
        "id": 368689,
        "date": "2021-09-10",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 206.2,
        "price": 1,
        "value": 206.2,
        "cost_basis": null
    },
    {
        "id": 4331332,
        "date": "2021-12-03",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 101.73,
        "value": 203.46,
        "cost_basis": null
    },
    {
        "id": 4339790,
        "date": "2021-12-07",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 203.46,
        "price": 1,
        "value": 203.46,
        "cost_basis": null
    },
    {
        "id": 4502655,
        "date": "2022-04-05",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 101.17,
        "value": 202.34,
        "cost_basis": null
    },
    {
        "id": 4505466,
        "date": "2022-04-07",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 202.34,
        "price": 1,
        "value": 202.34,
        "cost_basis": null
    },
    {
        "id": 2193380,
        "date": "2021-09-24",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 201.58,
        "price": 1,
        "value": 201.58,
        "cost_basis": null
    },
    {
        "id": 2184374,
        "date": "2021-09-22",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 100.7909,
        "value": 201.58,
        "cost_basis": null
    },
    {
        "id": 319630,
        "date": "2021-08-19",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 100.356,
        "value": 200.71,
        "cost_basis": null
    },
    {
        "id": 328197,
        "date": "2021-08-23",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 200.71,
        "price": 1,
        "value": 200.71,
        "cost_basis": null
    },
    {
        "id": 280441,
        "date": "2021-06-23",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 97.8338,
        "value": 195.67,
        "cost_basis": null
    },
    {
        "id": 1772078,
        "date": "2021-06-25",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 195.67,
        "price": 1,
        "value": 195.67,
        "cost_basis": null
    },
    {
        "id": 252315,
        "date": "2021-05-18",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 2,
        "price": 95.0485,
        "value": 190.1,
        "cost_basis": null
    },
    {
        "id": 261395,
        "date": "2021-05-20",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 190.1,
        "price": 1,
        "value": 190.1,
        "cost_basis": null
    },
    {
        "id": 4423142,
        "date": "2022-01-10",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 135.42,
        "price": 1,
        "value": 135.42,
        "cost_basis": null
    },
    {
        "id": 4423383,
        "date": "2022-01-10",
        "ticker": "FID:CASH",
        "type": "Client Contribution",
        "shares": 108.33,
        "price": 1,
        "value": 108.33,
        "cost_basis": null
    },
    {
        "id": 4376275,
        "date": "2021-12-20",
        "ticker": "ITOT",
        "type": "Buy Exchange",
        "shares": 1,
        "price": 102.27,
        "value": 102.27,
        "cost_basis": null
    },
    {
        "id": 4379484,
        "date": "2021-12-22",
        "ticker": "FID:CASH",
        "type": "Buy Exchange",
        "shares": 102.27,
        "price": 1,
        "value": 102.27,
        "cost_basis": null
    },
    {
        "id": 4478516,
        "date": "2022-03-30",
        "ticker": "ITOT",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 29.54,
        "cost_basis": null
    },
    {
        "id": 4479695,
        "date": "2022-03-30",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 29.54,
        "price": 1,
        "value": 29.54,
        "cost_basis": null
    },
    {
        "id": 4617845,
        "date": "2022-06-15",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 27.84,
        "price": 1,
        "value": 27.84,
        "cost_basis": null
    },
    {
        "id": 4618730,
        "date": "2022-06-15",
        "ticker": "ITOT",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 27.84,
        "cost_basis": null
    },
    {
        "id": 4621195,
        "date": "2022-06-15",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 27.84,
        "price": 1,
        "value": 27.84,
        "cost_basis": null
    },
    {
        "id": 4369646,
        "date": "2021-12-17",
        "ticker": "ITOT",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 26.09,
        "cost_basis": null
    },
    {
        "id": 4372077,
        "date": "2021-12-17",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 26.09,
        "price": 1,
        "value": 26.09,
        "cost_basis": null
    },
    {
        "id": 4372676,
        "date": "2021-12-17",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 26.09,
        "price": 1,
        "value": 26.09,
        "cost_basis": null
    },
    {
        "id": 4182821,
        "date": "2021-09-30",
        "ticker": "ITOT",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 21.62,
        "cost_basis": null
    },
    {
        "id": 2219096,
        "date": "2021-09-30",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 21.62,
        "price": 1,
        "value": 21.62,
        "cost_basis": null
    },
    {
        "id": 2221083,
        "date": "2021-09-30",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 21.62,
        "price": 1,
        "value": 21.62,
        "cost_basis": null
    },
    {
        "id": 292385,
        "date": "2021-06-16",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 4.25,
        "price": 1,
        "value": 4.25,
        "cost_basis": null
    },
    {
        "id": 292383,
        "date": "2021-06-16",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 4.25,
        "price": 1,
        "value": 4.25,
        "cost_basis": null
    },
    {
        "id": 1756678,
        "date": "2021-06-16",
        "ticker": "ITOT",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 4.25,
        "cost_basis": null
    },
    {
        "id": 4639464,
        "date": "2022-06-27",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 2.24,
        "price": 1,
        "value": 2.24,
        "cost_basis": null
    },
    {
        "id": 4643602,
        "date": "2022-06-27",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 2.24,
        "price": 1,
        "value": 2.24,
        "cost_basis": null
    },
    {
        "id": 4644339,
        "date": "2022-06-27",
        "ticker": "SCHX",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 2.24,
        "cost_basis": null
    },
    {
        "id": 4652714,
        "date": "2022-06-30",
        "ticker": "FDRXX",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 0.07,
        "cost_basis": null
    },
    {
        "id": 4657442,
        "date": "2022-06-30",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 0.07,
        "price": 1,
        "value": 0.07,
        "cost_basis": null
    },
    {
        "id": 4659305,
        "date": "2022-06-30",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 0.07,
        "price": 1,
        "value": 0.07,
        "cost_basis": null
    },
    {
        "id": 4592674,
        "date": "2022-05-31",
        "ticker": "FDRXX",
        "type": "Dividend to Cash",
        "shares": 0,
        "price": 0,
        "value": 0.04,
        "cost_basis": null
    },
    {
        "id": 4595309,
        "date": "2022-05-31",
        "ticker": "FID:CASH",
        "type": "Income Reinvested",
        "shares": 0.04,
        "price": 1,
        "value": 0.04,
        "cost_basis": null
    },
    {
        "id": 4595531,
        "date": "2022-05-31",
        "ticker": "FDRXX",
        "type": "Buy Exchange",
        "shares": 0.04,
        "price": 1,
        "value": 0.04,
        "cost_basis": null
    },
    {
        "id": 4593874,
        "date": "2022-05-31",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -0.04,
        "price": 1,
        "value": -0.04,
        "cost_basis": null
    },
    {
        "id": 4656363,
        "date": "2022-06-30",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -0.07,
        "price": 1,
        "value": -0.07,
        "cost_basis": null
    },
    {
        "id": 4643087,
        "date": "2022-06-27",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -2.24,
        "price": 1,
        "value": -2.24,
        "cost_basis": null
    },
    {
        "id": 292384,
        "date": "2021-06-16",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -4.25,
        "price": 1,
        "value": -4.25,
        "cost_basis": null
    },
    {
        "id": 2219459,
        "date": "2021-09-30",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -21.62,
        "price": 1,
        "value": -21.62,
        "cost_basis": null
    },
    {
        "id": 4370219,
        "date": "2021-12-17",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -26.09,
        "price": 1,
        "value": -26.09,
        "cost_basis": null
    },
    {
        "id": 4618010,
        "date": "2022-06-15",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -27.84,
        "price": 1,
        "value": -27.84,
        "cost_basis": null
    },
    {
        "id": 4376029,
        "date": "2021-12-20",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -102.27,
        "price": 1,
        "value": -102.27,
        "cost_basis": null
    },
    {
        "id": 4381599,
        "date": "2021-12-22",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -102.27,
        "price": 1,
        "value": -102.27,
        "cost_basis": null
    },
    {
        "id": 261396,
        "date": "2021-05-20",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -190.1,
        "price": 1,
        "value": -190.1,
        "cost_basis": null
    },
    {
        "id": 252714,
        "date": "2021-05-18",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -190.1,
        "price": 1,
        "value": -190.1,
        "cost_basis": null
    },
    {
        "id": 279380,
        "date": "2021-06-23",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -195.67,
        "price": 1,
        "value": -195.67,
        "cost_basis": null
    },
    {
        "id": 1740661,
        "date": "2021-06-25",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -195.67,
        "price": 1,
        "value": -195.67,
        "cost_basis": null
    },
    {
        "id": 318523,
        "date": "2021-08-19",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -200.71,
        "price": 1,
        "value": -200.71,
        "cost_basis": null
    },
    {
        "id": 328198,
        "date": "2021-08-23",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -200.71,
        "price": 1,
        "value": -200.71,
        "cost_basis": null
    },
    {
        "id": 2181766,
        "date": "2021-09-22",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -201.58,
        "price": 1,
        "value": -201.58,
        "cost_basis": null
    },
    {
        "id": 2189758,
        "date": "2021-09-24",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -201.58,
        "price": 1,
        "value": -201.58,
        "cost_basis": null
    },
    {
        "id": 4502657,
        "date": "2022-04-05",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -202.34,
        "price": 1,
        "value": -202.34,
        "cost_basis": null
    },
    {
        "id": 4511013,
        "date": "2022-04-07",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -202.34,
        "price": 1,
        "value": -202.34,
        "cost_basis": null
    },
    {
        "id": 4331212,
        "date": "2021-12-03",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -203.46,
        "price": 1,
        "value": -203.46,
        "cost_basis": null
    },
    {
        "id": 4339122,
        "date": "2021-12-07",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -203.46,
        "price": 1,
        "value": -203.46,
        "cost_basis": null
    },
    {
        "id": 361613,
        "date": "2021-09-08",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -206.2,
        "price": 1,
        "value": -206.2,
        "cost_basis": null
    },
    {
        "id": 367723,
        "date": "2021-09-10",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -206.2,
        "price": 1,
        "value": -206.2,
        "cost_basis": null
    },
    {
        "id": 2275191,
        "date": "2021-10-21",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -206.57,
        "price": 1,
        "value": -206.57,
        "cost_basis": null
    },
    {
        "id": 2268845,
        "date": "2021-10-19",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -206.57,
        "price": 1,
        "value": -206.57,
        "cost_basis": null
    },
    {
        "id": 4382097,
        "date": "2021-12-22",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -210.36,
        "price": 1,
        "value": -210.36,
        "cost_basis": null
    },
    {
        "id": 4383790,
        "date": "2021-12-27",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -210.36,
        "price": 1,
        "value": -210.36,
        "cost_basis": null
    },
    {
        "id": 4424153,
        "date": "2022-01-11",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -210.37,
        "price": 1,
        "value": -210.37,
        "cost_basis": null
    },
    {
        "id": 4304597,
        "date": "2021-11-19",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -214.46,
        "price": 1,
        "value": -214.46,
        "cost_basis": null
    },
    {
        "id": 4308653,
        "date": "2021-11-23",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -214.46,
        "price": 1,
        "value": -214.46,
        "cost_basis": null
    },
    {
        "id": 265087,
        "date": "2021-06-03",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 329113,
        "date": "2021-08-20",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 3994847,
        "date": "2021-11-01",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 4301089,
        "date": "2021-11-17",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 4330332,
        "date": "2021-12-02",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 2128835,
        "date": "2021-09-02",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 2153338,
        "date": "2021-08-04",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 2168262,
        "date": "2021-09-17",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 2229709,
        "date": "2021-10-04",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 2266707,
        "date": "2021-10-18",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 1749382,
        "date": "2021-07-02",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 288164,
        "date": "2021-06-18",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 1759513,
        "date": "2021-05-17",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 4378963,
        "date": "2021-12-21",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 4422717,
        "date": "2022-01-10",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -243.75,
        "price": 1,
        "value": -243.75,
        "cost_basis": null
    },
    {
        "id": 4501653,
        "date": "2022-04-04",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4522250,
        "date": "2022-04-20",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4549716,
        "date": "2022-05-06",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4577845,
        "date": "2022-05-20",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4600459,
        "date": "2022-06-03",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4667564,
        "date": "2022-07-08",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -262.5,
        "price": 1,
        "value": -262.5,
        "cost_basis": null
    },
    {
        "id": 4557641,
        "date": "2022-05-09",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -265.65,
        "price": 1,
        "value": -265.65,
        "cost_basis": null
    },
    {
        "id": 4562818,
        "date": "2022-05-11",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -265.65,
        "price": 1,
        "value": -265.65,
        "cost_basis": null
    },
    {
        "id": 4625718,
        "date": "2022-06-22",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -268.56,
        "price": 1,
        "value": -268.56,
        "cost_basis": null
    },
    {
        "id": 4631060,
        "date": "2022-06-24",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -268.56,
        "price": 1,
        "value": -268.56,
        "cost_basis": null
    },
    {
        "id": 4671267,
        "date": "2022-07-11",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -274.58,
        "price": 1,
        "value": -274.58,
        "cost_basis": null
    },
    {
        "id": 4478785,
        "date": "2022-03-30",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -274.64,
        "price": 1,
        "value": -274.64,
        "cost_basis": null
    },
    {
        "id": 4580988,
        "date": "2022-05-23",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -281.69,
        "price": 1,
        "value": -281.69,
        "cost_basis": null
    },
    {
        "id": 4584526,
        "date": "2022-05-25",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -281.69,
        "price": 1,
        "value": -281.69,
        "cost_basis": null
    },
    {
        "id": 4430636,
        "date": "2022-01-24",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -287.33,
        "price": 1,
        "value": -287.33,
        "cost_basis": null
    },
    {
        "id": 4432042,
        "date": "2022-01-26",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -287.33,
        "price": 1,
        "value": -287.33,
        "cost_basis": null
    },
    {
        "id": 292744,
        "date": "2021-06-16",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -291.78,
        "price": 1,
        "value": -291.78,
        "cost_basis": null
    },
    {
        "id": 288163,
        "date": "2021-06-18",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -291.78,
        "price": 1,
        "value": -291.78,
        "cost_basis": null
    },
    {
        "id": 4522541,
        "date": "2022-04-21",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -292.68,
        "price": 1,
        "value": -292.68,
        "cost_basis": null
    },
    {
        "id": 4528083,
        "date": "2022-04-25",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -292.68,
        "price": 1,
        "value": -292.68,
        "cost_basis": null
    },
    {
        "id": 4607134,
        "date": "2022-06-08",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -293.1,
        "price": 1,
        "value": -293.1,
        "cost_basis": null
    },
    {
        "id": 2242862,
        "date": "2021-10-06",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -297.5,
        "price": 1,
        "value": -297.5,
        "cost_basis": null
    },
    {
        "id": 2251183,
        "date": "2021-10-08",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -297.5,
        "price": 1,
        "value": -297.5,
        "cost_basis": null
    },
    {
        "id": 1753790,
        "date": "2021-07-06",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -298.46,
        "price": 1,
        "value": -298.46,
        "cost_basis": null
    },
    {
        "id": 1771507,
        "date": "2021-07-08",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -298.46,
        "price": 1,
        "value": -298.46,
        "cost_basis": null
    },
    {
        "id": 4470342,
        "date": "2022-03-28",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -304.18,
        "price": 1,
        "value": -304.18,
        "cost_basis": null
    },
    {
        "id": 333795,
        "date": "2021-08-26",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -306.76,
        "price": 1,
        "value": -306.76,
        "cost_basis": null
    },
    {
        "id": 2125693,
        "date": "2021-08-30",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -306.76,
        "price": 1,
        "value": -306.76,
        "cost_basis": null
    },
    {
        "id": 4278816,
        "date": "2021-11-02",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -317.33,
        "price": 1,
        "value": -317.33,
        "cost_basis": null
    },
    {
        "id": 4283196,
        "date": "2021-11-04",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -317.33,
        "price": 1,
        "value": -317.33,
        "cost_basis": null
    },
    {
        "id": 4464214,
        "date": "2022-02-17",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -886.23,
        "price": 1,
        "value": -886.23,
        "cost_basis": null
    },
    {
        "id": 4462229,
        "date": "2022-02-16",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -927.9,
        "price": 1,
        "value": -927.9,
        "cost_basis": null
    },
    {
        "id": 246958,
        "date": "2021-05-10",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -1530.71,
        "price": 1,
        "value": -1530.71,
        "cost_basis": null
    },
    {
        "id": 243298,
        "date": "2021-05-06",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -1530.71,
        "price": 1,
        "value": -1530.71,
        "cost_basis": null
    },
    {
        "id": 238096,
        "date": "2021-05-04",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -1546.88,
        "price": 1,
        "value": -1546.88,
        "cost_basis": null
    },
    {
        "id": 297335,
        "date": "2021-07-28",
        "ticker": "FDRXX",
        "type": "Sell Exchange",
        "shares": -2424.72,
        "price": 1,
        "value": -2424.72,
        "cost_basis": null
    },
    {
        "id": 299470,
        "date": "2021-07-26",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -2424.72,
        "price": 1,
        "value": -2424.72,
        "cost_basis": null
    },
    {
        "id": 302999,
        "date": "2021-07-21",
        "ticker": "FID:CASH",
        "type": "Sell Exchange",
        "shares": -2461.2,
        "price": 1,
        "value": -2461.2,
        "cost_basis": null
    }
]

export {transactions}