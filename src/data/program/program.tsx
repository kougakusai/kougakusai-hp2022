import React, { ReactNode } from 'react';

const student = {
  variety: '学生企画',
  data: [
    {
      programName: 'こうがく祭実行委員会企画',
      groupName: 'こうがく祭実行委員会',
      place: 'E1棟',
      introduction: `こうがく祭実行委員で行う企画として、今年は5つをやる予定です！
ぜひお越しください！`,
      image: '',
    },
    {
      programName: 'フォーミュラマシンの展示および走行',
      groupName: '茨城大学学生フォーミュラ部',
      place: '未定', //TODO
      introduction: `走行予定時刻
1回目 11:30～
2回目 13:00～
3回目 14:30～`,
      image: '',
    },
    {
      programName: "Cherry's ダンスステージ",
      groupName: "Cherry's",
      place: 'ステージ',
      introduction: `こんにちは！チアリーディングサークルCherry'sです。メンバー全員がこうがく祭初参加となります！可愛く、元気にときどきセクシーにパフォーマンスします♡豪華なスタンツも披露予定なのでお見逃しなく！`,
      image: '',
    },
    {
      programName: 'イスラム建築魅力のミュージアム',
      groupName: '建築・構造　室',
      place: '図書館',
      introduction: `美しすぎるイスラム建築（アーチ・青いタイル・ミナレット・ドーム型屋根・魔法の色・建築・アラビア書道等）を紹介しましょうか。`,
      image: '',
    },
    {
      programName: 'こうがく祭写真展',
      groupName: '茨城大学写真部',
      place: '多賀工業会',
      introduction: `部員が撮った自然や風景、乗り物など様々な写真を展示しています。
ぜひ来てね！`,
      image: '',
    },
    {
      programName: 'フォルクローレの風',
      groupName: '中南米音楽研究会日立支部',
      place: 'ステージ',
      image: '',
    },
    {
      programName: '茨吹日立バンド2022',
      groupName: '茨城大学吹奏楽団日立支部',
      place: 'ステージ',
      image: '',
    },
    {
      programName: '健康フェスタ in 日立',
      groupName: '茨城大学生協学生委員会',
      place: 'E1棟周辺',
      introduction: `握力測定やアルコールパッチテストを行います！
ぜひ遊びに来て下さい！`,
    },
    {
      programName: '作品展示会',
      groupName: '漫画研究会工学部',
      place: '図書館',
      image: '',
    },
    {
      programName: '模型飛行機を作って飛ばそう！',
      groupName: '航空技術研究会',
      place: 'E1棟周辺',
      image: '',
    },
    {
      programName: '大道芸', //TODO
      groupName: '',
      place: 'ステージ',
      introduction: ``,
      image: '',
      groupLink: '',
    },
  ],
};

const teacher = {
  variety: '教員企画',
  data: [
    {
      programName: '子供ラジオ作りチャレンジ教室の会',
      groupName:
        '茨城大学工学部子供ラジオ作りチャレンジ教室の会(代表孫冉、後援日立市教育委員会)',
      place: 'E3棟 2階 201実験室',
      introduction: (
        <>
          小学生(4ー6年)を対象に、ものづくりの面白さを知ってもらうと共に、科学技術に興味を持ってもらうことを狙いとして、仕組みが簡単で、原理も簡単に理解できるFMトランジスタラジオのキットを自分の手で作ってもらいます。本学の教職員・学生が懇切丁寧に工作指導をします。
          <br />
          定員：10名
          <br />
          参加資格：小学校4年以上、9月28日(水)より先着順で受け付けます
          <br />
          申し込み〆切：令和4年10月21日(金)
          <br />
          <a
            href="https://forms.office.com/r/eCuewrTabR/"
            title="Formsで申し込みをする"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            申し込みはこちら
          </a>
        </>
      ),
      image: '',
    },
    {
      programName: '1本のワイヤーで作る錯覚アート工作教室',
      groupName: '電気電子システム工学科矢内浩文（人間情報工学研究室）',
      place: 'E5棟 5階 501号室',
      introduction: `1本のワイヤーを、切らずに、曲げるだけで、錯覚ワイヤークラフトを工作します。ここで取りあげる錯覚は「逆遠近錯視（hollow-faceillusion）」です。動かないはずなのに、こっちを振り向く錯覚です。キリンや犬をモチーフにした架空の動物を工作します。参加者のみなさんには「基本形」を作っていただきます。コツがつかめれば、イニシャルを入れたり、フォトスタンドにすることもできます。
【場所】E5棟 5階 501号室
【時間】10時～16時（最終受付15:30）
【対象年齢】10歳～大人※付き添いがあれば9歳以下のお子さんでも大丈夫です
【その他】参加無料基本形の工作は15分程度`,
      image: '',
      groupLink: 'http://hfy-lab.eng.ibaraki.ac.jp/wirecraft/',
    },
    {
      programName: 'かがくであそぼ2022',
      groupName: '物質科学工学科',
      place: 'N6棟 1階 101号室',
      introduction: (
        <>
          参加方法：当日現地に直接お越し下さい。整理券を配布します。
          <br />
          整理券配布予定時刻 9:30, 11:30, 13:30
          <br />
          この企画では色々な実験を行って頂くことで、科学の面白さを実感できる体験コースを提供致します。
          <br />
          <ul className="list-inside list-disc">
            <li>色が変わるビーズでストラップを作ろう！</li>
            <li>プラバンでキーホルダーを作ろう！</li>
            <li>食品サンプルを作ってみよう！</li>
            <li>タンパク質の結晶を作ってみよう！</li>
          </ul>
          などなど、10分程度で体験できる科学実験が揃っています。
          <br />
          幼稚園～小学生の方でも安全にお楽しみ頂けるよう、学科の教員と大学生・大学院生が指導いたします。
          <br />
          教員・学生一同、皆様のご来場をお待ちしています。
        </>
      ),
      image: '',
      // groupLink: 'http://www.msae.ibaraki.ac.jp/こうがく祭で「がかくであそぼ」を開催/',  TODO リンク先確認
    },
    {
      programName: '指輪づくり体験',
      groupName: '金属アクセサリークラブ',
      place: 'W3棟 2階 203号室',
      introduction: `部員が指輪づくりの指導を行います‼オリジナルの指輪を作ってみませんか⁉
素材：シルバー
場所：W3棟2階203号室
所要時間：約1時間程度
受付開始時間：10:00
感染症対策のため体験者数を制限する関係で受け付け順で整理券を配布します。体験時間が遅くなってしまう可能性もあります。`,
      image: '',
    },
    {
      programName: '◆多言語名刺づくり◆',
      groupName: '福村真紀子',
      place: 'E1棟 1F 国際交流サロン',
      introduction: `費用：¥0　場所：E1棟 1F 国際交流サロン
中国語のピン音、アラビア語、英語で名刺を作りませんか。
いろいろな文化の書道も体験できます!
留学生と日本人学生が協力してサポートします。`,
      image: '',
    },
    {
      programName: '鍛冶体験',
      groupName: '鍛師 -kanachi- 協力：物質科学工学科　材料系研究室',
      place: 'W3棟前',
      introduction: `真っ赤になった棒を叩いてみませんか！？
皆さんどなたでも気軽にご参加ください！
体力に自信がない人でも大丈夫！！
学生と一緒に楽しみましょう！！
料金：無料`,
      image: '',
    },
    {
      programName: '浮いて回る！磁気浮上型人工心臓',
      groupName:
        '工学部　機械システム工学科　増澤・長・北山研究室（ライフサポート人工心臓チーム）',
      place: 'E5棟 3階',
      introduction: `磁気浮上型人工心臓は送血する羽根車が磁気浮上して回るため、摩耗する部品がなく、高寿命で生体に優しい人工心臓です。人工心臓についての説明、実物展示の他、心臓がどの程度の仕事を行なっているのか体験できるデモや触って分かる磁気浮上デモを用意しています。`,
      image: '',
    },
    {
      programName: 'UVレジン工作',
      groupName: '技術部',
      place: 'E1棟 4階',
      introduction: `キーホルダーを作ってみよう！（無料）
整理券を配布します。
午前の部　 9:30ごろから
午後の部　11:30ごろから`,
      image: '',
    },
  ],
};

const local = {
  variety: '地元企画',
  data: [
    {
      programName: '日立特別支援学校　高等部作業製品販売',
      groupName: '日立市日立特別支援学校高等部',
      place: '未定', //TODO
      introduction: `４つの作業班で作製した製品、野菜を販売いたします。よろしくお願いします。 `,
      groupLink: 'https://www.city.hitachi.lg.jp/shien/',
    },
    {
      programName: '放課後かくかくしかじか',
      groupName: '日立第二高等学校演劇部',
      place: 'ステージ',
      introduction: ``, // TODO 時間調整中
    },
  ],
};

const mockLessonMechsys = {
  variety: '模擬授業（機械システム工学科）',
  data: [
    {
      programName: '燃やしてもCO2が増えない？2050年のガソリン',
      groupName: '酒井康行',
      place: '未定',
      introduction:
        '2050年カーボンニュートラル実現のために、自動車はどのように変わっていくべきなのか？すべて電気自動車になるのか？ガソリンスタンドはなくなるのか？我々はCO2を排出しない新しい燃料、カーボンリサイクル合成燃料に注目しています。世界最先端の研究内容、これからみなさんが研究していくべき課題について紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: 'ロボットを用いて未知の生物原理を科学する',
      groupName: '福岡康宏',
      place: '未定',
      introduction:
        '生物学上わかっていない現象を、ロボットを使って解明するという、地味な使われ方をしているロボットが存在します。我々の研究室では、4足動物や蛇などがどのような動作原理で推進しているのかを猫ロボット、蛇ロボットを作って動かすことで解明し、生物学に貢献することを目指しています。結果として、生ものの動物実験ではわからない歩行、蛇行に関する神経構造と物理の関係が徐々にわかってきています。',
      image: '',
      groupLink: '',
    },
  ],
};
const mockLessonEes = {
  variety: '模擬授業（電気電子システム工学科）',
  data: [
    {
      programName: '自動運転や高度安全運転支援のためのミリ波レーダ技術',
      groupName: '武田茂樹',
      place: '未定',
      introduction:
        '自動車の運転支援に用いられるミリ波レーダは、レーダ前方にあるターゲットの、距離、相対速度、角度を測定することができます。特に、悪天候時や夜間においては、カメラを補助することで安全性を高められます。しかし、現状では、例えば、レーダの前方にトラックと人が存在するような条件下では、人を認識できない等の課題があります。本講義では、高性能角度推定技術による現状の課題解決策など、最新の研究成果を紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: 'モノの使いやすさが計算できるって本当？',
      groupName: '矢内浩文',
      place: '未定',
      introduction:
        'パソコンやスマホ操作の素早さには法則があります。自動販売機で飲み物を買うときや、用紙に名前を記入するときにも、同じ法則が関わっています。この法則を使えば、「使いやすさを計算」することができます。人間と機器の間を取り持つものをヒューマンインターフェイスといいます。この授業では、ヒューマンインターフェイスに関する法則について、その場での体験を交えながら学びます。【学問分野としては認知科学です】',
      image: '',
      groupLink: '',
    },
    {
      programName: '社会生活を支えるための様々な光ファイバ技術',
      groupName: '横田浩久',
      place: '未定',
      introduction:
        '光ファイバの用途としては光ファイバ通信がよく知られていますが、光ファイバは情報通信以外の様々な用途に応用されています。皆さんの身の回りでも普段気が付かないところに光ファイバが使われています。この授業では、光ファイバの構造や特長についてお話しした後、光ファイバの機能性素子や計測への応用など、快適で安全な社会生活を支えるために用いられている様々な光ファイバ技術を研究内容と合わせて紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '超伝導物質と超伝導を使った応用技術',
      groupName: '島影尚',
      place: '未定',
      introduction:
        '超伝導は名前の通り、伝導が"超"で行われる現象です。すなわち、電気抵抗がゼロという非常に特異的な状態が実現される現象です。本模擬授業では、まず、どのような物質が超伝導になるのかを紹介します。その後に、超伝導状態でどういう現象が起こるのか、また、超伝導体を用いた工学的応用はどのようなものがあるのか、などの話などを、できるだけわかりやすく解説いたします。',
      image: '',
      groupLink: '',
    },
  ],
};
const mockLessonMsae = {
  variety: '模擬授業（物質科学工学科）',
  data: [
    {
      programName: 'コロイド化学を基礎とした機能性複合ナノ粒子の開発の実例',
      groupName: '小林芳男',
      place: '未定',
      introduction:
        '微粒子は材料の塊には見られない特異な性質を発現することが知られています。微粒子が浮かんでいるものや状態をコロイドと呼びますが、コロイドは身近にたくさん存在しています。微粒子は凝集や劣化しやすいので、その特異な性質が損なわれてしまします。私の研究室では、コロイド化学という学問を基盤としてそれを防止する方法を開発しています。本授業ではその実例を紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName:
        '大型加速器を用いてみる原子の世界 ― 世界で茨城大でしかできないこと',
      groupName: '大山研司',
      place: '未定',
      introduction:
        '茨城大の近隣には、大強度陽子加速器施設J-PARCという、世界トップの研究施設があり、材料や生命現象を原子レベルで観測する研究が行われています。茨城大はJ-PARCを最も活発に利用している大学です。この模擬授業では、J-PARCで行われている先端の材料研究を紹介します。とくに、半導体の性能を原子レベルで解明する研究で、世界で茨城大でしかできない「白色中性子ホログラフィー」について紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '水素を合成するタンパク質',
      groupName: '庄村 康人',
      place: '未定',
      introduction:
        '我々人類がエネルギー貯蔵物質として水素に注目しはじめたのは比較的最近のことですが、太古より多くの微生物は水素から生育に必要なエネルギーを取り出したり、これとは逆に余剰なエネルギーを水素として放出したりするシステムを獲得して利用してきました。本授業では、これらの水素代謝に関与するタンパク質の構造や性質について解説します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '永野 隆敏',
      groupName: '',
      place: '未定',
      introduction:
        'パソコンを利用したシミュレーション「計算機シミュレーション」で、いろいろな物質（金属、合金、半導体など）の性質を明らかにする理論や手法を紹介する。また、企業が製品を開発する上で問題を解決するための利用事例を取り上げる（例えば、パソコンで利用されている半導体の中の金属や、自動車ボディの加工など）。授業の後半では、簡単な体験実験を行い、磁石に付かない鉄を簡単な方法で付くようにしてしまう例を紹介する。',
      image: '',
      groupLink: '',
    },
  ],
};
const mockLessonCis = {
  variety: '模擬授業（情報工学科）',
  data: [
    {
      programName: 'VRと民俗芸能の伝承支援',
      groupName: '柴田傑',
      place: '未定',
      introduction:
        '現在、様々な場面でVR(バーチャルリアリティ)を目にする機会が増えています。VRはゴーグル型デバイスだけでなく、様々な技術で実現されています。一方で、各地域には地域の文化を反映した貴重な文化財としての民俗芸能があります。プロでない演技者が演じる民俗芸能は、失伝の危機に瀕しているものも少なくありません。本講義では、VR技術を民俗芸能の伝承支援に活用する事例ついて紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '創造性を引き出すコミュニケーションを科学する',
      groupName: '笹井一人',
      place: '未定',
      introduction:
        '人は創造的な活動を行っていると幸せを感じやすいといわれています。しかしながら、イノベーションを要求される現代において、人はコミュニケーションにおいて何故こんなにも息苦しく感じるのでしょうか。それは本当の自分を見せられないから？言いたいことが言えないから？知能の新しい研究から、創造性を引き出し自分を開放するとは何か、そしてそれを支援する技術の可能性について、これまでに探求してきたことをお話しします。',
      image: '',
      groupLink: '',
    },
  ],
};
const mockLessonCivil = {
  variety: '模擬授業（都市システム工学科）',
  data: [
    {
      programName: '図書館建築の近未来',
      groupName: '熊澤貴之',
      place: '未定',
      introduction:
        '本講義では、日常生活の中で身近な建築として図書館を対象に、図書館の起源を含めたこれまでの建築空間と機能に関する流れをお話します。その後、近年、増えてきた滞在型図書館の中から滞在者の居場所と行動をお話し、空間の持つ力を理解してもらいます。講義の中で、共に、図書館建築の近未来を考えていきましょう。',
      image: '',
      groupLink: '',
    },
    {
      programName: '津波から命を守る堤防とハザードマップ',
      groupName: '信岡尚道',
      place: '未定',
      introduction:
        '防災工学の一つ、津波減災について解説をします。海岸の堤防は、どれぐらいの大きさの津波までを防げる？堤防の高さはどのような考え方で決まっている？　なぜそのような考え方をするの？　津波ハザードマップと堤防の関係は？　これらについて説明していきます。さらに理想の堤防の高さをみなさんと考えていきます。最後には津波から命を守るためのポイントについて、過去の事例も踏まえて、お伝えします。',
      image: '',
      groupLink: '',
    },
    {
      programName: '人が快適に過ごすための建築環境デザインの考え方',
      groupName: '辻村壮平',
      place: '未定',
      introduction:
        '建築ではデザインの美しさも重要ですが、たとえ見た目は非常に良くても、建築内部の空間が暑いあるいは寒い、喧しい、暗い、臭いなどと利用者が感じてしまうと不快感に繋がり、それは決して良い建築物とはいえません。このように、建築では様々な性能を満たさなければならず、その一つに「利用者が快適に使える」ことがとても重要です。本講義では、建築における快適性について、それをどのように実現するかをやさしく解説します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '頻発化・激甚化する土砂災害に対して地盤力学は何ができるか',
      groupName: '小林 薫',
      place: '未定',
      introduction:
        '短時間大雨による斜面崩壊、土石流や堤防決壊等の土砂災害の激甚化、頻発化が加速しています。被害を最小限に食い止め、国民の生命と財産を守るための防災・減災技術は環境問題と共に喫緊の課題です。本講義では、例として斜面崩壊をあげて、その発生メカニズムを地盤力学の観点から分かりやすく解説すると共に、報道で頻繁に耳にする「土砂災害警戒情報」を正しく理解して頂き、皆さんの安全行動の一助になる様に解説致します。',
      image: '',
      groupLink: '',
    },
  ],
};

const openLabMechsys = {
  variety: '研究室公開（機械システム工学科）',
  data: [
    {
      programName: '車田研究室',
      groupName: '',
      place: 'W1棟 204a室',
      introduction:
        '水素貯蔵タンク材料や核融合炉用耐熱材料などについて展示及び説明',
      image: '',
      groupLink: '',
    },
    {
      programName: '倉本・小林研究室',
      groupName: '',
      place: 'W1棟 107室',
      introduction:
        '自動車などのカーボンニュートラルを支える高強度金属材料についての研究紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '道辻研究室',
      groupName: '',
      place: 'W1棟 203室',
      introduction: '鉄道車両に関する研究、実験装置の展示',
      image: '',
      groupLink: '',
    },
    {
      programName: '小貫研究室',
      groupName: '',
      place: 'E3棟 318室',
      introduction:
        '3Dスキャナ、デプスカメラ、近赤外カメラ、サーモグラフィカメラ、偏光カメラ、高速度カメラのデモ・加工したウエハ表面評価の研究紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '梅津研究室',
      groupName: '',
      place: 'E2棟 408室',
      introduction:
        '床プロジェクション、物体に映像が追従するタンジブル学習、非接触クイズマシン、メディアアート（文字モザイク）などの体験',
      image: '',
      groupLink: '',
    },
    {
      programName: '増澤・長・北山研究室',
      groupName: '',
      place: 'E5棟 302室',
      introduction: '（教員企画）浮いて回る時期浮上型人工心臓',
      image: '',
      groupLink: '',
    },
    {
      programName: '金野・田中・酒井・境田研究室',
      groupName: '',
      place: 'W4棟 内燃実験室',
      introduction:
        'カーボンニュートラルを実現するための先進エンジンシステムや、次世代燃料研究について紹介します。実験に用いている実機エンジンや燃料電池も紹介！！',
      image: '',
      groupLink: '',
    },
    {
      programName: '伊藤研究室',
      groupName: '',
      place: 'W1棟 304a室',
      introduction: 'レーザマーカによるストラップ製作・鏡面研削加工の紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '計算工学研究室',
      groupName: '',
      place: 'E2棟 404室',
      introduction: '研究内容のパネル展示（パネル展示は4F廊下）',
      image: '',
      groupLink: '',
    },
    {
      programName: '森研究室',
      groupName: '',
      place: 'E2棟 205室',
      introduction: '介助福祉に役立つメカトロ機器を中心とした研究紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '周・尾嶌研究室',
      groupName: '',
      place: 'E3棟 107N室',
      introduction: 'ウエハ加工関連、3次元計測について研究紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: 'CFD研究室',
      groupName: '',
      place: 'W1棟 403a室',
      introduction:
        '流体のシミュレーションと津波の仮想体験システムについて紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '長山研究室',
      groupName: '',
      place: 'E2棟 301室',
      introduction:
        'マイクロ・ナノバイオメカニクス「医療応用を目指した細胞工学技術の紹介」',
      image: '',
      groupLink: '',
    },
    {
      programName: '清水（淳）・金子研究室',
      groupName: '',
      place: 'E3棟 208室',
      introduction:
        'シミュレーションを駆使し原子摩擦や切削加工を科学する研究の紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '知能システム制御研究室',
      groupName: '',
      place: 'E3棟 301室 307室',
      introduction:
        'お花を描く二軸ロボットマニピュレータの制御、倒立走行ロボットの制御、三重水槽の水位制御、タワークレーンの制振制御、人工知能ロボットによる画像認識',
      image: '',
      groupLink: '',
    },
    {
      programName: '福岡研究室',
      groupName: '',
      place: 'E3棟 312室',
      introduction: '4足ロボットと蛇ロボットに関する研究の紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '数理生命科学研究室研究室',
      groupName: '',
      place: 'E2棟 401室',
      introduction:
        '「物理学」と「情報科学」の理論の接点 研究内容のポスター展示（展示は3F廊下）',
      image: '',
      groupLink: '',
    },
  ],
};
const openLabEes = {
  variety: '研究室公開（電気電子システム工学科）',
  data: [
    {
      programName: '人間情報工学研究室',
      groupName: '矢内浩文',
      place: 'E5棟 501室',
      introduction: `【企画1】1000分の1秒単位で早押し能力を精密測定——手と足はどっちが素早い？
【企画2】錯覚ワイヤークラフト工作教室（参加無料）`,
      image: '',
      groupLink: '',
    },
    {
      programName: '電磁波システム研究室',
      groupName: '武田、孫',
      place: 'E5棟 4F廊下',
      introduction: `電磁波システム研究室
・光無線システムによるデータ送受信装置
・土中での水の移動検出装置
・火災検知と避難経路システム（2022年度講義 組み込みシステム実践基礎の成果物展示）
・赤外線センサを用いた夜間の警備システム（2022年度講義 組み込みシステム実践基礎の成果物展示）`,
      image: '',
      groupLink: '',
    },
    {
      programName: '島影尚',
      groupName: '',
      place: 'E6棟 302室',
      introduction: '超伝導エレクトロニクスの研究内容の紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: 'モータードライブ研究室',
      groupName: '岩路善尚',
      place: 'E6棟 201室',
      introduction: 'モータの最新制御技術',
      image: '',
      groupLink: '',
    },
    {
      programName: '複雑系システム制御研究室',
      groupName: '杉谷栄規',
      place: 'E3棟 204室',
      introduction:
        '物事が互いにやり取りすることで生じる「同期現象」の紹介展示。通信信号処理研究室と合同展示を企画。',
      image: '',
      groupLink: '',
    },
    {
      programName: '通信信号処理研究室',
      groupName: '宮嶋照行',
      place: 'E3棟 204室',
      introduction: '次世代ワイヤレス通信の技術',
      image: '',
      groupLink: '',
    },
    {
      programName: 'ナノエレクトロニクス研究室',
      groupName: '青野友祐',
      place: 'E2棟 710室',
      introduction: '小さくすると見えてくるエレクトロニクスの世界',
      image: '',
      groupLink: '',
    },
    {
      programName: 'エネルギーシステム研究室',
      groupName: '田中正志',
      place: 'E2棟 610室',
      introduction: `（1）太陽光発電システムのメンテナンス手法
→キセノンフラッシュランプとキャパシタを利用した診断法の研究紹介
（2）リチウムイオン電池のリサイクル
→大気圧高電圧パルス放電を利用した電池正極部材回収法の研究紹介
→数値流体解析（CFD）と離散要素解析（DEM）の連成計算による回収シミュレーション`,
      image: '',
      groupLink: '',
    },
  ],
};
const openLabMsae = {
  variety: '研究室公開（物質科学工学科）',
  data: [
    {
      programName: '小林芳男',
      groupName: '',
      place: 'N6棟 207室',
      introduction:
        '研究室紹介パネルを用いて研究内容を説明します。また、ナノ粒子を液体中で合成する際に使用する装置をお見せします。',
      image: '',
      groupLink: '',
    },
    {
      programName: '池田輝之',
      groupName: '',
      place: 'W3棟 107室',
      introduction: `熱から電気をつくろう。
熱から電気をつくる材料を使って、電気をつくる体験をして頂きます。`,
      image: '',
      groupLink: '',
    },
    {
      programName: '近藤健',
      groupName: '',
      place: 'N6棟 107室',
      introduction:
        '有機化学の研究開発や光化学の面白さを、実験室見学を通して説明します',
      image: '',
      groupLink: '',
    },
    {
      programName: '佐藤成男',
      groupName: '',
      place: 'W3棟 103室 404室',
      introduction:
        '硬貨の中の結晶欠陥のレクチャーし、それを評価する装置の紹介します',
      image: '',
      groupLink: '',
    },
    {
      programName: '田中伊知朗',
      groupName: '',
      place: 'N1棟 201室',
      introduction:
        '1/6モデルのJ-PARCタンパク質回折装置の展示と関連する研究を紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '倉持昌弘',
      groupName: '',
      place: 'N2棟 106b室',
      introduction:
        'モデル動物線虫を顕微鏡観察しながら、私たちが取り組む生命科学研究について紹介します。',
      image: '',
      groupLink: '',
    },
    {
      programName: '木村成伸',
      groupName: '',
      place: 'N2棟 207A室 206A室 206B室 201B室 101B室 107室',
      introduction:
        '遺伝子組換え実験やたんぱく質の精製・機能解析に用いる研究設備や装置を見学してもらい、研究内容をわかりやすく説明します。',
      image: '',
      groupLink: '',
    },
  ],
};
const openLabCis = {
  variety: '研究室公開（情報工学科）',
  data: [
    {
      programName: '上田・髙橋・原口・堀田研究室',
      groupName: '',
      place: 'S1棟 102室',
      introduction: '社会を支えるソフトウェアシステムの作り方',
      image: '',
      groupLink: '',
    },
    {
      programName: '鎌田研究室',
      groupName: '',
      place: 'S1棟 1Fラウンジ',
      introduction:
        'オリジナルの子供向けプログラミング言語によるビデオゲーム制作',
      image: '',
      groupLink: '',
    },
    {
      programName: '新納・佐々木研究室',
      groupName: '',
      place: 'S1棟 2F廊下',
      introduction: 'ディープラーニングによる自然言語処理',
      image: '',
      groupLink: '',
    },
    {
      programName: '外岡研究室',
      groupName: '',
      place: 'S1棟 201室',
      introduction: 'リモートセンシング&地理空間情報工学の研究紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '小澤・羽渕・大瀧・野口研究室',
      groupName: '',
      place: 'S1棟 102室',
      introduction: '可視光を用いた光ワイヤレス通信',
      image: '',
      groupLink: '',
    },
    {
      programName: '藤芳・宮本研究室',
      groupName: '',
      place: 'S1棟 102室',
      introduction: '小中学生向けユニバーサルデザイン教科書の紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '米山・品川研究室',
      groupName: '',
      place: 'S1棟 201室',
      introduction: '見て触って体験する暗号プロトコル',
      image: '',
      groupLink: '',
    },
    {
      programName: '岡田・笹井研究室',
      groupName: '',
      place: 'S1棟 2F廊下',
      introduction: 'データベース学習支援システムの紹介',
      image: '',
      groupLink: '',
    },
    {
      programName: '柴田研究室',
      groupName: '',
      place: 'S1棟 1Fラウンジ',
      introduction: 'VRによる「伝承支援」「見える化」技術の体験',
      image: '',
      groupLink: '',
    },
  ],
};

// const tmp = {
//   variety: '',
//   data: [
//     {
//       programName: '',
//       groupName: '',
//       place: '',
//       introduction: ``,
//       image: '',
//       groupLink: '',
//     },
//   ],
// };

export const programData: {
  variety: string;
  data: {
    programName: string;
    groupName: string;
    place: string;
    introduction?: string | ReactNode;
    image?: string;
    groupLink?: string;
    twitter?: string;
    instagram?: string;
    registration?: boolean;
  }[];
}[] = [
  student,
  teacher,
  local,
  mockLessonMechsys,
  mockLessonEes,
  mockLessonMsae,
  mockLessonCis,
  mockLessonCivil,
  openLabMechsys,
  openLabEes,
  openLabMsae,
  openLabCis,
];

export const stageProgramList = [
  {
    start: '10:30',
    title: '日立第二高等学校演劇部',
  },
  {
    start: '11:00',
    title: '中南米音楽研究会日立支部',
  },
  {
    start: '11:30',
    title: '学生フォーミュラカーの走行と展示',
  },
  {
    start: '12:00',
    title: '茨城大学吹奏楽団日立支部',
  },
  {
    start: '12:30',
    title: '中南米音楽研究会日立支部',
  },
  {
    start: '13:00',
    title: '学生フォーミュラカーの走行と展示',
  },
  {
    start: '13:30',
    title: 'Cherry’s ダンスステージ',
  },
  {
    start: '14:00',
    title: 'ビンゴ大会',
  },
  {
    start: '14:30',
    title: '学生フォーミュラカーの走行と展示',
  },
  {
    start: '15:00',
    title: '大道芸サークルスウェット組合',
  },
];
