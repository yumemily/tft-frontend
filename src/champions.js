export default {
    "TFT3_Ziggs": {
        "ability": {
            "desc": "Ziggs throws a bomb at an enemy, dealing @ModifiedDamage@ magic damage.",
            "icon": "ASSETS/Characters/Ziggs/HUD/Icons2D/ZiggsQ.dds",
            "name": "Bomb!",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        70,
                        300,
                        400,
                        700,
                        550,
                        650,
                        750
                    ]
                }
            ]
        },
        "apiName": "TFT3_Ziggs",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Ziggs.TFT_Set3.dds",
        "name": "Ziggs",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 40,
            "hp": 500,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 40,
            "range": 3
        },
        "traits": [
            "Rebel",
            "Demolitionist"
        ]
    },
    "TFT3_Jinx": {
        "ability": {
            "desc": "Passive: Jinx gets excited as she helps take down enemy units!<br><br>After her first takedown, Jinx gains @PercentAttackSpeed@ bonus Attack Speed.<br><br>After her second takedown, Jinx swaps to her rocket launcher, causing her Basic Attacks to deal @ModifiedDamage@ bonus magic damage to all enemies in a small area around her target.",
            "icon": "ASSETS/Characters/Jinx/HUD/Icons2D/Jinx_Passive.dds",
            "name": "Get Excited!",
            "variables": [
                {
                    "name": "HitWindow",
                    "value": [
                        10,
                        10,
                        10,
                        10,
                        10,
                        10,
                        10
                    ]
                },
                {
                    "name": "BuffDuration",
                    "value": [
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60
                    ]
                },
                {
                    "name": "AttackSpeedBonus",
                    "value": [
                        0.4000000059604645,
                        0.6000000238418579,
                        0.75,
                        1,
                        1.2000000476837158,
                        1.399999976158142,
                        1.600000023841858
                    ]
                },
                {
                    "name": "RocketDamage",
                    "value": [
                        0,
                        125,
                        200,
                        750,
                        1000,
                        500,
                        600
                    ]
                }
            ]
        },
        "apiName": "TFT3_Jinx",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Jinx.TFT_Set3.dds",
        "name": "Jinx",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 70,
            "hp": 600,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 0,
            "range": 3
        },
        "traits": [
            "Rebel",
            "Blaster"
        ]
    },
    "TFT3_Sona": {
        "ability": {
            "desc": "Sona heals @NumberOfTargets@ injured allies for @ModifiedHealing@ and cleanses them of stuns.",
            "icon": "ASSETS/Characters/Sona/HUD/Icons2D/Sona_W.dds",
            "name": "Aria of Perseverance",
            "variables": [
                {
                    "name": "HealAmount",
                    "value": [
                        150,
                        150,
                        200,
                        300,
                        300,
                        300,
                        300
                    ]
                },
                {
                    "name": "NumberOfTargets",
                    "value": [
                        2,
                        2,
                        3,
                        4,
                        4,
                        4,
                        4
                    ]
                }
            ]
        },
        "apiName": "TFT3_Sona",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Sona.TFT_Set3.dds",
        "name": "Sona",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 40,
            "hp": 550,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 40,
            "range": 3
        },
        "traits": [
            "Rebel",
            "Mystic"
        ]
    },
    "TFT3_Yasuo": {
        "ability": {
            "desc": "Yasuo blinks to the farthest enemy in range, knocks them up for @StunDuration@ seconds, and Attacks them @ModifiedAttacks@ times (applies on-hit effects).",
            "icon": "ASSETS/Characters/Yasuo/HUD/Icons2D/Yasuo_R.dds",
            "name": "Last Breath",
            "variables": [
                {
                    "name": "StunDuration",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    "name": "Damage",
                    "value": [
                        100,
                        100,
                        100,
                        100,
                        100,
                        100,
                        100
                    ]
                },
                {
                    "name": "NumHits",
                    "value": [
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ]
                }
            ]
        },
        "apiName": "TFT3_Yasuo",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Yasuo.TFT_Set3.dds",
        "name": "Yasuo",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 700,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 90,
            "range": 1
        },
        "traits": [
            "Rebel",
            "Blademaster"
        ]
    },
    "TFT3_Malphite": {
        "ability": {
            "desc": "Passive: Malphite starts combat with a shield equal to @ModifiedPercentHealth@ of his maximum health.",
            "icon": "ASSETS/Characters/Malphite/HUD/Icons2D/Malphite_GraniteShield.dds",
            "name": "Energy Shield",
            "variables": [
                {
                    "name": "PercentHealth",
                    "value": [
                        0.3499999940395355,
                        0.4000000059604645,
                        0.44999998807907104,
                        0.6000000238418579,
                        0.550000011920929,
                        0.6000000238418579,
                        0.6499999761581421
                    ]
                },
                {
                    "name": "SecondsPerRefresh",
                    "value": [
                        0,
                        9,
                        9,
                        9,
                        9,
                        9,
                        9
                    ]
                }
            ]
        },
        "apiName": "TFT3_Malphite",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Malphite.TFT_Set3.dds",
        "name": "Malphite",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.5,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 70,
            "hp": 700,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 0,
            "range": 1
        },
        "traits": [
            "Rebel",
            "Brawler"
        ]
    },
    "TFT3_MasterYi": {
        "ability": {
            "desc": "For @Duration@ seconds Master Yi gains massively increased movement speed, heals for @ModifiedHeal@ of his maximum health each second, and deals @ModifiedDamage@ bonus true damage with his Basic Attacks.",
            "icon": "ASSETS/Characters/MasterYi/HUD/Icons2D/MasterYi_W.dds",
            "name": "Chosen One",
            "variables": [
                {
                    "name": "Duration",
                    "value": [
                        5,
                        5,
                        5,
                        5,
                        5,
                        5,
                        5
                    ]
                },
                {
                    "name": "HealAmountPercent",
                    "value": [
                        0,
                        0.11999999731779099,
                        0.11999999731779099,
                        0.11999999731779099,
                        0.20000000298023224,
                        0.20000000298023224,
                        0.20000000298023224
                    ]
                },
                {
                    "name": "BonusTrueDamage",
                    "value": [
                        0,
                        75,
                        100,
                        200,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        "apiName": "TFT3_MasterYi",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_MasterYi.TFT_Set3.dds",
        "name": "Master Yi",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 55,
            "hp": 750,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 55,
            "range": 1
        },
        "traits": [
            "Rebel",
            "Blademaster"
        ]
    },
    "TFT3_AurelionSol": {
        "ability": {
            "desc": "Aurelion Sol launches fighters which fly out to random enemies, deal @ModifiedDamage@ magic damage, and then return. Aurelion Sol launches all ready fighters, plus @FightersPerCast@ more, when he casts.<br><br>Fighters prefer to target nearby enemies.<br><br>",
            "icon": "ASSETS/Characters/AurelionSol/HUD/Icons2D/AurelionSol_W_StarsOut.dds",
            "name": "Mobilize the Fleet",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        100,
                        150,
                        750,
                        1000,
                        1000,
                        1000
                    ]
                },
                {
                    "name": "InitialFighters",
                    "value": null
                },
                {
                    "name": "FightersPerCast",
                    "value": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                }
            ]
        },
        "apiName": "TFT3_AurelionSol",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_AurelionSol.TFT_Set3.dds",
        "name": "Aurelion Sol",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": null,
            "hp": 1100,
            "initialMana": 40,
            "magicResist": 20,
            "mana": 120,
            "range": 1
        },
        "traits": [
            "Rebel",
            "Starship"
        ]
    },
    "TFT3_MissFortune": {
        "ability": {
            "desc": "Miss Fortune channels and fires waves of bullets in a cone for @ChannelDuration@ seconds, dealing @ModifiedPercentHealth@ of enemies' maximum health in magic damage over the duration.",
            "icon": "ASSETS/Characters/MissFortune/HUD/Icons2D/MissFortune_R.dds",
            "name": "Bullet Time",
            "variables": [
                {
                    "name": "Waves",
                    "value": [
                        12,
                        12,
                        12,
                        12,
                        12,
                        12,
                        12
                    ]
                },
                {
                    "name": "TotalDamage",
                    "value": [
                        500,
                        500,
                        900,
                        9001,
                        3400,
                        4100,
                        4800
                    ]
                },
                {
                    "name": "ChannelDuration",
                    "value": [
                        2.25,
                        2.25,
                        2.25,
                        2.25,
                        2.25,
                        2.25,
                        2.25
                    ]
                },
                {
                    "name": "HexRange",
                    "value": [
                        6,
                        6,
                        6,
                        6,
                        6,
                        6,
                        6
                    ]
                },
                {
                    "name": "ShieldAmount",
                    "value": [
                        100,
                        400,
                        700,
                        1000,
                        1300,
                        1600,
                        1900
                    ]
                },
                {
                    "name": "PercentMaxHealth",
                    "value": [
                        0.20000000298023224,
                        0.6000000238418579,
                        0.800000011920929,
                        9.989999771118164,
                        5,
                        5,
                        5
                    ]
                },
                {
                    "name": "UpgradeMoreWaves",
                    "value": [
                        0,
                        5,
                        5,
                        5,
                        5,
                        5,
                        5
                    ]
                }
            ]
        },
        "apiName": "TFT3_MissFortune",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_MissFortune.TFT_Set3.dds",
        "name": "Miss Fortune",
        "stats": {
            "armor": 20,
            "attackSpeed": 1,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 800,
            "initialMana": 75,
            "magicResist": 20,
            "mana": 175,
            "range": 4
        },
        "traits": [
            "Valkyrie",
            "Mercenary",
            "Blaster"
        ]
    },
    "TFT3_KaiSa": {
        "ability": {
            "desc": "Kai'Sa launches @NumMissiles@ missiles towards each nearby enemy that deal @ModifiedDamage@ magic damage.",
            "icon": "ASSETS/Characters/Kaisa/HUD/Icons2D/Kaisa_Q.dds",
            "name": "Missile Rain",
            "variables": [
                {
                    "name": "HexRange",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    "name": "NumMissiles",
                    "value": [
                        4,
                        4,
                        6,
                        9,
                        12,
                        12,
                        12
                    ]
                },
                {
                    "name": "FakeCastTime",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    "name": "Damage",
                    "value": [
                        50,
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                },
                {
                    "name": "Radius",
                    "value": [
                        420,
                        420,
                        420,
                        420,
                        420,
                        420,
                        420
                    ]
                }
            ]
        },
        "apiName": "TFT3_KaiSa",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_KaiSa.TFT_Set3.dds",
        "name": "Kai'Sa",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 550,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 2
        },
        "traits": [
            "Valkyrie",
            "Infiltrator"
        ]
    },
    "TFT3_Kayle": {
        "ability": {
            "desc": "Kayle Ascends, causing her attacks to launch waves that deal @ModifiedDamage@ bonus magic damage.",
            "icon": "ASSETS/Characters/Kayle/HUD/Icons2D/Kayle_P.dds",
            "name": "Ascend",
            "variables": [
                {
                    "name": "WaveDamage",
                    "value": [
                        0,
                        125,
                        200,
                        600,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        "apiName": "TFT3_Kayle",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Kayle.TFT_Set3.dds",
        "name": "Kayle",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 700,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 3
        },
        "traits": [
            "Valkyrie",
            "Blademaster"
        ]
    },
    "TFT3_Ekko": {
        "ability": {
            "desc": "Ekko shatters the timeline, freezing all units in time before attacking each enemy with @ModifiedDamage@ bonus magic damage and applying on-hit effects.<br><br>Ekko cannot die while he has stopped time.",
            "icon": "ASSETS/Characters/Ekko/HUD/Icons2D/Ekko_R.dds",
            "name": "Chronobreak",
            "variables": [
                {
                    "name": "BonusDamage",
                    "value": [
                        200,
                        225,
                        400,
                        2000,
                        1200,
                        1000,
                        1000
                    ]
                },
                {
                    "name": "BaseDelayBetweenAttacks",
                    "value": [
                        0.4000000059604645,
                        0.4000000059604645,
                        0.4000000059604645,
                        0.4000000059604645,
                        0.4000000059604645,
                        0.4000000059604645,
                        0.4000000059604645
                    ]
                }
            ]
        },
        "apiName": "TFT3_Ekko",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Ekko.TFT_Set3.dds",
        "name": "Ekko",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.8999999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 850,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 150,
            "range": 1
        },
        "traits": [
            "Cybernetic",
            "Infiltrator"
        ]
    },
    "TFT3_Fiora": {
        "ability": {
            "desc": "Fiora enters a defensive stance for @BlockDuration@ seconds, becoming immune to damage and enemy spell effects. As she exits this stance, she ripostes, dealing @ModifiedDamage@ magic damage to a nearby enemy and stunning them for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/Fiora/HUD/Icons2D/Fiora_W.dds",
            "name": "Riposte",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        200,
                        300,
                        450,
                        600,
                        750,
                        900
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        3,
                        1.5,
                        1.5,
                        1.5
                    ]
                },
                {
                    "name": "BlockDuration",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                }
            ]
        },
        "apiName": "TFT3_Fiora",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Fiora.TFT_Set3.dds",
        "name": "Fiora",
        "stats": {
            "armor": 30,
            "attackSpeed": 1,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 450,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 85,
            "range": 1
        },
        "traits": [
            "Cybernetic",
            "Blademaster"
        ]
    },
    "TFT3_Vi": {
        "ability": {
            "desc": "Vi charges at the farthest enemy, knocking aside all enemies in her path and dealing them @ModifiedSecondaryDamage@ magic damage. When she reaches her target, she knocks them up for @CCDuration@ seconds and deals @ModifiedPrimaryDamage@ magic damage.",
            "icon": "ASSETS/Characters/Vi/HUD/Icons2D/ViR.dds",
            "name": "Assault and Battery",
            "variables": [
                {
                    "name": "PrimaryDamage",
                    "value": [
                        100,
                        400,
                        600,
                        1200,
                        900,
                        1100,
                        1300
                    ]
                },
                {
                    "name": "CCDuration",
                    "value": [
                        1.5,
                        2,
                        2.5,
                        3,
                        3.5,
                        4,
                        4.5
                    ]
                },
                {
                    "name": "MoveSpeed",
                    "value": [
                        1000,
                        1000,
                        1000,
                        1000,
                        1000,
                        1000,
                        1000
                    ]
                },
                {
                    "name": "OthersCCDuration",
                    "value": [
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25
                    ]
                },
                {
                    "name": "SecondaryDamage",
                    "value": [
                        0,
                        150,
                        200,
                        500,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        "apiName": "TFT3_Vi",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Vi.TFT_Set3.dds",
        "name": "Vi",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 750,
            "initialMana": 70,
            "magicResist": 20,
            "mana": 140,
            "range": 1
        },
        "traits": [
            "Cybernetic",
            "Brawler"
        ]
    },
    "TFT3_Irelia": {
        "ability": {
            "desc": "Irelia dashes to her target, Basic Attacking them for @ModifiedPercentAD@ of her Attack Damage. If this kills the target, she Bladesurges again immediately at the enemy with the highest mana. (Total Damage: @TooltipDamage@)",
            "icon": "ASSETS/Characters/Irelia/HUD/Icons2D/Irelia_Q.dds",
            "name": "Bladesurge",
            "variables": [
                {
                    "name": "PercentADDamage",
                    "value": [
                        0,
                        1.75,
                        2.5,
                        5,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        "apiName": "TFT3_Irelia",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Irelia.TFT_Set3.dds",
        "name": "Irelia",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.8500000238418579,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 70,
            "hp": 800,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 30,
            "range": 1
        },
        "traits": [
            "Cybernetic",
            "Mana-Reaver",
            "Blademaster"
        ]
    },
    "TFT3_Poppy": {
        "ability": {
            "desc": "Poppy throws her buckler at the furthest enemy, dealing @ModifiedDamage@ magic damage. The buckler then bounces back, granting Poppy a shield that blocks @ModifiedShield@ damage.",
            "icon": "ASSETS/Characters/Poppy/HUD/Icons2D/Poppy_Passive.dds",
            "name": "Buckler Toss",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        50,
                        100,
                        150,
                        200,
                        250,
                        300,
                        350
                    ]
                },
                {
                    "name": "ShieldAmount",
                    "value": [
                        100,
                        200,
                        300,
                        400,
                        500,
                        600,
                        700
                    ]
                }
            ]
        },
        "apiName": "TFT3_Poppy",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Poppy.TFT_Set3.dds",
        "name": "Poppy",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.550000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 650,
            "initialMana": 60,
            "magicResist": 20,
            "mana": 100,
            "range": 1
        },
        "traits": [
            "Star Guardian",
            "Vanguard"
        ]
    },
    "TFT3_Soraka": {
        "ability": {
            "desc": "Soraka heals all of her allies for @ModifiedHeal@.",
            "icon": "ASSETS/Characters/Soraka/HUD/Icons2D/Soraka_R.dds",
            "name": "Wish",
            "variables": [
                {
                    "name": "HealAmount",
                    "value": [
                        300,
                        375,
                        550,
                        20000,
                        1500,
                        1500,
                        1500
                    ]
                },
                {
                    "name": "HealTargets",
                    "value": [
                        15,
                        15,
                        15,
                        15,
                        15,
                        15,
                        15
                    ]
                }
            ]
        },
        "apiName": "TFT3_Soraka",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Soraka.TFT_Set3.dds",
        "name": "Soraka",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 700,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 125,
            "range": 3
        },
        "traits": [
            "Star Guardian",
            "Mystic"
        ]
    },
    "TFT3_Ahri": {
        "ability": {
            "desc": "Ahri fires an orb in a line, dealing @ModifiedDamage@ magic damage to all enemies it passes through on the way out, and @ModifiedDamage@ true damage on the way back.",
            "icon": "ASSETS/Characters/Ahri/HUD/Icons2D/Ahri_OrbofDeception.dds",
            "name": "Orb of Deception",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        150,
                        175,
                        250,
                        375,
                        500,
                        400,
                        400
                    ]
                },
                {
                    "name": "HexRange",
                    "value": [
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4
                    ]
                }
            ]
        },
        "apiName": "TFT3_Ahri",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Ahri.TFT_Set3.dds",
        "name": "Ahri",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 600,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 3
        },
        "traits": [
            "Star Guardian",
            "Sorcerer"
        ]
    },
    "TFT3_Syndra": {
        "ability": {
            "desc": "Syndra pulls in all orbs on the battlefield and creates @Spheres@ new ones, then fires them all at the enemy with the highest current Health percentage, dealing @ModifiedDamage@ magic damage per orb.<br><br><tftitemrules>Lowest total health breaks targeting ties.</tftitemrules>",
            "icon": "ASSETS/Characters/Syndra/HUD/Icons2D/SyndraR.dds",
            "name": "Unleashed Power",
            "variables": [
                {
                    "name": "Spheres",
                    "value": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "name": "CastTime",
                    "value": [
                        0.75,
                        0.75,
                        0.75,
                        0.75,
                        0.75,
                        0.75,
                        0.75
                    ]
                },
                {
                    "name": "Damage",
                    "value": [
                        0,
                        100,
                        150,
                        250,
                        200,
                        250,
                        300
                    ]
                }
            ]
        },
        "apiName": "TFT3_Syndra",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Syndra.TFT_Set3.dds",
        "name": "Syndra",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 600,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 65,
            "range": 4
        },
        "traits": [
            "Star Guardian",
            "Sorcerer"
        ]
    },
    "TFT3_Neeko": {
        "ability": {
            "desc": "Neeko leaps into the air and slams into the ground, dealing @ModifiedDamage@ magic damage to all nearby enemies and stunning them for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/Neeko/HUD/Icons2D/Neeko_R.dds",
            "name": "Pop Blossom",
            "variables": [
                {
                    "name": "DamageAmount",
                    "value": [
                        0,
                        200,
                        275,
                        550,
                        300,
                        375,
                        450
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1,
                        1.5,
                        2,
                        2.5,
                        3,
                        3.5,
                        4
                    ]
                },
                {
                    "name": "HexRadius",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                }
            ]
        },
        "apiName": "TFT3_Neeko",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Neeko.TFT_Set3.dds",
        "name": "Neeko",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 800,
            "initialMana": 75,
            "magicResist": 20,
            "mana": 150,
            "range": 2
        },
        "traits": [
            "Star Guardian",
            "Protector"
        ]
    },
    "TFT3_Gangplank": {
        "ability": {
            "desc": "Gangplank calls down an orbital strike around his target, dealing @ModifiedDamage@ damage to all enemies in a large area after @ImpactDelayTime@ seconds.",
            "icon": "ASSETS/Characters/Gangplank/HUD/Icons2D/Gangplank_R.dds",
            "name": "Orbital Strike",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        450,
                        600,
                        9001,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "name": "ImpactDelayTime",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    "name": "UpgradeDelayTime",
                    "value": [
                        0,
                        0.30000001192092896,
                        0.30000001192092896,
                        0.30000001192092896,
                        0.30000001192092896,
                        0.30000001192092896,
                        0.30000001192092896
                    ]
                },
                {
                    "name": "DoubleImpactDamagePercent",
                    "value": [
                        0,
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                }
            ]
        },
        "apiName": "TFT3_Gangplank",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Gangplank.TFT_Set3.dds",
        "name": "Gangplank",
        "stats": {
            "armor": 30,
            "attackSpeed": 1,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 1000,
            "initialMana": 100,
            "magicResist": 20,
            "mana": 175,
            "range": 1
        },
        "traits": [
            "Space Pirate",
            "Mercenary",
            "Demolitionist"
        ]
    },
    "TFT3_Darius": {
        "ability": {
            "desc": "Darius dunks an enemy, dealing @ModifiedDamage@ magic damage. If this kills the target, Darius immediately casts again.<br><br>Targets below @HealthThreshold@% health take double damage.",
            "icon": "ASSETS/Characters/TFT3_Darius/HUD/Icons2D/Darius_Icon_Sudden_Death.TFT_Set3.dds",
            "name": "Dreadnova Guillotine",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        50,
                        400,
                        500,
                        750,
                        1100,
                        1300,
                        1550
                    ]
                },
                {
                    "name": "HealthThreshold",
                    "value": [
                        50,
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                },
                {
                    "name": "DamageMultiplier",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                }
            ]
        },
        "apiName": "TFT3_Darius",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Darius.TFT_Set3.dds",
        "name": "Darius",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 750,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 1
        },
        "traits": [
            "Space Pirate",
            "Mana-Reaver"
        ]
    },
    "TFT3_Jayce": {
        "ability": {
            "desc": "Jayce slams his hammer, dealing @ModifiedDamage@ magic damage to nearby enemies.",
            "icon": "ASSETS/Characters/TFT3_Jayce/HUD/Icons2D/Jayce_Q1.dds",
            "name": "To the Skies!",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        300,
                        450,
                        600,
                        1200,
                        1200,
                        1200,
                        1200
                    ]
                },
                {
                    "name": "Radius",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                }
            ]
        },
        "apiName": "TFT3_Jayce",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Jayce.TFT_Set3.dds",
        "name": "Jayce",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 750,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 80,
            "range": 1
        },
        "traits": [
            "Space Pirate",
            "Vanguard"
        ]
    },
    "TFT3_Annie": {
        "ability": {
            "desc": "Annie blasts a cone of fire dealing @ModifiedDamage@ magic damage to enemies in front of her, then creates a shield with @ModifiedShield@ health for herself for @ShieldDuration@ seconds.",
            "icon": "ASSETS/Characters/Annie/HUD/Icons2D/Annie_E.dds",
            "name": "Galaxy Shield-Blast",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        100,
                        150,
                        200,
                        300,
                        450,
                        450,
                        450
                    ]
                },
                {
                    "name": "ShieldAmount",
                    "value": [
                        200,
                        270,
                        360,
                        540,
                        700,
                        450,
                        450
                    ]
                },
                {
                    "name": "ShieldDuration",
                    "value": [
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4
                    ]
                }
            ]
        },
        "apiName": "TFT3_Annie",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Annie.TFT_Set3.dds",
        "name": "Annie",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 40,
            "hp": 700,
            "initialMana": 75,
            "magicResist": 20,
            "mana": 150,
            "range": 2
        },
        "traits": [
            "Mech-Pilot",
            "Sorcerer"
        ]
    },
    "TFT3_Fizz": {
        "ability": {
            "desc": "Fizz throws a lure that attracts a shark. It deals @ModifiedDamage@ magic damage to enemies caught, knocking them back and stunning them for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/Fizz/HUD/Icons2D/Fizz_R.dds",
            "name": "Chum the Waters",
            "variables": [
                {
                    "name": "Delay",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                },
                {
                    "name": "Damage",
                    "value": [
                        0,
                        350,
                        500,
                        2000,
                        2000,
                        2000,
                        2000
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                }
            ]
        },
        "apiName": "TFT3_Fizz",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Fizz.TFT_Set3.dds",
        "name": "Fizz",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 600,
            "initialMana": 80,
            "magicResist": 20,
            "mana": 150,
            "range": 1
        },
        "traits": [
            "Mech-Pilot",
            "Infiltrator"
        ]
    },
    "TFT3_Rumble": {
        "ability": {
            "desc": "Rumble torches his enemies, dealing @ModifiedDamage@ magic damage over @Duration@ seconds, and reducing healing on them by @GrievousWoundsPercent@% for @GrievousWoundsDuration@ seconds.",
            "icon": "ASSETS/Characters/Rumble/HUD/Icons2D/Rumble_Flamespitter.dds",
            "name": "Flamespitter",
            "variables": [
                {
                    "name": "TotalDamage",
                    "value": [
                        30,
                        350,
                        500,
                        1000,
                        800,
                        680,
                        810
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "name": "NumberOfTicks",
                    "value": [
                        12,
                        12,
                        12,
                        12,
                        12,
                        12,
                        12
                    ]
                },
                {
                    "name": "TickRate",
                    "value": [
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25
                    ]
                },
                {
                    "name": "GrievousWoundsDuration",
                    "value": [
                        5,
                        5,
                        5,
                        5,
                        5,
                        5,
                        5
                    ]
                },
                {
                    "name": "ConeHexRange",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    "name": "GrievousWoundsPercent",
                    "value": [
                        0,
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                }
            ]
        },
        "apiName": "TFT3_Rumble",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Rumble.TFT_Set3.dds",
        "name": "Rumble",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 800,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 1
        },
        "traits": [
            "Mech-Pilot",
            "Demolitionist"
        ]
    },
    "TFT3_ChoGath": {
        "ability": {
            "desc": "Cho'Gath ruptures a large area, dealing @ModifiedDamage@ magic damage and knocking up all enemies within for @KnockDuration@ seconds.",
            "icon": "ASSETS/Characters/Chogath/HUD/Icons2D/GreenTerror_SpikeSlam.dds",
            "name": "Rupture",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        150,
                        250,
                        2000,
                        800,
                        800,
                        800
                    ]
                },
                {
                    "name": "KnockDuration",
                    "value": [
                        2,
                        2,
                        2,
                        4,
                        4,
                        4,
                        4
                    ]
                },
                {
                    "name": "RuptureDelay",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                }
            ]
        },
        "apiName": "TFT3_ChoGath",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_ChoGath.TFT_Set3.dds",
        "name": "Cho'Gath",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.6000000238418579,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 70,
            "hp": 1000,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 150,
            "range": 1
        },
        "traits": [
            "Void",
            "Brawler"
        ]
    },
    "TFT3_KhaZix": {
        "ability": {
            "desc": "Kha'Zix slashes the nearest enemy, dealing @ModifiedDamage@ magic damage. If the enemy has no adjacent allies, this damage is increased to @ModifiedIsolationDamage@.",
            "icon": "ASSETS/Characters/KhaZix/HUD/Icons2D/Khazix_Q.dds",
            "name": "Taste their Fear",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        50,
                        200,
                        275,
                        500,
                        450,
                        550,
                        650
                    ]
                },
                {
                    "name": "IsolationDamage",
                    "value": [
                        200,
                        600,
                        825,
                        1500,
                        1000,
                        1200,
                        1400
                    ]
                }
            ]
        },
        "apiName": "TFT3_KhaZix",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_KhaZix.TFT_Set3.dds",
        "name": "Kha'Zix",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 500,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 65,
            "range": 1
        },
        "traits": [
            "Void",
            "Infiltrator"
        ]
    },
    "TFT3_VelKoz": {
        "ability": {
            "desc": "Vel'Koz channels a ray of energy that sweeps across the battlefield over @ChannelDuration@ seconds, dealing @ModifiedDamage@ magic damage per second to enemies hit.",
            "icon": "ASSETS/Characters/Velkoz/HUD/Icons2D/Velkoz_R.dds",
            "name": "Lifeform Disintegration Ray",
            "variables": [
                {
                    "name": "BaseDamagePerSec",
                    "value": [
                        0,
                        450,
                        600,
                        2000,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "name": "PercentHealthDamagePerSec",
                    "value": null
                },
                {
                    "name": "SweepAngle",
                    "value": [
                        60,
                        60,
                        60,
                        60,
                        60,
                        60,
                        60
                    ]
                },
                {
                    "name": "TickInterval",
                    "value": [
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25,
                        0.25
                    ]
                },
                {
                    "name": "ChannelDuration",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    "name": "BeamDistance",
                    "value": [
                        1400,
                        1400,
                        1400,
                        1400,
                        1400,
                        1400,
                        1400
                    ]
                },
                {
                    "name": "BeamWidth",
                    "value": [
                        200,
                        200,
                        200,
                        200,
                        200,
                        200,
                        200
                    ]
                }
            ]
        },
        "apiName": "TFT3_VelKoz",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_VelKoz.TFT_Set3.dds",
        "name": "Vel'Koz",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 650,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 70,
            "range": 4
        },
        "traits": [
            "Void",
            "Sorcerer"
        ]
    },
    "TFT3_Ezreal": {
        "ability": {
            "desc": "Ezreal fires an electromagnetic pulse at a random enemy that explodes on impact, dealing @ModifiedDamage@ damage to all nearby enemies and increasing the cost of their next spellcast by @PercentCostIncrease@%.",
            "icon": "ASSETS/Characters/Ezreal/HUD/Icons2D/Ezreal_W.dds",
            "name": "E.M.P.",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        200,
                        300,
                        600,
                        800,
                        1000,
                        1200
                    ]
                },
                {
                    "name": "HexRadius",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    "name": "PercentCostIncrease",
                    "value": [
                        3,
                        40,
                        40,
                        40,
                        40,
                        40,
                        40
                    ]
                }
            ]
        },
        "apiName": "TFT3_Ezreal",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Ezreal.TFT_Set3.dds",
        "name": "Ezreal",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 600,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 125,
            "range": 3
        },
        "traits": [
            "Chrono",
            "Blaster"
        ]
    },
    "TFT3_Shen": {
        "ability": {
            "desc": "Shen creates a zone around himself for @ZoneDuration@ seconds, in which all nearby allies automatically dodge incoming Basic Attacks. While it's active, Shen gains @ModifiedMR@ Magic Resist.",
            "icon": "ASSETS/Characters/Shen/HUD/Icons2D/Shen_W.dds",
            "name": "Future's Refuge",
            "variables": [
                {
                    "name": "ZoneDuration",
                    "value": [
                        2,
                        2.5,
                        3,
                        5,
                        6,
                        7,
                        8
                    ]
                },
                {
                    "name": "MagicResist",
                    "value": [
                        0,
                        15,
                        30,
                        45,
                        60,
                        75,
                        90
                    ]
                }
            ]
        },
        "apiName": "TFT3_Shen",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Shen.TFT_Set3.dds",
        "name": "Shen",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 800,
            "initialMana": 100,
            "magicResist": 20,
            "mana": 150,
            "range": 1
        },
        "traits": [
            "Chrono",
            "Blademaster"
        ]
    },
    "TFT3_WuKong": {
        "ability": {
            "desc": "Wukong spins, dealing @ModifiedDamage@ magic damage to nearby enemies over @Duration@ seconds. The first time Wukong hits each enemy, he knocks them into the air and stuns them for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/MonkeyKing/HUD/Icons2D/MonkeyKingCyclone.dds",
            "name": "Cyclone",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        200,
                        300,
                        500,
                        4000,
                        5000,
                        5000,
                        5000
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1.5,
                        2,
                        2,
                        5,
                        5,
                        5,
                        5
                    ]
                },
                {
                    "name": "HexRadius",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                }
            ]
        },
        "apiName": "TFT3_WuKong",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_WuKong.TFT_Set3.dds",
        "name": "Wukong",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 950,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 150,
            "range": 1
        },
        "traits": [
            "Chrono",
            "Vanguard"
        ]
    },
    "TFT3_Thresh": {
        "ability": {
            "desc": "Thresh tosses his lantern towards @UnitCount@ random unit(s) on your bench, pulling them into combat and granting them @ModifiedMana@ bonus Mana. Traits are unaffected.",
            "icon": "ASSETS/Characters/Thresh/HUD/Icons2D/Thresh_W.dds",
            "name": "Temporal Passage",
            "variables": [
                {
                    "name": "UnitCount",
                    "value": [
                        1,
                        1,
                        1,
                        9,
                        9,
                        9,
                        9
                    ]
                },
                {
                    "name": "ManaBonus",
                    "value": [
                        10,
                        25,
                        50,
                        200,
                        200,
                        200,
                        200
                    ]
                }
            ]
        },
        "apiName": "TFT3_Thresh",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Thresh.TFT_Set3.dds",
        "name": "Thresh",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.949999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 950,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 75,
            "range": 2
        },
        "traits": [
            "Chrono",
            "Mana-Reaver"
        ]
    },
    "TFT3_Caitlyn": {
        "ability": {
            "desc": "Caitlyn takes aim at the farthest enemy, firing a deadly bullet towards them that deals @ModifiedDamage@ magic damage to the first enemy it hits.",
            "icon": "ASSETS/Characters/TFT3_Caitlyn/HUD/Icons2D/Caitlyn_AceintheHole.dds",
            "name": "Ace In The Hole",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        750,
                        1500,
                        3000,
                        2400,
                        3000,
                        3600
                    ]
                }
            ]
        },
        "apiName": "TFT3_Caitlyn",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Caitlyn.TFT_Set3.dds",
        "name": "Caitlyn",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.75,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 500,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 125,
            "range": 6
        },
        "traits": [
            "Chrono",
            "Sniper"
        ]
    },
    "TFT3_TwistedFate": {
        "ability": {
            "desc": "Twisted Fate throws three cards in a cone that deal @ModifiedDamage@ magic damage to each enemy they pass through.",
            "icon": "ASSETS/Characters/TwistedFate/HUD/Icons2D/Cardmaster_PowerCard.dds",
            "name": "Wild Cards",
            "variables": [
                {
                    "name": "BaseDamage",
                    "value": [
                        0,
                        200,
                        300,
                        450,
                        450,
                        750,
                        900
                    ]
                }
            ]
        },
        "apiName": "TFT3_TwistedFate",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_TwistedFate.TFT_Set3.dds",
        "name": "Twisted Fate",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 550,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 75,
            "range": 3
        },
        "traits": [
            "Chrono",
            "Sorcerer"
        ]
    },
    "TFT3_XinZhao": {
        "ability": {
            "desc": "Xin Zhao quickly strikes his target three times, dealing Basic Attack damage and applying on-hit effects. The third strike knocks his target up for @StunDuration@ seconds and deals @ModifiedDamage@ bonus magic damage.",
            "icon": "ASSETS/Characters/XinZhao/HUD/Icons2D/XinZhaoQ.dds",
            "name": "Three Talon Strike",
            "variables": [
                {
                    "name": "StunDuration",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                },
                {
                    "name": "BonusDamage",
                    "value": [
                        4,
                        200,
                        275,
                        375,
                        8,
                        8,
                        8
                    ]
                }
            ]
        },
        "apiName": "TFT3_XinZhao",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_XinZhao.TFT_Set3.dds",
        "name": "Xin Zhao",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 650,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 60,
            "range": 1
        },
        "traits": [
            "Celestial",
            "Protector"
        ]
    },
    "TFT3_Lulu": {
        "ability": {
            "desc": "Lulu polymorphs the @NumTargets@ nearest enemies for @Duration@ seconds, causing them to hop aimlessly, unable to attack or cast. Polymorphed enemies take @ModifiedBonusDamage@ additional damage from all sources.",
            "icon": "ASSETS/Characters/Lulu/HUD/Icons2D/Lulu_Whimsy.dds",
            "name": "Mass Polymorph",
            "variables": [
                {
                    "name": "NumTargets",
                    "value": [
                        0,
                        2,
                        4,
                        12,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        0,
                        3,
                        3,
                        8,
                        4,
                        4,
                        4
                    ]
                },
                {
                    "name": "BonusDamage",
                    "value": [
                        0.02500000037252903,
                        0.05000000074505806,
                        0.10000000149011612,
                        0.25,
                        0.4000000059604645,
                        0.800000011920929,
                        1.600000023841858
                    ]
                }
            ]
        },
        "apiName": "TFT3_Lulu",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Lulu.TFT_Set3.dds",
        "name": "Lulu",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 800,
            "initialMana": 75,
            "magicResist": 20,
            "mana": 150,
            "range": 3
        },
        "traits": [
            "Celestial",
            "Mystic"
        ]
    },
    "TFT3_Kassadin": {
        "ability": {
            "desc": "Kassadin releases a wave of energy in front of him, dealing @ModifiedDamage@ magic damage and disarming all targets hit for @Duration@ seconds.",
            "icon": "ASSETS/Characters/Kassadin/HUD/Icons2D/Kassadin_E.dds",
            "name": "Force Pulse",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        100,
                        250,
                        400,
                        800,
                        300,
                        300,
                        300
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        3,
                        2.5,
                        3,
                        3.5,
                        3,
                        3,
                        3
                    ]
                }
            ]
        },
        "apiName": "TFT3_Kassadin",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Kassadin.TFT_Set3.dds",
        "name": "Kassadin",
        "stats": {
            "armor": 30,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 800,
            "initialMana": 40,
            "magicResist": 20,
            "mana": 80,
            "range": 1
        },
        "traits": [
            "Celestial",
            "Mana-Reaver"
        ]
    },
    "TFT3_Xayah": {
        "ability": {
            "desc": "Xayah creates a storm of feather-blades, gaining @ModifiedAS@ Attack Speed for @Duration@ seconds.",
            "icon": "ASSETS/Characters/Xayah/HUD/Icons2D/XayahW.dds",
            "name": "Deadly Plumage",
            "variables": [
                {
                    "name": "Duration",
                    "value": [
                        8,
                        8,
                        8,
                        8,
                        8,
                        8,
                        8
                    ]
                },
                {
                    "name": "AttackSpeed",
                    "value": [
                        0.75,
                        1,
                        1.25,
                        1.5,
                        1.75,
                        2,
                        2.25
                    ]
                },
                {
                    "name": "DamageReduction",
                    "value": [
                        50,
                        50,
                        50,
                        50,
                        50,
                        50,
                        50
                    ]
                }
            ]
        },
        "apiName": "TFT3_Xayah",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Xayah.TFT_Set3.dds",
        "name": "Xayah",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 500,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 50,
            "range": 3
        },
        "traits": [
            "Celestial",
            "Blademaster"
        ]
    },
    "TFT3_Rakan": {
        "ability": {
            "desc": "Rakan dashes to the furthest enemy within range and leaps into the air, knocking them up for @StunDuration@ seconds and dealing @ModifiedDamage@ magic damage.",
            "icon": "ASSETS/Characters/Rakan/HUD/Icons2D/Rakan_W.dds",
            "name": "Grand Entrance",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        75,
                        175,
                        275,
                        400,
                        475,
                        575,
                        675
                    ]
                },
                {
                    "name": "Radius",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        0,
                        1.5,
                        2,
                        2.5,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "name": "KnockupDuration",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                }
            ]
        },
        "apiName": "TFT3_Rakan",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Rakan.TFT_Set3.dds",
        "name": "Rakan",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 45,
            "hp": 600,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 100,
            "range": 2
        },
        "traits": [
            "Celestial",
            "Protector"
        ]
    },
    "TFT3_Ashe": {
        "ability": {
            "desc": "Ashe fires an arrow at the farthest enemy that explodes on the first target hit, dealing @ModifiedDamage@ magic damage to all nearby enemies and stunning them for @StunDurationPerSquare@ seconds.",
            "icon": "ASSETS/Characters/Ashe/HUD/Icons2D/Ashe_R.dds",
            "name": "Enchanted Crystal Arrow",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        250,
                        250,
                        350,
                        700,
                        800,
                        800,
                        800
                    ]
                },
                {
                    "name": "StunDurationPerSquare",
                    "value": [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                }
            ]
        },
        "apiName": "TFT3_Ashe",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Ashe.TFT_Set3.dds",
        "name": "Ashe",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 600,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 125,
            "range": 6
        },
        "traits": [
            "Celestial",
            "Sniper"
        ]
    },
    "TFT3_Mordekaiser": {
        "ability": {
            "desc": "Mordekaiser gains a shield for that absorbs @ModifiedShield@ damage over @Duration@ seconds. While the shield persists, Mordekaiser deals @ModifiedDamage@ magic damage per second to all nearby enemies.",
            "icon": "ASSETS/Characters/Mordekaiser/HUD/Icons2D/MordekaiserW.dds",
            "name": "Indestructible",
            "variables": [
                {
                    "name": "DamagePerSecond",
                    "value": [
                        20,
                        50,
                        75,
                        125,
                        180,
                        220,
                        260
                    ]
                },
                {
                    "name": "ShieldAmount",
                    "value": [
                        0,
                        350,
                        500,
                        800,
                        1000,
                        1250,
                        1500
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        8,
                        8,
                        8,
                        8,
                        8,
                        8,
                        8
                    ]
                }
            ]
        },
        "apiName": "TFT3_Mordekaiser",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Mordekaiser.TFT_Set3.dds",
        "name": "Mordekaiser",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.6000000238418579,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 55,
            "hp": 650,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 90,
            "range": 1
        },
        "traits": [
            "Dark Star",
            "Vanguard"
        ]
    },
    "TFT3_Lux": {
        "ability": {
            "desc": "Lux fires a sphere of darkness towards the farthest enemy. Enemies in its path take @ModifiedDamage@ magic damage and are stunned for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/Lux/HUD/Icons2D/LuxLightStrikeKugel.dds",
            "name": "Lurid Binding",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        300,
                        200,
                        300,
                        600,
                        800,
                        800,
                        800
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1,
                        1.5,
                        2,
                        2.5,
                        3,
                        3.5,
                        4
                    ]
                }
            ]
        },
        "apiName": "TFT3_Lux",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Lux.TFT_Set3.dds",
        "name": "Lux",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 40,
            "hp": 600,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 100,
            "range": 4
        },
        "traits": [
            "Dark Star",
            "Sorcerer"
        ]
    },
    "TFT3_Shaco": {
        "ability": {
            "desc": "Shaco teleports and backstabs his target for @TooltipPercentage@ of his Basic Attack damage. This is also always a critical hit. (Total: @TooltipADBonus@)",
            "icon": "ASSETS/Characters/Shaco/HUD/Icons2D/Jester_ManiacalCloak2.dds",
            "name": "Deceive",
            "variables": [
                {
                    "name": "Duration",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                },
                {
                    "name": "PercentOfAD",
                    "value": [
                        1.75,
                        2,
                        2.25,
                        2.5,
                        2.75,
                        3,
                        3.25
                    ]
                }
            ]
        },
        "apiName": "TFT3_Shaco",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Shaco.TFT_Set3.dds",
        "name": "Shaco",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.800000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 70,
            "hp": 650,
            "initialMana": 30,
            "magicResist": 20,
            "mana": 80,
            "range": 1
        },
        "traits": [
            "Dark Star",
            "Infiltrator"
        ]
    },
    "TFT3_JarvanIV": {
        "ability": {
            "desc": "Jarvan calls down his standard to a nearby location, granting all nearby allies @ModifiedAS@ Attack Speed for @Duration@ seconds.",
            "icon": "ASSETS/Characters/JarvanIV/HUD/Icons2D/JarvanIV_DemacianStandard.dds",
            "name": "Ageless Standard",
            "variables": [
                {
                    "name": "Duration",
                    "value": [
                        6,
                        6,
                        6,
                        6,
                        6,
                        6,
                        6
                    ]
                },
                {
                    "name": "HexRadius",
                    "value": [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "name": "ASPercent",
                    "value": [
                        0.25,
                        0.5,
                        0.75,
                        1,
                        1.25,
                        1.5,
                        1.75
                    ]
                }
            ]
        },
        "apiName": "TFT3_JarvanIV",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_JarvanIV.TFT_Set3.dds",
        "name": "Jarvan IV",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.6000000238418579,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 650,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 100,
            "range": 1
        },
        "traits": [
            "Dark Star",
            "Protector"
        ]
    },
    "TFT3_Karma": {
        "ability": {
            "desc": "At start of combat, Karma bonds to her closest ally.<br><br>Karma grants the bonded ally (or a random one if that ally is dead) a @ModifiedShield@-health shield for @Duration@ seconds. While the shield holds, the ally receives @ModifiedAS@ bonus Attack Speed.",
            "icon": "ASSETS/Characters/Karma/HUD/Icons2D/Karma_E2.dds",
            "name": "Inspire",
            "variables": [
                {
                    "name": "Duration",
                    "value": [
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4
                    ]
                },
                {
                    "name": "ShieldAmount",
                    "value": [
                        100,
                        250,
                        400,
                        800,
                        700,
                        850,
                        1000
                    ]
                },
                {
                    "name": "BonusAS",
                    "value": [
                        0.20000000298023224,
                        0.5,
                        0.75,
                        1.25,
                        1,
                        1.2000000476837158,
                        1.399999976158142
                    ]
                }
            ]
        },
        "apiName": "TFT3_Karma",
        "cost": 3,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Karma.TFT_Set3.dds",
        "name": "Karma",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.6499999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 600,
            "initialMana": 75,
            "magicResist": 20,
            "mana": 100,
            "range": 3
        },
        "traits": [
            "Dark Star",
            "Mystic"
        ]
    },
    "TFT3_Jhin": {
        "ability": {
            "desc": "Passive: Jhin converts each 1% of bonus Attack Speed he has into 0.8 Attack Damage.<br><br>Passive: Every fourth shot, Jhin deals @ModifiedPercent@ damage. (Total: @TooltipDamage@)",
            "icon": "ASSETS/Characters/Jhin/HUD/Icons2D/Jhin_P.dds",
            "name": "Whisper",
            "variables": [
                {
                    "name": "PercentOfAD",
                    "value": [
                        0,
                        2.440000057220459,
                        3.440000057220459,
                        44.439998626708984,
                        0,
                        0,
                        0
                    ]
                }
            ]
        },
        "apiName": "TFT3_Jhin",
        "cost": 4,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Jhin.TFT_Set3.dds",
        "name": "Jhin",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.8999999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 90,
            "hp": 600,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 4,
            "range": 6
        },
        "traits": [
            "Dark Star",
            "Sniper"
        ]
    },
    "TFT3_Zoe": {
        "ability": {
            "desc": "Zoe kicks a bubble at the enemy with the the highest current Health percentage, stunning them for @StunDuration@ seconds and dealing @ModifiedDamage@ magic damage.<br><br><tftitemrules>Highest total health breaks targeting ties.</tftitemrules>",
            "icon": "ASSETS/Characters/Zoe/HUD/Icons2D/Zoe_E.dds",
            "name": "Sleepy Trouble Bubble",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        75,
                        200,
                        275,
                        400,
                        375,
                        450,
                        525
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1.5,
                        2,
                        2.5,
                        4,
                        3.5,
                        4,
                        4.5
                    ]
                }
            ]
        },
        "apiName": "TFT3_Zoe",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Zoe.TFT_Set3.dds",
        "name": "Zoe",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 40,
            "hp": 500,
            "initialMana": 70,
            "magicResist": 20,
            "mana": 100,
            "range": 3
        },
        "traits": [
            "Star Guardian",
            "Sorcerer"
        ]
    },
    "TFT3_Blitzcrank": {
        "ability": {
            "desc": "Blitzcrank pulls the farthest enemy, dealing @ModifiedDamage@ magic damage and stunning them for @StunDuration@ seconds.<br><br>His next attack after pulling knocks up for 1 second.<br><br>Allies within range will prefer to attack Blitzcrank's target.",
            "icon": "ASSETS/Characters/Blitzcrank/HUD/Icons2D/Blitzcrank_RocketGrab.dds",
            "name": "Rocket Grab",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        -50,
                        250,
                        400,
                        900,
                        950,
                        1200,
                        1450
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        2.5,
                        2.5,
                        2.5,
                        2.5,
                        2.5,
                        2.5,
                        2.5
                    ]
                }
            ]
        },
        "apiName": "TFT3_Blitzcrank",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Blitzcrank.TFT_Set3.dds",
        "name": "Blitzcrank",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.5,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 55,
            "hp": 650,
            "initialMana": 125,
            "magicResist": 20,
            "mana": 125,
            "range": 1
        },
        "traits": [
            "Chrono",
            "Brawler"
        ]
    },
    "TFT3_Leona": {
        "ability": {
            "desc": "Leona creates a barrier, reducing all incoming damage by @ModifiedDamageReduction@ for 4 seconds.<br><br>",
            "icon": "ASSETS/Characters/Leona/HUD/Icons2D/LeonaSolarBarrier.dds",
            "name": "Cyber Barrier",
            "variables": [
                {
                    "name": "FlatDamageReduction",
                    "value": [
                        0,
                        40,
                        80,
                        200,
                        160,
                        200,
                        240
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        4,
                        4,
                        4,
                        4,
                        4,
                        4,
                        4
                    ]
                }
            ]
        },
        "apiName": "TFT3_Leona",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Leona.TFT_Set3.dds",
        "name": "Leona",
        "stats": {
            "armor": 40,
            "attackSpeed": 0.550000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 600,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 100,
            "range": 1
        },
        "traits": [
            "Cybernetic",
            "Vanguard"
        ]
    },
    "TFT3_Lucian": {
        "ability": {
            "desc": "Lucian dashes away from his current target, then Basic Attacks them and fires a second shot which deals @ModifiedDamage@ magic damage.",
            "icon": "ASSETS/Characters/Lucian/HUD/Icons2D/Lucian_E.dds",
            "name": "Relentless Pursuit",
            "variables": [
                {
                    "name": "FirstShotRatio",
                    "value": [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    "name": "SecondShotDamage",
                    "value": [
                        0,
                        150,
                        200,
                        325,
                        500,
                        625,
                        750
                    ]
                }
            ]
        },
        "apiName": "TFT3_Lucian",
        "cost": 2,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Lucian.TFT_Set3.dds",
        "name": "Lucian",
        "stats": {
            "armor": 25,
            "attackSpeed": 0.699999988079071,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 50,
            "hp": 500,
            "initialMana": 0,
            "magicResist": 20,
            "mana": 35,
            "range": 4
        },
        "traits": [
            "Cybernetic",
            "Blaster"
        ]
    },

    "TFT3_Graves": {
        "ability": {
            "desc": "Graves launches a smoke grenade toward the enemy with the most Attack Speed. The grenade explodes on impact dealing @ModifiedDamage@ magic damage to nearby enemies and causing their attacks to miss for @BlindDuration@ seconds.",
            "icon": "ASSETS/Characters/Graves/HUD/Icons2D/GravesSmokeGrenade.dds",
            "name": "Smoke Grenade",
            "variables": [
                {
                    "name": "Damage",
                    "value": [
                        0,
                        150,
                        200,
                        400,
                        0,
                        0,
                        0
                    ]
                },
                {
                    "name": "BlindDuration",
                    "value": [
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8
                    ]
                }
            ]
        },
        "apiName": "TFT3_Graves",
        "cost": 1,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Graves.TFT_Set3.dds",
        "name": "Graves",
        "stats": {
            "armor": 35,
            "attackSpeed": 0.550000011920929,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 55,
            "hp": 650,
            "initialMana": 50,
            "magicResist": 20,
            "mana": 80,
            "range": 1
        },
        "traits": [
            "Space Pirate",
            "Blaster"
        ]
    },
    "TFT3_Xerath": {
        "ability": {
            "desc": "Xerath transforms, summoning meteors to strike random foes in place of his normal attacks for @Duration@ seconds. Meteors deal @ModifiedDamage@ magic damage upon impact and if they kill their target, all adjacent enemies take @ModifiedAoEDamage@ magic damage and are stunned for @StunDuration@ seconds.",
            "icon": "ASSETS/Characters/TFT3_Xerath/HUD/Icons2D/TFT3_Xerath_Ult.TFT3_Set3_Xerath.dds",
            "name": "Abyssal Bombardment",
            "variables": [
                {
                    "name": "BaseDamage",
                    "value": [
                        350,
                        300,
                        400,
                        2500,
                        3000,
                        3000,
                        3000
                    ]
                },
                {
                    "name": "AoEDamage",
                    "value": [
                        175,
                        75,
                        100,
                        625,
                        1500,
                        1500,
                        1500
                    ]
                },
                {
                    "name": "StunDuration",
                    "value": [
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5,
                        1.5
                    ]
                },
                {
                    "name": "Duration",
                    "value": [
                        6,
                        6,
                        8,
                        45,
                        45,
                        45,
                        45
                    ]
                }
            ]
        },
        "apiName": "TFT3_Xerath",
        "cost": 5,
        "icon": "ASSETS/UX/TFT/ChampionSplashes/TFT3_Xerath.TFT3_Set3_Xerath.dds",
        "name": "Xerath",
        "stats": {
            "armor": 20,
            "attackSpeed": 0.8999999761581421,
            "critChance": 0.25,
            "critMultiplier": 1.5,
            "damage": 60,
            "hp": 750,
            "initialMana": 30,
            "magicResist": 20,
            "mana": 80,
            "range": 6
        },
        "traits": [
            "Dark Star",
            "Sorcerer"
        ]
    }
}