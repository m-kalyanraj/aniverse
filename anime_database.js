// ==========================================
// ANIVERSE - ANIME DATABASE (500 REAL SHOWS)
// ==========================================

const preseededCache = {
    "7 seeds": {
        image: "https://media.kitsu.app/anime/poster_images/42064/large.jpg",
        youtubeId: "7iCWs2HigSw"
    },
    "7th time loop": {
        image: "https://media.kitsu.app/anime/47874/poster_image/large-b3cf3a7145a20acd63add2f66a3c7e15.jpeg",
        youtubeId: "BeyQ4hPDPUI"
    },
    "86 eighty-six": {
        image: "https://media.kitsu.app/anime/45545/poster_image/large-c080fad1c64f865a73774fd6bcdf3a57.jpeg",
        youtubeId: ""
    },
    "86 eighty-six p2": {
        image: "https://media.kitsu.app/anime/45545/poster_image/large-c080fad1c64f865a73774fd6bcdf3a57.jpeg",
        youtubeId: ""
    },
    "a.i.c.o. -incarnat-": {
        image: "https://media.kitsu.app/anime/poster_images/13696/large.jpg",
        youtubeId: "6XcLqGVGObw"
    },
    "accel world": {
        image: "https://media.kitsu.app/anime/poster_images/6590/large.jpg",
        youtubeId: "Le80O3zYr0U"
    },
    "active raid": {
        image: "https://media.kitsu.app/anime/poster_images/11456/large.jpg",
        youtubeId: "jRmY926Z_ik"
    },
    "adachi shimamura": {
        image: "https://media.kitsu.app/anime/poster_images/42342/large.jpg",
        youtubeId: "uWz9iPUUMF0"
    },
    "ajin: demi-human": {
        image: "https://media.kitsu.app/anime/poster_images/11368/large.jpg",
        youtubeId: "V62kcgCXNJU"
    },
    "akagami no shirayuki": {
        image: "https://media.kitsu.app/anime/poster_images/10621/large.jpg",
        youtubeId: "XzXLibJm6GE"
    },
    "akame ga kill!": {
        image: "https://media.kitsu.app/anime/poster_images/8270/large.jpg",
        youtubeId: "HOB4GZ1S1Wo"
    },
    "akira": {
        image: "https://media.kitsu.app/anime/poster_images/29/large.jpg",
        youtubeId: "lG2WL9brJr0"
    },
    "aldnoah.zero": {
        image: "https://media.kitsu.app/anime/poster_images/8297/large.jpg",
        youtubeId: "D6XOSJyJtk8"
    },
    "alya russian s.": {
        image: "https://media.kitsu.app/anime/47192/poster_image/large-491024f89779a705db56110d20f06f0e.jpeg",
        youtubeId: ""
    },
    "am i strongest?": {
        image: "https://media.kitsu.app/anime/46456/poster_image/large-fccd170d71e16e04e62feb58b28d93fc.jpeg",
        youtubeId: "04__Am5v3ms"
    },
    "ancient magus' b.": {
        image: "https://cdn.myanimelist.net/images/anime/1444/100227.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "ancient magus' s2": {
        image: "https://media.kitsu.app/anime/poster_images/13228/large.jpg",
        youtubeId: "Q_2kMsVbqoA"
    },
    "angel next door": {
        image: "https://media.kitsu.app/anime/45715/poster_image/large-d863bff0eb6e0e49b30da61229bbd598.jpeg",
        youtubeId: "CQCX7FhSbKU"
    },
    "anohana": {
        image: "https://media.kitsu.app/anime/poster_images/5981/large.jpg",
        youtubeId: "3Kw7xjzs17E"
    },
    "another world phone": {
        image: "https://media.kitsu.app/anime/poster_images/13239/large.jpg",
        youtubeId: "Xub5ATx36gA"
    },
    "ao haru ride": {
        image: "https://cdn.myanimelist.net/images/anime/13/62499.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "appraisal skill": {
        image: "https://media.kitsu.app/anime/47481/poster_image/large-847aa70a7ffbecc6c15cbadb70a122a4.jpeg",
        youtubeId: "3-sXWlVc6ds"
    },
    "archdemon dilemma": {
        image: "https://media.kitsu.app/anime/46687/poster_image/large-06e362246345a63ab17b6b0acd12301f.jpeg",
        youtubeId: "2iPmhCHdpng"
    },
    "arifureta s1": {
        image: "https://media.kitsu.app/anime/poster_images/14043/large.jpg",
        youtubeId: "xoIaPNWLxy0"
    },
    "arifureta s2": {
        image: "https://media.kitsu.app/anime/poster_images/14043/large.jpg",
        youtubeId: "xoIaPNWLxy0"
    },
    "arifureta s3": {
        image: "https://media.kitsu.app/anime/poster_images/14043/large.jpg",
        youtubeId: "xoIaPNWLxy0"
    },
    "aristocrat adventure": {
        image: "https://media.kitsu.app/anime/poster_images/3209/large.jpg",
        youtubeId: ""
    },
    "arslan senki": {
        image: "https://media.kitsu.app/anime/poster_images/1582/large.jpg",
        youtubeId: "5ZwYSdWqwN4"
    },
    "arslan senki s2": {
        image: "https://media.kitsu.app/anime/poster_images/1582/large.jpg",
        youtubeId: "5ZwYSdWqwN4"
    },
    "ascendance bookworm": {
        image: "https://cdn.myanimelist.net/images/anime/1479/100827.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "assassination class.": {
        image: "https://media.kitsu.app/anime/poster_images/8640/large.jpg",
        youtubeId: "kgNkGohA20k"
    },
    "astra lost in space": {
        image: "https://media.kitsu.app/anime/poster_images/42148/large.jpg",
        youtubeId: "3p_Q0F73K-I"
    },
    "attack on titan": {
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        youtubeId: "LHtdkW7F_Gg"
    },
    "bahamut: genesis": {
        image: "https://media.kitsu.app/anime/poster_images/8195/large.jpg",
        youtubeId: "PtGRj71HMFA"
    },
    "bahamut: virgin s.": {
        image: "https://media.kitsu.app/anime/poster_images/10902/large.jpg",
        youtubeId: "w7o0uy1-o3I"
    },
    "bastard!!": {
        image: "https://media.kitsu.app/anime/poster_images/371/large.jpg",
        youtubeId: ""
    },
    "beast player erin": {
        image: "https://media.kitsu.app/anime/poster_images/4095/large.jpg",
        youtubeId: ""
    },
    "beelzebub": {
        image: "https://media.kitsu.app/anime/poster_images/5766/large.jpg",
        youtubeId: ""
    },
    "berserk": {
        image: "https://media.kitsu.app/anime/24/poster_image/large-8b69ef8e3f4f4359af304e9b664eef0f.jpeg",
        youtubeId: "dVPzv9qwKl0"
    },
    "black bullet": {
        image: "https://media.kitsu.app/anime/poster_images/8052/large.jpg",
        youtubeId: "R-VkhMyUT4w"
    },
    "black clover": {
        image: "https://cdn.myanimelist.net/images/anime/14/104445.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "black lagoon": {
        image: "https://media.kitsu.app/anime/poster_images/789/large.jpg",
        youtubeId: "d4EbGC7fKnQ"
    },
    "black summoner": {
        image: "https://media.kitsu.app/anime/45884/poster_image/large-440b2b11f508b045582bdbf663fdc9ac.jpeg",
        youtubeId: "m3W8sZhn3-o"
    },
    "bleach": {
        image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
        youtubeId: "exCYSf_spIA"
    },
    "bleach: tybw": {
        image: "https://media.kitsu.app/anime/poster_images/244/large.jpg",
        youtubeId: "WhyJBof3kXw"
    },
    "blood blockade": {
        image: "https://media.kitsu.app/anime/poster_images/8646/large.jpg",
        youtubeId: "aMe0J7c8uOU"
    },
    "bloom into you": {
        image: "https://media.kitsu.app/anime/poster_images/41240/large.jpg",
        youtubeId: "_yVedXph7Ig"
    },
    "blue box": {
        image: "https://media.kitsu.app/anime/48239/poster_image/large-b547e3cfeb2776aa95f8618d0a6ff0fe.jpeg",
        youtubeId: "zBm4JwAPz3o"
    },
    "blue exorcist": {
        image: "https://media.kitsu.app/anime/poster_images/5940/large.jpg",
        youtubeId: "ayLq7BKjQZU"
    },
    "blue exorcist kyoto": {
        image: "https://media.kitsu.app/anime/poster_images/12275/large.jpg",
        youtubeId: "4hyLlZC5QhE"
    },
    "blue exorcist s3": {
        image: "https://media.kitsu.app/anime/poster_images/5940/large.jpg",
        youtubeId: "ayLq7BKjQZU"
    },
    "boarding sch. juliet": {
        image: "https://media.kitsu.app/anime/poster_images/2706/large.jpg",
        youtubeId: "nAKLxxM9gFU"
    },
    "bookworm s2": {
        image: "https://media.kitsu.app/anime/poster_images/42241/large.jpg",
        youtubeId: "KfPyxG-ZbFM"
    },
    "bookworm s3": {
        image: "https://media.kitsu.app/anime/poster_images/42241/large.jpg",
        youtubeId: "KfPyxG-ZbFM"
    },
    "brynhildr": {
        image: "https://media.kitsu.app/anime/poster_images/7996/large.jpg",
        youtubeId: "NpU48on5QKw"
    },
    "btooom!": {
        image: "https://media.kitsu.app/anime/poster_images/7113/large.jpg",
        youtubeId: "H92d6YZkVO8"
    },
    "bullbuster": {
        image: "https://media.kitsu.app/anime/46762/poster_image/large-eb124f20478d857449aaaf4cab3877bb.jpeg",
        youtubeId: "r2lw0KHgAok"
    },
    "bungo stray dogs": {
        image: "https://media.kitsu.app/anime/poster_images/11339/large.jpg",
        youtubeId: "zyc8p_jDdtI"
    },
    "bunny girl senpai": {
        image: "https://cdn.myanimelist.net/images/anime/1442/99039.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "by grace of gods": {
        image: "https://media.kitsu.app/anime/poster_images/43273/large.jpg",
        youtubeId: ""
    },
    "by grace of gods s2": {
        image: "https://media.kitsu.app/anime/poster_images/43273/large.jpg",
        youtubeId: ""
    },
    "bye bye, earth": {
        image: "https://media.kitsu.app/anime/46764/poster_image/large-9fbae82f268cf9a2478d76e67804cad4.jpeg",
        youtubeId: "QNnwdBfMMm4"
    },
    "cagaster": {
        image: "https://media.kitsu.app/anime/poster_images/42089/large.jpg",
        youtubeId: ""
    },
    "call of the night": {
        image: "https://media.kitsu.app/anime/45483/poster_image/large-d9d78c62b3f81a732df8d44f158a0c11.jpeg",
        youtubeId: "ukO-ZdWS3j8"
    },
    "campfire cooking": {
        image: "https://cdn.myanimelist.net/images/anime/1899/131445.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "captain earth": {
        image: "https://media.kitsu.app/anime/poster_images/7987/large.jpg",
        youtubeId: "t4pMqBnBtCs"
    },
    "cardcaptor clear c.": {
        image: "https://media.kitsu.app/anime/poster_images/12237/large.jpg",
        youtubeId: "vc-UPPk5ZPQ"
    },
    "cardcaptor sakura": {
        image: "https://media.kitsu.app/anime/poster_images/207/large.jpg",
        youtubeId: "luM4oGFSpT8"
    },
    "carol & tuesday": {
        image: "https://media.kitsu.app/anime/poster_images/41025/large.jpg",
        youtubeId: "CBak9m0bcB0"
    },
    "case study vanitas": {
        image: "https://media.kitsu.app/anime/poster_images/44241/large.jpg",
        youtubeId: "DGlQWD3Krx8"
    },
    "cautious hero": {
        image: "https://media.kitsu.app/anime/poster_images/42079/large.jpg",
        youtubeId: "JkEH0nyKK7U"
    },
    "chainsaw man": {
        image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
        youtubeId: "v4yJOo55Tkg"
    },
    "chaos;child": {
        image: "https://media.kitsu.app/anime/poster_images/10786/large.jpg",
        youtubeId: "Jl5A299Yd4E"
    },
    "chaos;head": {
        image: "https://media.kitsu.app/anime/poster_images/3871/large.jpg",
        youtubeId: "oikpZ8Wk-Hc"
    },
    "cheat skill real w.": {
        image: "https://media.kitsu.app/anime/46370/poster_image/large-338a164d72dacaa07fc4b6ea58fa1efc.jpeg",
        youtubeId: "Z-7lGQa9Rd8"
    },
    "chihayafuru": {
        image: "https://media.kitsu.app/anime/poster_images/6355/large.jpg",
        youtubeId: ""
    },
    "chihayafuru 2": {
        image: "https://media.kitsu.app/anime/poster_images/7123/large.jpg",
        youtubeId: ""
    },
    "chihayafuru 3": {
        image: "https://media.kitsu.app/anime/poster_images/40998/large.jpg",
        youtubeId: ""
    },
    "chunibyo!": {
        image: "https://media.kitsu.app/anime/poster_images/7293/large.jpg",
        youtubeId: ""
    },
    "citrus": {
        image: "https://media.kitsu.app/anime/poster_images/12737/large.jpg",
        youtubeId: "-G9XAwlP5V8"
    },
    "clannad": {
        image: "https://media.kitsu.app/anime/poster_images/1962/large.jpg",
        youtubeId: "pTTsmwHxHns"
    },
    "clannad: after s.": {
        image: "https://media.kitsu.app/anime/poster_images/3505/large.jpg",
        youtubeId: "WiTwXIAcm5Q"
    },
    "claymore": {
        image: "https://media.kitsu.app/anime/1635/poster_image/large-784982e3acf77ea188ccc7154cbdf38c.jpeg",
        youtubeId: "2nSMszNWlLI"
    },
    "code geass": {
        image: "https://cdn.myanimelist.net/images/anime/18/79836.jpg",
        youtubeId: "v-AGjx0N24U"
    },
    "combatants dispatched": {
        image: "https://media.kitsu.app/anime/poster_images/43837/large.jpg",
        youtubeId: "-uJdqz-fBl8"
    },
    "cop craft": {
        image: "https://media.kitsu.app/anime/poster_images/42174/large.jpg",
        youtubeId: "Z0RCXU0SmqM"
    },
    "cowboy bebop": {
        image: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "cyberpunk edgerun.": {
        image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "d.gray-man": {
        image: "https://media.kitsu.app/anime/poster_images/1328/large.jpg",
        youtubeId: "MLsOM04Y7Qc"
    },
    "d.gray-man hallow": {
        image: "https://media.kitsu.app/anime/poster_images/11654/large.jpg",
        youtubeId: "WTS94iHIH5o"
    },
    "dangers in my heart": {
        image: "https://media.kitsu.app/anime/46299/poster_image/large-116b49ab958abf27bbbb38e9215a0fe1.jpeg",
        youtubeId: "c-yZsNd__0E"
    },
    "darker than black": {
        image: "https://media.kitsu.app/anime/poster_images/1824/large.jpg",
        youtubeId: ""
    },
    "darling in franxx": {
        image: "https://cdn.myanimelist.net/images/anime/1444/99227.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "darwin's game": {
        image: "https://media.kitsu.app/anime/poster_images/42260/large.jpg",
        youtubeId: "mS0aIJ5Yq1g"
    },
    "date a live": {
        image: "https://media.kitsu.app/anime/poster_images/7278/large.jpg",
        youtubeId: "AytCKBRQJu0"
    },
    "date a live ii": {
        image: "https://media.kitsu.app/anime/poster_images/7864/large.jpg",
        youtubeId: "wKUwDWFX4WA"
    },
    "date a live iii": {
        image: "https://media.kitsu.app/anime/poster_images/14040/large.jpg",
        youtubeId: "iz_sAWpBNrI"
    },
    "date a live iv": {
        image: "https://media.kitsu.app/anime/43065/poster_image/large-7b10510948909a44b7d5291459598651.jpeg",
        youtubeId: "Dvn0XsA73Yo"
    },
    "date a live v": {
        image: "https://media.kitsu.app/anime/46207/poster_image/large-e6636b192893172d0b5cacaa91427651.jpeg",
        youtubeId: "xkbH8v2JFuk"
    },
    "deadman wonder.": {
        image: "https://media.kitsu.app/anime/poster_images/4765/large.jpg",
        youtubeId: "WUTFRxi5RXM"
    },
    "death march": {
        image: "https://media.kitsu.app/anime/poster_images/13276/large.jpg",
        youtubeId: "0NzZvYIyb0c"
    },
    "death note": {
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        youtubeId: "NlJZ-YgAt-c"
    },
    "deca-dence": {
        image: "https://media.kitsu.app/anime/poster_images/42433/large.jpg",
        youtubeId: "zSClK3Eblbg"
    },
    "delico's nursery": {
        image: "https://media.kitsu.app/anime/47835/poster_image/large-20302f4507494585cc217250461e56cd.jpeg",
        youtubeId: "6d8mlru9Khg"
    },
    "demon lord nobody": {
        image: "https://media.kitsu.app/anime/44187/poster_image/large-506dee02336d44622003b4013897c700.jpeg",
        youtubeId: "nSZFVfvJSZQ"
    },
    "demon lord, retry!": {
        image: "https://media.kitsu.app/anime/poster_images/41950/large.jpg",
        youtubeId: "ZaK_DwZ9yRQ"
    },
    "demon slayer": {
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        youtubeId: "VQGCKyvzIM4"
    },
    "devilman crybaby": {
        image: "https://media.kitsu.app/anime/poster_images/13230/large.jpg",
        youtubeId: "Qg0i0nm35TE"
    },
    "dimension w": {
        image: "https://media.kitsu.app/anime/poster_images/11170/large.jpg",
        youtubeId: "Mgq7hcFxkXM"
    },
    "doctor elise": {
        image: "https://media.kitsu.app/anime/47111/poster_image/large-c9039f69f1e34b45012192e792e54209.jpeg",
        youtubeId: "KhLxwMmwAlU"
    },
    "domestic girl.": {
        image: "https://media.kitsu.app/anime/poster_images/41479/large.jpg",
        youtubeId: "v-ajpK25ajw"
    },
    "dororo": {
        image: "https://media.kitsu.app/anime/poster_images/41083/large.jpg",
        youtubeId: "_wPl0zCDpSc"
    },
    "dr. stone": {
        image: "https://cdn.myanimelist.net/images/anime/1499/101889.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "dragon ball super": {
        image: "https://media.kitsu.app/anime/poster_images/10879/large.jpg",
        youtubeId: "nZKs2Sbx4iM"
    },
    "dragon ball z": {
        image: "https://media.kitsu.app/anime/720/poster_image/large-5cfc7e2756852e708c822df0a9f59871.jpeg",
        youtubeId: "b5mKTXse_gQ"
    },
    "drifters": {
        image: "https://media.kitsu.app/anime/poster_images/11028/large.jpg",
        youtubeId: "nw-btdhO8mg"
    },
    "duke of death s1": {
        image: "https://media.kitsu.app/anime/poster_images/44035/large.jpg",
        youtubeId: "fovl9ZRPX40"
    },
    "dungeon black co.": {
        image: "https://media.kitsu.app/anime/poster_images/43268/large.jpg",
        youtubeId: "Dz55QzZxJWg"
    },
    "dungeon meshi": {
        image: "https://media.kitsu.app/anime/46320/poster_image/large-9d404bdee1ca826c60e32864e0502999.jpeg",
        youtubeId: "aXfVHMILKJg"
    },
    "durarara!!": {
        image: "https://media.kitsu.app/anime/poster_images/4696/large.jpg",
        youtubeId: "q5qlX4lWst0"
    },
    "edens zero": {
        image: "https://media.kitsu.app/anime/poster_images/43521/large.jpg",
        youtubeId: ""
    },
    "edens zero s2": {
        image: "https://media.kitsu.app/anime/poster_images/43521/large.jpg",
        youtubeId: ""
    },
    "elfen lied": {
        image: "https://media.kitsu.app/anime/poster_images/201/large.jpg",
        youtubeId: "IItTqRrRkqI"
    },
    "elusive samurai": {
        image: "https://media.kitsu.app/anime/47197/poster_image/large-dbd9336468711cbe8bef960383b1715d.jpeg",
        youtubeId: "JjOLjAB0bcI"
    },
    "eminence in shadow": {
        image: "https://media.kitsu.app/anime/44107/poster_image/large-794c151bd6f09e29b21e042163127a47.jpeg",
        youtubeId: "H-3fre7943U"
    },
    "eminence shadow": {
        image: "https://cdn.myanimelist.net/images/anime/1866/128445.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "eminence shadow s2": {
        image: "https://media.kitsu.app/anime/44107/poster_image/large-794c151bd6f09e29b21e042163127a47.jpeg",
        youtubeId: "H-3fre7943U"
    },
    "ergo proxy": {
        image: "https://media.kitsu.app/anime/705/poster_image/large-42da3a56d45a62e45bda5e1febfd31d3.jpeg",
        youtubeId: "kL0j06Byjjs"
    },
    "escaflowne": {
        image: "https://media.kitsu.app/anime/poster_images/360/large.jpg",
        youtubeId: "bA1Kcn0RjFA"
    },
    "eureka seven": {
        image: "https://media.kitsu.app/anime/poster_images/212/large.jpg",
        youtubeId: "UOJ7fXIJ_gQ"
    },
    "evangelion": {
        image: "https://cdn.myanimelist.net/images/anime/12/32189.jpg",
        youtubeId: "tA5M-8t6f28"
    },
    "failure frame": {
        image: "https://media.kitsu.app/anime/48450/poster_image/large-d1ad228d12b1b5d6ddc40542db89153f.jpeg",
        youtubeId: "oxaZZk3G30Y"
    },
    "fairy tail": {
        image: "https://cdn.myanimelist.net/images/anime/6/75445.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "farming life isekai": {
        image: "https://media.kitsu.app/anime/46016/poster_image/large-923361042c98f2f5bd4b001f4ba44670.jpeg",
        youtubeId: "Jg3OeBPJHrQ"
    },
    "fate/apocrypha": {
        image: "https://media.kitsu.app/anime/poster_images/13066/large.jpg",
        youtubeId: "c2r3sF9vAGs"
    },
    "fate/grand order": {
        image: "https://media.kitsu.app/anime/poster_images/12710/large.jpg",
        youtubeId: "OUx-VN-DDmk"
    },
    "fate/stay night: ubw": {
        image: "https://cdn.myanimelist.net/images/anime/14/66889.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "fate/zero": {
        image: "https://cdn.myanimelist.net/images/anime/12/38209.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "fate: heaven's feel": {
        image: "https://cdn.myanimelist.net/images/anime/15/78286.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "finest assassin": {
        image: "https://media.kitsu.app/anime/poster_images/44393/large.jpg",
        youtubeId: "4ftVLBguuYc"
    },
    "fire force": {
        image: "https://media.kitsu.app/anime/poster_images/42068/large.jpg",
        youtubeId: "fzM43HZ6oeg"
    },
    "first kiss never e.": {
        image: "https://media.kitsu.app/anime/46206/poster_image/large-d9b42ac7beb313ecd7269f658dec80d4.jpeg",
        youtubeId: "W3IvBLpebQ4"
    },
    "flcl": {
        image: "https://media.kitsu.app/anime/202/poster_image/large-aaa4382e2d089a683af13bfd86aa4d34.jpeg",
        youtubeId: "pKMzuuy_KQQ"
    },
    "fluffy paradise": {
        image: "https://media.kitsu.app/anime/46242/poster_image/large-5088f9430a3e5cbf613736987380fbf7.jpeg",
        youtubeId: "SEx82OLhyVk"
    },
    "frieren": {
        image: "https://cdn.myanimelist.net/images/anime/1015/138025.jpg",
        youtubeId: "qgQKT6K18HY"
    },
    "frieren season 1": {
        image: "https://media.kitsu.app/anime/49240/poster_image/large-5f1824cd76b6e829012dc75a2f51ec44.jpeg",
        youtubeId: "RH-FcW94z00"
    },
    "fruit of evol. s2": {
        image: "https://media.kitsu.app/anime/47168/poster_image/large-9ca70f52a14f1d3ab1a1ba58c0a996fa.jpeg",
        youtubeId: ""
    },
    "fruit of evolution": {
        image: "https://media.kitsu.app/anime/44024/poster_image/large-dd30bc6e1689ff421c42bf810fc10e8b.jpeg",
        youtubeId: "P441kTYtx1Q"
    },
    "fruits basket (19)": {
        image: "https://cdn.myanimelist.net/images/anime/1447/99827.jpg",
        youtubeId: "OOVeaVsk_v0"
    },
    "fruits basket final": {
        image: "https://media.kitsu.app/anime/poster_images/43578/large.jpg",
        youtubeId: "_uTvqumZBqY"
    },
    "fruits basket s2": {
        image: "https://media.kitsu.app/anime/poster_images/99/large.jpg",
        youtubeId: "sKpqU-AxB1o"
    },
    "fullmetal alchemist: b.": {
        image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
        youtubeId: "B8_1U5K3-5k"
    },
    "fushigi yuugi": {
        image: "https://media.kitsu.app/anime/poster_images/102/large.jpg",
        youtubeId: ""
    },
    "gachiakuta": {
        image: "https://media.kitsu.app/anime/48946/poster_image/large-5855f32a7aa8e67ddc32d343498e087b.jpeg",
        youtubeId: "yeRvDchyo44"
    },
    "galactic heroes": {
        image: "https://media.kitsu.app/anime/poster_images/727/large.jpg",
        youtubeId: "G7grjXe2Eyo"
    },
    "gamera rebirth": {
        image: "https://media.kitsu.app/anime/46754/poster_image/large-67ad296bdc9098968bba072ddf7ebe49.jpeg",
        youtubeId: "Fzg9xm8Ow9Q"
    },
    "gantz": {
        image: "https://media.kitsu.app/anime/poster_images/351/large.jpg",
        youtubeId: "CssJ1zMYULk"
    },
    "gargantia": {
        image: "https://media.kitsu.app/anime/poster_images/7449/large.jpg",
        youtubeId: "saxtE2YcPH4"
    },
    "ghost in shell (95)": {
        image: "https://media.kitsu.app/anime/25/poster_image/large-a571f1f78eb5147a952e6c333b32a16d.jpeg",
        youtubeId: "8RF09G8Ymqg"
    },
    "ghost in shell sac": {
        image: "https://cdn.myanimelist.net/images/anime/12/55889.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "gintama": {
        image: "https://media.kitsu.app/anime/poster_images/818/large.jpg",
        youtubeId: ""
    },
    "given": {
        image: "https://media.kitsu.app/anime/poster_images/12230/large.jpg",
        youtubeId: "g5xWqjFglsk"
    },
    "goblin slayer": {
        image: "https://media.kitsu.app/anime/poster_images/40597/large.jpg",
        youtubeId: "ImU96iYJYSE"
    },
    "god of high school": {
        image: "https://media.kitsu.app/anime/poster_images/43018/large.jpg",
        youtubeId: "8i3Xvs4R0WY"
    },
    "godzilla sp": {
        image: "https://media.kitsu.app/anime/poster_images/5314/large.jpg",
        youtubeId: "DKhZkGHkow8"
    },
    "golden kamuy": {
        image: "https://media.kitsu.app/anime/13689/poster_image/large-3547826d837c5e36b05b8fbc27a8a23f.jpeg",
        youtubeId: "5olutLS6mdo"
    },
    "golden time": {
        image: "https://cdn.myanimelist.net/images/anime/12/52445.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "granblue fantasy": {
        image: "https://media.kitsu.app/anime/poster_images/13154/large.jpg",
        youtubeId: ""
    },
    "granblue s2": {
        image: "https://media.kitsu.app/anime/poster_images/11382/large.jpg",
        youtubeId: "yGZoqzMWRuU"
    },
    "grandpa grandma y.": {
        image: "https://media.kitsu.app/anime/47857/poster_image/large-4f8abdca82efeab96ff2af844e975950.jpeg",
        youtubeId: "wYVCjd51T8U"
    },
    "grimgar": {
        image: "https://media.kitsu.app/anime/poster_images/11447/large.jpg",
        youtubeId: "nFhwqXYchiY"
    },
    "guilty crown": {
        image: "https://media.kitsu.app/anime/poster_images/6349/large.jpg",
        youtubeId: "3prqSCE767c"
    },
    "gundam 00": {
        image: "https://media.kitsu.app/anime/poster_images/2346/large.jpg",
        youtubeId: "yTGzkTQjGak"
    },
    "gundam seed": {
        image: "https://media.kitsu.app/anime/poster_images/1117/large.jpg",
        youtubeId: ""
    },
    "gundam: ibo": {
        image: "https://cdn.myanimelist.net/images/anime/12/75889.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "gundam: witch merc.": {
        image: "https://cdn.myanimelist.net/images/anime/1888/130286.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "gurren lagann": {
        image: "https://media.kitsu.app/anime/poster_images/1801/large.jpg",
        youtubeId: "rAQylCHv8Cw"
    },
    "handyman saitou": {
        image: "https://media.kitsu.app/anime/45788/poster_image/large-520d42927c186609e0d6c479c299cd36.jpeg",
        youtubeId: "jGmDVjbE1z4"
    },
    "heavenly delusion": {
        image: "https://media.kitsu.app/anime/46641/poster_image/large-a26b99328f29c31db60ba7201ebeb446.jpeg",
        youtubeId: "Sld5uW_BJU4"
    },
    "helck": {
        image: "https://media.kitsu.app/anime/45876/poster_image/large-2b41b177707ddf123c3633f6bb641e4d.jpeg",
        youtubeId: "G6ijvF-WOQ4"
    },
    "hell's paradise": {
        image: "https://media.kitsu.app/anime/44012/poster_image/large-a82dcf6cbdfd5217530236ae5d8b100f.jpeg",
        youtubeId: "8BIaDDN-r3o"
    },
    "hellsing": {
        image: "https://media.kitsu.app/anime/poster_images/245/large.jpg",
        youtubeId: "A4ZVXuYYKWY"
    },
    "hellsing ultimate": {
        image: "https://media.kitsu.app/anime/poster_images/695/large.jpg",
        youtubeId: "KPDdligusRU"
    },
    "hero mask": {
        image: "https://media.kitsu.app/anime/poster_images/42015/large.jpg",
        youtubeId: "7FtgXtNPQGY"
    },
    "high school prod.": {
        image: "https://media.kitsu.app/anime/poster_images/1376/large.jpg",
        youtubeId: "NlJZ-YgAt-c"
    },
    "high-rise invasion": {
        image: "https://media.kitsu.app/anime/poster_images/43703/large.jpg",
        youtubeId: ""
    },
    "highschool of dead": {
        image: "https://media.kitsu.app/anime/poster_images/5187/large.jpg",
        youtubeId: "Kl6cNSBg3Wg"
    },
    "hitman reborn!": {
        image: "https://media.kitsu.app/anime/poster_images/1444/large.jpg",
        youtubeId: "LS089oeLxio"
    },
    "honey and clover": {
        image: "https://media.kitsu.app/anime/poster_images/7/large.jpg",
        youtubeId: "6TN4a0kZuXg"
    },
    "horimiya": {
        image: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
        youtubeId: "HGDH4Z6p-j8"
    },
    "horimiya: missing": {
        image: "https://media.kitsu.app/anime/47234/poster_image/large-dab8478fa4627a9372b626920e68e521.jpeg",
        youtubeId: "iZMAsEbD8rc"
    },
    "hunter x hunter": {
        image: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
        youtubeId: "d6kBeJjO0RU"
    },
    "hyouka": {
        image: "https://media.kitsu.app/anime/poster_images/6686/large.jpg",
        youtubeId: "N5nNKAVB4O4"
    },
    "ice guy cool female": {
        image: "https://media.kitsu.app/anime/46192/poster_image/large-04d5c4ceaf1cc95afe76f22eadbb1e70.jpeg",
        youtubeId: "HTO3PDx_UGo"
    },
    "id:invaded": {
        image: "https://media.kitsu.app/anime/poster_images/42436/large.jpg",
        youtubeId: "IeyJ7MPb7MQ"
    },
    "ingress: animation": {
        image: "https://media.kitsu.app/anime/poster_images/41030/large.jpg",
        youtubeId: "7CAHPBR5nHc"
    },
    "insomniacs after s.": {
        image: "https://media.kitsu.app/anime/45746/poster_image/large-45e04c601dd80245037ab7b8ec5a0c4a.jpeg",
        youtubeId: "YcgFC0Mf-ME"
    },
    "inuyasha": {
        image: "https://media.kitsu.app/anime/poster_images/224/large.jpg",
        youtubeId: "n5f47FVUlrs"
    },
    "inuyashiki": {
        image: "https://media.kitsu.app/anime/poster_images/13096/large.jpg",
        youtubeId: "noTZ9Yw569g"
    },
    "isekai cheat mag.": {
        image: "https://media.kitsu.app/anime/poster_images/42319/large.jpg",
        youtubeId: "QVIdUuUCZUU"
    },
    "isekai izakaya": {
        image: "https://media.kitsu.app/anime/poster_images/13466/large.jpg",
        youtubeId: "NWjYkDKRVUY"
    },
    "isekai yururi kiko": {
        image: "https://media.kitsu.app/anime/48390/poster_image/large-b199b98d15d371a75711b09c26eb001c.jpeg",
        youtubeId: "nAR16wBkC4M"
    },
    "ishura": {
        image: "https://media.kitsu.app/anime/47078/poster_image/large-dcad9806ed41e963d3cf838ec865a906.jpeg",
        youtubeId: "6YF46W0xpuI"
    },
    "itazura na kiss": {
        image: "https://media.kitsu.app/anime/poster_images/3218/large.jpg",
        youtubeId: ""
    },
    "jojo's bizarre adv.": {
        image: "https://media.kitsu.app/anime/7158/poster_image/large-9e79f5c290ae821d2141473e6fdb6532.jpeg",
        youtubeId: "PGVSViecHWE"
    },
    "jujutsu kaisen": {
        image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        youtubeId: "PkLIHskgdM4"
    },
    "just because!": {
        image: "https://media.kitsu.app/anime/poster_images/8698/large.jpg",
        youtubeId: "fpp0mfi6HmY"
    },
    "k": {
        image: "https://media.kitsu.app/anime/11578/poster_image/large-e969f8a688549dd8e02ffd59f49122e9.jpeg",
        youtubeId: "F8g3TuKsQHs"
    },
    "kabaneri iron fort.": {
        image: "https://media.kitsu.app/anime/poster_images/10036/large.jpg",
        youtubeId: "NljBw9RtOx4"
    },
    "kaguya-sama": {
        image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
        youtubeId: "vN4U5IyvfDs"
    },
    "kaguya-sama s2": {
        image: "https://media.kitsu.app/anime/poster_images/41373/large.jpg",
        youtubeId: "rZ95aZmQu_8"
    },
    "kaguya-sama s3": {
        image: "https://media.kitsu.app/anime/poster_images/41373/large.jpg",
        youtubeId: "rZ95aZmQu_8"
    },
    "kaiju no. 8": {
        image: "https://media.kitsu.app/anime/46300/poster_image/large-31cc66fd5854cc555d496ced7ab40c31.jpeg",
        youtubeId: "7n_mFVPeApw"
    },
    "kamigami no asobi": {
        image: "https://media.kitsu.app/anime/poster_images/8160/large.jpg",
        youtubeId: "xW5r60YFruw"
    },
    "kamikatsu": {
        image: "https://media.kitsu.app/anime/46089/poster_image/large-44e1b13d5835952d3cfe4c2a7df68f84.jpeg",
        youtubeId: "h9eJalxtjbo"
    },
    "kamisama kiss": {
        image: "https://cdn.myanimelist.net/images/anime/12/69209.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "kill la kill": {
        image: "https://media.kitsu.app/anime/poster_images/7712/large.jpg",
        youtubeId: "B98NY8Hfo7I"
    },
    "killing slimes 300": {
        image: "https://media.kitsu.app/anime/poster_images/42628/large.jpg",
        youtubeId: "_l5Wuv-2Pf4"
    },
    "kimi ni todoke": {
        image: "https://media.kitsu.app/anime/poster_images/4397/large.jpg",
        youtubeId: "9aRQlHYaluU"
    },
    "kimi ni todoke s2": {
        image: "https://media.kitsu.app/anime/poster_images/4397/large.jpg",
        youtubeId: "9aRQlHYaluU"
    },
    "kimi ni todoke s3": {
        image: "https://media.kitsu.app/anime/poster_images/4397/large.jpg",
        youtubeId: "9aRQlHYaluU"
    },
    "kiznaiver": {
        image: "https://media.kitsu.app/anime/poster_images/11437/large.jpg",
        youtubeId: "x8M8LIcLtoo"
    },
    "knights & magic": {
        image: "https://media.kitsu.app/anime/poster_images/13274/large.jpg",
        youtubeId: "p4gSzsfTsFA"
    },
    "knight's & magic": {
        image: "https://media.kitsu.app/anime/poster_images/13274/large.jpg",
        youtubeId: "p4gSzsfTsFA"
    },
    "knights of sidonia": {
        image: "https://media.kitsu.app/anime/poster_images/7768/large.jpg",
        youtubeId: "jhshVVHxgIA"
    },
    "kokoro connect": {
        image: "https://media.kitsu.app/anime/poster_images/6626/large.jpg",
        youtubeId: "MnkqA_PRRhM"
    },
    "komi can't comm.": {
        image: "https://cdn.myanimelist.net/images/anime/1766/120286.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "konosuba": {
        image: "https://cdn.myanimelist.net/images/anime/9/77484.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "konosuba explosion": {
        image: "https://media.kitsu.app/anime/46139/poster_image/large-e050155e49b41f49052f3da5a4e2eacb.jpeg",
        youtubeId: "SBvVH-5hOdE"
    },
    "konosuba s2": {
        image: "https://media.kitsu.app/anime/poster_images/10941/large.jpg",
        youtubeId: "NU87y-38glA"
    },
    "konosuba s3": {
        image: "https://media.kitsu.app/anime/poster_images/10941/large.jpg",
        youtubeId: "NU87y-38glA"
    },
    "kuma bear punch!": {
        image: "https://media.kitsu.app/anime/43863/poster_image/large-d6bdc47054b7a3c8720edc81e97e7037.jpeg",
        youtubeId: "zw5JCuSyo7I"
    },
    "kuma kuma bear": {
        image: "https://media.kitsu.app/anime/poster_images/43214/large.jpg",
        youtubeId: "_7PfIoacHjs"
    },
    "kuromukuro": {
        image: "https://media.kitsu.app/anime/poster_images/11605/large.jpg",
        youtubeId: "LrDfpKyvXUc"
    },
    "land of leadale": {
        image: "https://media.kitsu.app/anime/44186/poster_image/large-7828a8e1ddbb3c3750c5de8c8b562579.jpeg",
        youtubeId: "fsk-Fh1iwHo"
    },
    "land of lustrous": {
        image: "https://media.kitsu.app/anime/13521/poster_image/large-a580ed1637cdd022d5a0e963aeb0aa1f.jpeg",
        youtubeId: "pwFpAyEuph8"
    },
    "legend of heroes": {
        image: "https://media.kitsu.app/anime/poster_images/2726/large.jpg",
        youtubeId: ""
    },
    "level 2 cheat power": {
        image: "https://media.kitsu.app/anime/48125/poster_image/large-ef5945662e78d142bfc45726a0b506e0.jpeg",
        youtubeId: "rTtfA9IiYHA"
    },
    "levius": {
        image: "https://media.kitsu.app/anime/poster_images/42208/large.jpg",
        youtubeId: ""
    },
    "log horizon": {
        image: "https://cdn.myanimelist.net/images/anime/12/55209.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "logh: neue these": {
        image: "https://media.kitsu.app/anime/44169/poster_image/large-229900ffa4d13e810b2ecfebe31f9cbf.jpeg",
        youtubeId: "nbzi11zN8GY"
    },
    "loner life isekai": {
        image: "https://media.kitsu.app/anime/48449/poster_image/large-b4a359c99eee35b62ee866a0819694a6.jpeg",
        youtubeId: "eWzTg1d3W1o"
    },
    "lovely complex": {
        image: "https://media.kitsu.app/anime/1833/poster_image/large-892da306ae6f1ec03daefae58c45138b.jpeg",
        youtubeId: "AhUnxTsHFCU"
    },
    "macross delta": {
        image: "https://media.kitsu.app/anime/poster_images/9992/large.jpg",
        youtubeId: "kJ5msJNz6I4"
    },
    "macross frontier": {
        image: "https://media.kitsu.app/anime/poster_images/3113/large.jpg",
        youtubeId: ""
    },
    "made in abyss": {
        image: "https://cdn.myanimelist.net/images/anime/6/86733.jpg",
        youtubeId: "Aq59_O5nQj8"
    },
    "made in abyss s2": {
        image: "https://media.kitsu.app/anime/poster_images/13273/large.jpg",
        youtubeId: "MuboGrmPDIg"
    },
    "madoka magica": {
        image: "https://media.kitsu.app/anime/poster_images/5853/large.jpg",
        youtubeId: "pDS0uJUN-FI"
    },
    "magi: labyrinth": {
        image: "https://cdn.myanimelist.net/images/anime/13/62289.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "magic knight raye.": {
        image: "https://media.kitsu.app/anime/399/poster_image/large-48c96bcea6b9575d2bb3b43053de656b.jpeg",
        youtubeId: "MYYXLixAr0k"
    },
    "maid sama!": {
        image: "https://cdn.myanimelist.net/images/anime/10/68179.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "masamune revenge": {
        image: "https://media.kitsu.app/anime/poster_images/12267/large.jpg",
        youtubeId: "XmfXcVLA1d8"
    },
    "mashle: magic & m.": {
        image: "https://media.kitsu.app/anime/46229/poster_image/large-0089799807bf6cc3579a183b8338d789.jpeg",
        youtubeId: "_ce5_P1Hj5A"
    },
    "metallic rouge": {
        image: "https://media.kitsu.app/anime/47228/poster_image/large-c1dd9ae90e80376245e54a3a09db9d12.jpeg",
        youtubeId: "3GvzeHi8puU"
    },
    "mirai nikki": {
        image: "https://media.kitsu.app/anime/poster_images/5344/large.jpg",
        youtubeId: ""
    },
    "mob psycho 100": {
        image: "https://cdn.myanimelist.net/images/anime/8/80400.jpg",
        youtubeId: "exCYSf_spIA"
    },
    "mob psycho 100 ii": {
        image: "https://media.kitsu.app/anime/41071/poster_image/large-eb5901d93c7bc43349ecca94890b0f02.jpeg",
        youtubeId: "7tlC1ugqdkY"
    },
    "mob psycho 100 iii": {
        image: "https://media.kitsu.app/anime/45338/poster_image/large-b7ba28948da84b740c9ae7882b365fb9.jpeg",
        youtubeId: "VwwZU7YgC6A"
    },
    "more than married": {
        image: "https://media.kitsu.app/anime/45521/poster_image/large-aa4976026d5b59706b89e8e6d4b2922a.jpeg",
        youtubeId: "2gHhxAksU9E"
    },
    "moribito": {
        image: "https://media.kitsu.app/anime/poster_images/1644/large.jpg",
        youtubeId: "9I8doA-vYvU"
    },
    "mushoku tensei": {
        image: "https://cdn.myanimelist.net/images/anime/1530/117776.jpg",
        youtubeId: "QxVn7fPnbgE"
    },
    "mushoku tensei s2": {
        image: "https://media.kitsu.app/anime/42323/poster_image/large-884ed9bb9ff6258dce8fc3b3bf569008.jpeg",
        youtubeId: "k5VxfJpzy1Q"
    },
    "my dress-up darling": {
        image: "https://cdn.myanimelist.net/images/anime/1795/122112.jpg",
        youtubeId: "8eceJn7cT5s"
    },
    "my happy marriage": {
        image: "https://media.kitsu.app/anime/46050/poster_image/large-fd7b1e4ec20ffb1f45e6899de32b46a3.jpeg",
        youtubeId: "_8JKDloLAhw"
    },
    "my hero academia": {
        image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
        youtubeId: "-77UEct01Dw"
    },
    "my little monster": {
        image: "https://media.kitsu.app/anime/poster_images/7099/large.jpg",
        youtubeId: "SlD-8h96pDw"
    },
    "my love story!!": {
        image: "https://media.kitsu.app/anime/poster_images/10016/large.jpg",
        youtubeId: "2oAYS6jWyIs"
    },
    "nana": {
        image: "https://media.kitsu.app/anime/777/poster_image/large-02fd1b083aefd40778a677450e2c23da.jpeg",
        youtubeId: "NtXI90cMN10"
    },
    "naruto": {
        image: "https://cdn.myanimelist.net/images/anime/15/38209.jpg",
        youtubeId: "m8yZ1v1y-yU"
    },
    "next life villainess": {
        image: "https://cdn.myanimelist.net/images/anime/1505/102449.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "nier:automata": {
        image: "https://media.kitsu.app/anime/45926/poster_image/large-b6948551837f6879aa5c3833e215b806.jpeg",
        youtubeId: "jmuqundBSOU"
    },
    "nisekoi": {
        image: "https://media.kitsu.app/anime/poster_images/7821/large.jpg",
        youtubeId: "Pu-n_4CLXLA"
    },
    "no game no life": {
        image: "https://cdn.myanimelist.net/images/anime/12/58209.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "no guns life": {
        image: "https://media.kitsu.app/anime/poster_images/42197/large.jpg",
        youtubeId: "MCBjBrM1AOE"
    },
    "nodame cantabile": {
        image: "https://media.kitsu.app/anime/poster_images/1525/large.jpg",
        youtubeId: ""
    },
    "noragami": {
        image: "https://cdn.myanimelist.net/images/anime/13/58889.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "noragami aragoto": {
        image: "https://media.kitsu.app/anime/poster_images/10800/large.jpg",
        youtubeId: "nI_2PqGZb-c"
    },
    "obsolete": {
        image: "https://media.kitsu.app/anime/poster_images/42562/large.jpg",
        youtubeId: "-PxH7dIhBy4"
    },
    "occultic;nine": {
        image: "https://media.kitsu.app/anime/poster_images/11949/large.jpg",
        youtubeId: "e9Ie5wXlELo"
    },
    "one piece": {
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        youtubeId: "MCb13Y96RIU"
    },
    "one-hit kill sister": {
        image: "https://media.kitsu.app/anime/45965/poster_image/large-9a72034006a8b1a32e6083c4e0bb6f12.jpeg",
        youtubeId: "8vfqXo_WgJY"
    },
    "one-punch man": {
        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
        youtubeId: "exCYSf_spIA"
    },
    "one-punch man 2": {
        image: "https://media.kitsu.app/anime/poster_images/12566/large.jpg",
        youtubeId: "wRAQxhDQMMY"
    },
    "orange": {
        image: "https://media.kitsu.app/anime/poster_images/11844/large.jpg",
        youtubeId: "RU2mPHp9Btk"
    },
    "oregairu": {
        image: "https://cdn.myanimelist.net/images/anime/11/49889.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "oregairu s2": {
        image: "https://media.kitsu.app/anime/poster_images/7169/large.jpg",
        youtubeId: "u-bpwWPNEpE"
    },
    "oregairu s3": {
        image: "https://media.kitsu.app/anime/poster_images/7169/large.jpg",
        youtubeId: "u-bpwWPNEpE"
    },
    "orphen": {
        image: "https://media.kitsu.app/anime/poster_images/907/large.jpg",
        youtubeId: "siphWKKZbPU"
    },
    "orphen (2020)": {
        image: "https://media.kitsu.app/anime/poster_images/43117/large.jpg",
        youtubeId: ""
    },
    "ouran host club": {
        image: "https://media.kitsu.app/anime/poster_images/755/large.jpg",
        youtubeId: "NcC5VCE2Its"
    },
    "outbreak company": {
        image: "https://media.kitsu.app/anime/poster_images/7837/large.jpg",
        youtubeId: "8D5_c-s2BLk"
    },
    "outlaw star": {
        image: "https://cdn.myanimelist.net/images/anime/10/55449.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "overlord": {
        image: "https://cdn.myanimelist.net/images/anime/13/75043.jpg",
        youtubeId: "KowoGvP_d30"
    },
    "overlord ii": {
        image: "https://media.kitsu.app/anime/poster_images/13237/large.jpg",
        youtubeId: "c3Jt_EXwGBc"
    },
    "overlord iii": {
        image: "https://media.kitsu.app/anime/poster_images/41174/large.jpg",
        youtubeId: "awYU-9jVZxE"
    },
    "overlord iv": {
        image: "https://media.kitsu.app/anime/44529/poster_image/large-d0683b94779e1ca0078b0dfde25443d7.jpeg",
        youtubeId: "tNYQjEyTO6s"
    },
    "paradise kiss": {
        image: "https://media.kitsu.app/anime/poster_images/289/large.jpg",
        youtubeId: "btG48UGYVLM"
    },
    "parallel pharmacy": {
        image: "https://media.kitsu.app/anime/44900/poster_image/large-f6bcf79aca262d5559a3e2196c6ad84e.jpeg",
        youtubeId: "fh7QGRKQ-IA"
    },
    "parasyte: the maxim": {
        image: "https://cdn.myanimelist.net/images/anime/13/66889.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "peach girl": {
        image: "https://media.kitsu.app/anime/poster_images/292/large.jpg",
        youtubeId: "5hieid1Gh60"
    },
    "pet girl sakurasou": {
        image: "https://media.kitsu.app/anime/poster_images/7023/large.jpg",
        youtubeId: "HPTtuR1EF_U"
    },
    "platinum end": {
        image: "https://media.kitsu.app/anime/poster_images/43862/large.jpg",
        youtubeId: "CVj14rLT1A8"
    },
    "pluto": {
        image: "https://media.kitsu.app/anime/13563/poster_image/large-c9c3c5f6a72efc028633992765832c69.jpeg",
        youtubeId: "-NZJkzcvAtU"
    },
    "pretear": {
        image: "https://media.kitsu.app/anime/poster_images/79/large.jpg",
        youtubeId: ""
    },
    "princess tutu": {
        image: "https://media.kitsu.app/anime/poster_images/650/large.jpg",
        youtubeId: ""
    },
    "promised neverland": {
        image: "https://media.kitsu.app/anime/poster_images/41312/large.jpg",
        youtubeId: "JIcjo7XVlOY"
    },
    "pseudo harem": {
        image: "https://media.kitsu.app/anime/47296/poster_image/large-1f3461f7db462aa14d818823209b63ff.jpeg",
        youtubeId: "msz5jAG_FSk"
    },
    "psycho-pass": {
        image: "https://cdn.myanimelist.net/images/anime/11/45099.jpg",
        youtubeId: "d6y7R6QdJ40"
    },
    "psycho-pass 2": {
        image: "https://media.kitsu.app/anime/poster_images/7863/large.jpg",
        youtubeId: "V3BGQkRxPlQ"
    },
    "psycho-pass 3": {
        image: "https://media.kitsu.app/anime/poster_images/42183/large.jpg",
        youtubeId: "1H4o18U1MLM"
    },
    "pupil of wise man": {
        image: "https://media.kitsu.app/anime/44121/poster_image/large-0dbc395fea965ab709dd748a998a1b5e.jpeg",
        youtubeId: "ZO5tYbvqGrc"
    },
    "qa in another world": {
        image: "https://media.kitsu.app/anime/poster_images/11209/large.jpg",
        youtubeId: "IvhgOe9BY5A"
    },
    "quint. quintuplets": {
        image: "https://media.kitsu.app/anime/395/poster_image/large-eb75740695abaf88c5714c268a51b7ef.jpeg",
        youtubeId: "iwROgK94zcM"
    },
    "quintuplets s2": {
        image: "https://media.kitsu.app/anime/poster_images/41966/large.jpg",
        youtubeId: "pCwfEB6PbFk"
    },
    "radiant": {
        image: "https://media.kitsu.app/anime/poster_images/41099/large.jpg",
        youtubeId: "3Pg7ZasceEE"
    },
    "ragna crimson": {
        image: "https://media.kitsu.app/anime/46000/poster_image/large-6673193a5ec42ddf382b79df18bc8933.jpeg",
        youtubeId: "RdshFiWLQNs"
    },
    "ranking of kings": {
        image: "https://media.kitsu.app/anime/43849/poster_image/large-b836b0ea6db752c18cc8c9239f9a83c0.jpeg",
        youtubeId: "Tr1ahorojPg"
    },
    "rave master": {
        image: "https://media.kitsu.app/anime/poster_images/221/large.jpg",
        youtubeId: "zUTWNo1fC4Q"
    },
    "re:creators": {
        image: "https://media.kitsu.app/anime/poster_images/13055/large.jpg",
        youtubeId: "-gdJpnkdzzE"
    },
    "re:monster": {
        image: "https://media.kitsu.app/anime/47964/poster_image/large-48b6b7fe2b3066d3d751ce2ff4709f87.jpeg",
        youtubeId: "bWPnmrc-Nys"
    },
    "re:zero": {
        image: "https://cdn.myanimelist.net/images/anime/1522/128084.jpg",
        youtubeId: "cZc6apzY5L4"
    },
    "re:zero s2": {
        image: "https://media.kitsu.app/anime/poster_images/11209/large.jpg",
        youtubeId: "IvhgOe9BY5A"
    },
    "re:zero s3": {
        image: "https://media.kitsu.app/anime/poster_images/11209/large.jpg",
        youtubeId: "IvhgOe9BY5A"
    },
    "real girl": {
        image: "https://media.kitsu.app/anime/poster_images/5374/large.jpg",
        youtubeId: "OdBmj4TWqzk"
    },
    "realist hero": {
        image: "https://cdn.myanimelist.net/images/anime/1744/119286.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "reborn master blade": {
        image: "https://media.kitsu.app/anime/45548/poster_image/large-3f09ae2812e1f6e84a5f44cb9dec10bf.jpeg",
        youtubeId: "VwCIk-vbQiI"
    },
    "reborn vending m.": {
        image: "https://media.kitsu.app/anime/46311/poster_image/large-cac78f3f22eb03a12f2f69f0fb9d91d9.jpeg",
        youtubeId: "mMOzW_UEdvg"
    },
    "record lodoss war": {
        image: "https://media.kitsu.app/anime/poster_images/183/large.jpg",
        youtubeId: "CVc7JrTh6g0"
    },
    "reincarnated sword": {
        image: "https://media.kitsu.app/anime/45242/poster_image/large-ce2c4912a685f66cd817732873e69da4.jpeg",
        youtubeId: "Rq_Rl4zKw-c"
    },
    "relife": {
        image: "https://cdn.myanimelist.net/images/anime/13/79449.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "rent-a-girlfriend": {
        image: "https://media.kitsu.app/anime/43028/poster_image/large-e464f2b70c6e0696153474df519f1b9a.jpeg",
        youtubeId: "jZFEtc3CKHs"
    },
    "restaurant another": {
        image: "https://media.kitsu.app/anime/poster_images/12535/large.jpg",
        youtubeId: "Y7DuhSollYQ"
    },
    "robotics;notes": {
        image: "https://media.kitsu.app/anime/poster_images/6999/large.jpg",
        youtubeId: "XlRZAKcqIJo"
    },
    "rokka: braves": {
        image: "https://media.kitsu.app/anime/poster_images/10029/large.jpg",
        youtubeId: "KLOtrSOeO10"
    },
    "romantic killer": {
        image: "https://media.kitsu.app/anime/46371/poster_image/large-fe98fce40dcad5d7ddf8980fcbe7e7b0.jpeg",
        youtubeId: "jcmnHOJm8-A"
    },
    "rurouni kenshin": {
        image: "https://media.kitsu.app/anime/poster_images/27/large.jpg",
        youtubeId: ""
    },
    "sacrificial princess": {
        image: "https://media.kitsu.app/anime/44013/poster_image/large-fb88952b367e8897b6a805be20a88115.jpeg",
        youtubeId: "IEkjbRs6LHo"
    },
    "saekano": {
        image: "https://media.kitsu.app/anime/poster_images/8406/large.jpg",
        youtubeId: "Hv3oF7Ky8NI"
    },
    "saga of tanya": {
        image: "https://cdn.myanimelist.net/images/anime/13/83209.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "saga of tanya the e.": {
        image: "https://media.kitsu.app/anime/poster_images/14173/large.jpg",
        youtubeId: "sWepuvlBCTo"
    },
    "sailor moon": {
        image: "https://media.kitsu.app/anime/489/poster_image/large-dcdc9fad1358e62c0632dd8ab0acab96.jpeg",
        youtubeId: "pEX3tUb2sQo"
    },
    "sailor moon cosmos": {
        image: "https://media.kitsu.app/anime/46085/poster_image/large-c35e11820749de64838204a4e350a12f.jpeg",
        youtubeId: "QpmunRdWROI"
    },
    "sailor moon crystal": {
        image: "https://media.kitsu.app/anime/poster_images/7163/large.jpg",
        youtubeId: "XAe7Buc3OjY"
    },
    "saint seiya": {
        image: "https://media.kitsu.app/anime/poster_images/1129/large.jpg",
        youtubeId: "znQkHaf2Gg4"
    },
    "saint's magic power": {
        image: "https://media.kitsu.app/anime/poster_images/44115/large.jpg",
        youtubeId: "neuik8auVmE"
    },
    "saint's magic s2": {
        image: "https://media.kitsu.app/anime/poster_images/44115/large.jpg",
        youtubeId: "neuik8auVmE"
    },
    "sakamoto days": {
        image: "https://media.kitsu.app/anime/48915/poster_image/large-37aa395d6e0fbd2e6cbce7f3f6c77347.jpeg",
        youtubeId: "-kscQQq0Xs8"
    },
    "samurai champloo": {
        image: "https://media.kitsu.app/anime/poster_images/181/large.jpg",
        youtubeId: "K-SEUY5nKBw"
    },
    "sasaki and miyano": {
        image: "https://media.kitsu.app/anime/44575/poster_image/large-ec8c1a1e7200b597bbeff4db72f80d66.jpeg",
        youtubeId: "LaRNddpJpVo"
    },
    "saving 80,000 gold": {
        image: "https://media.kitsu.app/anime/46304/poster_image/large-ab575b3c6fc221bc2283930b37bdc8fc.jpeg",
        youtubeId: "hVbjGNiaDuc"
    },
    "say 'i love you'": {
        image: "https://cdn.myanimelist.net/images/anime/11/42449.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "scum's wish": {
        image: "https://media.kitsu.app/anime/poster_images/11940/large.jpg",
        youtubeId: "qVCT4ZeOTDA"
    },
    "sengoku youko": {
        image: "https://media.kitsu.app/anime/47891/poster_image/large-f63d2e2239eb64b15ce2cde94f4831d4.jpeg",
        youtubeId: ""
    },
    "sengoku youko s2": {
        image: "https://media.kitsu.app/anime/47891/poster_image/large-f63d2e2239eb64b15ce2cde94f4831d4.jpeg",
        youtubeId: ""
    },
    "seraph of end s2": {
        image: "https://media.kitsu.app/anime/poster_images/10881/large.jpg",
        youtubeId: ""
    },
    "seraph of the end": {
        image: "https://media.kitsu.app/anime/poster_images/8736/large.jpg",
        youtubeId: "NtzDAmRhD9s"
    },
    "seraph s2 kessen": {
        image: "https://media.kitsu.app/anime/poster_images/10082/large.jpg",
        youtubeId: "KRYkpjKW9sQ"
    },
    "serial exp. lain": {
        image: "https://media.kitsu.app/anime/poster_images/306/large.jpg",
        youtubeId: "t5y4nQ5Y1V8"
    },
    "seven deadly sins": {
        image: "https://cdn.myanimelist.net/images/anime/12/62889.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "shaman king": {
        image: "https://media.kitsu.app/anime/poster_images/132/large.jpg",
        youtubeId: ""
    },
    "shangri-la front.": {
        image: "https://media.kitsu.app/anime/46241/poster_image/large-932c88032c14cb5ebcad1375ab1289e6.jpeg",
        youtubeId: "4HpOvyY4sDw"
    },
    "shield hero": {
        image: "https://cdn.myanimelist.net/images/anime/1488/100889.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "shield hero s2": {
        image: "https://media.kitsu.app/anime/poster_images/13593/large.jpg",
        youtubeId: "uipcsm9IKoQ"
    },
    "shield hero s3": {
        image: "https://media.kitsu.app/anime/poster_images/13593/large.jpg",
        youtubeId: "uipcsm9IKoQ"
    },
    "shikimori not cutie": {
        image: "https://media.kitsu.app/anime/44159/poster_image/large-1a50e56d81b75ab7add35d8ef252d8f6.jpeg",
        youtubeId: "utyXdk4G0-w"
    },
    "shy s1": {
        image: "https://media.kitsu.app/anime/poster_images/8629/large.jpg",
        youtubeId: "7s6xbdecjaI"
    },
    "shy s2": {
        image: "https://media.kitsu.app/anime/poster_images/8629/large.jpg",
        youtubeId: "7s6xbdecjaI"
    },
    "sign of affection": {
        image: "https://media.kitsu.app/anime/47691/poster_image/large-274c655ed5fb66adf3c870039c77d03d.jpeg",
        youtubeId: "hJd9FxYWzL0"
    },
    "sing 'yesterday'": {
        image: "https://media.kitsu.app/anime/poster_images/43063/large.jpg",
        youtubeId: "eOPutocWVUg"
    },
    "skeleton knight": {
        image: "https://media.kitsu.app/anime/44423/poster_image/large-e7360f7c716f776a3734f170facf6552.jpeg",
        youtubeId: "8XkdWCVUusA"
    },
    "skip and loafer": {
        image: "https://media.kitsu.app/anime/45520/poster_image/large-bc121442f312da08b24f1a56e2cb2040.jpeg",
        youtubeId: "GcfUnbrsCJk"
    },
    "slayers": {
        image: "https://media.kitsu.app/anime/poster_images/493/large.jpg",
        youtubeId: ""
    },
    "slayers next": {
        image: "https://media.kitsu.app/anime/poster_images/494/large.jpg",
        youtubeId: ""
    },
    "slayers try": {
        image: "https://media.kitsu.app/anime/poster_images/1053/large.jpg",
        youtubeId: ""
    },
    "slime isekai": {
        image: "https://cdn.myanimelist.net/images/anime/1122/93984.jpg",
        youtubeId: "3gM7P4gH-zI"
    },
    "slime isekai s2": {
        image: "https://media.kitsu.app/anime/48125/poster_image/large-ef5945662e78d142bfc45726a0b506e0.jpeg",
        youtubeId: "rTtfA9IiYHA"
    },
    "slime isekai s3": {
        image: "https://media.kitsu.app/anime/48125/poster_image/large-ef5945662e78d142bfc45726a0b506e0.jpeg",
        youtubeId: "rTtfA9IiYHA"
    },
    "so i'm a spider": {
        image: "https://media.kitsu.app/anime/poster_images/41463/large.jpg",
        youtubeId: "UZE4ZZiXBQY"
    },
    "solo leveling": {
        image: "https://media.kitsu.app/anime/46231/poster_image/large-cdadff31f42490b9f48a035939a01a92.jpeg",
        youtubeId: "HkIKAnwLZCw"
    },
    "somali & forest": {
        image: "https://media.kitsu.app/anime/poster_images/42201/large.jpg",
        youtubeId: "Xfw57amXb8Q"
    },
    "soul eater": {
        image: "https://cdn.myanimelist.net/images/anime/11/55889.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "space dandy": {
        image: "https://cdn.myanimelist.net/images/anime/13/60286.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "spice and wolf": {
        image: "https://media.kitsu.app/anime/poster_images/2684/large.jpg",
        youtubeId: "PEXSppSq25Q"
    },
    "spice and wolf (24)": {
        image: "https://media.kitsu.app/anime/poster_images/2684/large.jpg",
        youtubeId: "PEXSppSq25Q"
    },
    "spice and wolf ii": {
        image: "https://media.kitsu.app/anime/poster_images/4063/large.jpg",
        youtubeId: "mnCXgfrjn1k"
    },
    "spirit chron. s2": {
        image: "https://media.kitsu.app/anime/poster_images/238/large.jpg",
        youtubeId: "7xM3XTJUhPk"
    },
    "spirit chronicles": {
        image: "https://media.kitsu.app/anime/poster_images/44174/large.jpg",
        youtubeId: "Kvy48qS48qQ"
    },
    "spriggan": {
        image: "https://media.kitsu.app/anime/poster_images/384/large.jpg",
        youtubeId: "H5JX2gO2bGU"
    },
    "steins;gate": {
        image: "https://cdn.myanimelist.net/images/anime/15/35890.jpg",
        youtubeId: "27OZc-ku6is"
    },
    "steins;gate 0": {
        image: "https://media.kitsu.app/anime/poster_images/10788/large.jpg",
        youtubeId: "NhExBlBnmQI"
    },
    "summoned 2nd time": {
        image: "https://media.kitsu.app/anime/poster_images/7391/large.jpg",
        youtubeId: "8Oda8wubo9o"
    },
    "sweet reincarnation": {
        image: "https://media.kitsu.app/anime/46309/poster_image/large-952bf7ed66d2f3535fe90a54100d5ace.jpeg",
        youtubeId: "cCGLNfDm9Rg"
    },
    "sword art online": {
        image: "https://cdn.myanimelist.net/images/anime/11/38209.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "synduality: noir": {
        image: "https://media.kitsu.app/anime/46477/poster_image/large-0191c4e65d56ca2d4a2568476ad16fd5.jpeg",
        youtubeId: "FzwpalvyRas"
    },
    "taisho otome ft": {
        image: "https://media.kitsu.app/anime/poster_images/43817/large.jpg",
        youtubeId: "SSkZn7KqXms"
    },
    "tears to tiara": {
        image: "https://media.kitsu.app/anime/poster_images/3130/large.jpg",
        youtubeId: ""
    },
    "terra formars": {
        image: "https://media.kitsu.app/anime/poster_images/8356/large.jpg",
        youtubeId: "KVx9GrpN5lU"
    },
    "texhnolyze": {
        image: "https://media.kitsu.app/anime/poster_images/17/large.jpg",
        youtubeId: "Z19QTGvwg9I"
    },
    "the great cleric": {
        image: "https://media.kitsu.app/anime/46600/poster_image/large-b754bcb251e06937006bc1a23e9d1c54.jpeg",
        youtubeId: "susqUMviH_E"
    },
    "the new gate": {
        image: "https://media.kitsu.app/anime/48214/poster_image/large-ac6907748ddb411b349ed67e1da06422.jpeg",
        youtubeId: "VjeuqBstvdA"
    },
    "thermae romae n.": {
        image: "https://media.kitsu.app/anime/43702/poster_image/large-1d409b918fad7b02dc5c63e5365c6ec1.jpeg",
        youtubeId: "zfwCaZsZp5Q"
    },
    "to your eternity": {
        image: "https://media.kitsu.app/anime/poster_images/43211/large.jpg",
        youtubeId: "WHq46obaDR8"
    },
    "to your eternity s2": {
        image: "https://media.kitsu.app/anime/poster_images/43211/large.jpg",
        youtubeId: "WHq46obaDR8"
    },
    "tokyo ghoul": {
        image: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
        youtubeId: "vGuQeQsoRGk"
    },
    "tokyo revengers": {
        image: "https://media.kitsu.app/anime/poster_images/43321/large.jpg",
        youtubeId: "idlLFNNpZiI"
    },
    "tomo-chan is girl!": {
        image: "https://media.kitsu.app/anime/46232/poster_image/large-5b8fad2fd5867754d9cb41fdc011f7df.jpeg",
        youtubeId: "a0tiJ4zxocA"
    },
    "tonikaku kawaii": {
        image: "https://media.kitsu.app/anime/43034/poster_image/large-72d15f29589aa9c8cfce350943668fe7.jpeg",
        youtubeId: "de9OckSLP1o"
    },
    "toradora!": {
        image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
        youtubeId: "coD0-RssAic"
    },
    "tower of god": {
        image: "https://media.kitsu.app/anime/43004/poster_image/large-03a16e6cdf9abafff6642c76454e2903.jpeg",
        youtubeId: "RNyClma6awo"
    },
    "trapped in dating s.": {
        image: "https://media.kitsu.app/anime/poster_images/6026/large.jpg",
        youtubeId: "fI1GrHO3Bpo"
    },
    "trigun": {
        image: "https://cdn.myanimelist.net/images/anime/12/62449.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "trigun stampede": {
        image: "https://cdn.myanimelist.net/images/anime/1866/128445.jpg",
        youtubeId: "EL-D9LrFJd4"
    },
    "tsukigakirei": {
        image: "https://media.kitsu.app/anime/poster_images/13234/large.jpg",
        youtubeId: "HoEFpyDHZzw"
    },
    "tsukimichi s1": {
        image: "https://media.kitsu.app/anime/poster_images/44297/large.jpg",
        youtubeId: "R2pSRCxaw0o"
    },
    "tsukimichi s2": {
        image: "https://media.kitsu.app/anime/poster_images/44297/large.jpg",
        youtubeId: "R2pSRCxaw0o"
    },
    "tsuredure children": {
        image: "https://media.kitsu.app/anime/poster_images/13258/large.jpg",
        youtubeId: "u0NoaDvrJcE"
    },
    "twelve kingdoms": {
        image: "https://media.kitsu.app/anime/poster_images/131/large.jpg",
        youtubeId: ""
    },
    "uncle from another": {
        image: "https://cdn.myanimelist.net/images/anime/1811/126449.jpg",
        youtubeId: "j8_p9k972IY"
    },
    "undead unluck": {
        image: "https://media.kitsu.app/anime/46415/poster_image/large-3ebf131a16accab9cfe44ffdd208eb19.jpeg",
        youtubeId: "o2EARYV9-94"
    },
    "unique skill op": {
        image: "https://media.kitsu.app/anime/46099/poster_image/large-357c80f224c387164ecc293f72b23beb.jpeg",
        youtubeId: "liWTTxBfIWk"
    },
    "unnamed memory": {
        image: "https://media.kitsu.app/anime/46921/poster_image/large-074f17326515328c6addc344ff8733d4.jpeg",
        youtubeId: "DjaDWqKnBv8"
    },
    "villainess level 99": {
        image: "https://media.kitsu.app/anime/47237/poster_image/large-b412356a23bb6873cfb1a04779363693.jpeg",
        youtubeId: "hbk3X-vd7z4"
    },
    "vinland saga": {
        image: "https://cdn.myanimelist.net/images/anime/1505/104193.jpg",
        youtubeId: "f81bUaVw9lA"
    },
    "vinland saga s2": {
        image: "https://media.kitsu.app/anime/poster_images/41084/large.jpg",
        youtubeId: "3xAlirMzjCQ"
    },
    "vivy: fluorite eye": {
        image: "https://media.kitsu.app/anime/poster_images/43933/large.jpg",
        youtubeId: "Y653dJQ_ecs"
    },
    "we never learn": {
        image: "https://media.kitsu.app/anime/poster_images/41956/large.jpg",
        youtubeId: "viIErq3onIk"
    },
    "why raeliana": {
        image: "https://media.kitsu.app/anime/46233/poster_image/large-5bd78a871ba15a6fb72e41af6a77e41b.jpeg",
        youtubeId: "5Sn89wg4_PM"
    },
    "wind breaker": {
        image: "https://media.kitsu.app/anime/47271/poster_image/large-4db5612774e7a34e2664252babd17044.jpeg",
        youtubeId: "k5qM1PoLmUc"
    },
    "wise man's grand.": {
        image: "https://media.kitsu.app/anime/poster_images/40944/large.jpg",
        youtubeId: "QBp2oDxb4bc"
    },
    "wistoria: wand/sw.": {
        image: "https://media.kitsu.app/anime/48534/poster_image/large-703abd524d4c595bc05eaf5f3c3e1454.jpeg",
        youtubeId: "FNiBiXXeyb8"
    },
    "wolf girl prince": {
        image: "https://media.kitsu.app/anime/poster_images/8697/large.jpg",
        youtubeId: "tZJPQfq2UNk"
    },
    "world trigger": {
        image: "https://media.kitsu.app/anime/poster_images/8631/large.jpg",
        youtubeId: "2oui7JLlBpk"
    },
    "world trigger s2": {
        image: "https://media.kitsu.app/anime/poster_images/8631/large.jpg",
        youtubeId: "2oui7JLlBpk"
    },
    "world trigger s3": {
        image: "https://media.kitsu.app/anime/poster_images/8631/large.jpg",
        youtubeId: "2oui7JLlBpk"
    },
    "wotakoi": {
        image: "https://cdn.myanimelist.net/images/anime/1475/100412.jpg",
        youtubeId: "7tH6aA0d2rY"
    },
    "wrong way healing": {
        image: "https://media.kitsu.app/anime/44981/poster_image/large-4bf6166c44f4cfd702f990d6208f72f8.jpeg",
        youtubeId: "UkPRnHQJrws"
    },
    "yakitori": {
        image: "https://media.kitsu.app/anime/47268/poster_image/large-dbcab6b77459d7b85905973967b2913f.jpeg",
        youtubeId: "mbgkuC8od98"
    },
    "yamada-kun lv999": {
        image: "https://media.kitsu.app/anime/46529/poster_image/large-88e6c2a6d1f806960f8fce74cfeb66fa.jpeg",
        youtubeId: "Rn1Z14zka5o"
    },
    "yamato 2199": {
        image: "https://media.kitsu.app/anime/poster_images/6646/large.jpg",
        youtubeId: "51utm_LNX8E"
    },
    "yamato 2202": {
        image: "https://media.kitsu.app/anime/poster_images/12017/large.jpg",
        youtubeId: "RwOi_I0cEFU"
    },
    "yona of the dawn": {
        image: "https://media.kitsu.app/anime/poster_images/8648/large.jpg",
        youtubeId: "uDfHhr1A5AA"
    },
    "your lie in april": {
        image: "https://cdn.myanimelist.net/images/anime/3/67177.jpg",
        youtubeId: "3_d9Q9G__0M"
    },
    "yu yu hakusho": {
        image: "https://media.kitsu.app/anime/poster_images/359/large.jpg",
        youtubeId: "ZJEv4d2TYQ4"
    },
    "yuki yuna is hero": {
        image: "https://media.kitsu.app/anime/poster_images/8638/large.jpg",
        youtubeId: "lKCTBiIS8RQ"
    }
};


const genreImages = {
    "Action": [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=500"
    ],
    "Romance": [
        "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=500"
    ],
    "Isekai": [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=500"
    ],
    "Sci-Fi": [
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=500"
    ],
    "Fantasy": [
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=500",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=500"
    ]
};

// Compact representation of 100 entries per genre
// Structure: [title, rating, mangaSource, description]
const rawAnimeDatabase = {
    "Action": [
        ["Attack on Titan", "9.1", "Shingeki no Kyojin by Hajime Isayama", "Humans live inside walled cities to escape giant humanoid monsters known as Titans."],
        ["Demon Slayer", "8.9", "Kimetsu no Yaiba by Koyoharu Gotouge", "A young boy becomes a demon slayer to save his sister from a demonic curse."],
        ["Jujutsu Kaisen", "8.8", "Jujutsu Kaisen by Gege Akutami", "A high school student joins a secret organization of jujutsu sorcerers to defeat curses."],
        ["Fullmetal Alchemist: B.", "9.1", "Fullmetal Alchemist by Hiromu Arakawa", "Two alchemist brothers seek the Philosopher's Stone to restore their bodies."],
        ["Hunter x Hunter", "9.0", "Hunter x Hunter by Yoshihiro Togashi", "A young boy sets out on a quest to become a legendary Hunter and find his father."],
        ["One Piece", "8.9", "One Piece by Eiichiro Oda", "Luffy and his pirate crew sail across the Grand Line in search of the ultimate treasure."],
        ["My Hero Academia", "8.0", "Boku no Hero Academia by Kohei Horikoshi", "In a world where almost everyone has superpowers, a powerless boy inherits a legendary quirk."],
        ["Chainsaw Man", "8.6", "Chainsaw Man by Tatsuki Fujimoto", "A devil hunter merges with his pet chainsaw devil to become the ultimate half-devil machine."],
        ["One-Punch Man", "8.7", "One-Punch Man by ONE & Yusuke Murata", "A hero who can defeat any opponent with a single punch grows bored by the lack of challenge."],
        ["Bleach", "8.1", "Bleach by Tite Kubo", "A teenager gains the powers of a Soul Reaper and must defend humans from evil spirits."],
        ["Naruto", "8.3", "Naruto by Masashi Kishimoto", "A young ninja with a sealed demon fox inside him dreams of becoming his village's leader."],
        ["Vinland Saga", "8.8", "Vinland Saga by Makoto Yukimura", "A young Viking warrior seeks vengeance against the mercenary who killed his father."],
        ["Mob Psycho 100", "8.7", "Mob Psycho 100 by ONE", "A middle school boy with powerful psychic abilities tries to live a normal life."],
        ["Death Note", "8.6", "Death Note by Tsugumi Ohba & Takeshi Obata", "A brilliant student discovers a notebook that can kill anyone whose name is written in it."],
        ["Tokyo Ghoul", "7.8", "Tokyo Ghoul by Sui Ishida", "A college student is transformed into a half-ghoul after surviving a deadly attack."],
        ["Black Clover", "8.1", "Black Clover by Yuki Tabata", "An orphan boy born without magic strives to become the Wizard King of his kingdom."],
        ["Fairy Tail", "7.6", "Fairy Tail by Hiro Mashima", "A young celestial wizard joins a famous guild of chaotic and powerful mages."],
        ["JoJo's Bizarre Adv.", "8.4", "JoJo no Kimyou na Bouken by Hirohiko Araki", "The generational battles of the Joestar family against supernatural forces."],
        ["Sword Art Online", "7.2", "Sword Art Online by Reki Kawahara", "Players get trapped inside a virtual reality MMORPG where dying in-game means dying in real life."],
        ["Soul Eater", "7.8", "Soul Eater by Atsushi Ohkubo", "Students at a Shinigami academy train weapons that transform into humans."],
        ["Fire Force", "7.7", "Enen no Shouboutai by Atsushi Ohkubo", "Special fire brigades fight spontaneous human combustion turn into living infernos."],
        ["Noragami", "8.0", "Noragami by Adachitoka", "A minor deity seeking followers crosses paths with a girl whose soul slips out of her body."],
        ["Blue Exorcist", "7.5", "Ao no Exorcist by Kazue Kato", "The son of Satan decides to become an exorcist to defeat his biological father."],
        ["D.Gray-man", "8.0", "D.Gray-man by Katsura Hoshino", "Exorcists fight to defeat the Millennium Earl and his army of demon-like Akuma."],
        ["Hellsing Ultimate", "8.4", "Hellsing by Kouta Hirano", "A vampire lord serves a royal family fighting against undead Nazi organizations."],
        ["Claymore", "7.8", "Claymore by Norihiro Yagi", "Half-human female warriors fight shape-shifting monsters known as Yoma."],
        ["Berserk", "8.5", "Berserk by Kentaro Miura", "A lone mercenary travels a dark fantasy medieval land seeking revenge against his betrayer."],
        ["Dororo", "8.2", "Dororo by Osamu Tezuka", "A ronin born without limbs or organs slays demons to reclaim his body parts."],
        ["Golden Kamuy", "8.3", "Golden Kamuy by Satoru Noda", "A war veteran and an Ainu girl hunt for hidden gold guarded by escaped convicts."],
        ["Bungo Stray Dogs", "7.8", "Bungo Stray Dogs by Kafka Asagiri", "Supernaturally gifted detectives solve supernatural crimes in Yokohama."],
        ["Assassination Class.", "8.1", "Ansatsu Kyoushitsu by Yusei Matsui", "Junior high students try to assassinate their alien teacher before he destroys Earth."],
        ["Gurren Lagann", "8.6", "Tengen Toppa Gurren Lagann by Gainax (Manga adapt.)", "Two boys dig to the surface of the Earth and pilot mechas to fight beastmen."],
        ["Kill la Kill", "8.0", "Kill la Kill by Trigger (Manga adapt.)", "A schoolgirl wielding half a giant pair of scissors seeks her father's killer."],
        ["Fate/Zero", "8.3", "Fate/Zero by Gen Urobuchi (Manga adapt.)", "Seven magi summon legendary heroes to fight in the Fourth Holy Grail War."],
        ["Fate/stay night: UBW", "8.2", "Fate/stay night by Type-Moon", "A teenage mage joins a deadly survival tournament for the Holy Grail."],
        ["Psycho-Pass", "8.4", "Inspector Akane Tsunemori by Hikaru Miyoshi", "Detectives investigate crimes in a world ruled by a computerized moral index."],
        ["Code Geass", "8.7", "Lelouch of the Rebellion by Majiko!", "An exiled prince gains the power of absolute obedience and leads a rebellion against his empire."],
        ["Cowboy Bebop", "8.7", "Cowboy Bebop by Yutaka Nanten", "A crew of futuristic bounty hunters search for targets across the solar system."],
        ["Samurai Champloo", "8.5", "Samurai Champloo by Shinichiro Watanabe (Manga adapt.)", "Two skilled samurai guide a tea shop girl across Edo Japan in search of a sunflower samurai."],
        ["Trigun", "8.2", "Trigun by Yasuhiro Nightow", "A legendary pacifist gunman travels a desert world with a massive bounty on his head."],
        ["Dr. STONE", "8.1", "Dr. STONE by Riichiro Inagaki & Boichi", "A high school genius attempts to rebuild human civilization using science after a petrification event."],
        ["Goblin Slayer", "7.4", "Goblin Slayer by Kumo Kagyu & Kosuke Kurose", "A rugged adventurer dedicates his entire life to eradicating low-tier goblins."],
        ["Overlord", "7.9", "Overlord by Kugane Maruyama & Hugin Miyama", "A gamer gets trapped inside his skeletal guild master avatar and conquers a fantasy world."],
        ["Shield Hero", "7.8", "Tate no Yuusha no Nariagari by Aneko Yusagi & Aiya Kyu", "A hero summoned to save a world with a shield is betrayed and must clear his name."],
        ["Saga of Tanya the E.", "7.9", "Youjo Senki by Carlo Zen & Chika Tojo", "An elite salaryman is reincarnated as a military girl fighting in an alternate world war."],
        ["Hell's Paradise", "8.1", "Jigokuraku by Yuji Kaku", "Condemned criminals search for an elixir of immortality on a mystical, deadly island."],
        ["Akame ga Kill!", "7.5", "Akame ga Kill! by Takahiro & Tetsuya Tashiro", "A country boy joins a squad of elite assassins trying to overthrow a corrupt government."],
        ["Tokyo Revengers", "7.9", "Tokyo Revengers by Ken Wakui", "A man travels back in time to save his high school girlfriend from a ruthless street gang."],
        ["Seven Deadly Sins", "7.7", "Nanatsu no Taizai by Nakaba Suzuki", "A princess seeks the help of exiled holy knights to reclaim her kingdom."],
        ["Parasyte: The Maxim", "8.4", "Kiseijuu by Hitoshi Iwaaki", "A high schooler forms a symbiosis with a parasitic alien that failed to take over his brain."],
        ["Bleach: TYBW", "9.0", "Bleach by Tite Kubo", "The final war between Soul Reapers and Quincy clans erupts, threatening all realms."],
        ["Kabaneri Iron Fort.", "7.3", "Koutetsujou no Kabaneri by Wit Studio (Manga adapt.)", "Steam-punk warriors fight armored zombies on steam trains in feudal Japan."],
        ["Rurouni Kenshin", "8.3", "Rurouni Kenshin by Nobuhiro Watsuki", "A repentant killer samurai wanders Japan protecting others with a reverse-blade sword."],
        ["Yu Yu Hakusho", "8.4", "Yu Yu Hakusho by Yoshihiro Togashi", "A high school delinquent is resurrected as a Spirit Detective protecting Earth."],
        ["Inuyasha", "7.9", "Inuyasha by Rumiko Takahashi", "A modern schoolgirl falls into a well and finds a half-demon boy in feudal Japan."],
        ["Saint Seiya", "7.7", "Saint Seiya by Masami Kurumada", "Orphaned warriors wear mythical cloth armor to protect the goddess Athena."],
        ["Dragon Ball Z", "8.2", "Dragon Ball by Akira Toriyama", "Goku and his friends defend Earth from cosmic warriors and bio-engineered threats."],
        ["Dragon Ball Super", "7.4", "Dragon Ball Super by Akira Toriyama & Toyotarou", "Goku attains god-like martial arts powers and fights in a multiversal tournament."],
        ["Gintama", "8.9", "Gintama by Hideaki Sorachi", "An eccentric samurai works odd jobs alongside aliens in a sci-fi Edo period."],
        ["Black Lagoon", "8.0", "Black Lagoon by Rei Hiroe", "A Japanese businessman joins a mercenary delivery group working in a lawless Thai city."],
        ["Elfen Lied", "7.5", "Elfen Lied by Lynn Okamoto", "An escaped mutant girl with invisible telekinetic arms seeks shelter with cousins."],
        ["Devilman Crybaby", "7.8", "Devilman by Go Nagai", "A sensitive boy transforms into a demon-human hybrid to fight ancient demons."],
        ["Shaman King", "7.7", "Shaman King by Hiroyuki Takei", "Shamans from around the world compete in a tournament to become the Shaman King."],
        ["Hitman Reborn!", "7.7", "Katekyo Hitman Reborn! by Akira Amano", "A cowardly student is trained by a baby hitman to inherit a powerful Italian mafia clan."],
        ["Beelzebub", "7.9", "Beelzebub by Ryuhei Tamura", "A tough delinquent high school student is chosen to raise the baby son of the Demon King."],
        ["Mob Psycho 100 II", "8.8", "Mob Psycho 100 by ONE", "Mob faces complex moral dilemmas and dark psychic organizations in this second season."],
        ["One-Punch Man 2", "7.4", "One-Punch Man by ONE & Yusuke Murata", "Saitama deals with the Hero Association hunting the self-proclaimed hero hunter Garou."],
        ["Mob Psycho 100 III", "8.9", "Mob Psycho 100 by ONE", "Mob faces the ultimate test of his emotional growth as his powers reach a climax."],
        ["Vinland Saga S2", "8.9", "Vinland Saga by Makoto Yukimura", "Thorfinn undergoes spiritual rebirth as a slave on a Danish farm, trying to find peace."],
        ["Fate/Apocrypha", "7.1", "Fate/Apocrypha by Yuichiro Higashide (Manga adapt.)", "Two factions of magi battle in a massive Great Holy Grail War with 14 servants."],
        ["Fate/Grand Order", "7.8", "Fate/Grand Order by Type-Moon (Manga adapt.)", "Chaldea travels back to ancient Mesopotamia to repair a timeline singularity."],
        ["Highschool of Dead", "7.1", "Highschool of the Dead by Daisuke Sato", "High schoolers stick together to survive a sudden global zombie outbreak."],
        ["Deadman Wonder.", "7.2", "Deadman Wonderland by Jinsei Kataoka", "A student is framed for murder and sent to a prison amusement park with blood powers."],
        ["Blood Blockade", "7.7", "Kekkai Sensen by Yasuhiro Nightow", "A photographer joins a group of super-powered peacekeepers in chaotic New York City."],
        ["Drifters", "7.9", "Drifters by Kouta Hirano", "Historical warriors are summoned to an alternate world to wage war against tyrants."],
        ["Inuyashiki", "7.7", "Inuyashiki by Hiroya Oku", "An elderly man and a teenager gain machine bodies and choose opposing paths."],
        ["Ajin: Demi-Human", "7.4", "Ajin by Gamon Sakurai", "A student discovers he is an immortal Ajin and goes on the run from the government."],
        ["Btooom!", "7.3", "Btooom! by Junya Inoue", "An unemployed gamer is stranded on a tropical island forced to play a real-life bomb game."],
        ["Seraph of the End", "7.5", "Owari no Seraph by Takaya Kagami", "Human soldiers fight vampires using cursed gear in a post-apocalyptic world."],
        ["Seraph of End S2", "7.6", "Owari no Seraph by Takaya Kagami", "The Moon Demon Company launches an assault against the vampire nobles in Nagoya."],
        ["K", "7.4", "K Project by GoRA & GoHands (Manga adapt.)", "A schoolboy is caught in a supernatural gang war between superpowered Kings."],
        ["Darker than Black", "8.1", "Darker than Black by Tensai Okamura (Manga adapt.)", "Contractors with special powers carry out espionage missions for secret organizations."],
        ["Durarara!!", "8.1", "Durarara!! by Ryohgo Narita (Manga adapt.)", "The intersecting lives of weird gangs and a dullahan rider in Ikebukuro."],
        ["Mirai Nikki", "7.4", "Mirai Nikki by Sakae Esuno", "Twelve diary keepers compete in a battle royale to succeed the God of Time."],
        ["Darwin's Game", "7.3", "Darwin's Game by FLIPFLOPs", "A boy accepts an invite to a mobile game that forces players to fight to the death."],
        ["Platinum End", "6.3", "Platinum End by Tsugumi Ohba & Takeshi Obata", "Thirteen candidates are gifted angel wings and arrows to compete to be the next God."],
        ["Edens Zero", "7.0", "Edens Zero by Hiro Mashima", "A young boy raised by robots travels the cosmos in search of the goddess Mother."],
        ["Radiant", "7.1", "Radiant by Tony Valente", "A young wizard travels the skies hunting Nemesis monsters and searching for their nest."],
        ["Tower of God", "7.5", "Kami no Tou by SIU (Manga/Webtoon)", "A boy climbs a mythical tower to find his childhood friend, facing deadly trials."],
        ["God of High School", "7.0", "The God of High School by Yongje Park (Webtoon)", "High schoolers participate in an all-style martial arts tournament using divine power."],
        ["Solo Leveling", "8.3", "Solo Leveling by Chugong & DUBU (Webtoon)", "The weakest hunter gains the unique ability to level up and starts conquering gates."],
        ["Mashle: Magic & M.", "7.6", "Mashle by Hajime Komoto", "A boy without magic enters a magic academy, using raw physical strength to fit in."],
        ["Undead Unluck", "7.7", "Undead Unluck by Yoshifumi Tozuka", "An immortal man and an unlucky girl team up to fight cosmic rules and gods."],
        ["Shangri-La Front.", "8.0", "Shangri-La Frontier by Ryosuke Fuji", "A top-tier trash game hunter attempts to clear a popular god-tier VR MMO."],
        ["Ragna Crimson", "7.3", "Ragna Crimson by Daiki Kobayashi", "A dragon hunter teams up with the mysterious Crimson to wipe out all dragons."],
        ["Kaiju No. 8", "8.2", "Kaijuu 8-gou by Naoya Matsumoto", "A sweeper gains the ability to transform into a Kaiju and joins the defense force."],
        ["Wind Breaker", "7.8", "Wind Breaker by Satoru Nii", "A loner joins a high school notorious for delinquents who actually defend the town."],
        ["Wistoria: Wand/Sw.", "7.5", "Tsue to Tsurugi no Wistoria by Fujino Omori", "A boy unable to use magic climbs a magic tower using physical sword techniques."],
        ["Sakamoto Days", "8.2", "Sakamoto Days by Yuto Suzuki", "A retired legendary assassin who has gained weight fights to protect his convenience store."],
        ["Gachiakuta", "8.0", "Gachiakuta by Kei Urana", "A boy falsely accused of murder is thrown into the Abyss, gaining trash-manipulating powers."]
    ],
    "Romance": [
        ["Kaguya-sama", "8.4", "Kaguya-sama wa Kokurasetai by Aka Akasaka", "Two student council geniuses scheme to make the other confess their love first."],
        ["Horimiya", "8.2", "Horimiya by HERO & Daisuke Hagiwara", "A popular girl and a gloomy boy discover each other's secret private personas."],
        ["Toradora!", "8.1", "Toradora! by Yuyuko Takemiya & Zekkyou", "Two mismatched students team up to help each other confess to their best friends."],
        ["Fruits Basket (19)", "8.2", "Fruits Basket by Natsuki Takaya", "A kind girl moves in with a family cursed to turn into Chinese Zodiac animals."],
        ["Your Lie in April", "8.7", "Shigatsu wa Kimi no Uso by Naoshi Arakawa", "A piano prodigy who lost his hearing meets an eccentric, lively violinist."],
        ["My Dress-Up Darling", "8.3", "Sono Bisque Doll wa Koi wo Suru by Shinichi Fukuda", "A quiet doll-maker is asked by a popular class girl to help make cosplay outfits."],
        ["Komi Can't Comm.", "8.0", "Komi-san wa, Komyushou desu. by Tomohito Oda", "A student helps a beautiful girl with severe communication issues make 100 friends."],
        ["Maid Sama!", "8.0", "Kaichou wa Maid-sama! by Hiro Fujiwara", "A student council president works secret shifts at a maid cafe, until a boy finds out."],
        ["Ao Haru Ride", "7.7", "Ao Haru Ride by Io Sakisaka", "A girl reunites with her middle school first love, who has changed completely."],
        ["Kamisama Kiss", "8.0", "Kamisama Hajimemashita by Julietta Suzuki", "A homeless high schooler accidentally becomes a local land god, contracting a fox spirit."],
        ["Wotakoi", "8.0", "Wotaku ni Koi wa Muzukashii by Fujita", "Four secret office otaku navigate adult dating and hobbies together."],
        ["Bunny Girl Senpai", "8.2", "Seishun Buta Yarou by Hajime Kamoshida", "A boy helps girls experiencing supernatural phenomena called Puberty Syndrome."],
        ["Oregairu", "8.0", "Yahari Ore no Seishun Love Comedy by Wataru Watari", "Two cynical loners are forced to join their high school's volunteer club."],
        ["Golden Time", "7.7", "Golden Time by Yuyuko Takemiya & Umeharu Ume", "An amnesiac college student navigates new relationships and his haunting past."],
        ["ReLIFE", "8.0", "ReLIFE by Yayoiso", "A NEET joins a corporate experiment, taking a pill that makes him a high schooler again."],
        ["Say 'I Love You'", "7.5", "Sukitte Ii na yo by Kanae Hazuki", "A quiet girl who avoids friendships is befriended by the school's most popular boy."],
        ["Orange", "7.6", "Orange by Ichigo Takano", "A high school girl receives letters from her future self warning her to save a transfer student."],
        ["My Little Monster", "7.5", "Tonari no Kaibutsu-kun by Robico", "A serious study-focused girl is seated next to an unpredictable delinquent boy."],
        ["Nisekoi", "7.6", "Nisekoi by Naoshi Komi", "The son of a Yakuza boss is forced into a fake relationship with a gang leader's daughter."],
        ["Clannad", "8.0", "Clannad by Key & Juri Misaki", "A cynical delinquent meets an eccentric girl repeating her senior year due to illness."],
        ["Clannad: After S.", "8.9", "Clannad by Key & Juri Misaki", "The heavy emotional struggles of adulthood, family life, and tragic loss."],
        ["Anohana", "8.3", "Anohana by Mari Okada & Mitsu Izumi", "A group of estranged childhood friends reunite to grant a wish for their deceased friend."],
        ["Quint. Quintuplets", "7.6", "Gotoubun no Hanayome by Negi Haruba", "A studious high schooler is hired to tutor quintuplet sisters who hate studying."],
        ["We Never Learn", "7.3", "Bokutachi wa Benkyou ga Dekinai by Taishi Tsutsui", "A student tutors three geniuses in subjects they are terrible at to earn a scholarship."],
        ["Rent-a-Girlfriend", "6.1", "Kanojo, Okarishimasu by Reiji Miyajima", "After a breakup, a college student rents a girlfriend, getting caught in a web of lies."],
        ["Kimi ni Todoke", "8.0", "Kimi ni Todoke by Karuho Shiina", "A misunderstood girl nicknamed Sadako is befriended by a cheerful popular classmate."],
        ["Akagami no Shirayuki", "7.8", "Akagami no Shirayuki-hime by Sorata Akiduki", "An herbalist with rare red hair flees her country and meets a handsome foreign prince."],
        ["Yona of the Dawn", "8.0", "Akatsuki no Yona by Mizuho Kusanagi", "A pampered princess is forced to flee her kingdom and recruit mythical dragon warriors."],
        ["Pet Girl Sakurasou", "8.1", "Sakurasou no Pet na Kanojo by Hajime Kamoshida", "A high school boy is tasked with taking care of a brilliant but completely helpless artist girl."],
        ["Saekano", "7.5", "Saenai Heroine no Sodatekata by Fumiaki Maruto", "An otaku decides to create a dating sim game starring his unassuming female classmate."],
        ["Scum's Wish", "7.2", "Kuzu no Honkai by Mengo Yokoyari", "Two teens enter a fake relationship to cope with unrequited love for their teachers."],
        ["Domestic Girl.", "6.7", "Domestic na Kanojo by Kei Sasuga", "A high schooler discovers his teacher and the girl he lost his virginity to are step-sisters."],
        ["Tsuredure Children", "7.6", "Tsurezure Children by Toshiya Wakabayashi", "A collection of short stories depicting the struggles and triumphs of various young couples."],
        ["Tonikaku Kawaii", "7.9", "Tonikaku Kawaii by Kenjiro Hata", "A genius boy marries a mysterious girl who saved his life, entering cute married life."],
        ["Sing 'Yesterday'", "7.0", "Yesterday wo Utatte by Kei Toume", "A college grad wanders through life, caught between an old crush and an eccentric girl."],
        ["Just Because!", "7.2", "Just Because! by Atsushi Kobayashi", "The lives of a group of high school seniors are altered by the return of a transfer student."],
        ["Insomniacs After S.", "8.0", "Kimi wa Houkago Insomnia by Makoto Ojiro", "Two sleepless high school students find solace and friendship in their school observatory."],
        ["Dangers in My Heart", "8.3", "Boku no Kokoro no Yabai Yatsu by Norio Sakurai", "A gloomy boy with dark fantasies finds his perspective changed by the quirky class idol."],
        ["More than Married", "7.3", "Fuufu Ijou, Koibito Miman by Yuki Kanamaru", "Teens are forced into a trial marriage program with partners they didn't choose."],
        ["Yamada-kun Lv999", "7.8", "Yamada-kun to Lv999 no Koi wo Suru by Mashiro", "A girl dumped by her gamer boyfriend falls for a pro gamer she met playing a MMO."],
        ["Sign of Affection", "8.1", "Yubisaki to Renren by Suu Morishita", "A deaf college student's world begins to change when she meets a globetrotting junior."],
        ["Pseudo Harem", "7.5", "Giji Harem by Yu Saitou", "An acting club girl plays different anime stereotypes to entertain her secret crush."],
        ["Blue Box", "8.0", "Ao no Hako by Kouji Miura", "A badminton player's crush, a star basketball player, moves into his house."],
        ["Angel Next Door", "7.8", "Otonari no Tenshi-sama by Saekisan (Manga adapt.)", "A slob high schooler slowly bonds with the beautiful girl next door who cooks for him."],
        ["Alya Russian S.", "7.8", "Alya-san wa Tokidoki Bosotto Russia-go by Sunsunsun", "A beautiful Russian-Japanese girl mutters sweet confessions in Russian to a boy who understands it."],
        ["Skip and Loafer", "8.1", "Skip to Loafer by Misaki Takamatsu", "A country girl moves to Tokyo for high school, charms a popular, easygoing boy."],
        ["Tomo-chan Is Girl!", "7.7", "Tomo-chan wa Onnanoko! by Fumita Yanagida", "A tomboy high schooler tries to make her childhood friend realize she is a girl."],
        ["Shikimori Not Cutie", "6.8", "Shikimori's Not Just a Cutie by Keigo Maki", "A clumsy boy dates a cool girl who transforms into a total badass to protect him."],
        ["Taisho Otome FT", "7.6", "Taishou Otome Otogibanashi by Sana Kirioka", "A pessimistic young man exiled to the country is cared for by a cheerful arranged bride."],
        ["Adachi Shimamura", "7.1", "Adachi to Shimamura by Hitoma Iruma & Mani", "Two high school girls skipping class together develop deep romantic feelings."],
        ["Bloom Into You", "7.9", "Yagate Kimi ni Naru by Nio Nakatani", "A girl who struggles to feel romance is confessed to by the school's perfect council president."],
        ["Citrus", "6.5", "Citrus by Saburouta", "Spunky Yuzu and strict Mei are forced to live together, discovering they are stepsisters."],
        ["Given", "8.3", "Given by Natsuki Kizu", "A quiet high schooler is asked to teach a boy guitar, sparking a musical and tragic bond."],
        ["Sasaki and Miyano", "8.2", "Sasaki to Miyano by Shou Harusono", "A senior delinquent bonds with a junior who loves BL manga, leading to real romance."],
        ["Horimiya: Missing", "8.1", "Horimiya by Daisuke Hagiwara", "A compilation of stories from the original manga that were not animated in the first season."],
        ["Kaguya-sama S2", "8.6", "Kaguya-sama wa Kokurasetai by Aka Akasaka", "The student council battle continues with elections, sports festivals, and deeper feelings."],
        ["Kaguya-sama S3", "9.0", "Kaguya-sama wa Kokurasetai by Aka Akasaka", "The dual confession showdown takes place during the cultural festival in a historic arc."],
        ["First Kiss Never E.", "8.4", "Kaguya-sama wa Kokurasetai by Aka Akasaka", "Kaguya and Miyuki face the vulnerable, post-confession phase of their relationship."],
        ["Fruits Basket S2", "8.5", "Fruits Basket by Natsuki Takaya", "Tohru gets closer to uncovering the dark, manipulative nature of the Soma family head."],
        ["Fruits Basket Final", "9.0", "Fruits Basket by Natsuki Takaya", "The curse is tested as Tohru and the Soma family fight to break their ancient bonds."],
        ["Kimi ni Todoke S2", "7.7", "Kimi ni Todoke by Karuho Shiina", "Misunderstandings persist between Sawako and Kazehaya until a dramatic school festival."],
        ["Kimi ni Todoke S3", "8.2", "Kimi ni Todoke by Karuho Shiina", "Sawako and Kazehaya navigate their new relationship and career plans in this third season."],
        ["Kokoro Connect", "7.7", "Kokoro Connect by Sadanatsu Anda (Manga adapt.)", "Five high school club members find their minds, bodies, and feelings swapped by an entity."],
        ["Spice and Wolf", "8.2", "Ookami to Koushinryou by Keito Koume", "A traveling merchant travels medieval lands with a smart pagan wolf deity."],
        ["Spice and Wolf (24)", "8.1", "Ookami to Koushinryou by Keito Koume", "A gorgeous modern visual remake of Holo and Lawrence's classic economic journey."],
        ["Masamune Revenge", "6.8", "Masamune-kun no Revenge by Hazuki Takeoka", "A boy loses weight and returns to seduce and reject the girl who cruelly rejected him."],
        ["Real Girl", "7.0", "3D Kanojo: Real Girl by Mao Nanami", "An otaku boy is asked out by a beautiful, popular girl who has limited time left."],
        ["Tsukigakirei", "8.1", "Tsukigakirei by feel. (Manga adapt.)", "A quiet, beautiful story of first love between two middle school track and literature kids."],
        ["Hyouka", "8.1", "Hyouka by Honobu Yonezawa (Manga adapt.)", "A lazy boy joins a classic literature club and solves minor mysteries for an curious girl."],
        ["Ouran Host Club", "8.1", "Ouran High School Host Club by Bisco Hatori", "A scholarship girl breaks a vase and is forced to join an elite male host club."],
        ["Lovely Complex", "8.0", "Lovely★Complex by Aya Nakahara", "A short boy and a tall girl argue constantly, slowly realizing they are perfect together."],
        ["Nodame Cantabile", "8.3", "Nodame Cantabile by Tomoko Ninomiya", "A disciplined classical musician meets a messy, genius piano girl in college."],
        ["Honey and Clover", "8.0", "Honey and Clover by Chica Umino", "Art college students deal with love triangles, career fears, and building futures."],
        ["Nana", "8.5", "Nana by Ai Yazawa", "Two girls named Nana meet on a train and share an apartment in Tokyo, chasing music and love."],
        ["Paradise Kiss", "7.8", "Paradise Kiss by Ai Yazawa", "A high school student becomes a fashion model for a group of eccentric design students."],
        ["Itazura na Kiss", "7.5", "Itazura na Kiss by Kaoru Tada", "A clumsy girl is forced to move into the house of the genius student who rejected her."],
        ["Peach Girl", "6.9", "Peach Girl by Miwa Ueda", "A tanned high school girl faces vicious rumors, jealousy, and choosing between two boys."],
        ["Wolf Girl Prince", "7.0", "Ookami Shoujo to Kuro Ouji by Ayuko Hatta", "A girl lies about having a boyfriend, hiring a handsome prince who acts like a sadist."],
        ["My Love Story!!", "7.9", "Ore Monogatari!! by Kazune Kawahara", "A giant, intimidating boy with a heart of gold falls for a cute girl he saved from a groper."],
        ["Chihayafuru", "8.2", "Chihayafuru by Yuki Suetsugu", "A schoolgirl aims to be the top competitive Karuta card player, reuniting with a friend."],
        ["Chihayafuru 2", "8.3", "Chihayafuru by Yuki Suetsugu", "The Karuta club recruits new members and enters national tournaments in Tokyo."],
        ["Chihayafuru 3", "8.5", "Chihayafuru by Yuki Suetsugu", "Chihaya competes against master players, balancing feelings for her childhood friends."],
        ["Boarding Sch. Juliet", "7.4", "Kishuku Gakkou no Juliet by Yousuke Kaneda", "The leaders of rival dorms carry out a secret relationship reminiscent of Romeo & Juliet."],
        ["Duke of Death S1", "7.4", "Shinigami Bocchan to Kuro Maid by Koharu Inoue", "A cursed duke whose touch kills living things is teased and loved by his maid."],
        ["Call of the Night", "7.9", "Yofukashi no Uta by Kotoyama", "An insomniac boy wanders the night and meets a vampire girl who wants him to fall in love."],
        ["Romantic Killer", "8.0", "Romantic Killer by Wataru Momose", "A girl who loves gaming, chocolate, and cats is forced into an otome game simulation."],
        ["My Happy Marriage", "8.1", "Watashi no Shiawase na Kekkon by Akumi Agitogi", "An abused girl is married off to a cold commander, slowly revealing her true spiritual power."],
        ["Ice Guy Cool Female", "7.4", "Koori Zokusei Danshi to Cool na Douryou by Miyuki Tonogaya", "A descendent of an ice spirit freezes up in office settings whenever his colleague is near."],
        ["Why Raeliana", "7.4", "Why Raeliana Ended Up at the Duke's Mansion by Milcha", "A girl reincarnates in a novel as a side character destined to be poisoned, making a deal with a duke."],
        ["Doctor Elise", "6.9", "Gekai Elise by Yuin & Mini", "An evil queen is reincarnated as a modern surgeon, dies, and wakes back up in her first life."],
        ["7th Time Loop", "7.7", "7th Time Loop by Touko Amekawa & Hinoki Kino", "A girl starts her seventh reincarnation, marrying the crown prince who killed her in past loops."],
        ["Archdemon Dilemma", "7.4", "An Archdemon's Dilemma by Fuminori Teshima", "A powerful sorcerer buys a slave elf girl and struggles to express his romantic feelings."],
        ["Grandpa Grandma Y.", "7.3", "Jiisan Baasan Wakagaeru by Kagiri Araido", "An elderly couple wake up in their youthful twenties, shocking their family and town."],
        ["Spice and Wolf II", "8.3", "Ookami to Koushinryou by Keito Koume", "Holo and Lawrence face economic trials, rival merchants, and their growing romance."],
        ["Oregairu S2", "8.2", "Yahari Ore no Seishun Love Comedy by Wataru Watari", "The volunteer club deals with emotional transparency, club collapse, and unspoken feelings."],
        ["Oregairu S3", "8.4", "Yahari Ore no Seishun Love Comedy by Wataru Watari", "Hachiman, Yukino, and Yui organize the graduation prom, confronting their love triangle."],
        ["Quintuplets S2", "7.9", "Gotoubun no Hanayome by Negi Haruba", "Futaro gets closer to the Nakano sisters as they study for exams and deal with school trips."],
        ["Chunibyo!", "7.7", "Chuunibyou demo Koi ga Shitai! by Torako (Manga adapt.)", "A boy who outgrew his delusions is confronted by a girl who still lives in them."]
    ],
    "Isekai": [
        ["Slime Isekai", "8.1", "Tensei Shitara Slime Datta Ken by Fuse & Taiki Kawakami", "A stabbed man is reincarnated as a highly powerful slime monster in a fantasy cave."],
        ["Re:Zero", "8.2", "Re:Zero kara Hajimeru Isekai Seikatsu by Tappei Nagatsuki", "A boy summoned to another world gains the ability to restart from a save point on death."],
        ["KonoSuba", "8.1", "Kono Subarashii Sekai ni Shukufuku wo! by Natsume Akatsuki", "A boy dies a hilarious death and is reincarnated in a fantasy world with a useless goddess."],
        ["Mushoku Tensei", "8.4", "Mushoku Tensei by Rifujin na Magonote & Yuka Fujikawa", "A NEET dies and is reborn with his memories intact, promising to live a meaningful life."],
        ["Overlord", "7.9", "Overlord by Kugane Maruyama & Hugin Miyama", "A skeletal guild leader rules his guild castle in a fantasy world after his MMO closes down."],
        ["Shield Hero", "7.8", "Tate no Yuusha no Nariagari by Aneko Yusagi & Aiya Kyu", "A shield hero is betrayed and must gather demi-human companions to fight off world waves."],
        ["Sword Art Online", "7.2", "Sword Art Online by Reki Kawahara", "A black-suited swordsman battles to escape a deadly virtual reality death game."],
        ["No Game No Life", "8.1", "No Game No Life by Yuu Kamiya", "Two genius gamer siblings are summoned to a world where all conflicts are settled by games."],
        ["Saga of Tanya", "7.9", "Youjo Senki by Carlo Zen & Chika Tojo", "An atheist salaryman becomes a young soldier girl fighting in a magical alternate world war."],
        ["Log Horizon", "7.9", "Log Horizon by Mamare Touno & Kazuhiro Hara", "Thousands of MMO players get trapped in their game, focusing on city building and politics."],
        ["Eminence in Shadow", "8.3", "Kage no Jitsuryokusha ni Naritakute! by Daisuke Anri", "A chuunibyou boy accidentally builds a real secret organization fighting a real cult."],
        ["Campfire Cooking", "7.8", "Campfire Cooking in Another World by K-Kagurazaka", "A summoned salaryman cooks modern Japanese food with a cheat online supermarket skill."],
        ["Realist Hero", "7.1", "How a Realist Hero Rebuilt the Kingdom by Satoshi Ueda", "A modern student is summoned to another world and reforms their economy and politics."],
        ["Uncle from Another", "7.8", "Isekai Ojisan by Hotondoshindeiru", "An uncle wakes up from a 17-year coma, sharing his magical Sega-obsessed isekai adventures."],
        ["Next Life Villainess", "7.4", "My Next Life as a Villainess by Nami Hidaka", "A girl reincarnates in her favorite otome game as the main villainess destined for doom."],
        ["Ascendance Bookworm", "8.0", "Ascendance of a Bookworm by Miya Kazuki & Suzuka", "A book-loving girl is reborn in a medieval world where books are rare, resolved to print them."],
        ["So I'm a Spider", "7.3", "Kumo desu ga, Nani ka? by Okina Baba & Asahiro Kakashi", "An entire high school class is reincarnated, with one girl reborn as a weak cave spider."],
        ["Grimgar", "7.6", "Hai to Gensou no Grimgar by Mutsumi Okubhashi", "A group of teenagers wake up in a fantasy world with no memories, struggling to kill goblins."],
        ["Cautious Hero", "7.5", "Kono Yuusha ga Ore TUEEE Kuse ni Shinchou Sugiru by Koyuki", "A goddess summons a hero who refuses to enter combat without hundreds of spare potions."],
        ["Another World Phone", "6.2", "In Another World With My Smartphone by Soto", "God accidentally kills a boy, resurrects him in a fantasy world with a smartphone."],
        ["Death March", "6.5", "Death March to the Parallel World Rhapsody by Megumu Aya", "A programmer falls asleep during a crunch and wakes up inside a mashup of his game projects."],
        ["Wise Man's Grand.", "6.5", "Kenja no Mago by Shunsuke Ogata", "A reincarnated boy raised by a legendary sage invents magic using modern physics."],
        ["Finest Assassin", "7.3", "The World's Finest Assassin by Reia", "Earth's top assassin is reincarnated by a goddess tasked with killing a prophecy hero."],
        ["Skeleton Knight", "7.2", "Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu by Akira Sawano", "A gamer wakes up inside a fantasy world as his skeletal knight character."],
        ["Trapped in Dating S.", "7.1", "Otome Game Sekai wa Moba ni Kibishii Sekai desu by Jun Shiosato", "A man uses his sister's otome game knowledge to survive as a mob character in a matriarchal world."],
        ["Black Summoner", "7.1", "Kuro no Shoukanshi by Ginnyo", "A summoner exchanges his past memories for OP cheat stats and starts adventuring."],
        ["Isekai Cheat Mag.", "5.4", "Isekai Cheat Magician by Karin Suzuragi", "Two high school students are summoned and discover they possess immense magical power."],
        ["Knight's & Magic", "7.1", "Knight's & Magic by Takuji Kato", "An otaku mecha modeler is reincarnated in a fantasy world where he builds magical mechas."],
        ["Restaurant Another", "7.7", "Isekai Shokudou by Takahei Inugami", "A Tokyo restaurant's door connects to a fantasy world every Saturday, serving exotic guests."],
        ["Isekai Izakaya", "7.3", "Isekai Izakaya 'Nobu' by Virginia-nitouhei", "A cozy bar in Kyoto has a back entrance leading to an ancient fantasy European city."],
        ["Saint's Magic Power", "7.3", "The Saint's Magic Power is Omnipotent by Fujiazuki", "An office worker is summoned as a Saint but is ignored, starting a quiet life making potions."],
        ["Parallel Pharmacy", "7.3", "Parallel World Pharmacy by Sei Takano", "A modern pharmacologist dies of overwork, reborn with divine medicine abilities."],
        ["Reincarnated Sword", "7.4", "Tensei Shitara Ken Deshita by Tomowo Maruyama", "A man reincarnates as a magical sword, becoming the weapon and protector of a beast girl."],
        ["Saving 80,000 Gold", "6.7", "Saving 80,000 Gold in Another World by Keisuke Motoe", "A girl gains the ability to teleport between Earth and a fantasy world, planning a retirement fund."],
        ["Aristocrat Adventure", "6.7", "The Aristocrat's Otherworldly Adventure by Nini", "A boy dies saving girls, reborn as a noble with cheat statuses gifted by the gods."],
        ["Am I Strongest?", "6.5", "Am I Actually the Strongest? by Takahashi Ai", "A reincarnated baby is abandoned in a forest due to misread magic stats, raised by wolves."],
        ["Sweet Reincarnation", "6.4", "Sweet Reincarnation by Iida Seriko", "A genius pastry chef is reborn as a poor noble's son, resolved to build a land of sweets."],
        ["Unique Skill OP", "6.1", "My Unique Skill Makes Me OP at Level 1 by Mawata", "A man is summoned and finds everything he drops from monsters is absolute S-grade quality."],
        ["Reborn Vending M.", "6.5", "Reborn as a Vending Machine by Kunieda", "A vending machine otaku dies under a falling machine, reborn as one in a dungeon."],
        ["Fluffy Paradise", "6.6", "Fluffy Paradise by Yuriko Asami", "A girl is reincarnated with a cheat ability to be loved by all non-human animals and beasts."],
        ["Wrong Way Healing", "7.3", "The Wrong Way to Use Healing Magic by Kurokata", "A boy dragged into a summoning trains under a brutal rescue leader, using healing to punch."],
        ["Villainess Level 99", "7.3", "Villainess Level 99 by Nokogiri", "A girl reincarnates in an RPG as a hidden boss, maxing her shadow magic to level 99."],
        ["Appraisal Skill", "7.2", "Reincarnated Aristocrat Appraisal Skill by Inoue Natsumi", "A weak noble's son uses his cheat appraisal skill to recruit hidden geniuses for his army."],
        ["Level 2 Cheat Power", "6.9", "Chillin' in Another World by Akine Itomachi", "A merchant summoned as a hero candidate is discarded, but gains infinite power at level 2."],
        ["The New Gate", "6.6", "The New Gate by Mihiro Yoshihara", "The strongest player clears a death game, only to be sent 500 years into the game's future."],
        ["Failure Frame", "6.8", "Failure Frame by Uyoshi & Shouka", "A student discarded by a goddess uses abnormal state spells to escape a deadly ruins zone."],
        ["QA in Another World", "7.1", "Quality Assurance in Another World by Masamitsu Shigeta", "A debugger stuck in a fully realistic fantasy game tries to track down system glitches."],
        ["Re:Monster", "6.7", "Re:Monster by Kobayakawa Haruyoshi", "A killed man is reborn as a weak goblin, using his unique eating evolution ability to lead."],
        ["Isekai Yururi Kiko", "6.5", "Isekai Yururi Kiko by Mito", "A god accidentally kills a guy, reborn in a forest where he adopts two god-like twins."],
        ["Loner Life Isekai", "6.4", "Loner Life in Another World by Bibi", "A boy who misses cheat skill selections gets stuck with leftover trash skills, adventuring alone."],
        ["Slime Isekai S2", "8.3", "Tensei Shitara Slime Datta Ken by Fuse", "Rimuru faces the Falmuth kingdom's invasion, resolved to become a Demon Lord to revive friends."],
        ["Slime Isekai S3", "8.2", "Tensei Shitara Slime Datta Ken by Fuse", "Rimuru organizes a monster-human festival while dealing with the holy church's crusaders."],
        ["Re:Zero S2", "8.3", "Re:Zero kara Hajimeru Isekai Seikatsu by Tappei Nagatsuki", "Subaru confronts the trials of the Sanctuary and the deadly plots of the Witches of Sin."],
        ["Re:Zero S3", "8.5", "Re:Zero kara Hajimeru Isekai Seikatsu by Tappei Nagatsuki", "The Witch Cult attacks Pristella, forcing Subaru and the royal candidates to unite defenses."],
        ["KonoSuba S2", "8.2", "Kono Subarashii Sekai ni Shukufuku wo! by Natsume Akatsuki", "Kazuma faces a court trial, fights the Crimson Demon general, and explodes hot springs."],
        ["KonoSuba S3", "8.3", "Kono Subarashii Sekai ni Shukufuku wo! by Natsume Akatsuki", "Kazuma meets the princess Irish, gets kicked out of the castle, and stops a royal coup."],
        ["KonoSuba Explosion", "7.4", "KonoSuba: An Explosion on this Wonderful World! by Morino Kasumi", "The prequel story of Megumin's high school days in the Crimson Demon village learning explosion."],
        ["Mushoku Tensei S2", "8.3", "Mushoku Tensei by Rifujin na Magonote", "Rudeus enters the Ranoa Magic Academy, searching for a cure to his magic block and reuniting with Sylphie."],
        ["Overlord II", "7.7", "Overlord by Kugane Maruyama", "Ainz explores the Lizardman tribes and orders the demonic invasion of the royal capital."],
        ["Overlord III", "7.8", "Overlord by Kugane Maruyama", "Ainz establishes the Sorcerer Kingdom, crushing a massive alliance army at Katze Plains."],
        ["Overlord IV", "7.9", "Overlord by Kugane Maruyama", "Ainz battles the Re-Estize Kingdom, wiping them off the map to establish absolute power."],
        ["Shield Hero S2", "6.6", "Tate no Yuusha no Nariagari by Aneko Yusagi", "Naofumi travels to a parallel world to defeat the Spirit Tortoise and save the realms."],
        ["Shield Hero S3", "7.2", "Tate no Yuusha no Nariagari by Aneko Yusagi", "Naofumi rebuilds Raphtalia's village while fighting in underground gladiator arenas."],
        ["Eminence Shadow S2", "8.4", "Kage no Jitsuryokusha ni Naritakute! by Daisuke Anri", "Cid travels to the Lawless City, fighting vampire queens and collapsing corporate economies."],
        ["Bookworm S2", "8.1", "Ascendance of a Bookworm by Miya Kazuki", "Myne joins the cathedral as a blue shrine maiden, dealing with noble corruption and mana."],
        ["Bookworm S3", "8.2", "Ascendance of a Bookworm by Miya Kazuki", "Myne invents printing presses while being targeted by foreign nations for her massive mana."],
        ["Saint's Magic S2", "7.4", "The Saint's Magic Power is Omnipotent by Fujiazuki", "Sei expands her herbal research, travels to foreign kingdoms, and navigates court romance."],
        ["By Grace of Gods", "7.0", "Kami-tachi ni Hirowareta Otoko by Ranran", "A dead salaryman is reborn as a child in a forest, breeding and researching magical slimes."],
        ["By Grace of Gods S2", "6.8", "Kami-tachi ni Hirowareta Otoko by Ranran", "Ryoma expands his laundry shop business to new cities, making friends and taming monsters."],
        ["Kuma Kuma Bear", "7.1", "Kuma Kuma Kuma Bear by Sergey", "A girl is sent to a fantasy world in a super-powered, cute bear suit, doing quests."],
        ["Kuma Bear Punch!", "7.0", "Kuma Kuma Kuma Bear by Sergey", "Yuna continues her cute, bear-suited adventures, saving cities and making pudding."],
        ["Killing Slimes 300", "7.0", "I've Been Killing Slimes for 300 Years by Shiba", "An office worker reincarnates as an immortal witch, maxing her stats by killing slimes."],
        ["Fruit of Evolution", "6.1", "The Fruit of Evolution by Sorano", "An ugly student is sent to a fantasy world, eating a weird fruit that evolves him and a gorilla."],
        ["Fruit of Evol. S2", "5.2", "The Fruit of Evolution by Sorano", "Seiichi teaches at a magic academy, fighting the dark guild with chaotic cheat powers."],
        ["Pupil of Wise Man", "5.3", "She Professed Herself Pupil of the Wise Man by Dicca Suemitsu", "A VR MMO elder player wakes up in the game as a cute girl, claiming to be his own pupil."],
        ["Demon Lord Nobody", "6.2", "The Greatest Demon Lord Reborn by Koikawa", "A lonely demon lord reincarnates as a normal villager, but his magic stats are still way too high."],
        ["Land of Leadale", "6.9", "In the Land of Leadale by Dashio Tsukimi", "A girl on life support dies, waking up inside her favorite MMO world 200 years later."],
        ["Reborn Master Blade", "6.7", "Reborn to Master the Blade by Moto Kuromura", "A hero-king reborn as a noble girl dedicates her new life to mastering physical combat."],
        ["Cheat Skill Real W.", "6.5", "I Got a Cheat Skill in Another World by Kazuomi Minatogawa", "An abused fat boy finds a portal to a fantasy house, gaining cheat stats that alter his Earth life."],
        ["Farming Life Isekai", "7.6", "Farming Life in Another World by Yasuyuki Tsurugi", "God gifts a dying man a healthy body and a magical tool, starting a cozy farm in a forest."],
        ["KamiKatsu", "7.0", "KamiKatsu by Hangetsuban Sonsho", "A boy sacrificed to a cult is sent to a world with no concept of gods, summoning his god."],
        ["One-Hit Kill Sister", "6.5", "My One-Hit Kill Sister by Taguchi Kenji", "A boy sent to another world is joined by his overprotective sister, who has cheat powers."],
        ["Summoned 2nd Time", "6.1", "Summoned to Another World for a Second Time by Arata Kishimoto", "A hero who saved a world is forcibly sent back to Earth as a baby, then re-summoned as a teen."],
        ["The Great Cleric", "6.8", "The Great Cleric by Hiiro Akikaze", "A killed businessman is reborn as a healer, drinking a disgusting liquid to train his physical limits."],
        ["Spirit Chronicles", "6.9", "Seirei Gensouki by futabasha", "An orphan boy in a slum recovers his memories as a Japanese college student and gains magic."],
        ["Spirit Chron. S2", "7.0", "Seirei Gensouki by futabasha", "Rio continues his quest to avenge his mother's murder while hiding his identity as a hero."],
        ["Arifureta S1", "7.2", "Arifureta by RoGa", "A student is pushed into an abyss, devouring monsters to gain robotic arms and escape."],
        ["Arifureta S2", "7.3", "Arifureta by RoGa", "Hajime and his harem travel to ancient ruins to find a way back to Earth, fighting gods."],
        ["Arifureta S3", "7.4", "Arifureta by RoGa", "Hajime defends the empire from a massive demon invasion, utilizing advanced machine guns."],
        ["Handyman Saitou", "7.5", "Handyman Saitou in Another World by Ichitomo Kazutomo", "A normal handyman is summoned, using his lockpicking and repair skills to help adventuring parties."],
        ["Tsukimichi S1", "7.7", "Tsukimichi: Moonlit Fantasy by Kotora Kino", "A boy rejected by a goddess for being ugly is thrown to the edges, building a monster city."],
        ["Tsukimichi S2", "7.8", "Tsukimichi: Moonlit Fantasy by Kotora Kino", "Makoto attends a academy as a teacher while dealing with global demon wars and hero clones."],
        ["High School Prod.", "6.1", "High School Prodigies Have It Easy by Koutarou Yamada", "Seven genius high school students survive a plane crash, conquering a medieval world."],
        ["Demon Lord, Retry!", "6.6", "Demon Lord, Retry! by Amaru Minotake", "An game developer is summoned into a fantasy world as the Demon Lord character he created."],
        ["Outbreak Company", "7.0", "Outbreak Company by Kiri Kajiya", "An otaku is hired by the Japanese government to spread anime culture in a fantasy realm."],
        ["Dungeon Black Co.", "7.3", "The Dungeon of Black Company by Youhei Yasumura", "A wealthy NEET is sent to a fantasy world and forced into near-slavery mining magic crystals."],
        ["Combatants dispatched", "6.8", "Combatants Will Be Dispatched! by Masaaki Kihara", "An evil corporation combatant and an android girl are sent to conquer a fantasy world."]
    ],
    "Sci-Fi": [
        ["Steins;Gate", "8.9", "Steins;Gate by Yomi Sarachi", "A self-proclaimed mad scientist invents a device that can send text messages to the past."],
        ["Psycho-Pass", "8.4", "Inspector Akane Tsunemori by Hikaru Miyoshi", "Detectives solve crimes in a world ruled by a computerized moral and psychological index."],
        ["Evangelion", "8.3", "Neon Genesis Evangelion by Yoshiyuki Sadamoto", "Teenagers pilot giant biological mechas to defend humanity from cosmic entities called Angels."],
        ["Cowboy Bebop", "8.7", "Cowboy Bebop by Yutaka Nanten", "A crew of futuristic bounty hunters search for targets across the solar system in the year 2071."],
        ["Ghost in Shell SAC", "8.4", "The Ghost in the Shell by Masamune Shirow", "Major Motoko Kusanagi leads a cybernetic law enforcement agency fighting cyber-terrorists."],
        ["Code Geass", "8.7", "Lelouch of the Rebellion by Majiko!", "An exiled prince gains the power of absolute obedience and leads a rebellion against his empire."],
        ["Dr. STONE", "8.1", "Dr. STONE by Riichiro Inagaki & Boichi", "A high school genius attempts to rebuild human civilization using science after a petrification event."],
        ["Parasyte: The Maxim", "8.4", "Kiseijuu by Hitoshi Iwaaki", "A high schooler forms a symbiosis with a parasitic alien that failed to take over his brain."],
        ["Outlaw Star", "7.8", "Outlaw Star by Takehiko Ito", "A crew of space outlaws searches for the legendary Galactic Leyline aboard an advanced ship."],
        ["Trigun", "8.2", "Trigun by Yasuhiro Nightow", "A legendary pacifist gunman travels a desert world with a massive bounty on his head."],
        ["Trigun Stampede", "7.9", "Trigun by Yasuhiro Nightow", "A modern CGI reimagining of Vash the Stampede's journey across the desert planet No Man's Land."],
        ["Cyberpunk Edgerun.", "8.6", "Cyberpunk: Edgerunners by Trigger (Manga adapt.)", "A street kid becomes a mercenary outlaw to survive in a corrupt, high-tech megacity."],
        ["Darling in Franxx", "7.2", "Darling in the Franxx by Kentaro Yabuki", "Children pilot giant mechas in pairs, defending humanity from subterranean monsters."],
        ["Gundam: IBO", "8.0", "Mobile Suit Gundam: Iron-Blooded Orphans by Hajime Yatate", "Child soldiers on Mars rebel against their oppressors using ancient mechas."],
        ["Gundam: Witch Merc.", "7.8", "Mobile Suit Gundam: The Witch from Mercury by Bandai", "A girl from Mercury enters a corporate mecha piloting academy, piloting the Gundam Aerial."],
        ["Space Dandy", "7.8", "Space Dandy by Masafumi Harada", "A dandy guy in space hunts down unregistered alien species for quick cash."],
        ["Gurren Lagann", "8.6", "Tengen Toppa Gurren Lagann by Gainax (Manga adapt.)", "Two boys dig to the surface of the Earth and pilot mechas to fight beastmen."],
        ["Akira", "8.1", "Akira by Osamu Tezuka & Katsuhiro Otomo", "A biker gang leader tries to save his friend who gained unstable psychic powers in neo-Tokyo."],
        ["Ghost in Shell (95)", "8.2", "The Ghost in the Shell by Masamune Shirow", "Major Motoko Kusanagi hunts down a mysterious hacker known as the Puppet Master."],
        ["Steins;Gate 0", "8.5", "Steins;Gate 0 by Taka Himeno", "Okabe struggles to cope after failing to save Kurisu, interacting with an AI containing her memories."],
        ["Psycho-Pass 2", "7.4", "Inspector Akane Tsunemori by Hikaru Miyoshi", "Akane faces a new criminal who can bypass the Sibyl System's psychological scanners."],
        ["Psycho-Pass 3", "7.5", "Inspector Akane Tsunemori by Hikaru Miyoshi", "Two new rookie inspectors investigate corporate financial crimes and the bifrost system."],
        ["Gantz", "7.0", "Gantz by Hiroya Oku", "Deceased people are resurrected to fight bizarre aliens in Tokyo, armed with futuristic suits."],
        ["Ergo Proxy", "8.0", "Ergo Proxy by manglobe (Manga adapt.)", "An inspector investigates virus-infected androids in a domed post-apocalyptic city."],
        ["Texhnolyze", "7.7", "Texhnolyze by Yasuyuki Ueda (Manga adapt.)", "An underground city struggles for control over advanced cybernetic prosthetics called Texhnolyze."],
        ["Serial Exp. Lain", "8.0", "Serial Experiments Lain by Yoshitoshi Abe (Manga adapt.)", "An introverted schoolgirl becomes obsessed with a digital network called the Wired."],
        ["FLCL", "8.0", "FLCL by Hajime Ueda", "A boy's life is disrupted by a Vespa-riding alien woman who hits him in the head with a guitar."],
        ["Guilty Crown", "7.4", "Guilty Crown by Yousuke Miyagi", "A high school boy gains the ability to draw out physical manifestations of peoples' souls."],
        ["Aldnoah.Zero", "7.4", "Aldnoah.Zero by Pinakes", "War erupts between Earth and the Martian Vers Empire, utilizing advanced armored kataphrakts."],
        ["Knights of Sidonia", "7.7", "Sidonia no Kishi by Tsutomu Nihei", "Humanity's last survivors aboard a seed ship defend themselves from alien Gauna monsters."],
        ["Inuyashiki", "7.7", "Inuyashiki by Hiroya Oku", "An elderly man and a teenager gain machine bodies and choose opposing paths."],
        ["Dimension W", "7.1", "Dimension W by Yuji Iwahara", "A collector hunts down illegal power-conducting coils tapping into an infinite fourth dimension."],
        ["World Trigger", "7.5", "World Trigger by Daisuke Ashihara", "Human defenders protect their city from interdimensional monsters using special trigger weapons."],
        ["World Trigger S2", "8.1", "World Trigger by Daisuke Ashihara", "The Border defense agency fights off a massive invasion by a military nation."],
        ["World Trigger S3", "8.3", "World Trigger by Daisuke Ashihara", "Tamakoma-2 fights in rank battles to earn a spot on the expedition team to the neighbor world."],
        ["Astra Lost in Space", "8.1", "Kanata no Astra by Kenta Shinohara", "A group of high schoolers are stranded in deep space, traveling home planet by planet."],
        ["Heavenly Delusion", "8.2", "Tengoku Daimakyou by Masakazu Ishiguro", "Two teens search for heaven in a ruined Japan populated by man-eating monsters."],
        ["Metallic Rouge", "6.7", "Metallic Rouge by Bones (Manga adapt.)", "An android girl and her partner hunt down nine rogue artificial humans on Mars."],
        ["Synduality: Noir", "6.9", "Synduality by Bandai (Manga adapt.)", "Drifters pilot armed mechas alongside artificial human companions in a ruined world."],
        ["Bullbuster", "6.6", "Bullbuster by Eisaku Kubonouchi (Manga adapt.)", "A small start-up extermination business fights mysterious giant beasts on a budget."],
        ["Pluto", "8.5", "Pluto by Naoki Urasawa & Osamu Tezuka", "An android detective investigates the murders of the world's most advanced robots."],
        ["NieR:Automata", "7.7", "NieR:Automata by Square Enix (Manga adapt.)", "Androids 2B and 9S fight machine lifeforms to reclaim Earth for humanity."],
        ["Vivy: Fluorite Eye", "8.4", "Vivy by Tappei Nagatsuki & loundraw (Manga adapt.)", "The world's first autonomous AI singer is tasked with preventing a future war between humans and AI."],
        ["Deca-Dence", "7.3", "Deca-Dence by Bones (Manga adapt.)", "A girl working on a massive moving fortress discovers the world is an entertainment park for cyborgs."],
        ["86 Eighty-Six", "8.2", "86 -Eighty Six- by Motoki Yoshihara", "San Magnolians wage war using unmanned drones piloted secretly by persecuted minorities."],
        ["86 Eighty-Six P2", "8.5", "86 -Eighty Six- by Motoki Yoshihara", "Shin and the surviving Spearhead squadron fight the Legion under a foreign military command."],
        ["Godzilla SP", "6.8", "Godzilla Singular Point by Bones (Manga adapt.)", "A graduate student and an engineer decode mysterious signals predicting a global catastrophe."],
        ["ID:Invaded", "7.8", "ID:Invaded by Yuuki Kodama", "A detective enters the unconscious mind-planes of serial killers to solve murders."],
        ["No Guns Life", "7.0", "No Guns Life by Tasuku Karasuma", "A private investigator with a gun for a head investigates cybernetic corporate conspiracies."],
        ["Cop Craft", "6.8", "Cop Craft by Shoji Gatoh & Kitarou Yano", "A human detective and an otherworldly knight investigate crimes in a gate-connected city."],
        ["Carol & Tuesday", "7.8", "Carole & Tuesday by Morito Yasanaga", "Two girls on a terraformed Mars create music using acoustic instruments in an AI-dominated industry."],
        ["Promised Neverland", "8.3", "Yakusoku no Neverland by Kaiu Shirai & Posuka Demizu", "Orphans discover their idyllic home is actually a breeding farm for man-eating demons."],
        ["Terra Formars", "7.0", "Terra Formars by Yu Sasuga & Kenichi Tachibana", "Genetically modified soldiers fight super-evolved humanoid cockroaches on Mars."],
        ["Knights & Magic", "7.1", "Knight's & Magic by Takuji Kato", "A mecha programmer is reborn in a magic world, building magic-powered mechas."],
        ["Active Raid", "6.4", "Active Raid by Goro Taniguchi (Manga adapt.)", "A special police unit uses powered exosuits to combat high-tech crime in Tokyo."],
        ["Macross Frontier", "7.9", "Macross Frontier by Hayao Aoki", "A space colony fleet battles biomechanical aliens, relying on music and valkyrie mechas."],
        ["Macross Delta", "7.0", "Macross Delta by Tatsuo Sato", "A magical singing unit suppresses a mysterious disease that makes pilots violent."],
        ["Gundam 00", "8.1", "Mobile Suit Gundam 00 by Kouzoh Ohmori", "A private military group uses advanced Gundams to eradicate all war on Earth."],
        ["Gundam Seed", "7.8", "Mobile Suit Gundam SEED by Masatsugu Iwase", "Genetically altered coordinators battle natural humans in a massive space war."],
        ["Eureka Seven", "8.0", "Eureka Seven by Jinsei Kataoka & Kazuma Kondou", "A boy joins a rebel group of light-riding pilots, falling for a mysterious mecha pilot girl."],
        ["Robotics;Notes", "7.3", "Robotics;Notes by Keiji Asakawa", "A high school robot research club attempts to construct a giant, functioning mecha."],
        ["Occultic;Nine", "6.9", "Occultic;Nine by Ganjii", "Nine eccentric individuals are linked together by an occult blog, uncovering a city conspiracy."],
        ["Chaos;Head", "5.6", "Chaos;Head by Sumihei", "A shut-in student is witnessed in a series of horrific murders in Shibuya, gaining reality-altering powers."],
        ["Chaos;Child", "6.2", "Chaos;Child by Relucy", "Six years after a Shibuya earthquake, a high school newspaper club investigates new murders."],
        ["Date A Live", "7.2", "Date A Live by Ringo Mori", "A high schooler must seal the destructive powers of spirits by making them fall in love with him."],
        ["Date A Live II", "7.3", "Date A Live by Ringo Mori", "Shido continues his dating missions, saving new twin spirits and a pop-star spirit."],
        ["Date A Live III", "7.4", "Date A Live by Ringo Mori", "The spirit sealing battles escalate as Shido confronts a rogue spirit hunter."],
        ["Date A Live IV", "7.5", "Date A Live by Ringo Mori", "Shido dates a spirit who is a manga artist and a spirit who controls time."],
        ["Date A Live V", "7.6", "Date A Live by Ringo Mori", "The final war between the DEM corporation and Ratatoskr erupts over the origin of spirits."],
        ["Accel World", "7.2", "Accel World by Hiroyuki Aigamo", "A bullied fat boy is invited into a secret augmented reality fighting game where acceleration is key."],
        ["Black Bullet", "7.1", "Black Bullet by Saki Ukai", "In a world ravaged by a parasitic virus, promoters and mutated children fight Gastrea monsters."],
        ["Brynhildr", "6.9", "Brynhildr in the Darkness by Lynn Okamoto", "A boy shelters escaped mutant girls who possess lethal magical and scientific powers."],
        ["Captain Earth", "6.6", "Captain Earth by Bones (Manga adapt.)", "A high schooler pilots a giant mecha to defend Earth from alien energy lifeforms."],
        ["Gargantia", "7.5", "Gargantia on the Verdurous Planet by Mitabi Wataru", "A space soldier crashes on a water-covered Earth, learning to live with salvage fleets."],
        ["Yamato 2199", "8.3", "Space Battleship Yamato 2199 by Michio Murakawa", "A legendary space battleship travels to a distant galaxy to retrieve a radiation-cleansing device."],
        ["Yamato 2202", "7.7", "Space Battleship Yamato 2202 by Michio Murakawa", "The Yamato crew rebels against Earth's peace treaties to answer a cosmic distress signal."],
        ["LOGH: Neue These", "8.2", "Legend of Galactic Heroes by Ryoo Nakamori", "A modern CGI adaptation of the massive galactic war between the Empire and the Alliance."],
        ["Galactic Heroes", "9.0", "Legend of the Galactic Heroes by Katsumi Michihara", "The definitive space opera detailing the military strategies of Reinhard and Yang Wen-li."],
        ["Kiznaiver", "7.4", "Kiznaiver by Roji Karegishi", "Eight high schoolers are bound together in an experiment where they share each other's physical pain."],
        ["Re:Creators", "7.5", "Re:Creators by Daiki Kase", "Anime, manga, and game characters are summoned into the real world, battling their creators."],
        ["Ingress: Animation", "6.2", "Ingress by Niantic (Manga adapt.)", "Two agents investigate a mysterious exotic matter that can influence human minds."],
        ["7 Seeds", "6.4", "7 Seeds by Yumi Tamura", "Cryogenically frozen youths wake up in a post-apocalyptic Earth filled with lethal wildlife."],
        ["Cagaster", "6.5", "Cagaster of an Insect Cage by Kachou Hashimoto", "Post-apocalyptic exterminators fight humans who have mutated into giant, armored insects."],
        ["Kuromukuro", "7.2", "Kuromukuro by P.A. Works (Manga adapt.)", "A samurai awakened from a 450-year sleep pilots an ancient mecha to fight alien invaders."],
        ["A.I.C.O. -Incarnat-", "6.6", "A.I.C.O. by Hiroaki Michitsuki", "A schoolgirl and a diver search a bio-hazard zone for the biological core of an artificial organism."],
        ["Hero Mask", "6.5", "Hero Mask by Studio Pierrot (Manga adapt.)", "A detective investigates mysterious deaths linked to masks that grant superhuman abilities."],
        ["Obsolete", "6.8", "Obsolete by Gen Urobuchi (Manga adapt.)", "Aliens exchange mechanical exo-frame armor for limestone, altering global warfare."],
        ["Levius", "7.1", "Levius by Haruhisa Nakata", "A young man fights in mechanical boxing tournaments in a steam-punk post-war world."],
        ["High-Rise Invasion", "6.7", "Tenkuu Shinpan by Takahiro Oba", "A girl is trapped in a skyscraper world where masked killers force victims to jump."],
        ["Thermae Romae N.", "7.5", "Thermae Romae by Mari Yamazaki", "An ancient Roman bath architect is transported to modern Japanese bathhouses for inspiration."],
        ["Spriggan", "6.8", "Spriggan by Hiroshi Takashige & Ryoji Minagawa", "Special agents protect ancient out-of-place artifacts from militarized corporations."],
        ["Bastard!!", "7.0", "Bastard!! by Kazushi Hagiwara", "A dark wizard is resurrected to defend a kingdom from his former demonic generals."],
        ["Yakitori", "6.9", "Yakitori: Soldiers of Misfortune by Carlo Zen", "Impoverished Earth youths join a private military corporation as expendable foot soldiers."],
        ["Gamera Rebirth", "6.9", "Gamera: Rebirth by Kadokawa (Manga adapt.)", "Four boys in Tokyo witness the giant turtle monster Gamera battle other kaijus."],
        ["Edens Zero S2", "7.2", "Edens Zero by Hiro Mashima", "Shiki and the crew fight the cosmic pirate Drakken Joe to save their ship and friends."],
        ["Shy S1", "7.0", "Shy by Bukimi Miki", "A shy teenage girl becomes Japan's representative superhero, fighting absolute evil."],
        ["Shy S2", "7.1", "Shy by Bukimi Miki", "Shy fights a rogue organization of superpowered kids attempting to steal hearts in Tokyo."],
        ["Elusive Samurai", "7.9", "The Elusive Samurai by Yusei Matsui", "A young prince escaping a massacre uses his extraordinary evasion skills to survive."],
        ["Sengoku Youko", "7.6", "Sengoku Youko by Satoshi Mizukami", "A human boy and a fox demon travel feudal Japan fighting demons and rogue samurai."],
        ["Sengoku Youko S2", "7.8", "Sengoku Youko by Satoshi Mizukami", "The spiritual revolution arc reaches a peak as demon-hybrid warriors clash over peace."]
    ],
    "Fantasy": [
        ["Frieren", "9.3", "Sousou no Frieren by Kanehito Yamada & Tsukasa Abe", "An immortal elf mage travels her world, reflecting on the short lives of her former hero companions."],
        ["Made in Abyss", "8.7", "Made in Abyss by Akihito Tsukushi", "A girl and a robot boy descend into a massive, lethal abyss searching for her mother."],
        ["Black Clover", "8.1", "Black Clover by Yuki Tabata", "An orphan boy born without magic strives to become the Wizard King of his kingdom."],
        ["Fairy Tail", "7.6", "Fairy Tail by Hiro Mashima", "A young celestial wizard joins a famous guild of chaotic and powerful mages."],
        ["Noragami", "8.0", "Noragami by Adachitoka", "A minor deity seeking followers crosses paths with a girl whose soul slips out of her body."],
        ["Seven Deadly Sins", "7.7", "Nanatsu no Taizai by Nakaba Suzuki", "A princess seeks the help of exiled holy knights to reclaim her kingdom."],
        ["Soul Eater", "7.8", "Soul Eater by Atsushi Ohkubo", "Students at a Shinigami academy train weapons that transform into humans."],
        ["Magi: Labyrinth", "8.0", "Magi: The Labyrinth of Magic by Shinobu Ohtaka", "Young adventurers conquer dungeon towers, gaining magical djinn armor and power."],
        ["Ancient Magus' B.", "8.0", "Mahoutsukai no Yome by Kore Yamazaki", "An orphaned girl sells herself into slavery, bought by a skull-headed magus to be his apprentice."],
        ["Fate/Zero", "8.3", "Fate/Zero by Gen Urobuchi (Manga adapt.)", "Seven magi summon legendary heroes to fight in the Fourth Holy Grail War."],
        ["Fate/stay night: UBW", "8.2", "Fate/stay night by Type-Moon", "A teenage mage joins a deadly survival tournament for the Holy Grail."],
        ["Fate: Heaven's Feel", "8.3", "Fate/stay night by Type-Moon", "A dark, tragic route of the Holy Grail war, focusing on Sakura and dark corruption."],
        ["Demon Slayer", "8.9", "Kimetsu no Yaiba by Koyoharu Gotouge", "A young boy becomes a demon slayer to save his sister from a demonic curse."],
        ["Jujutsu Kaisen", "8.8", "Jujutsu Kaisen by Gege Akutami", "A high school student joins a secret organization of jujutsu sorcerers to defeat curses."],
        ["Attack on Titan", "9.1", "Shingeki no Kyojin by Hajime Isayama", "Humans live inside walled cities to escape giant humanoid monsters known as Titans."],
        ["Hunter x Hunter", "9.0", "Hunter x Hunter by Yoshihiro Togashi", "A young boy sets out on a quest to become a legendary Hunter and find his father."],
        ["Fullmetal Alchemist: B.", "9.1", "Fullmetal Alchemist by Hiromu Arakawa", "Two alchemist brothers seek the Philosopher's Stone to restore their bodies."],
        ["Berserk", "8.5", "Berserk by Kentaro Miura", "A lone mercenary travels a dark fantasy medieval land seeking revenge against his betrayer."],
        ["Claymore", "7.8", "Claymore by Norihiro Yagi", "Half-human female warriors fight shape-shifting monsters known as Yoma."],
        ["Dororo", "8.2", "Dororo by Osamu Tezuka", "A ronin born without limbs or organs slays demons to reclaim his body parts."],
        ["D.Gray-man", "8.0", "D.Gray-man by Katsura Hoshino", "Exorcists fight to defeat the Millennium Earl and his army of demon-like Akuma."],
        ["Blue Exorcist", "7.5", "Ao no Exorcist by Kazue Kato", "The son of Satan decides to become an exorcist to defeat his biological father."],
        ["Fire Force", "7.7", "Enen no Shouboutai by Atsushi Ohkubo", "Special fire brigades fight spontaneous human combustion turn into living infernos."],
        ["Goblin Slayer", "7.4", "Goblin Slayer by Kumo Kagyu & Kosuke Kurose", "A rugged adventurer dedicates his entire life to eradicating low-tier goblins."],
        ["Spice and Wolf", "8.2", "Ookami to Koushinryou by Keito Koume", "A traveling merchant travels medieval lands with a smart pagan wolf deity."],
        ["Spice and Wolf (24)", "8.1", "Ookami to Koushinryou by Keito Koume", "A gorgeous modern visual remake of Holo and Lawrence's classic economic journey."],
        ["Ranking of Kings", "8.6", "Ousama Ranking by Sosuke Toka", "A deaf, weak prince aims to become the top king, befriending a shadow creature."],
        ["Made in Abyss S2", "8.4", "Made in Abyss by Akihito Tsukushi", "Riko and her friends reach the sixth layer, discovering a village of hollows with dark origins."],
        ["Frieren Season 1", "9.3", "Sousou no Frieren by Kanehito Yamada & Tsukasa Abe", "Frieren travels to the north to speak with her deceased friend in the land of souls."],
        ["Ancient Magus' S2", "8.1", "Mahoutsukai no Yome by Kore Yamazaki", "Chise attends a magic college, uncovering ancient curses and student rivalries."],
        ["Case Study Vanitas", "7.9", "Vanitas no Carte by Jun Mochizuki", "A human using a cursed book joins a vampire doctor to cure a vampire madness plague."],
        ["Mushoku Tensei", "8.4", "Mushoku Tensei by Rifujin na Magonote & Yuka Fujikawa", "A NEET dies and is reborn with his memories intact, promising to live a meaningful life."],
        ["Overlord", "7.9", "Overlord by Kugane Maruyama & Hugin Miyama", "A skeletal guild leader rules his guild castle in a fantasy world after his MMO closes down."],
        ["Re:Zero", "8.2", "Re:Zero kara Hajimeru Isekai Seikatsu by Tappei Nagatsuki", "A boy summoned to another world gains the ability to restart from a save point on death."],
        ["KonoSuba", "8.1", "Kono Subarashii Sekai ni Shukufuku wo! by Natsume Akatsuki", "A boy dies a hilarious death and is reincarnated in a fantasy world with a useless goddess."],
        ["Slime Isekai", "8.1", "Tensei Shitara Slime Datta Ken by Fuse & Taiki Kawakami", "A stabbed man is reincarnated as a highly powerful slime monster in a fantasy cave."],
        ["Land of Lustrous", "8.4", "Houseki no Kuni by Haruko Ichikawa", "Living gemstone people defend themselves from lunar invaders who want to make them jewelry."],
        ["Rokka: Braves", "7.3", "Rokka no Yuusha by Ishio Yamagata (Manga adapt.)", "Six heroes are chosen to fight the Demon God, but seven arrive, creating paranoia."],
        ["Grimgar", "7.6", "Hai to Gensou no Grimgar by Mutsumi Okubhashi", "A group of teenagers wake up in a fantasy world with no memories, struggling to kill goblins."],
        ["Akame ga Kill!", "7.5", "Akame ga Kill! by Takahiro & Tetsuya Tashiro", "A country boy joins a squad of elite assassins trying to overthrow a corrupt government."],
        ["Bahamut: Genesis", "7.6", "Shingeki no Bahamut by Cygames (Manga adapt.)", "Bounty hunters are dragged into a plot involving the resurrection of a massive dragon."],
        ["Bahamut: Virgin S.", "7.4", "Shingeki no Bahamut by Cygames (Manga adapt.)", "A girl with dragon powers falls for a king trying to conquer gods and demons."],
        ["Granblue Fantasy", "6.7", "Granblue Fantasy by Cygames (Manga adapt.)", "A boy and a blue-haired girl escape a military empire, traveling sky islands."],
        ["Granblue S2", "6.6", "Granblue Fantasy by Cygames (Manga adapt.)", "Gran and Lyria continue their search for the island of stars, meeting legendary beasts."],
        ["Legend of Heroes", "7.2", "The Legend of the Legendary Heroes by Takaya Kagami", "A lazy mage searches for relics of legendary heroes, uncovering a royal curse."],
        ["Tears to Tiara", "6.8", "Tears to Tiara by Aquaplus (Manga adapt.)", "An ancient demon king is resurrected to lead a tribe fighting an oppressive empire."],
        ["Tower of God", "7.5", "Kami no Tou by SIU (Manga/Webtoon)", "A boy climbs a mythical tower to find his childhood friend, facing deadly trials."],
        ["God of High School", "7.0", "The God of High School by Yongje Park (Webtoon)", "High schoolers participate in an all-style martial arts tournament using divine power."],
        ["Solo Leveling", "8.3", "Solo Leveling by Chugong & DUBU (Webtoon)", "The weakest hunter gains the unique ability to level up and starts conquering gates."],
        ["Dungeon Meshi", "8.4", "Dungeon Meshi by Ryoko Kui", "Adventurers search a dungeon for their sister, cooking and eating monsters to survive."],
        ["Mashle: Magic & M.", "7.6", "Mashle by Hajime Komoto", "A boy without magic enters a magic academy, using raw physical strength to fit in."],
        ["Helck", "7.6", "Helck by Nanaki Nanao", "A human hero participates in a demon tournament to become the next Demon Lord, claiming to hate humans."],
        ["Undead Unluck", "7.7", "Undead Unluck by Yoshifumi Tozuka", "An immortal man and an unlucky girl team up to fight cosmic rules and gods."],
        ["Sacrificial Princess", "7.7", "Niehime to Kemono no Ou by Yu Tomofuji", "A human sacrificial girl is chosen as the bride of the beast King of demons."],
        ["Ragna Crimson", "7.3", "Ragna Crimson by Daiki Kobayashi", "A dragon hunter teams up with the mysterious Crimson to wipe out all dragons."],
        ["Ishura", "6.8", "Ishura by Keiso & Meguri", "The Demon King has died, and a group of shura warriors compete to earn the title of True Hero."],
        ["Unnamed Memory", "6.7", "Unnamed Memory by Kuji Furumiya", "A cursed prince climbs a witch's tower, making a contract to break his curse."],
        ["Wistoria: Wand/Sw.", "7.5", "Tsue to Tsurugi no Wistoria by Fujino Omori", "A boy unable to use magic climbs a magic tower using physical sword techniques."],
        ["Bye Bye, Earth", "6.5", "Bye Bye, Earth by Tow Ubukata (Manga adapt.)", "The only human girl in a world of animal people travels the earth with a giant sword."],
        ["Sengoku Youko", "7.6", "Sengoku Youko by Satoshi Mizukami", "A human boy and a fox demon travel feudal Japan fighting demons and rogue samurai."],
        ["Delico's Nursery", "6.8", "Delico's Nursery by Kenichi Suemitsu (Manga adapt.)", "Noble vampires are forced to balance solving local murders with running a nursery."],
        ["Elusive Samurai", "7.9", "The Elusive Samurai by Yusei Matsui", "A young prince escaping a massacre uses his extraordinary evasion skills to survive."],
        ["Noragami Aragoto", "8.3", "Noragami by Adachitoka", "Yato faces the god of war Bishamon over ancient family betrayals and curses."],
        ["Blue Exorcist Kyoto", "7.4", "Ao no Exorcist by Kazue Kato", "Rin and his classmates search for the stolen Left Eye of the Impure King in Kyoto."],
        ["Blue Exorcist S3", "7.2", "Ao no Exorcist by Kazue Kato", "The Illuminati organization reveals itself, targeting Exorcists and Rin's allies."],
        ["D.Gray-man Hallow", "7.4", "D.Gray-man by Katsura Hoshino", "Allen Walker faces suspicions within the Black Order as his connection to the 14th grows."],
        ["Hellsing Ultimate", "8.4", "Hellsing by Kouta Hirano", "A vampire lord serves a royal family fighting against undead Nazi organizations."],
        ["Hellsing", "7.5", "Hellsing by Kouta Hirano", "A classic adaptation of Alucard defending London from vampire incursions."],
        ["Drifters", "7.9", "Drifters by Kouta Hirano", "Historical warriors are summoned to an alternate world to wage war against tyrants."],
        ["Seraph of the End", "7.5", "Owari no Seraph by Takaya Kagami", "Human soldiers fight vampires using cursed gear in a post-apocalyptic world."],
        ["Seraph S2 Kessen", "7.6", "Owari no Seraph by Takaya Kagami", "The Moon Demon Company launches an assault against the vampire nobles in Nagoya."],
        ["To Your Eternity", "8.4", "Fumetsu no Anata e by Yoshitoki Oima", "An immortal orb is sent to Earth, taking the forms of living things it gains emotional bonds with."],
        ["To Your Eternity S2", "8.0", "Fumetsu no Anata e by Yoshitoki Oima", "Fushi battles the Nokkers across centuries, learning to build towns and protect humanity."],
        ["Somali & Forest", "7.8", "Somali to Mori no Kamisama by Yako Gureishi", "A golem forest guardian travels a demon-dominated world protecting a lost human girl."],
        ["Arslan Senki", "7.7", "The Heroic Legend of Arslan by Yoshiki Tanaka & Hiromu Arakawa", "A young prince battles to reclaim his kingdom from a foreign religious empire."],
        ["Arslan Senki S2", "7.5", "The Heroic Legend of Arslan by Yoshiki Tanaka & Hiromu Arakawa", "Arslan organizes his troops in the port city of Gilan, preparing a counter-invasion."],
        ["Moribito", "8.1", "Seirei no Moribito by Nahoko Uehashi & Kamui Fujiwara", "A female spear warrior is hired to protect a young prince carrying a water spirit egg."],
        ["Beast Player Erin", "8.2", "Kemono no Souja Erin by Nahoko Uehashi & Itoe Takemoto", "A girl learns to breed and communicate with royal beasts, caught in a civil war."],
        ["Twelve Kingdoms", "8.0", "Twelve Kingdoms by Fuyumi Ono & Haruhiko Mikimoto", "A high school girl is summoned to a massive, Chinese-mythology-inspired kingdom as its queen."],
        ["Record Lodoss War", "7.4", "Record of Lodoss War by Ryo Mizuno (Manga adapt.)", "A classic fantasy party of warriors travels Lodoss to prevent dark gods from waking."],
        ["Slayers", "7.7", "Slayers by Hajime Kanzaka & Shoko Yoshinaka", "An eccentric, powerful sorceress and her dim-witted swordsman companion hunt treasure."],
        ["Slayers Next", "8.0", "Slayers by Hajime Kanzaka & Shoko Yoshinaka", "Lina searchs for the Claire Bible to unlock ancient magic, fighting demon lords."],
        ["Slayers Try", "7.8", "Slayers by Hajime Kanzaka & Shoko Yoshinaka", "Lina and her friends travel to a foreign continent to stop an interdimensional god invasion."],
        ["Bastard!!", "7.0", "Bastard!! by Kazushi Hagiwara", "A dark wizard is resurrected to defend a kingdom from his former demonic generals."],
        ["Orphen", "6.9", "Sorcerous Stabber Orphen by Yoshinobu Akita & Yuuya Kusaka", "A sorcerer travels a medieval fantasy land searching for his sister who turned into a dragon."],
        ["Orphen (2020)", "6.7", "Sorcerous Stabber Orphen by Yoshinobu Akita", "A modern remake of Orphen's journey to save Azalie from the Tower of Fang."],
        ["Rave Master", "7.1", "Rave by Hiro Mashima", "A young boy chosen as the Rave Master searches for legendary stones to destroy the dark card force."],
        ["Cardcaptor Sakura", "8.2", "Cardcaptor Sakura by CLAMP", "A primary school girl accidentally releases magical cards, forced to capture them all."],
        ["Cardcaptor Clear C.", "7.7", "Cardcaptor Sakura: Clear Card by CLAMP", "Sakura enters junior high, discovering her cards have gone blank, and capturing new transparent ones."],
        ["Sailor Moon", "7.7", "Bishoujo Senshi Sailor Moon by Naoko Takeuchi", "A schoolgirl gains magical brooch powers, recruiting sailor guardians to protect the Moon princess."],
        ["Sailor Moon Crystal", "7.4", "Bishoujo Senshi Sailor Moon by Naoko Takeuchi", "A modern, manga-faithful anime adaptation of Usagi's battles against the Dark Kingdom."],
        ["Sailor Moon Cosmos", "7.9", "Bishoujo Senshi Sailor Moon by Naoko Takeuchi", "The final movie adaptation covering the Sailor Stars arc and the final battle with Sailor Galaxia."],
        ["Madoka Magica", "8.4", "Puella Magi Madoka Magica by Magica Quartet & Hanokage", "Two middle school girls are offered contracts to become magical girls, uncovering a dark cycle."],
        ["Yuki Yuna is Hero", "7.4", "Yuki Yuna wa Yuusha de Aru by Takahiro & Touko Kanno", "High school club members use a mobile app to transform and defend their world from deities."],
        ["Princess Tutu", "8.1", "Princess Tutu by Mizuo Shinonome", "A duck is transformed into a girl, dancing ballet to recover the shattered heart of a prince."],
        ["Pretear", "7.0", "Pretear by Junichi Sato & Kaori Naruse", "A high school girl merges powers with seven Leafe knights to become the legendary Pretear princess."],
        ["Magic Knight Raye.", "7.4", "Magic Knight Rayearth by CLAMP", "Three girls visiting Tokyo Tower are summoned to a fantasy world to pilot mechanical rune gods."],
        ["Fushigi Yuugi", "7.7", "Fushigi Yuugi by Yuu Watase", "Two schoolgirls are sucked into an ancient Chinese book, becoming priestesses of rival gods."],
        ["Escaflowne", "7.7", "The Vision of Escaflowne by Katsu Aki", "A girl is transported to a fantasy world where she guides a king piloting a mechanical dragon suit."],
        ["Kamigami no Asobi", "6.8", "Kamigami no Asobi by Toyo & Kazuki Yone", "A schoolgirl is summoned to an academy built by Zeus to teach divine gods about human love."]
    ]
};
