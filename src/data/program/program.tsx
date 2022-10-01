import React from 'react';

const committee = {
  variety: 'こうがく祭実行委員会企画',
  data: [
    {
      programName: 'こうがく祭実行委員会企画',
      groupName: 'こうがく祭実行委員会',
      place: 'E1棟',
      introduction: `こうがく祭実行委員で行う企画として、今年は5つをやる予定です！
ぜひお越しください！`,
      image: '',
    },
  ],
};
const school = {
  variety: '学校企画',
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
const withinCampus = {
  variety: '学内企画',
  data: [
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
      introduction: `こんにちは！チアリーディングサークルCherry'sです。メンバー全員がこうがく祭初参加となります！可愛く，元気にときどきセクシーにパフォーマンスします♡豪華なスタンツも披露予定なのでお見逃しなく！`,
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
const engineeringDepart = {
  variety: '技術部企画',
  data: [
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
      introduction: '超電導エレクトロニクスの研究内容の紹介',
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
      programName: '田中伊知郎',
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
      programName: '上田・高橋・原口・堀田研究室',
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

export const programData = [
  committee,
  school,
  withinCampus,
  engineeringDepart,
  teacher,
  openLabMechsys,
  openLabEes,
  openLabMsae,
  openLabCis,
];
