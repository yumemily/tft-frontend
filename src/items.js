export default {
    "1": {
        "desc": " +@AD@ Attack Damage",
        "effects": {
            "AD": 15
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/Icon_BFSword.dds",
        "id": 1,
        "name": "B. F. Sword"
    },
    "2": {
        "desc": " +@AS@% Attack Speed",
        "effects": {
            "AS": 15
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RecurveBow.dds",
        "id": 2,
        "name": "Recurve Bow"
    },
    "3": {
        "desc": " +@AP@% Spell Power",
        "effects": {
            "AP": 20
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/Icon_NeedlesslyLargeRod.dds",
        "id": 3,
        "name": "Needlessly Large Rod"
    },
    "4": {
        "desc": " +@Mana@ Mana",
        "effects": {
            "Mana": 15
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/Icon_TearOfTheGoddess.dds",
        "id": 4,
        "name": "Tear of the Goddess"
    },
    "5": {
        "desc": "+@Armor@ Armor",
        "effects": {
            "Armor": 25
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ChainVest.dds",
        "id": 5,
        "name": "Chain Vest"
    },
    "6": {
        "desc": "+@MagicResist@ Magic Resist",
        "effects": {
            "MagicResist": 25
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_NegatronCloak.dds",
        "id": 6,
        "name": "Negatron Cloak"
    },
    "7": {
        "desc": " +@Health@ Health",
        "effects": {
            "Health": 200
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/Icon_GiantsBelt.dds",
        "id": 7,
        "name": "Giant's Belt"
    },
    "8": {
        "desc": "It must do <i>something</i>...",
        "effects": {
            "{fe9818ef}": 5
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Spatula.dds",
        "id": 8,
        "name": "Spatula"
    },
    "9": {
        "desc": "+@CritChance@% Critical Strike Chance<br>+@DodgeChance@% Dodge Chance",
        "effects": {
            "CritChance": 10,
            "{c4b5579c}": 10
        },
        "from": [],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SparringGloves.dds",
        "id": 9,
        "name": "Sparring Gloves"
    },
    "11": {
        "desc": "Contributing to a kill grants +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times (starting at @StartingStacks@).",
        "effects": {
            "AD": 30,
            "{ad68ce80}": 1,
            "{f1d43b01}": 30
        },
        "from": [
            1,
            1
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.dds",
        "id": 11,
        "name": "Deathblade"
    },
    "12": {
        "desc": "The wearer's Basic Attacks deal an additional @CurrentHPPhysicalDamage@% of the target's current Health as physical damage.",
        "effects": {
            "AD": 15,
            "AS": 15,
            "{a79cf66e}": 12
        },
        "from": [
            1,
            2
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds",
        "id": 12,
        "name": "Giant Slayer"
    },
    "13": {
        "desc": "Basic Attacks and spells heal the wearer for @OmniVamp@% of the damage dealt.",
        "effects": {
            "AD": 15,
            "AP": 20,
            "{ad16f688}": 25
        },
        "from": [
            1,
            3
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HextechGunblade.dds",
        "id": 13,
        "name": "Hextech Gunblade"
    },
    "14": {
        "desc": "After casting their spell, the wearer's Basic Attacks restore @ManaPercentRestore@% of their max Mana on-hit.",
        "effects": {
            "AD": 15,
            "Mana": 15,
            "{69fff1ab}": 18
        },
        "from": [
            1,
            4
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SpearOfShojin.dds",
        "id": 14,
        "name": "Spear of Shojin"
    },
    "15": {
        "desc": "Prevents the wearer's first death, placing them in stasis instead. After @StasisDuration@ seconds, they return with @HealthRestore@ Health and shed all negative effects.",
        "effects": {
            "AD": 15,
            "Armor": 25,
            "HealthRestore": 400,
            "{c425872e}": 2
        },
        "from": [
            1,
            5
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GuardianAngel.dds",
        "id": 15,
        "name": "Guardian Angel"
    },
    "16": {
        "desc": "Basic Attacks heal the wearer for @Lifesteal@% of the damage dealt.",
        "effects": {
            "AD": 15,
            "LifeSteal": 35,
            "MagicResist": 25
        },
        "from": [
            1,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Bloodthirster.dds",
        "id": 16,
        "name": "Bloodthirster"
    },
    "17": {
        "desc": "When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain +@AttackSpeed@% Attack Speed for the rest of combat.",
        "effects": {
            "AD": 15,
            "AttackSpeed": 30,
            "Health": 200,
            "{9b1e8f37}": 1
        },
        "from": [
            1,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ZekesHerald.dds",
        "id": 17,
        "name": "Zeke's Herald"
    },
    "18": {
        "desc": "The wearer gains the Blademaster trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AD": 15
        },
        "from": [
            1,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT3_Item_Blademaster.dds",
        "id": 18,
        "name": "Blade of the Ruined King"
    },
    "19": {
        "desc": "Grants +@CriticalStrikeAmp@% Critical Strike Damage.",
        "effects": {
            "AD": 15,
            "CritChance": 20,
            "{eac3d5c4}": 100
        },
        "from": [
            1,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_InfinityEdge.dds",
        "id": 19,
        "name": "Infinity Edge"
    },
    "22": {
        "desc": "Gain @AttackRange@% Attack Range.",
        "effects": {
            "AS": 30,
            "{c270990a}": 200
        },
        "from": [
            2,
            2
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RapidFirecannon.dds",
        "id": 22,
        "name": "Rapid Firecannon"
    },
    "23": {
        "desc": "Basic Attacks grant +@AttackSpeedPerStack@% bonus Attack Speed for the rest of combat.<br><br>This effect can stack any number of times.",
        "effects": {
            "AP": 20,
            "AS": 15,
            "AttackSpeedPerStack": 5
        },
        "from": [
            2,
            3
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GuinsoosRageblade.dds",
        "id": 23,
        "name": "Guinsoo's Rageblade"
    },
    "24": {
        "desc": "Every third Basic Attack from the wearer deals @Damage@ magic damage to @1StarBounces@/@2StarBounces@/@3StarBounces@ %i:star% enemies.",
        "effects": {
            "AS": 15,
            "Damage": 80,
            "Mana": 15,
            "{12a15e9e}": 4,
            "{440f813d}": 3,
            "{79e2ec7b}": 5
        },
        "from": [
            2,
            4
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_StatikkShiv.dds",
        "id": 24,
        "name": "Statikk Shiv"
    },
    "25": {
        "desc": "When the wearer takes damage or inflicts a critical hit, they gain a @DamageIncreasePercent@% stacking damage bonus. Stacks up to @StackCap@ times, at which point the wearer gains @BonusResistsAtStackCap@ Armor and Magic Resistance, and increases in size.",
        "effects": {
            "AS": 15,
            "Armor": 25,
            "{9396f00d}": 50,
            "{b55019fa}": 25,
            "{d50b4559}": 2
        },
        "from": [
            5,
            2
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_TitansResolve.TFT_1001_ItemsUpdate.dds",
        "id": 25,
        "name": "Titan's Resolve"
    },
    "26": {
        "desc": "Basic Attacks fire a bolt at another nearby enemy, dealing @MultiplierForDamage@% of the wearer's Attack Damage and applying on-hit effects.",
        "effects": {
            "AS": 15,
            "AdditionalTargets": 1,
            "MagicResist": 25,
            "{276ba2c8}": 70
        },
        "from": [
            6,
            2
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RunaansHurricane.dds",
        "id": 26,
        "name": "Runaan's Hurricane"
    },
    "27": {
        "desc": "When the wearer dies, a Construct with @1StarZombieHealth@/@2StarZombieHealth@/@3StarZombieHealth@ %i:star% Health arises to continue the fight.",
        "effects": {
            "AS": 15,
            "Health": 200,
            "{0707495a}": 70,
            "{37b0144c}": 1000,
            "{86646c65}": 2000,
            "{f207284b}": 0.75,
            "{f6edd39e}": 3000
        },
        "from": [
            2,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Zzrot_Portal.dds",
        "id": 27,
        "name": "Zz'Rot Portal"
    },
    "28": {
        "desc": "The wearer is also a Blademaster.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AS": 15
        },
        "from": [
            2,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.dds",
        "id": 28,
        "name": "Blade of the Ruined King"
    },
    "29": {
        "desc": "When the wearer inflicts a critical hit, the target's Armor is reduced by @ArmorReductionPercent@% for @ArmorBreakDuration@ seconds. This effect does not stack.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AS": 15,
            "CritChance": 20,
            "{5079c7a2}": 90,
            "{cc9fefa7}": 3
        },
        "from": [
            2,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.dds",
        "id": 29,
        "name": "Last Whisper"
    },
    "33": {
        "desc": "Grants +@APPercentAmp@% Spell Power Amplification.<br><br>(All sources of Spell Power are @APPercentAmp@% more effective)",
        "effects": {
            "AP": 40,
            "{ce132611}": 50
        },
        "from": [
            3,
            3
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RabadonsDeathcap.dds",
        "id": 33,
        "name": "Rabadon's Deathcap"
    },
    "34": {
        "desc": "When the wearer casts their spell, the first target dealt magic damage and up to @ExtraBounces@ nearby enemies are dealt an additional @1StarDamage@/@2StarDamage@/@3StarDamage@ %i:star% magic damage.",
        "effects": {
            "AP": 20,
            "Mana": 15,
            "{27b09915}": 150,
            "{337a0cca}": 4,
            "{844e604c}": 175,
            "{93d13af6}": 3,
            "{9b1e8f37}": 2,
            "{f5220527}": 225
        },
        "from": [
            3,
            4
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_LudensEcho.dds",
        "id": 34,
        "name": "Luden's Echo"
    },
    "35": {
        "desc": "When combat begins, the wearer and all allies within @HexRange@ hexes in the same row gain a shield that blocks @1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@ %i:star% damage for @ShieldDuration@ seconds.",
        "effects": {
            "AP": 20,
            "Armor": 25,
            "ShieldDuration": 8,
            "{0d46330d}": 275,
            "{6fb9af6a}": 250,
            "{829e6cec}": 350,
            "{9b1e8f37}": 2
        },
        "from": [
            3,
            5
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_LocketOfTheIronSolari.dds",
        "id": 35,
        "name": "Locket of the Iron Solari"
    },
    "36": {
        "desc": "Enemies within @HexRange@ hexes have their Magic Resist reduced by @MRShred@% (does not stack). When they cast a spell, they are zapped taking magic damage equal to @ManaRatio@% of their max Mana.",
        "effects": {
            "AP": 20,
            "Damage": 250,
            "MagicResist": 25,
            "{9b1e8f37}": 2,
            "{df6f64b9}": 225,
            "{fe079f34}": 50
        },
        "from": [
            3,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_IonicSpark.dds",
        "id": 36,
        "name": "Ionic Spark"
    },
    "37": {
        "desc": "When the wearer deals damage with their spell, they burn the target, dealing @BurnPercent@% of the target's Maximum Health as true damage over @BurnDuration@ seconds and reducing healing by @GrievousWoundsPercent@% for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AP": 20,
            "Health": 200,
            "MonsterCap": 100,
            "{2161bfa2}": 50,
            "{57706a69}": 25,
            "{6df27940}": 1,
            "{97e52ce8}": 10
        },
        "from": [
            3,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Morellonomicon.dds",
        "id": 37,
        "name": "Morellonomicon"
    },
    "38": {
        "desc": "The wearer is also an Inferno.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AP": 20
        },
        "from": [
            3,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_InfernoCinder.dds",
        "id": 38,
        "name": "Inferno's Cinder"
    },
    "39": {
        "desc": "Your spells can inflict critical hits.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "AP": 20,
            "CritChance": 20
        },
        "from": [
            3,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Jeweled_Gauntlet.dds",
        "id": 39,
        "name": "Jeweled Gauntlet"
    },
    "44": {
        "desc": "After casting their spell, the wearer gains @ManaRestore@ Mana.",
        "effects": {
            "Mana": 30,
            "{03494ad0}": 20
        },
        "from": [
            4,
            4
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SeraphsEmbrace.dds",
        "id": 44,
        "name": "Seraph's Embrace"
    },
    "45": {
        "desc": "Reduces the Attack Speed of nearby enemies by @AttackSpeedSlow@%. Each Frozen Heart a champion carries beyond the first increases the radius of this effect.",
        "effects": {
            "Armor": 25,
            "AttackSpeedSlow": 50,
            "Mana": 15
        },
        "from": [
            4,
            5
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenHeart.dds",
        "id": 45,
        "name": "Frozen Heart"
    },
    "46": {
        "desc": "When the wearer casts a spell, restores @ManaRestore@ mana to allies within @HexRange@ hexes (including themself).",
        "effects": {
            "MagicResist": 25,
            "Mana": 15,
            "{03494ad0}": 8,
            "{9b1e8f37}": 2
        },
        "from": [
            6,
            4
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Chalice3.TFT_Set3.dds",
        "id": 46,
        "name": "Chalice of Favor"
    },
    "47": {
        "desc": "When the wearer dies, allies are healed for @HealthRestore@ Health.",
        "effects": {
            "Health": 200,
            "HealthRestore": 800,
            "Mana": 15,
            "{1e0630e9}": 25,
            "{5ffbbd48}": 50,
            "{8f954b18}": 30
        },
        "from": [
            4,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Redemption.dds",
        "id": 47,
        "name": "Redemption"
    },
    "48": {
        "desc": "The wearer gains the Star Guardian trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Mana": 15
        },
        "from": [
            4,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT3_Item_StarGuardian.dds",
        "id": 48,
        "name": "Star Guardian's Charm"
    },
    "49": {
        "desc": "At the beginning of each planning phase, the wearer gains one of the following:<li>Basic attacks and spells deal +@TraitMultiplier@% Damage</li> <li>Basic attacks heal @TraitMultiplier@ Health on-hit</li>",
        "effects": {
            "CritChance": 10,
            "Mana": 15,
            "{a60806db}": 66.66699981689453,
            "{ae49cc70}": 50,
            "{c4b5579c}": 10
        },
        "from": [
            4,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HandOfJustice.dds",
        "id": 49,
        "name": "Hand Of Justice"
    },
    "55": {
        "desc": "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal @1StarAoEDamage@/@2StarAoEDamage@/@3StarAoEDamage@ %i:star% magic damage to all nearby enemies (once every @ICD@ seconds).",
        "effects": {
            "Armor": 50,
            "{156febb8}": 200,
            "{1ee760be}": 100,
            "{6688a0d5}": 100,
            "{73e0fa13}": 2.5,
            "{a3b999e9}": 140
        },
        "from": [
            5,
            5
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BrambleVest.TFT_1001_ItemsUpdate.dds",
        "id": 55,
        "name": "Bramble Vest"
    },
    "56": {
        "desc": "The wearer's Basic Attacks have a @ChanceOnHitToDisarm@% chance to disarm the target for @DisarmDuration@ seconds, preventing that enemy from making Basic Attacks.",
        "effects": {
            "Armor": 25,
            "DisarmDuration": 3,
            "MagicResist": 25,
            "{2426ea7e}": 25
        },
        "from": [
            5,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SwordBreaker.dds",
        "id": 56,
        "name": "Sword Breaker"
    },
    "57": {
        "desc": "The holder's Basic Attacks burn the target on-hit, dealing @BurnPercent@% of the target's Maximum Health as true damage over @BurnDuration@ seconds, and reducing healing by @GrievousWoundsPercent@%, for the duration of the burn.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Armor": 25,
            "Health": 200,
            "MonsterCap": 100,
            "{2161bfa2}": 50,
            "{57706a69}": 25,
            "{6df27940}": 1,
            "{8bfdb3fa}": 2,
            "{97e52ce8}": 10
        },
        "from": [
            5,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RedBuff.dds",
        "id": 57,
        "name": "Red Buff"
    },
    "58": {
        "desc": "The wearer gains the Rebel trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Armor": 25
        },
        "from": [
            5,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT3_Item_Rebel.dds",
        "id": 58,
        "name": "Rebel Medal"
    },
    "59": {
        "desc": "When combat begins, shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana by @CostIncrease@% until they cast.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Armor": 25,
            "{4516a18d}": 60,
            "{a861afa0}": 40,
            "{c4b5579c}": 20
        },
        "from": [
            5,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Shroud.TFT_Set3.dds",
        "id": 59,
        "name": "Shroud of Stillness"
    },
    "66": {
        "desc": "Reduces incoming magic damage by @MagicReduction@%.",
        "effects": {
            "MagicReduction": 50,
            "MagicResist": 50
        },
        "from": [
            6,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DragonsClaw.dds",
        "id": 66,
        "name": "Dragon's Claw"
    },
    "67": {
        "desc": "When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for @BanishDuration@ seconds.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Health": 200,
            "MagicResist": 25,
            "{510fdb6a}": 5
        },
        "from": [
            6,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Zephyr.dds",
        "id": 67,
        "name": "Zephyr"
    },
    "68": {
        "desc": "The wearer gains the Celestial trait.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "MagicResist": 25
        },
        "from": [
            8,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT3_Item_Celestial.dds",
        "id": 68,
        "name": "Celestial Orb"
    },
    "69": {
        "desc": "The wearer is immune to crowd control for the first @SpellShieldDuration@ seconds of combat.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "MagicResist": 25,
            "{a2b76524}": 10,
            "{c4b5579c}": 20
        },
        "from": [
            9,
            6
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Mercurial.dds",
        "id": 69,
        "name": "Quicksilver"
    },
    "77": {
        "desc": "The wearer regenerates @HealthRegen@% of their missing Health, but not more than @MaxHealthRegenAmount@, per second.",
        "effects": {
            "Health": 400,
            "HealthRegen": 5,
            "{0c90f194}": 150
        },
        "from": [
            7,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_WarmogsArmor.dds",
        "id": 77,
        "name": "Warmog's Armor"
    },
    "78": {
        "desc": "The wearer is also Glacial.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "Health": 200
        },
        "from": [
            8,
            7
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.dds",
        "id": 78,
        "name": "Frozen Mallet"
    },
    "79": {
        "desc": "Blocks the first enemy spell that hits the wearer, and stuns the spell's caster for @StunDuration@ seconds.",
        "effects": {
            "Health": 200,
            "StunDuration": 4,
            "{c4b5579c}": 20
        },
        "from": [
            7,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Backhand.dds",
        "id": 79,
        "name": "Trap Claw"
    },
    "88": {
        "desc": "Wearer's team gains +@MaxArmySizeIncrease@ maximum team size.",
        "effects": {
            "{ec9a04d1}": 1
        },
        "from": [
            8,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ForceOfNature.dds",
        "id": 88,
        "name": "Force of Nature"
    },
    "89": {
        "desc": "The wearer is also a Berserker.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
        "effects": {
            "CritChance": 10,
            "{c4b5579c}": 10
        },
        "from": [
            9,
            8
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BerserkerAxe.dds",
        "id": 89,
        "name": "Berserker's Axe"
    },
    "99": {
        "desc": "At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.<br><br><tftitemrules>[Consumes Three Item Slots]</tftitemrules>",
        "effects": {
            "CritChance": 20,
            "{c4b5579c}": 20
        },
        "from": [
            9,
            9
        ],
        "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ThiefsGloves.dds",
        "id": 99,
        "name": "Thief's Gloves"
    },
    // "100": {
    //     "desc": "It must do <i>something</i>...",
    //     "effects": {},
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.dds",
    //     "id": 100,
    //     "name": "Spatula"
    // },
    // "149": {
    //     "desc": "Whenever any unit dies, gain X Mana.",
    //     "effects": {
    //         "Mana": 20,
    //         "{c4b5579c}": 20
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_GiantSlayer.dds",
    //     "id": 149,
    //     "name": "Catalyst"
    // },
    // "200": {
    //     "desc": "Place on a champion to create a one-star copy of them.<br><br><tftitemrules>[CONSUMABLE - This item disappears when used.]</tftitemrules>",
    //     "effects": {},
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Blessing_WildCard.dds",
    //     "id": 200,
    //     "name": "Neeko's Help"
    // },
    // "529": {
    //     "desc": "@ChanceToSpellSteal@ chance to steal the enemy's spell and cast it",
    //     "effects": {
    //         "{0cc88d45}": 10
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SpellThiefsEdge.dds",
    //     "id": 529,
    //     "name": "Spell Thief"
    // },
    // "541": {
    //     "desc": "TFT_item_description_MortalReminder",
    //     "effects": {},
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_MortalReminder.dds",
    //     "id": 541,
    //     "name": "Mortal Reminder"
    // },
    // "10001": {
    //     "desc": "Loot goes here",
    //     "effects": {
    //         "CritChance": 20,
    //         "{c4b5579c}": 20
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Unknown.dds",
    //     "id": 10001,
    //     "name": "Loot Bag"
    // },
    // "10002": {
    //     "desc": "Item temporarily disabled",
    //     "effects": {},
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Jammed.dds",
    //     "id": 10002,
    //     "name": "Jammed!"
    // },
    // "10003": {
    //     "desc": " +@AD@ Attack Damage",
    //     "effects": {
    //         "AD": 15
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/Icon_BFSword.dds",
    //     "id": 10003,
    //     "name": "B. F. Sword"
    // },
    // "10004": {
    //     "desc": "Contributing to a kill grants +@ADPerStack@ Attack Damage for the remainder of combat.<br><br>This effect can stack any number of times (starting at @StartingStacks@).",
    //     "effects": {
    //         "AD": 30,
    //         "{55ce8055}": "null",
    //         "{d0fcc895}": 40
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_DeathBlade.dds",
    //     "id": 10004,
    //     "name": "Deathblade"
    // },
    // "10005": {
    //     "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>No stacking limit.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AS": 15,
    //         "AttackSpeedPerStack": 30,
    //         "CritChance": 20,
    //         "{cb57edb0}": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.dds",
    //     "id": 10005,
    //     "name": "Repeating Crossbow"
    // },
    // "10006": {
    //     "desc": "Loot goes here",
    //     "effects": {},
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_EmptySlot.TFT916CritComponent.dds",
    //     "id": 10006,
    //     "name": "Loot Bag"
    // },
    // "10201": {
    //     "desc": "This champion starts combat with an additional @AttackSpeedPercent@% Attack Speed.",
    //     "effects": {
    //         "{a8ca7859}": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Inferno.TFT_EnchantedHexes.dds",
    //     "id": 10201,
    //     "name": "Inferno Hex"
    // },
    // "10202": {
    //     "desc": "At the end of each planning phase this champion permanently gains @HPPerRound@ max health.",
    //     "effects": {
    //         "{1bb18b94}": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Mountain.TFT_EnchantedHexes.dds",
    //     "id": 10202,
    //     "name": "Mountain Hex"
    // },
    // "10203": {
    //     "desc": "This champion starts combat with 30 additional mana.",
    //     "effects": {
    //         "{1a97299e}": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Ocean.TFT_EnchantedHexes.dds",
    //     "id": 10203,
    //     "name": "Ocean Hex"
    // },
    // "10204": {
    //     "desc": "This champion has an additional @DodgeChancePercent@% chance to dodge enemy Basic Attacks.",
    //     "effects": {
    //         "{0e4779e5}": 20
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hex_Wind.TFT_EnchantedHexes.dds",
    //     "id": 10204,
    //     "name": "Cloud Hex"
    // },
    // "-46": {
    //     "desc": "Basic Attacks have a @ChanceOnHitToSilence@% chance on-hit to silence the target, preventing mana gain for @SilenceDuration@ seconds.",
    //     "effects": {
    //         "MagicResist": 25,
    //         "Mana": 20,
    //         "SilenceDuration": 4,
    //         "{2275757b}": 20,
    //         "{4516a18d}": 4
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Hush.dds",
    //     "id": -46,
    //     "name": "Hush"
    // },
    // "-28": {
    //     "desc": "The wearer is also a Blademaster.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AS": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_BladeOfTheRuinedKing.dds",
    //     "id": -28,
    //     "name": "Blade of the Ruined King"
    // },
    // "-25": {
    //     "desc": "Critical hits against the wearer deal normal damage instead.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AS": 15,
    //         "Armor": 25
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_PhantomDancer.dds",
    //     "id": -25,
    //     "name": "Phantom Dancer"
    // },
    // "-55": {
    //     "desc": "Reflects @DamageReflect@% of the mitigated damage from enemy Basic Attacks as magic damage.",
    //     "effects": {
    //         "Armor": 50,
    //         "{6688a0d5}": 100
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Thornmail.dds",
    //     "id": -55,
    //     "name": "Thornmail"
    // },
    // "-59": {
    //     "desc": "After casting a spell, the wearer's next Basic Attack freezes the target for @FreezeDuration@ seconds.",
    //     "effects": {
    //         "Armor": 25,
    //         "{aaa03dde}": 2.5,
    //         "{c4b5579c}": 20
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_IcebornGauntlet.dds",
    //     "id": -59,
    //     "name": "Iceborn Gauntlet"
    // },
    // "-100": {
    //     "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>No stacking limit.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "{48ea2af8}": 7,
    //         "{98ac43ce}": 50
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_SwordOfTheDivine.dds",
    //     "id": -100,
    //     "name": "Repeating Crossbow"
    // },
    // "-26": {
    //     "desc": "Basic Attacks have a @ChanceOnHitToShrink@% chance on-hit to decrease the target's star level by 1 for the rest of combat.",
    //     "effects": {
    //         "AS": 15,
    //         "MagicResist": 25,
    //         "{a56e0a21}": 20
    //     },
    //     "from": [
    //         -26,
    //         -26
    //     ],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_CursedBlade.dds",
    //     "id": -26,
    //     "name": "Cursed Blade"
    // },
    // "-89": {
    //     "desc": "Wearer is also a Yordle<br>Extra +10% Critical Strike Chance, +10% Dodge Chance<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "CritChance": 20,
    //         "{c4b5579c}": 20
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Mittens.dds",
    //     "id": -89,
    //     "name": "Mittens"
    // },
    // "-58": {
    //     "desc": "Extra %i:scaleArmor% +@Armor@<br>Wearer is also a Knight<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "Armor": 40
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_KnightsVow.dds",
    //     "id": -58,
    //     "name": "Knight's Vow"
    // },
    // "-78": {
    //     "desc": "The wearer is also Glacial.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "Health": 400
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_FrozenMallet.dds",
    //     "id": -78,
    //     "name": "Frozen Mallet"
    // },
    // "-1": {
    //     "desc": "Wearer is also a Hextech",
    //     "effects": {},
    //     "from": [
    //         -1,
    //         -1
    //     ],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_HextechChestguard.dds",
    //     "id": -1,
    //     "name": "Hextech Chestguard"
    // },
    // "-48": {
    //     "desc": "Extra %i:scaleMana% +@Mana@<br>Wearer is also a Demon<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "Mana": 40
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Darkin.dds",
    //     "id": -48,
    //     "name": "Darkin"
    // },
    // "-18": {
    //     "desc": "The wearer is also an Assassin.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AD": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_YoumuusGhostblade.dds",
    //     "id": -18,
    //     "name": "Youmuu's Ghostblade"
    // },
    // "-38": {
    //     "desc": "Extra %i:scaleAP% +@AP@<br>Wearer is also a Sorcerer<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AP": 40
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_Yuumi.dds",
    //     "id": -38,
    //     "name": "Yuumi"
    // },
    // "-35": {
    //     "desc": "On falling below @HealthPercent@% Health, become untargetable, invulnerable, but unable to move for @StasisDuration@ seconds.",
    //     "effects": {
    //         "AP": 20,
    //         "Armor": 25,
    //         "HealthPercent": 30,
    //         "{c425872e}": 4
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_ZhonyasHourglass.dds",
    //     "id": -35,
    //     "name": "Zhonya's Hourglass"
    // },
    // "-29": {
    //     "desc": "When the wearer dies, Repeating Crossbow is re-equipped to a new ally. Each time Repeating Crossbow is re-equipped, it grants an additional +@AttackSpeedPerStack@% Attack Speed and +@CritChancePerStack@% Critical Strike Chance for the remainder of combat.<br><br>No stacking limit.<br><br><tftitemrules>[Unique - Only One Per Champion]</tftitemrules>",
    //     "effects": {
    //         "AS": 15,
    //         "AttackSpeedPerStack": 30,
    //         "CritChance": 20,
    //         "{cb57edb0}": 30
    //     },
    //     "from": [],
    //     "icon": "ASSETS/Maps/Particles/TFT/TFT_Item_RepeatingCrossbow.dds",
    //     "id": -29,
    //     "name": "Repeating Crossbow"
    // }
}