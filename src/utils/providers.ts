export type Provider = {
  name: string;
  image: string; // path under /public
  twitterUrl: string;
  description: string;
  delay?: number; // seconds for FadeIn
};

export const featuredProviders: Provider[] = [
  {
    name: "Marcell",
    image: "/providers/marcell.jpg",
    twitterUrl: "https://x.com/MarcellxMarcell",
    description:
      "One of the most degenerate crypto traders known for his banger 100x+ calls , huge trades and has lead one of the most succesful CTO's in memecoins $PNUT, $PEPE, $ASTER and many more.",
    delay: 0.1,
  },
  {
    name: "IT4I",
    image: "/providers/it4i.jpg",
    twitterUrl: "https://x.com/0xIT4I",
    description:
      "One of the best and most respected traders in the space, Founder of BBB, advanced tools for onchain trading and spiritual leader. Known for his unique trading methodologies and mental guidance in the space.",
    delay: 0.1,
  },
  {
    name: "MissorAlways",
    image: "/providers/missoralways.jpg",
    twitterUrl: "https://x.com/missoralways",
    description:
      "Savvy trader who turned 10 ETH into $2 million backing $KTA early, now champions $MEMECOIN with strategic positioning and deep understanding of sustainable hype and growth.",
    delay: 1.4,
  },
  {
    name: "Daumen",
    image: "/providers/daumen.jpg",
    twitterUrl: "https://x.com/daumenxyz",
    description:
      "Known for being able to size plays and also trench at the highest level. Expert at social growth, gaining over 100k followers within his first year. Publicly called MLG and NOMNOM at 20k. Multiple size plays including PNUT, WORM, GOAT, KORI, and a few others",
    delay: 0.2,
  },
  {
    name: "Loopier",
    image: "/providers/loopier.jpg",
    twitterUrl: "https://x.com/Loopierr",
    description:
      "Street-smart authentic voice in Solana ecosystem, known for heavy longs on sub-100M launchpads with no-hype approach.",
    delay: 0.7,
  },
  {
    name: "Spider",
    image: "/providers/spider.jpg",
    twitterUrl: "https://x.com/SpiderCrypto0x",
    description:
      "Precision trader with 150K+ followers who targets risk-meets-precision opportunities, posts detailed trade plans like a seasoned sniper.",
    delay: 0,
  },
  {
    name: "Patty",
    image: "/providers/patty.jpg",
    twitterUrl: "https://x.com/patty_fi",
    description:
      "Famous for finding Degods early and round tripping. Best know for giving you 1000x entries on multiple memecoins. All while still working his day job and raising two kids.",
    delay: 0.2,
  },
  {
    name: "Letterbomb",
    image: "/providers/letterbomb.jpg",
    twitterUrl: "https://x.com/ihateoop",
    description:
      "Rising \"Korean Quant\" favorite with emotional disassociation to trades and magnetic timeline presence that connects effortlessly with traders.",
    delay: 0.3,
  },
  {
    name: "Joji",
    image: "/providers/joji.jpg",
    twitterUrl: "https://x.com/metaversejoji",
    description:
      "Veteran memecoin trader with 260k+ followers, earned trust with precise market reads and early calls on coins like $WIF and $GIGA and also with most Solana and Base projects.",
    delay: 0.8,
  },
  {
    name: "Shmoo",
    image: "/providers/shmoo.png",
    twitterUrl: "https://x.com/ShmooNFT",
    description:
      "Leader of 500k+ members with sharp chart analysis and early calls like $Zeus, $Hood, $Wolf and $Brett. Focuses on education.",
    delay: 1.0,
  },
  {
    name: "Minister",
    image: "/providers/minister.jpg",
    twitterUrl: "https://x.com/MinisterOfNFTs",
    description:
      "Secret co-founder of mfers with 165K followers, advocate for Pudgy Penguins, Azuki, and Honeyland, champions \"Make NFTs Great Again.\"",
    delay: 0.6,
  },
  {
    name: "Padrino",
    image: "/providers/padrino.jpg",
    twitterUrl: "https://x.com/padrino_sol",
    description:
      "",
    delay: 0.5,
  },
  // {
  //   name: "Steki",
  //   image: "/providers/steki.jpg",
  //   twitterUrl: "https://x.com/stekisteks",
  //   description:
  //     "The Jeet Hunter, a crypto legend on X, famed for turning jeet panic sells into moonshot wins by buying dips with fearless conviction.",
  //   delay: 0.8,
  // },
  // {
  //   name: "Cold",
  //   image: "/providers/cold.jpg",
  //   twitterUrl: "https://x.com/cold_xyz",
  //   description:
  //     "Cold, a Solana trench trader known for early calls like $CHONKY and $MYRO, mixing on-chain dominance with CT humor.",
  //   delay: 1.4,
  // },
];

export const moreProviders: Provider[] = [
  // {
  //   name: "Risk",
  //   image: "/providers/risk.jpg",
  //   twitterUrl: "https://x.com/risk100x",
  //   description:
  //     "Rising Solana memecoin star known for spotting early narratives and holding with conviction. Strategic calls like $KORI earned him praise.",
  //   delay: 0.4,
  // },
  {
    name: "Kickz",
    image: "/providers/kickz.jpg",
    twitterUrl: "https://x.com/kickzeth",
    description:
      "50K+ followers, $150M+ raised, drove early wins like Abstract and Pudgy Penguins, pairs on-chain sleuthing with CT sentiment.",
    delay: 0.4,
  },
  {
    name: "Kitty",
    image: "/providers/kitty.jpg",
    twitterUrl: "https://x.com/0xkitty69",
    description:
      "Kitty, the self-proclaimed GCOAT of meme coin calls, nailed plays like $WOJAK and a 100x $TROLL, earning a spot as one of CT's sharpest cats.",
    delay: 1.4,
  },
  {
    name: "Tactical",
    image: "/providers/tactical.jpg",
    twitterUrl: "https://x.com/tacticalexe",
    description:
      "Built reputation calling key tops and bottoms on BTC and SPX using sentiment analysis, champions \"gameplan first, reaction second.\"",
    delay: 1.0,
  },
  {
    name: "Poizer",
    image: "/providers/poizer.jpg",
    twitterUrl: "https://x.com/POIZERR",
    description:
      "\"Lakewood Slasher of CT,\" huge Solana player known for front-running narrative rotations, nailed plays like $WIF, $BODEN, $CAT.",
    delay: 1.2,
  },
  {
    name: "Cat Dev",
    image: "/providers/catdev.png",
    twitterUrl: "https://x.com/cryptofrags",
    description:
      "Crypto OG dev since 2017, token and smart contract developer for Ethereum and Solana, pioneer in profitable token contracts.",
    delay: 1.4,
  },
  {
    name: "Lama",
    image: "/providers/lama.jpg",
    twitterUrl: "https://x.com/Lamaxbt",
    description:
      "Here since 2017, rare blend of trader, builder, founder, alwaya early to rotations & unmatched when it comes to speculation & due diligence. Ct’s fav Ai quant.",
    delay: 0.6,
  },
  {
    name: "Frags",
    image: "/providers/frags.jpg",
    twitterUrl: "https://x.com/cryptofrags",
    description:
      "Gem hunter who reads memecoin narratives like orderbooks, vocal about $rocky and $titcoin early. With a blend of humor and market insight, a real standout in the crypto space.",
    delay: 0.5,
  },
  {
    name: "Trench Warior",
    image: "/providers/trenchwarrior.jpg",
    twitterUrl: "https://x.com/trenchwarior",
    description:
      "The Trench Warrior. Cult architect and leader of multiple 9-Fig projects. I see the signs and build convictions Σ",
    delay: 0.5,
  }
];


