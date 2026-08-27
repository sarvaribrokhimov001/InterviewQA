export const interviewQuestions = [
  {
    id: 1,
    category: "JavaScript",
    question:
      "JavaScript'da let, const va var o'rtasidagi asosiy farqlar nimada va zamonaviy loyihalarda qaysi biridan foydalanish ma'qul?",
    answer:
      "let - block scope'ga ega bo'lgan va keyinchalik qayta qiymat berish mumkin bo'lgan o'zgaruvchi. const ham block scope'ga ega, lekin uning binding'iga qayta qiymat berib bo'lmaydi. var esa function scope bilan ishlaydi va hoisting hamda scope xususiyatlari sababli zamonaviy JavaScript kodlarida odatda let yoki const afzal ko'riladi.",
    options: [
      "let block scope'ga ega va qayta qiymat olishi mumkin, const block scope'ga ega va qayta assign qilinmaydi, var esa function scope bilan ishlaydi.",
      "let va const faqat class ichida ishlaydi, var esa faqat function ichida ishlaydi.",
      "const har doim o'zgarishi mumkin, let esa hech qachon o'zgarmaydi.",
      "Uchalasining scope va qiymat berish jihatidan hech qanday farqi yo'q.",
    ],
  },

  {
    id: 2,
    category: "JavaScript",
    question:
      "JavaScript'da == va === operatorlari o'rtasida qanday farq bor va nima sababdan ko'p hollarda === ishlatiladi?",
    answer:
      "== qiymatlarni solishtirishdan oldin ayrim holatlarda type coercion bajaradi. === esa qiymat bilan birga uning type'ini ham tekshiradi va implicit conversion qilmaydi. Shu sababli === natijasi aniqroq va kutilmagan type conversion muammolarini kamaytiradi.",
    options: [
      "=== qiymat va type'ni qat'iy solishtiradi, == esa ayrim holatlarda type coercion bajaradi.",
      "== type'ni tekshiradi, === esa faqat qiymatni tekshiradi.",
      "=== faqat TypeScript'da mavjud.",
      "Ikkala operator o'rtasida hech qanday farq yo'q.",
    ],
  },

  {
    id: 3,
    category: "JavaScript",
    question:
      "JavaScript'da hoisting nima va variable hamda function declarationlarda u qanday namoyon bo'ladi?",
    answer:
      "Hoisting - JavaScript execution jarayonida declaration'larning o'z scope'i ichida yuqoriga ko'tarilgandek ishlash xususiyati. Function declaration odatda declaration'dan oldin chaqirilishi mumkin. var declaration ham hoisted bo'ladi, lekin uning qiymati undefined bo'lishi mumkin, let va const esa temporal dead zone sababli declaration'dan oldin ishlatilmaydi.",
    options: [
      "Hoisting declarationlarning scope ichida oldindan qayta ishlanishi bo'lib, var, let, const va function declarationlarda turlicha namoyon bo'ladi.",
      "Hoisting faqat CSS fayllarini yuklash jarayonidir.",
      "Hoisting barcha o'zgaruvchilarni avtomatik ravishda global qiladi.",
      "Hoisting faqat arraylarni sort qilish uchun ishlatiladi.",
    ],
  },

  {
    id: 4,
    category: "JavaScript",
    question:
      "JavaScript'dagi closure nima va u real loyihalarda qanday vaziyatlarda foydali bo'lishi mumkin?",
    answer:
      "Closure - ichki function o'zi yaratilgan lexical scope'dagi o'zgaruvchilarga keyinchalik ham murojaat qila oladigan mexanizm. Masalan, private state yaratish, function factory yozish, callbacklar va event handlerlarda closure juda foydali. Tashqi function tugaganidan keyin ham kerakli o'zgaruvchilar closure orqali saqlanib qolishi mumkin.",
    options: [
      "Closure functionning o'zi yaratilgan lexical scope'dagi o'zgaruvchilarga keyinchalik ham murojaat qilish imkonini beradi.",
      "Closure faqat objectlarni nusxalash uchun ishlatiladi.",
      "Closure JavaScript'da mavjud emas va faqat TypeScript xususiyatidir.",
      "Closure function ichidagi barcha o'zgaruvchilarni global qiladi.",
    ],
  },

  {
    id: 5,
    category: "JavaScript",
    question:
      "JavaScript'da primitive va reference type'lar o'rtasidagi farq nimada?",
    answer:
      "Primitive qiymatlarga string, number, boolean, null, undefined, bigint va symbol kabi type'lar kiradi. Object, array va function kabi qiymatlar esa reference type sifatida qaraladi. Primitive qiymatlar odatda qiymatning o'zi bilan ishlaydi, objectlarda esa o'zgaruvchilar bir xil obyektga reference saqlashi mumkin.",
    options: [
      "Primitive qiymatlar oddiy qiymat sifatida ishlaydi, object va array kabi qiymatlar esa reference orqali boshqariladi.",
      "Primitive type'lar faqat objectlardan tashkil topadi.",
      "Array primitive type hisoblanadi.",
      "Objectlar hech qachon reference orqali uzatilmaydi.",
    ],
  },

  {
    id: 6,
    category: "JavaScript",
    question:
      "JavaScript'da spread operatori (...) va rest operatori (...) bir-biridan qanday farq qiladi?",
    answer:
      "Ikkalasida ham bir xil uch nuqta sintaksisi ishlatiladi, lekin vazifasi kontekstga qarab farq qiladi. Spread mavjud array yoki object qiymatlarini yoyish uchun ishlatiladi. Rest esa bir nechta qiymatlarni bitta array yoki object ko'rinishida yig'ib olish uchun ishlatiladi.",
    options: [
      "Spread qiymatlarni yoyadi, rest esa bir nechta qiymatlarni bitta to'plamga yig'adi.",
      "Spread faqat stringlar uchun, rest faqat numberlar uchun ishlatiladi.",
      "Ikkalasi ham faqat React'da ishlaydi.",
      "Spread va rest mutlaqo bir xil vazifani bajaradi.",
    ],
  },

  {
    id: 7,
    category: "JavaScript",
    question:
      "JavaScript'da destructuring nima va u kod yozishda qanday qulaylik beradi?",
    answer:
      "Destructuring array yoki object ichidagi qiymatlarni alohida o'zgaruvchilarga qulay tarzda ajratib olish imkonini beradi. Masalan, objectdan kerakli propertylarni to'g'ridan-to'g'ri o'zgaruvchiga olish mumkin. Bu kodni qisqaroq va o'qilishi osonroq qilishga yordam beradi.",
    options: [
      "Destructuring array yoki object qiymatlarini alohida o'zgaruvchilarga ajratib olish imkonini beradi.",
      "Destructuring faqat objectlarni o'chirish uchun ishlatiladi.",
      "Destructuring browser cache'ini tozalaydi.",
      "Destructuring faqat CSS classlarni ajratadi.",
    ],
  },

  {
    id: 8,
    category: "JavaScript",
    question:
      "JavaScript'da map(), filter() va reduce() metodlari qanday vazifalarni bajaradi va ularning farqi nimada?",
    answer:
      "map() arraydagi har bir element asosida yangi array yaratadi. filter() berilgan shartga mos keladigan elementlardan yangi array hosil qiladi. reduce() esa array elementlarini bitta yakuniy qiymatga yig'ish uchun ishlatiladi, masalan umumiy summa yoki object yaratish uchun.",
    options: [
      "map yangi array yaratadi, filter shartga mos elementlarni tanlaydi, reduce esa elementlarni bitta natijaga yig'adi.",
      "Uchalasining vazifasi ham arrayni faqat sort qilishdan iborat.",
      "filter yangi array qaytarmaydi.",
      "reduce faqat React componentlarini render qiladi.",
    ],
  },

  {
    id: 9,
    category: "JavaScript",
    question:
      "JavaScript'da null va undefined o'rtasidagi farq nimada?",
    answer:
      "undefined odatda qiymat berilmagan yoki qiymat mavjud emasligini bildiradi. null esa dasturchi tomonidan qiymat ataylab mavjud emasligini ko'rsatish uchun ishlatiladi. Masalan, o'zgaruvchi e'lon qilinib qiymat berilmasa undefined bo'lishi mumkin, object property esa ataylab null qilib qo'yilishi mumkin.",
    options: [
      "undefined ko'pincha qiymat berilmaganini, null esa qiymat ataylab yo'qligini bildiradi.",
      "null va undefined har doim aynan bir xil ma'noni anglatadi.",
      "undefined faqat numberlar uchun ishlatiladi.",
      "null faqat function return qiymati sifatida ishlatiladi.",
    ],
  },

  {
    id: 10,
    category: "JavaScript",
    question:
      "JavaScript'da synchronous va asynchronous kod o'rtasidagi farq nimada?",
    answer:
      "Synchronous kod odatda operatsiyalarni ketma-ket bajaradi va keyingi ish oldingi ish tugashini kutadi. Asynchronous kod esa uzoq davom etadigan operatsiyalar, masalan API request yoki timer davomida boshqa JavaScript ishlarini bajarishga imkon beradi. Promise, async/await va callbacklar asynchronous jarayonlarni boshqarishda ishlatiladi.",
    options: [
      "Synchronous kod ketma-ket bajariladi, asynchronous kod esa ayrim operatsiyalarni kutish vaqtida boshqa ishlarni davom ettirishga imkon beradi.",
      "Asynchronous kod JavaScript'da mavjud emas.",
      "Synchronous kod faqat browserdan tashqarida ishlaydi.",
      "async/await synchronous kodni butunlay yo'q qiladi.",
    ],
  },

  {
    id: 11,
    category: "JavaScript",
    question:
      "Promise nima va uning pending, fulfilled hamda rejected holatlari nimani anglatadi?",
    answer:
      "Promise kelajakda tugashi mumkin bo'lgan asynchronous operatsiyaning natijasini ifodalaydi. Pending - operatsiya hali tugamagan holat. Fulfilled - operatsiya muvaffaqiyatli tugagan, rejected esa xatolik bilan tugagan holatni bildiradi.",
    options: [
      "Promise asynchronous operatsiya natijasini ifodalaydi va pending, fulfilled hamda rejected holatlariga ega.",
      "Promise faqat CSS animationlarini boshqaradi.",
      "Promise har doim darhol fulfilled bo'ladi.",
      "Promise faqat arraylarni saqlash uchun ishlatiladi.",
    ],
  },

  {
    id: 12,
    category: "JavaScript",
    question:
      "async va await JavaScript'da Promise bilan ishlashni qanday osonlashtiradi?",
    answer:
      "async function har doim Promise qaytaradi. await esa Promise natijasini kutib turishga imkon beradi va asynchronous kodni ketma-ket yozilgandek o'qishni osonlashtiradi. Xatolarni try/catch yordamida boshqarish ham qulaylashadi.",
    options: [
      "async/await Promise bilan ishlashni soddalashtirib, asynchronous kodni o'qilishi osonroq shaklda yozish imkonini beradi.",
      "async/await Promise o'rniga CSS ishlatadi.",
      "await faqat synchronous functionlarda ishlaydi.",
      "async function hech qachon Promise qaytarmaydi.",
    ],
  },

  {
    id: 13,
    category: "JavaScript",
    question:
      "Event bubbling nima va event delegation bilan qanday bog'liq?",
    answer:
      "Event bubbling event sodir bo'lgan target elementdan uning parent elementlariga qarab yuqoriga tarqalishidir. Event delegation esa shu xususiyatdan foydalanib, ko'plab child elementlarga alohida listener qo'yish o'rniga umumiy parentga bitta listener qo'yish usulidir.",
    options: [
      "Event bubbling eventning child elementdan parentlarga tarqalishidir va event delegation bundan foydalanishi mumkin.",
      "Event bubbling faqat HTTP requestlarda ishlaydi.",
      "Event delegation har bir elementga alohida listener qo'yishni talab qiladi.",
      "Bubbling faqat CSS'da mavjud.",
    ],
  },

  {
    id: 14,
    category: "JavaScript",
    question:
      "Event loop JavaScript'da qanday ishlaydi va u asynchronous kodni bajarishda qanday rol o'ynaydi?",
    answer:
      "JavaScript asosiy call stack orqali kodni bajaradi. Asynchronous operatsiyalar browser yoki runtime tomonidan bajarilib, tayyor bo'lgach callback yoki task queue'ga joylashtiriladi. Event loop call stack bo'shaganida navbatdagi ishni stack'ka olib kelib, asynchronous kodning ishlashini ta'minlaydi.",
    options: [
      "Event loop call stack bo'shaganida navbatdagi asynchronous ishlarni bajarish mexanizmini boshqaradi.",
      "Event loop faqat HTML parsing bilan shug'ullanadi.",
      "Event loop JavaScript kodini kompilyatsiya qilmaydi.",
      "Event loop barcha kodni bir vaqtning o'zida parallel bajaradi.",
    ],
  },

  {
    id: 15,
    category: "JavaScript",
    question:
      "Shallow copy va deep copy o'rtasidagi farq nimada va objectlar bilan ishlaganda nima uchun bu muhim?",
    answer:
      "Shallow copy faqat yuqori darajadagi qiymatlarni nusxalaydi, nested objectlar esa eski reference bilan qolishi mumkin. Deep copy esa nested ma'lumotlarni ham mustaqil nusxalashga harakat qiladi. Bu farq state yoki murakkab objectlarni o'zgartirishda kutilmagan mutation muammolarining oldini olish uchun muhim.",
    options: [
      "Shallow copy nested reference'larni saqlab qolishi mumkin, deep copy esa nested ma'lumotlarni ham mustaqil nusxalashga intiladi.",
      "Shallow copy har doim deep copy'dan chuqurroq nusxa oladi.",
      "Deep copy faqat stringlarda ishlaydi.",
      "Ikkalasining objectlar uchun farqi yo'q.",
    ],
  },

  {
    id: 16,
    category: "JavaScript",
    question:
      "JavaScript'da function declaration va function expression o'rtasidagi asosiy farq nimada?",
    answer:
      "Function declaration alohida function declaration sifatida yoziladi va uning hoisting xususiyati sababli declaration'dan oldin chaqirilishi mumkin. Function expression esa functionni o'zgaruvchiga assign qilish orqali yaratiladi va variable qanday declaration qilinganiga qarab undan oldin foydalanish mumkin yoki mumkin emas.",
    options: [
      "Function declaration alohida declaration sifatida yoziladi, function expression esa functionni o'zgaruvchiga qiymat sifatida biriktiradi.",
      "Function expression faqat class ichida ishlaydi.",
      "Function declaration hech qachon chaqirilmaydi.",
      "Ularning JavaScript'da hech qanday farqi yo'q.",
    ],
  },

  {
    id: 17,
    category: "JavaScript",
    question:
      "Arrow function bilan oddiy function o'rtasidagi this xatti-harakati qanday farq qiladi?",
    answer:
      "Arrow function o'zining alohida this qiymatini yaratmaydi, balki tashqi lexical scope'dagi this'dan foydalanadi. Oddiy functionda esa this chaqirilish usuliga qarab o'zgarishi mumkin. Shu sababli object methodlari yoki callbacklarda bu farqni tushunish muhim.",
    options: [
      "Arrow function o'zining this'ini yaratmaydi va tashqi lexical this'dan foydalanadi.",
      "Arrow function har doim global this'dan foydalanadi.",
      "Oddiy functionning this qiymati hech qachon o'zgarmaydi.",
      "Arrow function faqat React'da ishlaydi.",
    ],
  },

  {
    id: 18,
    category: "JavaScript",
    question:
      "JavaScript'da optional chaining operatori ?. nima uchun ishlatiladi?",
    answer:
      "Optional chaining nested propertyga murojaat qilishda oradagi qiymatlardan biri null yoki undefined bo'lsa xatolik chiqishining oldini olishga yordam beradi. Masalan, user?.profile?.name kabi yozuv orqali mavjud bo'lmagan property zanjirini xavfsiz tekshirish mumkin.",
    options: [
      "?. null yoki undefined bo'lishi mumkin bo'lgan nested qiymatlarga xavfsiz murojaat qilish imkonini beradi.",
      "?. faqat arrayni sort qiladi.",
      "?. JavaScript'da faqat numberlar uchun ishlatiladi.",
      "?. barcha xatolarni avtomatik ravishda tuzatadi.",
    ],
  },

  {
    id: 19,
    category: "JavaScript",
    question:
      "Nullish coalescing operatori ?? va logical OR || o'rtasida qanday farq bor?",
    answer:
      "?? faqat chap tomondagi qiymat null yoki undefined bo'lganda o'ng tomondagi qiymatni qaytaradi. || esa false, 0, empty string va NaN kabi falsy qiymatlarda ham o'ng tomondagi qiymatga o'tadi. Shuning uchun 0 yoki empty string haqiqiy qiymat bo'lishi mumkin bo'lgan holatlarda ?? foydaliroq.",
    options: [
      "?? faqat null yoki undefined holatlarini tekshiradi, || esa barcha falsy qiymatlarda fallback ishlatishi mumkin.",
      "?? va || har doim bir xil natija beradi.",
      "|| faqat nullni tekshiradi.",
      "?? faqat boolean qiymatlar bilan ishlaydi.",
    ],
  },

  {
    id: 20,
    category: "JavaScript",
    question:
      "JavaScript'da Set va Map qanday maqsadlarda ishlatiladi va oddiy objectdan farqi nimada?",
    answer:
      "Set unique qiymatlar to'plamini saqlash uchun ishlatiladi. Map esa key-value juftliklarini saqlaydi va key sifatida turli qiymatlardan foydalanish imkonini beradi. Object ham key-value ma'lumot saqlaydi, lekin Map o'zining maxsus API'si va iterable xususiyatlari bilan ayrim vaziyatlarda qulayroq.",
    options: [
      "Set unique qiymatlar uchun, Map esa key-value ma'lumotlar uchun ishlatiladi va ikkalasining maxsus collection API'lari mavjud.",
      "Set faqat CSS classlarni saqlaydi.",
      "Map faqat numberlarni saqlaydi.",
      "Set va Map React'da mavjud emas.",
    ],
  },

  {
    id: 21,
    category: "JavaScript",
    question:
      "Debounce va throttle o'rtasidagi farq nimada va frontendda qaysi vaziyatlarda ishlatiladi?",
    answer:
      "Debounce eventlar tez-tez kelayotgan paytda callbackni ma'lum vaqt davomida kutib, oxirgi eventdan keyin bir marta ishga tushiradi. Throttle esa callbackni ma'lum vaqt oralig'ida maksimal bir marta ishlatadi. Search input, resize va scroll kabi eventlarda performance yaxshilash uchun ishlatiladi.",
    options: [
      "Debounce oxirgi eventdan keyin ishlaydi, throttle esa callback bajarilish chastotasini cheklaydi.",
      "Debounce va throttle faqat serverda ishlaydi.",
      "Throttle barcha eventlarni o'chirib yuboradi.",
      "Debounce faqat CSS animationlari uchun kerak.",
    ],
  },

  {
    id: 22,
    category: "JavaScript",
    question:
      "Mutable va immutable ma'lumot o'rtasidagi farq nima va React bilan ishlaganda nega immutable update muhim?",
    answer:
      "Mutable obyektni mavjud reference orqali to'g'ridan-to'g'ri o'zgartirish mumkin. Immutable yondashuvda esa mavjud qiymatni o'zgartirish o'rniga yangi object yoki array yaratiladi. React state bilan ishlaganda yangi reference yaratish rendering va state o'zgarishlarini boshqarishni ancha ishonchli qiladi.",
    options: [
      "Immutable update mavjud qiymatni mutate qilmasdan yangi object yoki array yaratish orqali state o'zgarishini boshqaradi.",
      "Immutable ma'lumot faqat database'da ishlatiladi.",
      "Mutable objectni hech qachon o'zgartirib bo'lmaydi.",
      "React state faqat mutable bo'lishi kerak.",
    ],
  },

  {
    id: 23,
    category: "JavaScript",
    question:
      "try, catch va finally bloklari JavaScript'da qanday vazifani bajaradi?",
    answer:
      "try ichida xato berishi mumkin bo'lgan kod yoziladi. Agar exception yuz bersa, catch uni ushlab xatoni boshqarishga imkon beradi. finally esa xato bo'lgan yoki bo'lmaganidan qat'i nazar bajarilishi kerak bo'lgan kodlar uchun ishlatiladi.",
    options: [
      "try xatoga moyil kodni o'raydi, catch xatoni ushlaydi, finally esa har ikki holatda bajarilishi mumkin bo'lgan kod uchun ishlatiladi.",
      "catch faqat successful requestlarda ishlaydi.",
      "finally faqat xato bo'lganda ishlaydi.",
      "try/catch faqat TypeScript'da mavjud.",
    ],
  },

  {
    id: 24,
    category: "JavaScript",
    question:
      "LocalStorage, SessionStorage va Cookie o'rtasidagi asosiy farqlar nimada?",
    answer:
      "LocalStorage ma'lumotni browserda uzoqroq saqlaydi va odatda browser storage hajmi bilan cheklanadi. SessionStorage tab yopilgunga qadar saqlanadi. Cookie esa requestlar bilan serverga yuborilishi mumkin va authentication kabi vaziyatlarda HttpOnly, Secure va SameSite kabi xavfsizlik sozlamalari bilan ishlatilishi mumkin.",
    options: [
      "LocalStorage uzoqroq saqlanadi, SessionStorage sessionga bog'liq, Cookie esa requestlar bilan serverga yuborilishi mumkin.",
      "Uchalasining ishlash mexanizmi va xavfsizlik xususiyatlari aynan bir xil.",
      "Cookie hech qachon serverga yuborilmaydi.",
      "SessionStorage browser yopilgandan keyin ham doim saqlanadi.",
    ],
  },

  {
    id: 25,
    category: "JavaScript",
    question:
      "Garbage collection JavaScript'da nima uchun kerak va u qanday ishlaydi?",
    answer:
      "Garbage collection endi dastur tomonidan foydalanilmayotgan memoryni avtomatik aniqlash va bo'shatish mexanizmidir. JavaScript runtime odatda reachable bo'lmagan objectlarni aniqlab, ularning memory'sini qayta ishlatish uchun bo'shatadi. Dasturchi odatda memoryni qo'lda free qilmaydi.",
    options: [
      "Garbage collection foydalanilmayotgan objectlar egallagan memoryni avtomatik aniqlab bo'shatishga yordam beradi.",
      "Garbage collection barcha objectlarni har safar o'chiradi.",
      "Garbage collection faqat CSS fayllarini tozalaydi.",
      "JavaScript'da garbage collection mavjud emas.",
    ],
  },

  {
    id: 26,
    category: "TypeScript",
    question:
      "TypeScript nima va u JavaScript loyihasiga qanday foyda beradi?",
    answer:
      "TypeScript JavaScript'ga static type checking qo'shadigan programming language hisoblanadi. U development vaqtida type bilan bog'liq xatolarni oldindan aniqlashga, editor autocomplete'ini yaxshilashga va katta loyihalarda kodni tushunarli hamda maintainable qilishga yordam beradi.",
    options: [
      "TypeScript JavaScript'ga static typing qo'shib, development vaqtida ko'plab type xatolarini aniqlashga yordam beradi.",
      "TypeScript JavaScript o'rniga database sifatida ishlaydi.",
      "TypeScript faqat CSS yozish uchun ishlatiladi.",
      "TypeScript browserda HTML o'rnini bosadi.",
    ],
  },

  {
    id: 27,
    category: "TypeScript",
    question:
      "TypeScript'da type va interface o'rtasidagi asosiy farqlar nimada?",
    answer:
      "type va interface ikkalasi ham object shaklini tasvirlash uchun ishlatilishi mumkin. Interface declaration merging imkoniyatiga ega va object-oriented APIlar uchun qulay. type esa union, intersection, primitive aliaslar va murakkab type compositionlar uchun juda mos.",
    options: [
      "Ikkalasi ham type tuzishda ishlatiladi, lekin interface declaration mergingni qo'llaydi, type esa union va boshqa compositionlar uchun qulay.",
      "interface faqat number uchun ishlaydi.",
      "type objectlarni tasvirlay olmaydi.",
      "type va interface TypeScript'da umuman mavjud emas.",
    ],
  },

  {
    id: 28,
    category: "TypeScript",
    question:
      "TypeScript'dagi union type nima va u qaysi vaziyatlarda foydali?",
    answer:
      "Union type qiymat bir nechta belgilangan type'dan biri bo'lishi mumkinligini bildiradi. Masalan, status o'zgaruvchisi 'loading', 'success' yoki 'error' qiymatlaridan birini qabul qilishi mumkin. Bu API va component propslarini aniqroq modellashtirishga yordam beradi.",
    options: [
      "Union type qiymat bir nechta oldindan belgilangan type'dan biriga tegishli bo'lishini bildiradi.",
      "Union type faqat arraylarni yaratadi.",
      "Union type barcha qiymatlarni any qiladi.",
      "Union type faqat React router uchun ishlatiladi.",
    ],
  },

  {
    id: 29,
    category: "TypeScript",
    question:
      "TypeScript'da type narrowing nima va typeof yoki instanceof bundan qanday foydalanadi?",
    answer:
      "Type narrowing kengroq type'ni ma'lum bir code branch ichida aniqroq type'ga toraytirish jarayonidir. Masalan, typeof yordamida qiymat string ekanligini tekshirish mumkin. instanceof esa qiymat ma'lum bir class yoki constructor asosida yaratilganini tekshirishda ishlatiladi.",
    options: [
      "Type narrowing runtime tekshiruvlar yoki type guardlar orqali keng type'ni aniqroq type'ga toraytiradi.",
      "Type narrowing barcha type'larni any ga o'zgartiradi.",
      "Type narrowing faqat CSS bilan ishlaydi.",
      "TypeScript type narrowingni qo'llab-quvvatlamaydi.",
    ],
  },

  {
    id: 30,
    category: "TypeScript",
    question:
      "TypeScript'da generic nima va nima sababdan u reusable kod yozishda foydali?",
    answer:
      "Generic function, interface yoki classga ma'lum bir type bilan cheklanmasdan turib type xavfsizligini saqlash imkonini beradi. Masalan, generic function string, number yoki object bilan ishlashi mumkin, lekin input va output o'rtasidagi type munosabatini saqlab qoladi.",
    options: [
      "Generic kodni turli type'lar bilan qayta ishlatish imkonini beradi va shu bilan birga type xavfsizligini saqlaydi.",
      "Generic faqat CSS classlar uchun ishlatiladi.",
      "Generic barcha type tekshiruvlarini o'chiradi.",
      "Generic faqat database query uchun kerak.",
    ],
  },

  {
    id: 31,
    category: "TypeScript",
    question:
      "TypeScript'dagi optional property nima va u qanday yoziladi?",
    answer:
      "Optional property object ichidagi property mavjud bo'lishi ham, bo'lmasligi ham mumkinligini bildiradi. Uning nomidan keyin ? belgisi qo'yiladi. Masalan, name?: string yozilsa name property'si majburiy emasligini anglatadi.",
    options: [
      "Property nomidan keyin ? qo'yish uning majburiy emasligini bildiradi.",
      "Optional property har doim number bo'lishi kerak.",
      "Optional property objectni readonly qiladi.",
      "Optional property faqat functionlarda ishlaydi.",
    ],
  },

  {
    id: 32,
    category: "TypeScript",
    question:
      "TypeScript'da any, unknown va never type'lari qanday farqlanadi?",
    answer:
      "any type checkingni deyarli o'chirib qo'yadi va qiymat bilan ehtiyotkorliksiz ishlashga imkon beradi. unknown xavfsizroq bo'lib, qiymatdan foydalanishdan oldin uning type'ini tekshirishni talab qiladi. never esa hech qachon qiymat qaytarmaydigan function yoki imkonsiz holatlarni ifodalashda ishlatiladi.",
    options: [
      "any type checkingni cheklaydi, unknown xavfsizroq tekshiruv talab qiladi, never esa hech qachon yuz bermaydigan yoki qiymat qaytarmaydigan holatni bildiradi.",
      "Uchalasining ham vazifasi aynan bir xil.",
      "unknown barcha type tekshiruvlarini o'chiradi.",
      "never har doim string qiymat qaytaradi.",
    ],
  },

  {
    id: 33,
    category: "TypeScript",
    question:
      "TypeScript'da readonly modifier nima uchun ishlatiladi?",
    answer:
      "readonly property yaratilgandan keyin unga qayta qiymat berishni TypeScript darajasida taqiqlaydi. Bu objectning ayrim qismlarini tasodifiy o'zgartirishdan himoya qilishga yordam beradi. Bu runtime'da objectni mutlaqo immutable qilib qo'ymaydi, asosan compile-time tekshiruvdir.",
    options: [
      "readonly propertyga keyinchalik qayta qiymat berishni TypeScript compile-time tekshiruvi orqali cheklaydi.",
      "readonly objectni browserdan o'chirib yuboradi.",
      "readonly faqat CSS propertylarida ishlaydi.",
      "readonly barcha nested objectlarni avtomatik deep freeze qiladi.",
    ],
  },

  {
    id: 34,
    category: "TypeScript",
    question:
      "TypeScript'da enum nima va qachon undan foydalanish mumkin?",
    answer:
      "enum bog'liq bo'lgan named constant qiymatlar to'plamini ifodalash uchun ishlatiladi. Masalan, user role yoki status kabi qiymatlar uchun enum ishlatish mumkin. Biroq zamonaviy loyihalarda union literal type ko'pincha sodda va qulay alternativa bo'lishi mumkin.",
    options: [
      "enum bog'liq named constant qiymatlar to'plamini ifodalash uchun ishlatiladi.",
      "enum faqat array sort qilish uchun ishlatiladi.",
      "enum JavaScript functionlarini o'chiradi.",
      "enum faqat CSS ranglarini saqlaydi.",
    ],
  },

  {
    id: 35,
    category: "TypeScript",
    question:
      "Type assertion nima va undan foydalanishda nima uchun ehtiyot bo'lish kerak?",
    answer:
      "Type assertion TypeScript'ga ma'lum bir qiymatni qanday type sifatida ko'rishni xohlayotganimizni bildirish imkonini beradi. U runtime'da hech qanday type conversion qilmaydi. Shuning uchun noto'g'ri assertion yozilsa, TypeScript tekshiruvidan o'tgan bo'lsa ham runtime'da xatolik yuz berishi mumkin.",
    options: [
      "Type assertion TypeScript'ga qiymatni ma'lum type sifatida ko'rishni aytadi, lekin runtime'da qiymatni o'zgartirmaydi.",
      "Type assertion har doim qiymatni boshqa type'ga convert qiladi.",
      "Type assertion faqat CSS uchun ishlatiladi.",
      "Type assertion runtime xatolarini avtomatik tuzatadi.",
    ],
  },

  {
    id: 36,
    category: "TypeScript",
    question:
      "TypeScript'da intersection type (&) nima uchun ishlatiladi?",
    answer:
      "Intersection type bir nechta type'larning talablarini birlashtirib, ularning barchasiga mos keladigan yangi type yaratadi. Masalan, User va Admin type'larini birlashtirib ikkala type'dagi propertylarga ega bo'lgan type hosil qilish mumkin.",
    options: [
      "Intersection type bir nechta type talablarini birlashtirib, ularning barchasiga mos keladigan yangi type yaratadi.",
      "Intersection type faqat type'ni o'chirish uchun ishlatiladi.",
      "Intersection type union bilan aynan bir xil ishlaydi.",
      "Intersection faqat CSS selector hisoblanadi.",
    ],
  },

  {
    id: 37,
    category: "TypeScript",
    question:
      "TypeScript'da utility type'lar, masalan Partial, Pick va Omit nima uchun foydali?",
    answer:
      "Utility type'lar mavjud type asosida yangi type yaratishni osonlashtiradi. Partial barcha propertylarni optional qiladi, Pick kerakli propertylarni tanlaydi, Omit esa ayrim propertylarni chiqarib tashlaydi. Ular API response va form model kabi vaziyatlarda juda foydali.",
    options: [
      "Utility type'lar mavjud type'lardan yangi va kerakli variantlarni tez yaratishga yordam beradi.",
      "Utility type'lar faqat JavaScript kodini ishga tushiradi.",
      "Partial barcha propertylarni readonly qiladi.",
      "Omit barcha propertylarni qo'shib beradi.",
    ],
  },

  {
    id: 38,
    category: "TypeScript",
    question:
      "TypeScript'da function parameterlari va return type'larini aniq ko'rsatishning foydasi nimada?",
    answer:
      "Parameter va return type'larini aniq belgilash function qanday ma'lumot qabul qilishi va qanday natija qaytarishini tushunarli qiladi. Bu noto'g'ri argument berish yoki noto'g'ri qiymat qaytarish kabi xatolarni development vaqtida aniqlashga yordam beradi.",
    options: [
      "Function contractini aniq qilib, noto'g'ri argument va return qiymatlarini oldindan aniqlashga yordam beradi.",
      "Functionni tezroq internetga ulaydi.",
      "Type yozish functionni avtomatik async qiladi.",
      "Return type faqat CSS bilan bog'liq.",
    ],
  },

  {
    id: 39,
    category: "TypeScript",
    question:
      "TypeScript'da declaration merging nima?",
    answer:
      "Declaration merging bir xil nomdagi ayrim declarationlarni TypeScript tomonidan bitta declaration sifatida birlashtirish imkoniyatidir. Interface'lar bunda keng tarqalgan misol hisoblanadi. Bu kutubxona type'larini kengaytirishda ham foydali bo'lishi mumkin.",
    options: [
      "TypeScript ayrim bir xil nomdagi declarationlarni, ayniqsa interface'larni, bitta declarationga birlashtira oladi.",
      "Declaration merging barcha source fayllarni o'chiradi.",
      "Bu faqat JavaScript browser API'sidir.",
      "Declaration merging arraylarni birlashtirish uchun ishlatiladi.",
    ],
  },

  {
    id: 40,
    category: "TypeScript",
    question:
      "TypeScript'da strict mode nima va u loyihaga qanday ta'sir qiladi?",
    answer:
      "strict mode type checkingni ancha qat'iylashtiradigan bir nechta compiler tekshiruvlarini yoqadi. Masalan, null bilan bog'liq xatolar va implicit any kabi muammolarni oldindan aniqlashga yordam beradi. Katta loyihalarda strict mode kod sifatini yaxshilashi mumkin.",
    options: [
      "strict mode TypeScript type tekshiruvlarini kuchaytirib, ko'plab potential xatolarni development vaqtida aniqlaydi.",
      "strict mode faqat production serverni tezlashtiradi.",
      "strict mode TypeScript'ni JavaScript'dan o'chiradi.",
      "strict mode faqat CSS validation uchun ishlatiladi.",
    ],
  },

  {
    id: 41,
    category: "React",
    question:
      "React nima va u an'anaviy DOM bilan ishlashdan qanday farq qiladi?",
    answer:
      "React user interface yaratish uchun ishlatiladigan JavaScript kutubxonasi bo'lib, UI'ni componentlarga ajratish imkonini beradi. React declarative yondashuvdan foydalanadi va state yoki props o'zgarganda kerakli UI qismlarini yangilashni boshqaradi. Bu katta interfeyslarni modular qilishga yordam beradi.",
    options: [
      "React componentlarga asoslangan UI kutubxonasi bo'lib, state o'zgarishlari asosida UI yangilanishini boshqarishga yordam beradi.",
      "React faqat backend API yaratish uchun ishlatiladi.",
      "React CSS framework hisoblanadi.",
      "React database engine hisoblanadi.",
    ],
  },

  {
    id: 42,
    category: "React",
    question:
      "React component nima va yaxshi component qanday xususiyatlarga ega bo'lishi kerak?",
    answer:
      "Component UI'ning mustaqil va qayta ishlatilishi mumkin bo'lgan qismi hisoblanadi. Yaxshi component odatda aniq bitta vazifaga ega, tushunarli props qabul qiladi va imkon qadar keraksiz bog'liqliklardan holi bo'ladi. Componentlarni kichik va qayta ishlatiladigan qismlarga ajratish kodni maintain qilishni osonlashtiradi.",
    options: [
      "Component UI'ning qayta ishlatiladigan qismi bo'lib, imkon qadar aniq vazifaga va tushunarli API'ga ega bo'lishi kerak.",
      "Component faqat database jadvali hisoblanadi.",
      "Component faqat CSS propertylardan iborat bo'ladi.",
      "React componentlari qayta ishlatilmaydi.",
    ],
  },

  {
    id: 43,
    category: "React",
    question:
      "React'da props va state o'rtasidagi farq nimada?",
    answer:
      "Props componentga tashqaridan beriladigan ma'lumot bo'lib, component odatda uni o'zi o'zgartirmaydi. State esa componentning ichki boshqaradigan ma'lumotidir va o'zgarganda qayta renderga sabab bo'lishi mumkin. Parent component child componentga props orqali ma'lumot uzatishi mumkin.",
    options: [
      "Props tashqaridan keladi, state esa component ichida boshqariladi va state o'zgarishi renderga ta'sir qilishi mumkin.",
      "Props har doim state'dan o'zgaruvchan bo'ladi.",
      "State faqat CSS ranglarini saqlaydi.",
      "Props faqat backenddan kelishi kerak.",
    ],
  },

  {
    id: 44,
    category: "React",
    question:
      "useState Hook nima va state o'zgarganda React'da nima sodir bo'ladi?",
    answer:
      "useState functional component ichida lokal state yaratish va boshqarish uchun ishlatiladi. Setter function orqali state yangilanganda React componentni qayta render qiladi va yangi state asosida UI'ni yangilaydi. State qiymatini to'g'ridan-to'g'ri mutate qilish o'rniga setterdan foydalanish kerak.",
    options: [
      "useState component ichida state saqlaydi va setter orqali state o'zgarganda componentni qayta render qilishga sabab bo'ladi.",
      "useState faqat API route yaratadi.",
      "useState CSS animationini boshqaradi.",
      "useState faqat class componentlarda ishlaydi.",
    ],
  },

  {
    id: 45,
    category: "React",
    question:
      "useEffect Hook nima va dependency array uning ishlashiga qanday ta'sir qiladi?",
    answer:
      "useEffect component renderingdan tashqaridagi side effectlarni boshqarish uchun ishlatiladi. Dependency array bo'sh bo'lsa effect odatda mountdan keyin bir marta ishlaydi. Dependencylar berilsa, ulardan biri o'zgarganda effect qayta bajariladi.",
    options: [
      "useEffect side effectlarni boshqaradi va dependency array effect qachon qayta bajarilishini belgilashga yordam beradi.",
      "useEffect faqat CSS style beradi.",
      "Bo'sh dependency array effectni har bir renderda ishlatadi.",
      "useEffect faqat serverda ishlaydi.",
    ],
  },

  {
    id: 46,
    category: "React",
    question:
      "useEffect ichidagi cleanup function nima uchun kerak va qaysi holatlarda ishlatiladi?",
    answer:
      "Cleanup function effect qayta ishlashidan yoki component unmount bo'lishidan oldin resurslarni tozalash uchun ishlatiladi. Masalan event listenerni olib tashlash, subscriptionni yopish yoki timerlarni clear qilish mumkin. Bu memory leak va keraksiz side effectlarning oldini olishga yordam beradi.",
    options: [
      "Cleanup event listener, subscription va timer kabi resurslarni tozalash uchun ishlatiladi.",
      "Cleanup componentni avtomatik o'chirib yuboradi.",
      "Cleanup faqat CSS classlarni o'chiradi.",
      "Cleanup faqat API response'ni JSONga aylantiradi.",
    ],
  },

  {
    id: 47,
    category: "React",
    question:
      "React'da controlled va uncontrolled componentlar o'rtasidagi farq nimada?",
    answer:
      "Controlled inputning qiymati React state orqali boshqariladi va value hamda onChange kabi propslar orqali nazorat qilinadi. Uncontrolled input esa qiymatini DOMning o'zi boshqaradi va kerak bo'lganda ref orqali olinishi mumkin. Formani murakkab boshqarish kerak bo'lsa controlled yondashuv ko'p ishlatiladi.",
    options: [
      "Controlled input React state orqali boshqariladi, uncontrolled input esa qiymatni asosan DOM orqali boshqaradi.",
      "Controlled input React bilan ishlamaydi.",
      "Uncontrolled input faqat serverda ishlaydi.",
      "Ularning hech qanday farqi yo'q.",
    ],
  },

  {
    id: 48,
    category: "React",
    question:
      "React'da key prop nima uchun kerak va list render qilganda nima sababdan unique key ishlatish muhim?",
    answer:
      "key React'ga listdagi elementlarni bir-biridan ajratish va oldingi hamda yangi render o'rtasidagi o'zgarishlarni aniqlashga yordam beradi. Unique va barqaror key ishlatilsa React reconciliation jarayonida elementlarni to'g'ri moslashtiradi. Indexni key sifatida ishlatish ayrim dinamik listlarda muammoga olib kelishi mumkin.",
    options: [
      "key list elementlarini React uchun identifikatsiya qiladi va reconciliation jarayonida o'zgarishlarni to'g'ri aniqlashga yordam beradi.",
      "key faqat CSS animation uchun kerak.",
      "key listni avtomatik sort qiladi.",
      "key database ID'sini serverga yuboradi.",
    ],
  },

  {
    id: 49,
    category: "React",
    question:
      "React'da lifting state up nima va qachon kerak bo'ladi?",
    answer:
      "Agar bir nechta sibling component bir xil ma'lumotni ishlatishi kerak bo'lsa, umumiy state ularning eng yaqin umumiy parent componentiga ko'tarilishi mumkin. Parent state'ni boshqarib, kerakli ma'lumotlarni props orqali childlarga uzatadi. Bu componentlar orasidagi ma'lumot almashishni tartibli qiladi.",
    options: [
      "Umumiy state bir nechta componentga kerak bo'lsa, uni umumiy parentga ko'tarish lifting state up deyiladi.",
      "Lifting state up state'ni browserdan o'chiradi.",
      "Bu faqat CSS layout texnikasi.",
      "State har doim child componentda bo'lishi kerak.",
    ],
  },

  {
    id: 50,
    category: "React",
    question:
      "React Context API nima va undan qachon foydalanish ma'qul?",
    answer:
      "Context componentlar daraxti bo'ylab ma'lumotni ko'plab intermediate componentlardan props orqali o'tkazmasdan uzatish imkonini beradi. Theme, authentication user yoki locale kabi globalga yaqin ma'lumotlar uchun foydali. Juda murakkab state management uchun esa maxsus state management yechimlari ma'qulroq bo'lishi mumkin.",
    options: [
      "Context ko'plab componentlar orasida ma'lumotni prop drillingsiz uzatishga yordam beradi.",
      "Context faqat API request yuboradi.",
      "Context faqat CSS uchun ishlatiladi.",
      "Context barcha state management kutubxonalarini avtomatik almashtiradi.",
    ],
  },

  {
    id: 51,
    category: "React",
    question:
      "React'da prop drilling nima va uni kamaytirishning qanday usullari mavjud?",
    answer:
      "Prop drilling ma'lumotni aslida foydalanmaydigan bir nechta intermediate componentlar orqali child componentga props sifatida uzatish holatidir. Buni Context API, state'ni to'g'ri joylashtirish yoki zarur bo'lsa state management kutubxonalaridan foydalanish orqali kamaytirish mumkin.",
    options: [
      "Prop drilling kerakli ma'lumotni ko'plab oraliq componentlar orqali props bilan uzatish bo'lib, Context yoki state management orqali kamaytirilishi mumkin.",
      "Prop drilling faqat CSS propertylarni uzatishdir.",
      "Prop drilling React'da mumkin emas.",
      "Prop drilling faqat backendda sodir bo'ladi.",
    ],
  },

  {
    id: 52,
    category: "React",
    question:
      "useMemo Hook nima va uni har bir hisoblash uchun ishlatish nima sababdan noto'g'ri bo'lishi mumkin?",
    answer:
      "useMemo hisoblangan qiymatni dependencylar o'zgarmaguncha qayta hisoblamaslik uchun memoize qiladi. Bu qimmat hisoblashlarda foydali bo'lishi mumkin. Lekin juda oddiy hisoblashlarda useMemo'ning o'zi ham qo'shimcha murakkablik va overhead keltirishi mumkin, shuning uchun uni faqat kerak bo'lgan joyda ishlatish ma'qul.",
    options: [
      "useMemo qiymatni dependencylar o'zgarmaguncha qayta hisoblashni kamaytiradi va asosan qimmat hisoblashlarda foydali.",
      "useMemo componentni hech qachon qayta render qilmaydi.",
      "useMemo faqat API request uchun ishlatiladi.",
      "useMemo barcha state'larni avtomatik global qiladi.",
    ],
  },

  {
    id: 53,
    category: "React",
    question:
      "useCallback Hook nima va useMemo bilan qanday bog'liq?",
    answer:
      "useCallback function reference'ini dependencylar o'zgarmaguncha saqlash uchun ishlatiladi. useMemo esa hisoblangan qiymatni memoize qiladi. useCallback ayniqsa memoized child componentga callback props sifatida berilganda keraksiz re-renderlarni kamaytirishga yordam berishi mumkin.",
    options: [
      "useCallback function reference'ini memoize qiladi, useMemo esa hisoblangan qiymatni memoize qiladi.",
      "useCallback faqat numberlarni memoize qiladi.",
      "useMemo functionlarni serverga yuboradi.",
      "Ikkalasining vazifasi mutlaqo bir xil.",
    ],
  },

  {
    id: 54,
    category: "React",
    question:
      "React.memo nima va qaysi holatda undan foydalanish foydali?",
    answer:
      "React.memo component propslari o'zgarmagan bo'lsa ayrim keraksiz re-renderlarni oldini olishga yordam beradi. U ayniqsa tez-tez parent render bo'ladigan va child renderi nisbatan qimmat bo'lgan vaziyatlarda foydali. Lekin memoization har doim ham performance'ni yaxshilamaydi.",
    options: [
      "React.memo propslar o'zgarmagan componentni keraksiz qayta render qilish ehtimolini kamaytiradi.",
      "React.memo componentni butunlay render qilmaydi.",
      "React.memo faqat CSS fayllarida ishlaydi.",
      "React.memo barcha state'larni global qiladi.",
    ],
  },

  {
    id: 55,
    category: "React",
    question:
      "React'da reconciliation nima va Virtual DOM tushunchasi bilan qanday bog'liq?",
    answer:
      "React yangi UI holatini oldingi render natijasi bilan taqqoslab, qaysi DOM o'zgarishlari kerakligini aniqlaydi. Bu jarayon reconciliation deb ataladi. Virtual DOM esa UI holatining JavaScript ko'rinishini ifodalashda yordam beradigan konsepsiya bo'lib, React kerakli real DOM o'zgarishlarini samarali bajarishga intiladi.",
    options: [
      "Reconciliation yangi va oldingi UI holatini solishtirib, kerakli DOM o'zgarishlarini aniqlash jarayonidir.",
      "Reconciliation faqat database querylarni optimallashtiradi.",
      "Virtual DOM real DOMning o'rnini doimiy ravishda to'liq egallaydi.",
      "Reconciliation faqat CSS animation uchun ishlatiladi.",
    ],
  },

  {
    id: 56,
    category: "React",
    question:
      "React'da event handlerlar qanday ishlaydi va onClick kabi handlerlarda functionni qanday berish kerak?",
    answer:
      "React event handler sifatida function reference qabul qiladi. Masalan onClick={handleClick} functionni event sodir bo'lganda chaqirishga imkon beradi. onClick={handleClick()} esa functionni render vaqtida darhol chaqirib yuborishi mumkin, shuning uchun parametrsiz holatda odatda reference beriladi.",
    options: [
      "onClick={handleClick} function reference beradi va uni event sodir bo'lganda ishga tushirishga imkon beradi.",
      "onClick har doim functionni render vaqtida chaqiradi.",
      "React event handlerlardan foydalanmaydi.",
      "onClick faqat string qabul qiladi.",
    ],
  },

  {
    id: 57,
    category: "React",
    question:
      "React'da state'ni to'g'ridan-to'g'ri mutate qilish nima uchun tavsiya etilmaydi?",
    answer:
      "State object yoki arrayini to'g'ridan-to'g'ri o'zgartirish mavjud reference'ni saqlab qolishi va Reactning o'zgarishni kutgandek aniqlamasligiga olib kelishi mumkin. Yangi object yoki array yaratib setter orqali berish predictable update qilishga yordam beradi. Bu immutable update prinsipiga mos keladi.",
    options: [
      "State'ni mutate qilish o'zgarishni noto'g'ri aniqlash va kutilmagan render muammolariga olib kelishi mumkin, shuning uchun yangi qiymat yaratish ma'qul.",
      "React arraylarni qo'llab-quvvatlamaydi.",
      "State faqat mutate qilish orqali ishlaydi.",
      "Mutation React performance'ini doim yaxshilaydi.",
    ],
  },

  {
    id: 58,
    category: "React",
    question:
      "React'da form submit eventini qanday boshqarish mumkin va preventDefault nima uchun kerak?",
    answer:
      "Form submit bo'lganda browser odatda sahifani reload qilib, formani yuborishga urinadi. React'da event.preventDefault() chaqirib default browser xatti-harakatini to'xtatish va formani JavaScript orqali boshqarish mumkin. Bu SPA ilovalarda ayniqsa muhim.",
    options: [
      "preventDefault browserning form submit natijasidagi default reload/navigation xatti-harakatini to'xtatishga yordam beradi.",
      "preventDefault formani avtomatik yuboradi.",
      "preventDefault faqat CSS uchun ishlatiladi.",
      "React form submitni boshqara olmaydi.",
    ],
  },

  {
    id: 59,
    category: "React",
    question:
      "React'da custom Hook nima va nima uchun yaratiladi?",
    answer:
      "Custom Hook bir nechta componentlarda qayta ishlatiladigan stateful logicni alohida function ichiga chiqarish usulidir. Uning nomi odatda use bilan boshlanadi. Masalan, useFetch yoki useLocalStorage kabi Hooklar takroriy logicni componentlardan ajratishga yordam beradi.",
    options: [
      "Custom Hook qayta ishlatiladigan React logicni alohida functionga ajratish uchun ishlatiladi va odatda use bilan boshlanadi.",
      "Custom Hook faqat CSS component yaratadi.",
      "Custom Hook faqat class componentlarda ishlaydi.",
      "Custom Hook database table yaratadi.",
    ],
  },

  {
    id: 60,
    category: "React",
    question:
      "React'da component lifecycle tushunchasi nimani anglatadi?",
    answer:
      "Functional componentlarda lifecycle odatda componentning mount bo'lishi, update bo'lishi va unmount bo'lishi kabi bosqichlarni anglatadi. useEffect va uning cleanup mexanizmi orqali ayrim lifecycle bilan bog'liq side effectlar boshqariladi. Reactning zamonaviy yondashuvida lifecycle'ni eventlar emas, UI synchronization nuqtai nazaridan tushunish foydali.",
    options: [
      "Lifecycle componentning mount, update va unmount kabi hayotiy bosqichlarini ifodalaydi.",
      "Lifecycle faqat CSS animation davomiyligini bildiradi.",
      "Functional componentlarda hech qanday lifecycle tushunchasi yo'q.",
      "Lifecycle faqat database connection uchun ishlatiladi.",
    ],
  },

  {
    id: 61,
    category: "React",
    question:
      "React'da conditional rendering qanday amalga oshiriladi va qaysi usullardan foydalanish mumkin?",
    answer:
      "Conditional rendering JavaScript shartlari yordamida turli UI qismlarini ko'rsatish imkonini beradi. Ternary operator, && operatori yoki if statementlardan foydalanish mumkin. Masalan loading holatida spinner, ma'lumot kelganda esa content ko'rsatish mumkin.",
    options: [
      "Conditional rendering if, ternary yoki && kabi JavaScript shartlari orqali turli UI qismlarini ko'rsatishga imkon beradi.",
      "Conditional rendering faqat CSS media query bilan qilinadi.",
      "React'da shart asosida UI ko'rsatib bo'lmaydi.",
      "Conditional rendering faqat backendda ishlaydi.",
    ],
  },

  {
    id: 62,
    category: "React",
    question:
      "React'da children prop nima va u componentlarni reusable qilishda qanday yordam beradi?",
    answer:
      "children parent component ichida yozilgan JSXni child componentga o'tkazish imkonini beradi. Masalan Card componenti ichiga turli content joylashtirib, bitta Card componentidan ko'plab vaziyatlarda foydalanish mumkin. Bu component API'sini moslashuvchan qiladi.",
    options: [
      "children component ichiga tashqaridan JSX yoki boshqa content uzatish imkonini beradi.",
      "children faqat string qabul qiladi.",
      "children faqat React Router uchun ishlatiladi.",
      "children componentni avtomatik global qiladi.",
    ],
  },

  {
    id: 63,
    category: "React",
    question:
      "React'da state batching nima va u state update'larining ishlashiga qanday ta'sir qiladi?",
    answer:
      "Batching bir nechta state update'larini bir render doirasida birlashtirishga yordam beradi. Bu keraksiz renderlar sonini kamaytirib performance'ni yaxshilashi mumkin. Shu sababli bir event ichida ketma-ket setter chaqirilganda React ularni optimallashtirishi mumkin.",
    options: [
      "Batching bir nechta state update'larini bir renderga birlashtirish orqali keraksiz renderlarni kamaytirishga yordam beradi.",
      "Batching barcha state update'larini bekor qiladi.",
      "Batching faqat CSS fayllarini birlashtiradi.",
      "React state update'larini hech qachon batch qilmaydi.",
    ],
  },

  {
    id: 64,
    category: "React",
    question:
      "React'da lazy loading va Suspense nima uchun ishlatilishi mumkin?",
    answer:
      "Lazy loading component kodini kerak bo'lgan paytda yuklash orqali boshlang'ich JavaScript bundle hajmini kamaytirishga yordam beradi. Suspense esa bunday asynchronous loading jarayonida vaqtinchalik fallback UI ko'rsatishga imkon beradi. Bu katta ilovalarda initial loadingni yaxshilash uchun foydali.",
    options: [
      "Lazy loading kodni kerak bo'lganda yuklashga, Suspense esa loading vaqtida fallback UI ko'rsatishga yordam beradi.",
      "Lazy loading barcha JavaScriptni o'chiradi.",
      "Suspense faqat CSS animationlari uchun ishlatiladi.",
      "Lazy loading database queryni cache qiladi.",
    ],
  },

  {
    id: 65,
    category: "React",
    question:
      "React'da useRef Hook nima va useState'dan qanday farq qiladi?",
    answer:
      "useRef renderlar orasida qiymatni saqlab turadigan mutable ref object qaytaradi. Uning current qiymatini o'zgartirish odatda componentni qayta render qilmaydi. useState esa setter orqali yangilanganda renderga sabab bo'ladi, shuning uchun UIga ta'sir qiladigan ma'lumot uchun state, renderni chaqirmaydigan saqlash uchun ref mos bo'lishi mumkin.",
    options: [
      "useRef qiymatni renderlar orasida saqlaydi va current o'zgarishi odatda renderni chaqirmaydi, useState esa update qilinganda renderga sabab bo'ladi.",
      "useRef har doim useState'dan renderni ko'proq chaqiradi.",
      "useState DOM elementlariga murojaat qila olmaydi.",
      "useRef faqat server componentlarda ishlaydi.",
    ],
  },

  {
    id: 66,
    category: "React",
    question:
      "React'da forwardRef nima uchun ishlatilishi mumkin?",
    answer:
      "forwardRef parent componentdagi refni child component orqali ichki DOM element yoki boshqa ref qabul qiluvchi elementga uzatish uchun ishlatiladi. Bu custom input kabi componentlarda parentga focus yoki DOM metodlarini boshqarish imkonini berishi mumkin.",
    options: [
      "forwardRef refni componentlar orasida uzatib, parentga child ichidagi DOM elementga murojaat qilish imkonini beradi.",
      "forwardRef API requestni tezlashtiradi.",
      "forwardRef faqat CSS style uzatadi.",
      "forwardRef componentni serverga ko'chiradi.",
    ],
  },

  {
    id: 67,
    category: "React",
    question:
      "React'da derived state nima va nima uchun keraksiz state saqlash muammo tug'dirishi mumkin?",
    answer:
      "Derived state boshqa mavjud state yoki propslardan hisoblab chiqilishi mumkin bo'lgan qiymatdir. Uni alohida state sifatida saqlash ma'lumotlarning ikki joyda turishiga va synchronization muammolariga olib kelishi mumkin. Agar qiymatni render vaqtida oddiy hisoblash mumkin bo'lsa, ko'pincha alohida state kerak emas.",
    options: [
      "Derived state boshqa state yoki propslardan hisoblanadigan qiymat bo'lib, uni keraksiz alohida state qilish synchronization muammolarini keltirishi mumkin.",
      "Derived state faqat backendda ishlaydi.",
      "Har bir hisoblanadigan qiymat albatta useState'da saqlanishi kerak.",
      "Derived state CSS variable hisoblanadi.",
    ],
  },

  {
    id: 68,
    category: "React",
    question:
      "React'da error boundary nima va u qanday muammolarni hal qiladi?",
    answer:
      "Error boundary component tree ichidagi ayrim rendering xatolarini ushlab, butun ilovaning qulab tushishining oldini olish va fallback UI ko'rsatishga yordam beradi. Klassik error boundarylar class component asosida ishlaydi yoki frameworkning tegishli mexanizmlaridan foydalaniladi. Event handler xatolari yoki asynchronous xatolarning barchasini avtomatik ushlamaydi.",
    options: [
      "Error boundary ayrim rendering xatolarini ushlab, fallback UI ko'rsatishga yordam beradi.",
      "Error boundary barcha JavaScript xatolarini har qanday joyda ushlaydi.",
      "Error boundary faqat CSS xatolarini topadi.",
      "Error boundary API response'ni avtomatik tuzatadi.",
    ],
  },

  {
    id: 69,
    category: "React",
    question:
      "React'da componentni juda katta qilib yuborish qanday muammolar keltirishi mumkin?",
    answer:
      "Juda katta componentni tushunish, test qilish va qayta ishlatish qiyinlashadi. Unda bir nechta mas'uliyat aralashib ketishi mumkin va state hamda side effectlarni boshqarish murakkablashadi. Componentni mantiqiy kichik qismlarga ajratish maintainabilityni yaxshilaydi.",
    options: [
      "Katta componentlar maintain qilish, test qilish va qayta ishlatishni qiyinlashtirishi mumkin, shuning uchun mantiqiy qismlarga ajratish foydali.",
      "Katta componentlar har doim performance'ni avtomatik oshiradi.",
      "React componentni bo'lib yozishga ruxsat bermaydi.",
      "Component hajmi hech qachon kod sifatiga ta'sir qilmaydi.",
    ],
  },

  {
    id: 70,
    category: "React",
    question:
      "React'da state management yechimini tanlashda qanday omillarni hisobga olish kerak?",
    answer:
      "Avvalo state qanchalik katta, nechta component undan foydalanadi va ma'lumot qanchalik murakkab ekanini aniqlash kerak. Oddiy local state uchun useState yetarli bo'lishi mumkin. Keng tarqalgan yoki murakkab state uchun Context, reducer yoki maxsus state management kutubxonalari ko'rib chiqiladi.",
    options: [
      "State hajmi, foydalanadigan componentlar soni, update murakkabligi va application architecture'si asosida yechim tanlanadi.",
      "Har qanday kichik state uchun albatta katta state management kutubxonasi kerak.",
      "State management faqat CSS bilan belgilanadi.",
      "Barcha React loyihalari bir xil state managementdan foydalanishi kerak.",
    ],
  },

  {
    id: 71,
    category: "Next.js",
    question:
      "Next.js nima va oddiy React loyihasiga nisbatan qanday qo'shimcha imkoniyatlar beradi?",
    answer:
      "Next.js React asosida qurilgan full-stack web framework bo'lib, routing, server rendering, static generation, server va client componentlar, API imkoniyatlari hamda optimizatsiyalarni taqdim etadi. U katta web ilovalarni strukturali tarzda yaratishni osonlashtiradi.",
    options: [
      "Next.js React asosidagi framework bo'lib, routing, rendering, server imkoniyatlari va turli optimizatsiyalarni taqdim etadi.",
      "Next.js faqat CSS framework hisoblanadi.",
      "Next.js faqat database boshqaradi.",
      "Next.js React o'rniga JavaScriptni butunlay olib tashlaydi.",
    ],
  },

  {
    id: 72,
    category: "Next.js",
    question:
      "Next.js App Router nima va u Pages Routerdan qanday farq qiladi?",
    answer:
      "App Router Next.js'da app papkasi asosida qurilgan zamonaviy routing tizimi bo'lib, React Server Components, layouts, loading va error UI kabi imkoniyatlar bilan chuqur integratsiyalashgan. Pages Router esa pages papkasiga asoslangan eskiroq routing arxitekturasi hisoblanadi.",
    options: [
      "App Router app papkasiga asoslanadi va Server Components hamda layouts kabi zamonaviy React imkoniyatlari bilan integratsiyalashgan.",
      "App Router faqat CSS routing tizimidir.",
      "Pages Router va App Router aynan bir xil fayl strukturasidan foydalanadi.",
      "App Router faqat backend API yaratadi.",
    ],
  },

  {
    id: 73,
    category: "Next.js",
    question:
      "Next.js App Router'da app/page.jsx fayli qanday route hosil qiladi?",
    answer:
      "app/page.jsx fayli applicationning root route'ini, ya'ni / manzilini hosil qiladi. Agar app/questions/page.jsx bo'lsa, u /questions route'iga mos keladi. App Router file-system based routing tamoyilidan foydalanadi.",
    options: [
      "app/page.jsx root / route'ini yaratadi, app/questions/page.jsx esa /questions route'ini yaratadi.",
      "app/page.jsx faqat /login route'ini yaratadi.",
      "page.jsx hech qanday route yaratmaydi.",
      "Route faqat CSS faylda belgilanadi.",
    ],
  },

  {
    id: 74,
    category: "Next.js",
    question:
      "Next.js App Router'da layout.js nima uchun ishlatiladi?",
    answer:
      "layout.js bir route segmenti va uning child route'lari uchun umumiy UI strukturasini belgilaydi. Navbar, sidebar yoki umumiy wrapper kabi elementlar layoutda saqlanishi mumkin. Layoutlar nested bo'lishi va route navigatsiyalarida qayta ishlatilishi mumkin.",
    options: [
      "layout.js route segmentlari uchun umumiy va qayta ishlatiladigan UI strukturasini yaratadi.",
      "layout.js faqat database connection yaratadi.",
      "layout.js faqat CSS variable saqlaydi.",
      "layout.js har bir page'ni avtomatik o'chiradi.",
    ],
  },

  {
    id: 75,
    category: "Next.js",
    question:
      "Next.js App Router'da Server Component va Client Component o'rtasidagi asosiy farq nimada?",
    answer:
      "Server Component serverda render qilinishi mumkin va browserga yuboriladigan JavaScriptni kamaytirishga yordam beradi. Client Component esa interactivity, state, event handler va browser API kerak bo'lganda ishlatiladi. Client Componentni belgilash uchun 'use client' directive ishlatiladi.",
    options: [
      "Server Component server tomonidagi renderingga, Client Component esa browserdagi interactivity va statega moslashtirilgan.",
      "Client Componentda state ishlatib bo'lmaydi.",
      "Server Component faqat CSSdan iborat.",
      "Ularning hech qanday farqi yo'q.",
    ],
  },

  {
    id: 76,
    category: "Next.js",
    question:
      "Next.js'da 'use client' directive nima qiladi va uni qachon ishlatish kerak?",
    answer:
      "'use client' componentni Client Component sifatida belgilaydi. useState, useEffect, event handler yoki browser API kabi client-side imkoniyatlar kerak bo'lsa ishlatiladi. Uni keraksiz joylarda ishlatish serverda bajarilishi mumkin bo'lgan logicni browserga ko'proq yuborishga olib kelishi mumkin.",
    options: [
      "'use client' componentni Client Componentga aylantiradi va state, effect hamda browser interactivitydan foydalanishga imkon beradi.",
      "'use client' componentni databasega aylantiradi.",
      "'use client' server renderingni butunlay o'chiradi.",
      "'use client' faqat CSS animation uchun ishlatiladi.",
    ],
  },

  {
    id: 77,
    category: "Next.js",
    question:
      "Next.js'da dynamic route nima va [id] papkasi qanday ishlaydi?",
    answer:
      "Dynamic route URL ichidagi o'zgaruvchan segmentni ushlab olish uchun ishlatiladi. Masalan app/questions/[id]/page.jsx fayli /questions/1 yoki /questions/25 kabi URLlarni qabul qilishi mumkin. id qiymati route params orqali olinadi.",
    options: [
      "[id] dynamic segment bo'lib, /questions/1 va /questions/25 kabi turli URL qiymatlarini bitta route orqali boshqarishga imkon beradi.",
      "[id] faqat CSS ID yaratadi.",
      "Dynamic route faqat root / route uchun ishlaydi.",
      "[id] database ID'sini avtomatik yaratadi.",
    ],
  },

  {
    id: 78,
    category: "Next.js",
    question:
      "Next.js'da loading.js faylining vazifasi nima?",
    answer:
      "loading.js route segmenti yuklanayotgan paytda ko'rsatiladigan loading UI'ni belgilash uchun ishlatiladi. App Router bu mexanizmni Suspense bilan integratsiyalashgan holda ishlatadi. Bu foydalanuvchiga sahifa yuklanayotganini aniq ko'rsatish imkonini beradi.",
    options: [
      "loading.js route ma'lumotlari yoki UI yuklanayotgan paytda ko'rsatiladigan vaqtinchalik loading interfeysini belgilaydi.",
      "loading.js faqat login tokenini yaratadi.",
      "loading.js barcha requestlarni bekor qiladi.",
      "loading.js faqat CSS fayllarni yuklaydi.",
    ],
  },

  {
    id: 79,
    category: "Next.js",
    question:
      "Next.js'da error.js fayli qanday vazifani bajaradi?",
    answer:
      "error.js route segmentidagi runtime rendering xatolarini ushlab, foydalanuvchiga fallback error UI ko'rsatish imkonini beradi. U Client Component bo'lishi kerak. Foydalanuvchiga qayta urinib ko'rish imkonini beruvchi reset mexanizmi ham ishlatilishi mumkin.",
    options: [
      "error.js route ichidagi ayrim runtime xatolar uchun fallback UI va error handling mexanizmini beradi.",
      "error.js faqat CSS xatolarini tuzatadi.",
      "error.js database'ni avtomatik backup qiladi.",
      "error.js barcha browser xatolarini ushlaydi.",
    ],
  },

  {
    id: 80,
    category: "Next.js",
    question:
      "Next.js'da metadata nima va u nima uchun kerak?",
    answer:
      "Metadata sahifaning title, description, Open Graph ma'lumotlari va boshqa SEO bilan bog'liq ma'lumotlarini belgilash uchun ishlatiladi. App Router'da metadata static object yoki dynamic generateMetadata orqali berilishi mumkin. To'g'ri metadata SEO va link preview uchun foydali.",
    options: [
      "Metadata title, description va SEO hamda social preview bilan bog'liq ma'lumotlarni boshqarishga yordam beradi.",
      "Metadata faqat database schema hisoblanadi.",
      "Metadata faqat CSS ranglarini belgilaydi.",
      "Metadata faqat browser cache uchun ishlatiladi.",
    ],
  },

  {
    id: 81,
    category: "Next.js",
    question:
      "Next.js'da server-side rendering va static rendering tushunchalari nimani anglatadi?",
    answer:
      "Static rendering natijani build yoki boshqa mos vaqtida tayyorlash va keyin qayta ishlatish imkonini beradi. Dynamic yoki server rendering esa request kontekstiga bog'liq ma'lumotlar asosida serverda render qilishga imkon beradi. Qaysi strategiya tanlanishi ma'lumotning qanchalik dinamikligiga bog'liq.",
    options: [
      "Static rendering natijani oldindan tayyorlashga, server/dynamic rendering esa requestga bog'liq ma'lumotni serverda tayyorlashga imkon beradi.",
      "Static rendering faqat browserda ishlaydi.",
      "Server rendering faqat CSS uchun ishlatiladi.",
      "Ikkalasi ham bir xil rendering strategiyasidir.",
    ],
  },

  {
    id: 82,
    category: "Next.js",
    question:
      "Next.js'da route handler nima va undan qanday foydalanish mumkin?",
    answer:
      "Route Handler App Router ichida HTTP requestlarga javob beradigan server-side endpoint yaratish imkonini beradi. Masalan app/api/users/route.js ichida GET yoki POST kabi methodlar bilan API endpoint yaratish mumkin. Bu backend logicning ayrim qismlarini Next.js ilovasi ichida yozishga yordam beradi.",
    options: [
      "Route Handler App Router ichida GET, POST va boshqa HTTP requestlarga javob beradigan server endpoint yaratadi.",
      "Route Handler faqat frontend CSS uchun ishlatiladi.",
      "Route Handler browser localStorage'ini boshqaradi.",
      "Route Handler faqat image formatini o'zgartiradi.",
    ],
  },

  {
    id: 83,
    category: "Next.js",
    question:
      "Next.js'da environment variable nima va NEXT_PUBLIC_ prefixi nimani anglatadi?",
    answer:
      "Environment variable konfiguratsiya yoki maxfiy qiymatlarni koddan tashqarida saqlash uchun ishlatiladi. NEXT_PUBLIC_ bilan boshlangan o'zgaruvchilar client bundle'ga chiqishi mumkin. Shu sababli secret key yoki password kabi maxfiy ma'lumotlarga NEXT_PUBLIC_ prefix berish xavfli.",
    options: [
      "NEXT_PUBLIC_ bilan boshlangan environment variable client tomonga chiqishi mumkin, shuning uchun unga secret ma'lumot joylashtirmaslik kerak.",
      "NEXT_PUBLIC_ barcha secretlarni avtomatik himoya qiladi.",
      "Environment variable faqat CSS uchun ishlatiladi.",
      "NEXT_PUBLIC_ faqat serverda ko'rinadi.",
    ],
  },

  {
    id: 84,
    category: "Next.js",
    question:
      "Next.js'da Link componentidan foydalanishning oddiy anchor tagidan afzalligi nimada?",
    answer:
      "Next.js Link client-side navigation va frameworkning routing imkoniyatlaridan foydalanishga yordam beradi. Bu to'liq browser reloadini kamaytirib, SPAga o'xshash navigatsiya tajribasini taqdim etishi mumkin. Route prefetching kabi optimizatsiyalar ham mavjud.",
    options: [
      "Link Next.js routing bilan integratsiyalashgan client-side navigation va ayrim routing optimizatsiyalarini beradi.",
      "Link faqat CSS class yaratadi.",
      "Link browserni har doim to'liq reload qiladi.",
      "Link faqat API request yuboradi.",
    ],
  },

  {
    id: 85,
    category: "Next.js",
    question:
      "Next.js'da redirect va router.push o'rtasida qanday farq bor?",
    answer:
      "redirect server-side yoki navigation jarayonining mos joylarida route'ni boshqa manzilga yo'naltirish uchun ishlatilishi mumkin. router.push esa Client Component ichida foydalanuvchi interactionidan keyin navigation qilish uchun ishlatiladi. Qaysi biri ishlatilishi kod qayerda bajarilayotganiga bog'liq.",
    options: [
      "redirect route'ni framework navigation jarayonida yo'naltirish uchun, router.push esa client-side navigation uchun ishlatiladi.",
      "Ikkalasi faqat CSS bilan ishlaydi.",
      "router.push faqat serverda ishlaydi.",
      "redirect faqat database query uchun kerak.",
    ],
  },

  {
    id: 86,
    category: "Next.js",
    question:
      "Next.js'da middleware nima va undan qanday vazifalarda foydalanish mumkin?",
    answer:
      "Middleware request route handler yoki page'ga yetib borishidan oldin ayrim tekshiruvlar yoki redirectlar bajariladigan qatlam sifatida ishlatilishi mumkin. Authentication, authorization, locale yoki request asosidagi routing kabi vazifalarda foydalaniladi. U barcha backend business logic uchun universal o'rinbosar emas.",
    options: [
      "Middleware requestni routega yetishidan oldin tekshirish, redirect yoki boshqa request-level logic uchun ishlatilishi mumkin.",
      "Middleware faqat React state boshqaradi.",
      "Middleware faqat CSS fayl hisoblanadi.",
      "Middleware faqat database table yaratadi.",
    ],
  },

  {
    id: 87,
    category: "Next.js",
    question:
      "Next.js'da image optimization nima uchun muhim va next/image qanday yordam beradi?",
    answer:
      "Rasmlar web performancega katta ta'sir qilishi mumkin. next/image responsive image, lazy loading va kerakli image formatlari hamda o'lchamlarini optimallashtirish kabi imkoniyatlarni beradi. Bu network trafik va loading vaqtini kamaytirishga yordam beradi.",
    options: [
      "next/image rasmlarni optimallashtirish, responsive qilish va loadingni yaxshilashga yordam beradi.",
      "next/image faqat SVG fayllarni yaratadi.",
      "Image optimization faqat backend database uchun kerak.",
      "next/image barcha rasmlarni avtomatik o'chiradi.",
    ],
  },

  {
    id: 88,
    category: "Next.js",
    question:
      "Next.js'da caching nima uchun kerak va dynamic data bilan ishlaganda nima uchun tushunish muhim?",
    answer:
      "Caching oldin olingan yoki hisoblangan natijalarni qayta ishlatib, network va server xarajatlarini kamaytirishga yordam beradi. Lekin dynamic ma'lumotlar uchun stale data yoki noto'g'ri cache strategiyasi muammo tug'dirishi mumkin. Shu sababli request va rendering modeliga mos cache strategiyasi tanlanadi.",
    options: [
      "Caching oldingi natijalarni qayta ishlatib performance va server xarajatlarini yaxshilashi mumkin, lekin dynamic data uchun to'g'ri strategiya kerak.",
      "Caching barcha ma'lumotlarni abadiy o'zgarmas qiladi.",
      "Caching faqat CSS uchun kerak.",
      "Next.js'da caching tushunchasi mavjud emas.",
    ],
  },

  {
    id: 89,
    category: "Next.js",
    question:
      "Next.js'da static va dynamic route tushunchalarini qanday ajratish mumkin?",
    answer:
      "Static route URL segmentlari oldindan ma'lum bo'lgan route hisoblanadi, masalan /questions. Dynamic route esa [id] kabi segment orqali turli parametrlarni qabul qiladi. Dynamic route bo'lsa ham uning ayrim parametrlarini oldindan generate qilish mumkin.",
    options: [
      "Static route oldindan ma'lum URLga ega, dynamic route esa [id] kabi parametr orqali turli qiymatlarni qabul qiladi.",
      "Static route faqat API uchun ishlatiladi.",
      "Dynamic route faqat CSS URL yaratadi.",
      "Static va dynamic route o'rtasida farq yo'q.",
    ],
  },

  {
    id: 90,
    category: "Next.js",
    question:
      "Next.js App Router'da nested routes qanday yaratiladi?",
    answer:
      "Nested route yaratish uchun app ichida route segmentlariga mos nested folderlar yaratiladi. Masalan app/dashboard/settings/page.jsx /dashboard/settings route'ini yaratadi. Parent layoutlar child route'lar bilan birga ishlashi mumkin.",
    options: [
      "app ichida nested folderlar yaratish orqali /dashboard/settings kabi nested route'lar hosil qilinadi.",
      "Nested route faqat JavaScript object ichida yoziladi.",
      "Nested route CSS selector orqali yaratiladi.",
      "App Router nested route'larni qo'llab-quvvatlamaydi.",
    ],
  },

  {
    id: 91,
    category: "Next.js",
    question:
      "Next.js'da Server Action nima va u qanday vazifalarda ishlatilishi mumkin?",
    answer:
      "Server Action serverda bajariladigan asynchronous functionni client interaction bilan bog'lash imkonini beradi. Form submit yoki mutation kabi vazifalarda serverdagi logicni to'g'ridan-to'g'ri chaqirish uchun ishlatilishi mumkin. Maxfiy server resurslariga murojaat qiluvchi logicni browserga yubormaslikka yordam beradi.",
    options: [
      "Server Action serverda bajariladigan functionni form yoki client interaction bilan bog'lash uchun ishlatilishi mumkin.",
      "Server Action faqat CSS animation yaratadi.",
      "Server Action browser localStorage'ini serverga ko'chiradi.",
      "Server Action faqat image compression uchun kerak.",
    ],
  },

  {
    id: 92,
    category: "Next.js",
    question:
      "Next.js'da SEO uchun title va descriptionni to'g'ri belgilash nima sababdan muhim?",
    answer:
      "Title va description search engine'lar hamda foydalanuvchilarga sahifa mazmuni haqida ma'lumot beradi. To'g'ri metadata qidiruv natijalaridagi ko'rinish va click-through ratega ijobiy ta'sir qilishi mumkin. Har bir muhim sahifa o'z mazmuniga mos metadata'ga ega bo'lishi yaxshi amaliyot.",
    options: [
      "Title va description sahifaning mazmunini search engine va foydalanuvchilarga tushuntirib, SEO ko'rinishiga yordam beradi.",
      "Metadata faqat developer console uchun kerak.",
      "SEO title bilan umuman bog'liq emas.",
      "Description faqat CSS rangini belgilaydi.",
    ],
  },

  {
    id: 93,
    category: "Next.js",
    question:
      "Next.js'da public papkasi nima uchun ishlatiladi?",
    answer:
      "public papkasiga joylashtirilgan statik fayllarga application rootidan to'g'ridan-to'g'ri URL orqali murojaat qilish mumkin. Masalan public/logo.png fayli /logo.png orqali ochilishi mumkin. Bu favicon, oddiy image yoki boshqa public assetlar uchun ishlatiladi.",
    options: [
      "public papkasi browserdan to'g'ridan-to'g'ri URL orqali olinishi kerak bo'lgan statik assetlarni saqlash uchun ishlatiladi.",
      "public papkasi faqat server secretlarini saqlaydi.",
      "public papkasi database backup uchun ishlatiladi.",
      "public papkasi faqat TypeScript fayllarini saqlaydi.",
    ],
  },

  {
    id: 94,
    category: "Next.js",
    question:
      "Next.js'da route groups nima va qavs ichidagi folderlar nima uchun ishlatiladi?",
    answer:
      "Route group folder nomini qavs ichiga olish orqali URL pathga bu segmentni qo'shmasdan route'larni guruhlash imkonini beradi. Masalan app/(auth)/login/page.jsx URL sifatida /login bo'lib qoladi. Bu layout va project structure'ni tartibli tashkil qilishda foydali.",
    options: [
      "(auth) kabi route group URLga qo'shilmaydi, lekin route'larni mantiqiy guruhlash va alohida layout berishga yordam beradi.",
      "Qavs ichidagi folder har doim URLga qo'shiladi.",
      "Route groups faqat CSS uchun ishlatiladi.",
      "Route groups faqat database table yaratadi.",
    ],
  },

  {
    id: 95,
    category: "Next.js",
    question:
      "Next.js loyihasida server va client kodini ajratish nima uchun muhim?",
    answer:
      "Server kodida database, secret key yoki serverga xos APIlar kabi browserga yuborilmasligi kerak bo'lgan ma'lumotlar bo'lishi mumkin. Client kod esa interactivity va browser APIlariga muhtoj. Ularni to'g'ri ajratish xavfsizlik, performance va architecture nuqtai nazaridan muhim.",
    options: [
      "Server va client kodini to'g'ri ajratish secretlarni himoya qilish, browser bundle'ni kamaytirish va architecture'ni toza saqlashga yordam beradi.",
      "Barcha server secretlari clientga yuborilishi xavfsiz.",
      "Client va server kodining farqi faqat CSSda.",
      "Next.js server va client kodini ajratmaydi.",
    ],
  },

  {
    id: 96,
    category: "Frontend",
    question:
      "Frontend dasturchi uchun HTTP requestning GET, POST, PUT, PATCH va DELETE metodlarini tushunish nima uchun muhim?",
    answer:
      "GET odatda ma'lumot olish uchun, POST yangi resurs yaratish yoki action bajarish uchun ishlatiladi. PUT resursni to'liq yangilashga, PATCH esa uning bir qismini yangilashga mos keladi. DELETE esa resursni o'chirish uchun ishlatiladi. REST API bilan ishlaganda bu metodlarning ma'nosini tushunish juda muhim.",
    options: [
      "GET olish, POST yaratish/action, PUT to'liq yangilash, PATCH qisman yangilash va DELETE o'chirish uchun ishlatiladi.",
      "Barcha HTTP metodlar faqat ma'lumot olish uchun ishlatiladi.",
      "POST faqat browser historyni boshqaradi.",
      "DELETE yangi ma'lumot yaratish uchun ishlatiladi.",
    ],
  },

  {
    id: 97,
    category: "Frontend",
    question:
      "HTTP status code 200, 201, 400, 401, 403, 404 va 500 kodlari odatda nimani anglatadi?",
    answer:
      "200 muvaffaqiyatli requestni, 201 yangi resurs yaratilganini bildiradi. 400 client tomonidan noto'g'ri request, 401 authentication talab qilinishi yoki mavjud emasligini, 403 ruxsat yo'qligini, 404 resurs topilmaganini bildiradi. 500 esa server tomonidagi kutilmagan xatoni anglatadi.",
    options: [
      "200 muvaffaqiyat, 201 yaratildi, 400 noto'g'ri request, 401 authentication muammosi, 403 ruxsat yo'q, 404 topilmadi, 500 server xatosi.",
      "401 muvaffaqiyatli loginni, 404 esa server muvaffaqiyatini bildiradi.",
      "500 har doim client xatosidir.",
      "200 faqat DELETE requestlarda ishlatiladi.",
    ],
  },

  {
    id: 98,
    category: "Frontend",
    question:
      "CORS nima va frontend dasturchi sifatida uni qanday tushunish kerak?",
    answer:
      "CORS browserning bir origin'dan boshqa origin'dagi resursga murojaat qilishiga qo'yilgan xavfsizlik siyosati bilan bog'liq mexanizmdir. Server kerakli CORS headerlarini qaytarsa browser cross-origin requestni ruxsat etilgan tarzda bajarishi mumkin. CORS odatda frontenddagi JavaScript orqali emas, server konfiguratsiyasi orqali hal qilinadi.",
    options: [
      "CORS browserning cross-origin requestlarni boshqarish xavfsizlik mexanizmi bo'lib, server kerakli headerlar orqali ruxsat beradi.",
      "CORS faqat CSS ranglarini boshqaradi.",
      "CORS database encryption usuli.",
      "CORS barcha requestlarni avtomatik bloklaydi.",
    ],
  },

  {
    id: 99,
    category: "Frontend",
    question:
      "Responsive web design nima va frontendda uni qanday amalga oshirish mumkin?",
    answer:
      "Responsive design saytning turli ekran o'lchamlarida qulay va to'g'ri ko'rinishini ta'minlash yondashuvidir. CSS media query, flexible layout, grid, flexbox, responsive typography va kerakli breakpointlardan foydalaniladi. Mobil qurilmani ham hisobga olgan mobile-first yondashuv keng ishlatiladi.",
    options: [
      "Responsive design turli ekran o'lchamlariga moslashadigan UI yaratish bo'lib, media query, flexbox, grid va responsive o'lchamlardan foydalanadi.",
      "Responsive design faqat JavaScript orqali amalga oshiriladi.",
      "Responsive design faqat desktop uchun kerak.",
      "Responsive design database optimizatsiyasi hisoblanadi.",
    ],
  },

  {
    id: 100,
    category: "Frontend",
    question:
      "Frontend ilovada authentication va authorization o'rtasidagi farq nimada?",
    answer:
      "Authentication foydalanuvchining kimligini aniqlash jarayonidir, masalan login orqali userni tekshirish. Authorization esa aniqlangan foydalanuvchi qaysi resurs yoki actionlarga ruxsatga ega ekanligini tekshiradi. Masalan admin ekanligini aniqlash authentication emas, unga admin panelga kirish huquqini berish authorization hisoblanadi.",
    options: [
      "Authentication foydalanuvchining kimligini tekshiradi, authorization esa u nimaga ruxsatga ega ekanini aniqlaydi.",
      "Authentication va authorization aynan bir xil jarayon.",
      "Authorization foydalanuvchi parolini yaratadi.",
      "Authentication faqat CSS classlarni tekshiradi.",
    ],
  },

  {
    id: 101,
    category: "JavaScript",
    question:
      "JavaScript'da execution context nima va global hamda function execution context qanday farqlanadi?",
    answer:
      "Execution context JavaScript kodining bajarilish muhiti bo'lib, unda variable, function va this kabi ma'lumotlar boshqariladi. Global execution context dastur ishga tushganda yaratiladi, function execution context esa har bir function chaqirilganda hosil bo'ladi.",
    options: [
      "Execution context kod bajariladigan muhit bo'lib, global va function darajadagi contextlar mavjud.",
      "Execution context faqat browserdagi CSS muhitidir.",
      "Execution context faqat database query uchun ishlatiladi.",
      "JavaScript'da execution context mavjud emas.",
    ],
  },

  {
    id: 102,
    category: "JavaScript",
    question:
      "JavaScript'da call stack nima va stack overflow qanday yuzaga kelishi mumkin?",
    answer:
      "Call stack functionlarning bajarilish tartibini boshqaradigan LIFO strukturasidir. Function chaqirilganda stack'ka qo'shiladi va tugaganda undan chiqariladi. Cheksiz recursion yoki juda chuqur function chaqiruvlari stack overflow xatosiga olib kelishi mumkin.",
    options: [
      "Call stack function chaqiruvlarini LIFO tartibida boshqaradi va haddan tashqari chuqur chaqiruvlar stack overflow keltirib chiqarishi mumkin.",
      "Call stack faqat arraylarni sort qiladi.",
      "Stack overflow faqat CSS xatosidir.",
      "Call stack barcha functionlarni parallel bajaradi.",
    ],
  },

  {
    id: 103,
    category: "JavaScript",
    question:
      "JavaScript'da lexical scope nima?",
    answer:
      "Lexical scope o'zgaruvchiga qaysi joydan murojaat qilish mumkinligi kodning qayerda yozilganiga qarab belgilanadigan scope modelidir. Ichki function tashqi scope'dagi o'zgaruvchilarga murojaat qilishi mumkin.",
    options: [
      "Lexical scope o'zgaruvchilarning mavjudligi kodning qayerda yozilganiga qarab aniqlanishini bildiradi.",
      "Lexical scope faqat browser URL'ini boshqaradi.",
      "Lexical scope faqat object propertylari uchun ishlatiladi.",
      "Lexical scope runtime'da barcha variablelarni global qiladi.",
    ],
  },

  {
    id: 104,
    category: "JavaScript",
    question:
      "JavaScript'da lexical environment nima?",
    answer:
      "Lexical environment kodning ma'lum scope'ida mavjud bo'lgan identifierlar va ularning qiymatlarini hamda tashqi lexical environmentga bog'lanishni ifodalovchi ichki mexanizmdir. Scope chain shu muhitlar orqali ishlaydi.",
    options: [
      "Lexical environment scope'dagi identifierlar va tashqi scope bilan bog'lanishlarni ifodalovchi JavaScript mexanizmidir.",
      "Lexical environment faqat HTML parser hisoblanadi.",
      "Lexical environment faqat CSS variablelarni saqlaydi.",
      "JavaScript lexical environmentdan foydalanmaydi.",
    ],
  },

  {
    id: 105,
    category: "JavaScript",
    question:
      "JavaScript'da this qiymatini bind(), call() va apply() yordamida qanday boshqarish mumkin?",
    answer:
      "call() va apply() functionni berilgan this qiymati bilan darhol chaqiradi. Farqi shundaki, call argumentlarni alohida beradi, apply esa array ko'rinishida qabul qiladi. bind() esa yangi function qaytarib, uning this qiymatini oldindan biriktiradi.",
    options: [
      "call va apply functionni berilgan this bilan darhol chaqiradi, bind esa this biriktirilgan yangi function qaytaradi.",
      "bind faqat arraylarni clone qiladi.",
      "call va apply faqat React componentlarda ishlaydi.",
      "Uchala metod ham functionni o'chirish uchun ishlatiladi.",
    ],
  },

  {
    id: 106,
    category: "JavaScript",
    question:
      "JavaScript'da prototype nima va prototype chain qanday ishlaydi?",
    answer:
      "Prototype objectlar boshqa objectdan property va metodlarni meros qilib olishi mumkin bo'lgan mexanizmdir. Agar property objectning o'zida topilmasa, JavaScript prototype chain bo'ylab yuqoriga qarab izlaydi.",
    options: [
      "Prototype objectlarga boshqa objectlardan property va metodlarni olish imkonini beradi va property qidiruvi prototype chain orqali davom etadi.",
      "Prototype faqat CSS inheritance uchun ishlatiladi.",
      "Prototype barcha objectlarni avtomatik JSONga aylantiradi.",
      "Prototype JavaScript'da mavjud emas.",
    ],
  },

  {
    id: 107,
    category: "JavaScript",
    question:
      "JavaScript'da class syntax prototype inheritance bilan qanday bog'liq?",
    answer:
      "class syntax JavaScript'dagi prototype-based inheritance ustiga qurilgan qulayroq sintaksisdir. Class metodlari odatda instance'larning prototype'iga joylashtiriladi va extends orqali inheritance tashkil qilish mumkin.",
    options: [
      "JavaScript classlari prototype-based inheritance ustidagi qulay sintaksis bo'lib, extends orqali meros olish mumkin.",
      "class JavaScript'dagi prototype mexanizmini butunlay yo'q qiladi.",
      "class faqat CSS component yaratadi.",
      "class faqat browser API uchun ishlatiladi.",
    ],
  },

  {
    id: 108,
    category: "JavaScript",
    question:
      "JavaScript'da instanceof operatori nima uchun ishlatiladi?",
    answer:
      "instanceof objectning prototype chain'ida ma'lum constructorning prototype'i mavjudligini tekshiradi. Masalan, value instanceof Array qiymatning Array prototype chainiga tegishli ekanini tekshirishda ishlatilishi mumkin.",
    options: [
      "instanceof objectning prototype chainida ma'lum constructor prototype'i mavjudligini tekshiradi.",
      "instanceof qiymatni stringga aylantiradi.",
      "instanceof faqat numberlarni solishtiradi.",
      "instanceof faqat CSS selector hisoblanadi.",
    ],
  },

  {
    id: 109,
    category: "JavaScript",
    question:
      "JavaScript'da Symbol type nima uchun ishlatiladi?",
    answer:
      "Symbol unique primitive qiymat yaratadi. U object property key sifatida ishlatilganda boshqa bir xil nomdagi string keylardan alohida bo'lishi mumkin. Symbol JavaScript'ning maxsus protocol va metadata mexanizmlarida ham ishlatiladi.",
    options: [
      "Symbol unique primitive qiymat yaratish va unique object property keylari uchun ishlatilishi mumkin.",
      "Symbol faqat number hisoblash uchun ishlatiladi.",
      "Symbol barcha objectlarni immutable qiladi.",
      "Symbol faqat React state uchun kerak.",
    ],
  },

  {
    id: 110,
    category: "JavaScript",
    question:
      "JavaScript'da BigInt nima va Number'dan qanday farq qiladi?",
    answer:
      "BigInt juda katta butun sonlarni integer aniqligini saqlagan holda ifodalash uchun ishlatiladi. Number esa IEEE 754 double precision formatidan foydalanadi va juda katta integerlarda aniqlik chekloviga ega bo'lishi mumkin.",
    options: [
      "BigInt katta integer qiymatlarni aniqroq ifodalash uchun ishlatiladi, Number esa boshqa sonlar uchun IEEE 754 formatidan foydalanadi.",
      "BigInt faqat decimal stringlar uchun ishlaydi.",
      "Number juda katta integerlar uchun hech qanday cheklovga ega emas.",
      "BigInt faqat browser URL'ini saqlaydi.",
    ],
  },

  {
    id: 111,
    category: "JavaScript",
    question:
      "JavaScript'da NaN nima va uni tekshirishning ishonchli usullaridan biri qaysi?",
    answer:
      "NaN 'Not-a-Number' qiymatini bildiruvchi maxsus numeric qiymatdir. Number.isNaN() aynan NaN qiymatini tekshirish uchun qulay va type coercion qilmaydi.",
    options: [
      "NaN maxsus numeric qiymat bo'lib, Number.isNaN() orqali ishonchli tekshirilishi mumkin.",
      "NaN string qiymat hisoblanadi.",
      "NaN faqat null bilan teng.",
      "NaNni tekshirishning iloji yo'q.",
    ],
  },

  {
    id: 112,
    category: "JavaScript",
    question:
      "JavaScript'da falsy qiymatlar nima va ularga qanday misollar keltirish mumkin?",
    answer:
      "Falsy qiymatlar boolean kontekstida false sifatida baholanadigan qiymatlardir. Masalan false, 0, -0, 0n, '', null, undefined va NaN falsy hisoblanadi.",
    options: [
      "Falsy qiymatlar boolean contextda false bo'lib baholanadi, masalan 0, '', null, undefined va NaN.",
      "Faqat false falsy hisoblanadi.",
      "Barcha objectlar falsy hisoblanadi.",
      "Falsy qiymat faqat CSS'da mavjud.",
    ],
  },

  {
    id: 113,
    category: "JavaScript",
    question:
      "JavaScript'da logical operators qisqa circuit evaluation qanday ishlaydi?",
    answer:
      "&& chap operand falsy bo'lsa keyingi operandni tekshirmasligi mumkin, || chap operand truthy bo'lsa o'ng operandni tekshirmaydi. ?? esa faqat null yoki undefined bo'lganda fallback qiymatga o'tadi.",
    options: [
      "Logical operatorlar kerakli natija aniqlanganda keyingi operandlarni baholamasligi mumkin.",
      "Logical operatorlar har doim barcha operandlarni parallel bajaradi.",
      "Short-circuit faqat arraylarda ishlaydi.",
      "Short-circuit JavaScript'da mavjud emas.",
    ],
  },

  {
    id: 114,
    category: "JavaScript",
    question:
      "JavaScript'da for...of va for...in o'rtasidagi farq nima?",
    answer:
      "for...of iterable qiymatlarning o'zlarini, masalan array elementlarini aylanib chiqadi. for...in esa object yoki boshqa mos obyektning enumerable property keylarini aylanadi.",
    options: [
      "for...of iterable qiymatlarni, for...in esa enumerable property keylarini aylanadi.",
      "for...of faqat object keylarini oladi.",
      "for...in faqat array qiymatlarini oladi.",
      "Ikkalasi aynan bir xil ishlaydi.",
    ],
  },

  {
    id: 115,
    category: "JavaScript",
    question:
      "JavaScript'da iterable va iterator tushunchalari nimani anglatadi?",
    answer:
      "Iterable object Symbol.iterator metodiga ega bo'lib, undan iterator olish mumkin. Iterator esa next() metodini taqdim etadi va ketma-ket qiymatlarni qaytaradi. for...of kabi constructlar iterable objectlardan foydalanadi.",
    options: [
      "Iterable Symbol.iterator orqali iterator bera oladi, iterator esa next() orqali ketma-ket qiymatlarni qaytaradi.",
      "Iterable faqat JSON objectlar uchun ishlatiladi.",
      "Iterator faqat CSS animationlarni boshqaradi.",
      "Iterator JavaScript'da mavjud emas.",
    ],
  },

  {
    id: 116,
    category: "JavaScript",
    question:
      "JavaScript'da generator function nima va yield qanday ishlaydi?",
    answer:
      "Generator function function* sintaksisi bilan yaratiladi va yield orqali bajarilishni vaqtincha to'xtatib, qiymat qaytarishi mumkin. Generator chaqirilganda darhol function body to'liq bajarilmaydi, balki iteratorga o'xshash obyekt qaytariladi.",
    options: [
      "Generator yield yordamida bajarilishni to'xtatib, keyinchalik davom ettirish mumkin bo'lgan iteratorga o'xshash obyekt yaratadi.",
      "Generator faqat React component yaratadi.",
      "yield functionni butunlay o'chiradi.",
      "Generator faqat CSS fayllarda mavjud.",
    ],
  },

  {
    id: 117,
    category: "JavaScript",
    question:
      "JavaScript'da async generator nima uchun ishlatilishi mumkin?",
    answer:
      "Async generator asynchronous qiymatlar ketma-ketligini yield qilish uchun ishlatiladi. for await...of yordamida asynchronous iterable qiymatlarni ketma-ket olish mumkin.",
    options: [
      "Async generator asynchronous iterable qiymatlarni ketma-ket ishlab chiqarish uchun ishlatiladi.",
      "Async generator faqat synchronous numberlarni hisoblaydi.",
      "Async generator CSS animationni boshqaradi.",
      "Async generator Promise bilan ishlamaydi.",
    ],
  },

  {
    id: 118,
    category: "JavaScript",
    question:
      "JavaScript'da Promise.all(), Promise.allSettled(), Promise.race() va Promise.any() o'rtasidagi farq nima?",
    answer:
      "Promise.all barcha promise muvaffaqiyatli bo'lishini kutadi va bittasi reject bo'lsa reject qiladi. allSettled barcha promise tugashini kutadi va har birining statusini qaytaradi. race birinchi tugagan promise natijasini beradi. any esa birinchi fulfilled promise natijasini beradi va barcha promise reject bo'lsa reject qiladi.",
    options: [
      "all barcha muvaffaqiyatni kutadi, allSettled barcha yakunlarni qaytaradi, race birinchi tugaganni, any esa birinchi fulfilled natijani oladi.",
      "To'rttalasi ham aynan bir xil ishlaydi.",
      "Promise.any faqat reject natijani kutadi.",
      "Promise.all faqat bitta promise bilan ishlaydi.",
    ],
  },

  {
    id: 119,
    category: "JavaScript",
    question:
      "JavaScript'da microtask va macrotask tushunchalari nimani anglatadi?",
    answer:
      "Promise callbacklari kabi microtasklar odatda joriy task tugagach va keyingi taskdan oldin bajariladi. Timer va ayrim event callbacklari task yoki macrotask navbatlarida bajariladi. Event loop bu navbatlarni boshqaradi.",
    options: [
      "Promise callbacklari microtasklarga misol bo'lib, timer callbacklari task navbatlariga misol bo'lishi mumkin.",
      "Microtask va macrotask bir xil navbatdir.",
      "Timerlar har doim Promise'dan oldin bajariladi.",
      "Event loop task navbatlaridan foydalanmaydi.",
    ],
  },

  {
    id: 120,
    category: "JavaScript",
    question:
      "JavaScript'da event listenerni removeEventListener bilan olib tashlashda nima muhim?",
    answer:
      "removeEventListener ishlashi uchun event type, listener function reference va tegishli capture sozlamalari mos bo'lishi kerak. Anonymous functionni qayta yaratib yuborish eski listenerni olib tashlamasligi mumkin.",
    options: [
      "Listenerni olib tashlash uchun mos event type va aynan o'sha function reference ishlatilishi muhim.",
      "removeEventListener har qanday functionni avtomatik topadi.",
      "Listenerni olib tashlashning iloji yo'q.",
      "Faqat event nomini berish kifoya.",
    ],
  },

  {
    id: 121,
    category: "JavaScript",
    question:
      "JavaScript'da event capturing va bubbling o'rtasidagi farq nima?",
    answer:
      "Capturing eventning documentdan target tomon pastga harakatlanish bosqichi, bubbling esa targetdan parentlar tomon yuqoriga tarqalish bosqichidir. addEventListenerdagi capture option orqali capturing bosqichida listener ishlatish mumkin.",
    options: [
      "Capturing eventni yuqoridan targetga olib boradi, bubbling esa targetdan yuqoridagi parentlarga tarqatadi.",
      "Capturing va bubbling faqat CSS animationdir.",
      "Bubbling eventni documentdan targetga olib boradi.",
      "Capturing faqat serverda ishlaydi.",
    ],
  },

  {
    id: 122,
    category: "JavaScript",
    question:
      "JavaScript'da event.preventDefault() va event.stopPropagation() o'rtasidagi farq nima?",
    answer:
      "preventDefault browserning event uchun default actionini to'xtatadi. stopPropagation esa eventning parent yoki boshqa phase'larga tarqalishini to'xtatishga xizmat qiladi. Ular bir-birining o'rnini bosmaydi.",
    options: [
      "preventDefault default browser actionini, stopPropagation esa event propagationini boshqaradi.",
      "Ikkalasi ham eventni bir xil tarzda bekor qiladi.",
      "stopPropagation form submitni har doim bekor qiladi.",
      "preventDefault faqat CSS eventlari uchun ishlatiladi.",
    ],
  },

  {
    id: 123,
    category: "JavaScript",
    question:
      "JavaScript'da memoization nima?",
    answer:
      "Memoization function natijalarini oldingi argumentlar asosida cache qilib, bir xil input qayta kelganda hisoblashni takrorlamaslik texnikasidir. Qimmat va deterministic hisoblashlarda foydali bo'lishi mumkin.",
    options: [
      "Memoization oldingi function natijalarini cache qilib, bir xil input uchun qayta hisoblashni kamaytiradi.",
      "Memoization barcha functionlarni async qiladi.",
      "Memoization faqat CSS cache hisoblanadi.",
      "Memoization objectlarni avtomatik deep clone qiladi.",
    ],
  },

  {
    id: 124,
    category: "JavaScript",
    question:
      "JavaScript'da currying nima?",
    answer:
      "Currying bir nechta argument qabul qiladigan functionni har biri bitta yoki kamroq argument qabul qiladigan ketma-ket functionlarga aylantirish texnikasidir. Bu function composition va reusable logicda foydali bo'lishi mumkin.",
    options: [
      "Currying ko'p argumentli functionni ketma-ket function chaqiruvlariga aylantirish texnikasidir.",
      "Currying faqat array sort qilish uchun kerak.",
      "Currying functionni classga aylantiradi.",
      "Currying JavaScript'da mavjud emas.",
    ],
  },

  {
    id: 125,
    category: "JavaScript",
    question:
      "JavaScript'da function composition nima?",
    answer:
      "Function composition bir nechta kichik functionlarni birlashtirib, bir functionning natijasini boshqasiga input sifatida uzatish yondashuvidir. Bu murakkab logicni kichik va reusable functionlarga ajratishga yordam beradi.",
    options: [
      "Function composition bir nechta functionlarni birlashtirib, ularning natijalarini ketma-ket ishlatish yondashuvidir.",
      "Composition faqat objectlarni clone qiladi.",
      "Composition faqat React CSS uchun ishlatiladi.",
      "Composition functionlarni o'chirish texnikasidir.",
    ],
  },

  {
    id: 126,
    category: "TypeScript",
    question:
      "TypeScript'da type inference nima?",
    answer:
      "Type inference TypeScript'ning koddagi mavjud ma'lumotlarga qarab type'ni avtomatik aniqlash imkoniyatidir. Masalan const count = 10 yozilganda TypeScript count qiymatini number deb tushunishi mumkin.",
    options: [
      "Type inference TypeScript'ning type'larni ayrim holatlarda koddan avtomatik aniqlash mexanizmidir.",
      "Type inference barcha type'larni any qiladi.",
      "Type inference faqat CSS fayllarida ishlaydi.",
      "TypeScript hech qachon type inference qilmaydi.",
    ],
  },

  {
    id: 127,
    category: "TypeScript",
    question:
      "TypeScript'da literal type nima?",
    answer:
      "Literal type o'zgaruvchiga ma'lum bir aniq qiymatni type sifatida belgilash imkonini beradi. Masalan type Status = 'loading' | 'success' | 'error' kabi type faqat shu qiymatlarni qabul qiladi.",
    options: [
      "Literal type type sifatida aniq string, number yoki boshqa literal qiymatlarni belgilash imkonini beradi.",
      "Literal type barcha qiymatlarni any qiladi.",
      "Literal type faqat database field uchun ishlatiladi.",
      "Literal type CSS property hisoblanadi.",
    ],
  },

  {
    id: 128,
    category: "TypeScript",
    question:
      "TypeScript'da discriminated union nima va u qaysi holatda foydali?",
    answer:
      "Discriminated union bir nechta object type'ni umumiy literal property orqali ajratish usulidir. Bu turli state yoki event shakllarini model qilishda va switch orqali type narrowing qilishda juda qulay.",
    options: [
      "Discriminated union object variantlarini umumiy literal property orqali ajratib, type narrowingni osonlashtiradi.",
      "Discriminated union barcha objectlarni bir xil qiladi.",
      "U faqat CSS selectorlarda ishlaydi.",
      "TypeScript discriminated unionni qo'llab-quvvatlamaydi.",
    ],
  },

  {
    id: 129,
    category: "TypeScript",
    question:
      "TypeScript'da type guard nima?",
    answer:
      "Type guard TypeScript'ga ma'lum code branch ichida qiymatning qaysi type ekanini aniqlashga yordam beradigan tekshiruv yoki functiondir. typeof, instanceof va custom predicate functionlar bunga misol bo'ladi.",
    options: [
      "Type guard qiymatning type'ini tekshirib, TypeScript'ga type narrowing qilish imkonini beradi.",
      "Type guard faqat runtime memoryni tozalaydi.",
      "Type guard CSS validation uchun ishlatiladi.",
      "Type guard type'larni avtomatik o'chiradi.",
    ],
  },

  {
    id: 130,
    category: "TypeScript",
    question:
      "TypeScript'da custom type predicate, ya'ni value is Type, nima uchun ishlatiladi?",
    answer:
      "Custom type predicate function tekshiruv natijasida qiymatni ma'lum type sifatida TypeScript'ga tanitadi. Masalan function isUser(value: unknown): value is User shaklida yozilishi mumkin.",
    options: [
      "value is Type predicate custom type guard yaratib, TypeScript'ga qiymatning aniqroq type ekanini bildiradi.",
      "Predicate faqat booleanni stringga aylantiradi.",
      "Predicate faqat React Hook sifatida ishlaydi.",
      "Type predicate runtime'da objectni avtomatik o'zgartiradi.",
    ],
  },

  {
    id: 131,
    category: "TypeScript",
    question:
      "TypeScript'da keyof operatori nima?",
    answer:
      "keyof object type'ning property keylarini union type sifatida olish imkonini beradi. Masalan keyof User User objectidagi property nomlaridan tashkil topgan type yaratishi mumkin.",
    options: [
      "keyof object type property keylarini union type sifatida olish imkonini beradi.",
      "keyof objectni JSONga aylantiradi.",
      "keyof faqat number type bilan ishlaydi.",
      "keyof propertylarni o'chiradi.",
    ],
  },

  {
    id: 132,
    category: "TypeScript",
    question:
      "TypeScript'da indexed access type nima?",
    answer:
      "Indexed access type mavjud type ichidan ma'lum propertyning type'ini olishga imkon beradi. Masalan User['name'] User type'dagi name property'sining type'ini ifodalaydi.",
    options: [
      "Indexed access type mavjud type ichidan ma'lum property yoki indexning type'ini olish imkonini beradi.",
      "Indexed access faqat arrayni sort qiladi.",
      "Indexed access object propertylarini o'chiradi.",
      "Indexed access faqat CSS classlar bilan ishlaydi.",
    ],
  },

  {
    id: 133,
    category: "TypeScript",
    question:
      "TypeScript'da conditional type nima?",
    answer:
      "Conditional type type'lar orasidagi shart asosida bir type yoki boshqa type'ni tanlash imkonini beradi. Uning umumiy ko'rinishi T extends U ? X : Y shaklida bo'lishi mumkin.",
    options: [
      "Conditional type type relationship asosida turli type variantlaridan birini tanlash imkonini beradi.",
      "Conditional type faqat runtime if statement hisoblanadi.",
      "Conditional type faqat CSSda ishlaydi.",
      "Conditional type barcha type'larni any qiladi.",
    ],
  },

  {
    id: 134,
    category: "TypeScript",
    question:
      "TypeScript'da mapped type nima?",
    answer:
      "Mapped type mavjud type propertylari ustida yurib, ularning asosida yangi type yaratish imkonini beradi. Readonly yoki optional modifierlarni o'zgartirish kabi utility type'lar shu mexanizmga asoslanadi.",
    options: [
      "Mapped type mavjud type propertylari asosida yangi transformatsiyalangan type yaratishga yordam beradi.",
      "Mapped type faqat array qiymatlarini map qiladi.",
      "Mapped type runtime'da objectni o'zgartiradi.",
      "Mapped type faqat React component uchun ishlatiladi.",
    ],
  },

  {
    id: 135,
    category: "TypeScript",
    question:
      "TypeScript'da keyof va generics birgalikda qanday foydali bo'lishi mumkin?",
    answer:
      "Generics va keyof yordamida functionni object va uning faqat mavjud keylari bilan type-safe tarzda ishlashga majburlash mumkin. Bu property olish yoki o'zgartirish kabi reusable utility functionlarda foydali.",
    options: [
      "Generics va keyof object keylari bilan type-safe reusable functionlar yaratishga yordam beradi.",
      "Ular faqat CSS classlarini tekshiradi.",
      "keyof generic type'larni o'chiradi.",
      "Generics faqat database connection yaratadi.",
    ],
  },

  {
    id: 136,
    category: "TypeScript",
    question:
      "TypeScript'da default generic parameter nima?",
    answer:
      "Generic type parameter uchun default type berish mumkin. Agar caller type'ni aniq ko'rsatmasa, TypeScript default generic type'dan foydalanadi.",
    options: [
      "Default generic parameter type ko'rsatilmagan holatda ishlatiladigan oldindan belgilangan generic type hisoblanadi.",
      "Default generic parameter barcha type'larni string qiladi.",
      "U faqat React propslarida ishlaydi.",
      "TypeScript generic parameterga default berishni qo'llamaydi.",
    ],
  },

  {
    id: 137,
    category: "TypeScript",
    question:
      "TypeScript'da generic constraint, ya'ni extends, nima uchun ishlatiladi?",
    answer:
      "Generic constraint generic type uchun ma'lum talab qo'yadi. Masalan T extends { id: number } yozuvi T type'ida id property bo'lishini talab qiladi, shu bilan reusable function type-safe qoladi.",
    options: [
      "Generic constraint generic type uchun ma'lum strukturaga mos kelish talabini qo'yadi.",
      "extends barcha type tekshiruvlarini o'chiradi.",
      "Constraint faqat CSS inheritance uchun ishlatiladi.",
      "Generic constraint faqat string bilan ishlaydi.",
    ],
  },

  {
    id: 138,
    category: "TypeScript",
    question:
      "TypeScript'da function overload nima?",
    answer:
      "Function overload bir function uchun bir nechta call signature yozish imkonini beradi. Implementation esa shu variantlarning barchasini qo'llab-quvvatlaydigan tarzda yoziladi. Bu API'ni aniqroq type qilishda foydali.",
    options: [
      "Function overload bitta function uchun bir nechta type-safe call signature belgilash imkonini beradi.",
      "Overload functionni ikki marta runtime'da ishlatadi.",
      "Overload faqat React componentlar uchun mavjud.",
      "Overload barcha parameterlarni optional qiladi.",
    ],
  },

  {
    id: 139,
    category: "TypeScript",
    question:
      "TypeScript'da abstract class nima?",
    answer:
      "Abstract class to'g'ridan-to'g'ri instance yaratish uchun emas, boshqa classlar uchun umumiy baza sifatida ishlatiladi. Unda abstract methodlar bo'lishi mumkin va child classlar ularni implementation qilishi kerak.",
    options: [
      "Abstract class bevosita instance qilinmaydigan va boshqa classlar uchun baza bo'lib xizmat qiladigan classdir.",
      "Abstract class faqat interface aliasidir.",
      "Abstract class faqat React functional component yaratadi.",
      "Abstract class TypeScript'da mavjud emas.",
    ],
  },

  {
    id: 140,
    category: "TypeScript",
    question:
      "TypeScript'da access modifierlar, public, private va protected, nima uchun kerak?",
    answer:
      "Access modifierlar class property yoki methodlariga qayerdan murojaat qilish mumkinligini belgilaydi. public hamma joydan, private faqat class ichidan, protected esa class va uning child classlaridan foydalanishga ruxsat beradi.",
    options: [
      "Access modifierlar class memberlariga qayerdan murojaat qilish mumkinligini belgilaydi.",
      "Ular faqat CSS visibilityni boshqaradi.",
      "private propertyga har qanday joydan murojaat qilish mumkin.",
      "public faqat child class uchun mavjud.",
    ],
  },

  {
    id: 141,
    category: "TypeScript",
    question:
      "TypeScript'da module augmentation nima?",
    answer:
      "Module augmentation mavjud module declarationlarini qo'shimcha type yoki memberlar bilan kengaytirish imkonini beradi. Bu uchinchi tomon kutubxona type'larini project ehtiyojiga mos ravishda kengaytirishda foydali.",
    options: [
      "Module augmentation mavjud module type declarationlarini qo'shimcha ma'lumotlar bilan kengaytirishga imkon beradi.",
      "Augmentation module'ni runtime'da o'chiradi.",
      "Bu faqat CSS module uchun ishlaydi.",
      "Module augmentation JavaScript'da mumkin emas.",
    ],
  },

  {
    id: 142,
    category: "TypeScript",
    question:
      "TypeScript'da namespace nima va zamonaviy module tizimlarida undan foydalanish qanday qaraladi?",
    answer:
      "Namespace bir-biriga tegishli identifierlarni nom maydoni ichida guruhlash uchun ishlatiladigan eskiroq TypeScript mexanizmidir. Zamonaviy loyihalarda ES modules import/export tizimi ko'pincha afzal ko'riladi.",
    options: [
      "Namespace identifierlarni guruhlash uchun ishlatiladi, ammo zamonaviy loyihalarda ES modules ko'pincha afzal hisoblanadi.",
      "Namespace faqat CSS variablelarni saqlaydi.",
      "Namespace database schema hisoblanadi.",
      "Namespace import/export bilan mutlaqo bog'liq emas.",
    ],
  },

  {
    id: 143,
    category: "TypeScript",
    question:
      "TypeScript'da tsconfig.json faylining vazifasi nima?",
    answer:
      "tsconfig.json TypeScript compiler uchun project konfiguratsiyasini belgilaydi. Unda target, module, strictness, paths, source fayllar va boshqa compiler optionlar sozlanishi mumkin.",
    options: [
      "tsconfig.json TypeScript projectining compiler va type-checking konfiguratsiyasini belgilaydi.",
      "tsconfig.json faqat React componentlarni render qiladi.",
      "tsconfig.json database konfiguratsiyasi hisoblanadi.",
      "TypeScript tsconfig.json faylidan foydalanmaydi.",
    ],
  },

  {
    id: 144,
    category: "TypeScript",
    question:
      "TypeScript'da target va module compiler optionlari nimani boshqaradi?",
    answer:
      "target TypeScript kodining qaysi JavaScript language levelga compile qilinishini belgilaydi. module esa JavaScript module formatini boshqaradi, masalan ES modules yoki boshqa mos formatlar.",
    options: [
      "target chiqariladigan JavaScript language levelini, module esa module formatini belgilaydi.",
      "Ikkalasi ham faqat CSS compilationni boshqaradi.",
      "target database versiyasini belgilaydi.",
      "module browser ekran o'lchamini boshqaradi.",
    ],
  },

  {
    id: 145,
    category: "TypeScript",
    question:
      "TypeScript'da declaration file (.d.ts) nima uchun kerak?",
    answer:
      "Declaration file JavaScript kodining yoki kutubxonaning type ma'lumotlarini ifodalash uchun ishlatiladi. Bu TypeScript'ga implementation kodini yozmasdan uning API'si haqida type information berishga yordam beradi.",
    options: [
      ".d.ts fayllari JavaScript yoki boshqa implementation uchun type declarationlarni ifodalashga xizmat qiladi.",
      ".d.ts faqat CSS fayllarini kompilyatsiya qiladi.",
      ".d.ts runtime'da alohida JavaScript sifatida ishlaydi.",
      "Declaration file TypeScript'da ishlatilmaydi.",
    ],
  },

  {
    id: 146,
    category: "TypeScript",
    question:
      "TypeScript'da module resolution nima?",
    answer:
      "Module resolution import qilingan module yoki type declarationning qaysi fayl yoki package'dan olinishi kerakligini aniqlash jarayonidir. Compiler konfiguratsiyasi va project strukturasi bu jarayonga ta'sir qiladi.",
    options: [
      "Module resolution import qilingan module yoki type'ning qayerdan topilishini aniqlash jarayonidir.",
      "Module resolution faqat CSS ranglarini topadi.",
      "U faqat browser cache bilan bog'liq.",
      "Module resolution faqat database querylar uchun ishlaydi.",
    ],
  },

  {
    id: 147,
    category: "TypeScript",
    question:
      "TypeScript'da noImplicitAny optioni nima qiladi?",
    answer:
      "noImplicitAny TypeScript'ga type aniqlanmagan joylarda implicit any paydo bo'lishiga qarshi tekshiruvni kuchaytiradi. Bu function parameterlari kabi joylarda type'larni aniqroq yozishga majbur qilishi mumkin.",
    options: [
      "noImplicitAny type aniq bo'lmagan joylarda implicit any ishlatilishini tekshiradi va ko'plab xatolarni oldindan ko'rsatadi.",
      "noImplicitAny barcha type'larni any qiladi.",
      "U faqat CSS validation uchun ishlatiladi.",
      "noImplicitAny runtime performanceni oshiradi.",
    ],
  },

  {
    id: 148,
    category: "TypeScript",
    question:
      "TypeScript'da strictNullChecks nima uchun muhim?",
    answer:
      "strictNullChecks yoqilganda null va undefined boshqa type'larga avtomatik ravishda aralashib ketmaydi. Bu null bilan bog'liq runtime xatolarni development vaqtida aniqlashga yordam beradi.",
    options: [
      "strictNullChecks null va undefined bilan ishlashni qat'iylashtirib, potential runtime xatolarni oldindan aniqlashga yordam beradi.",
      "strictNullChecks nullni avtomatik o'chiradi.",
      "U faqat CSS null qiymatlarini tekshiradi.",
      "strictNullChecks barcha type'larni any qiladi.",
    ],
  },

  {
    id: 149,
    category: "TypeScript",
    question:
      "TypeScript'da satisfies operatori nima uchun foydali?",
    answer:
      "satisfies qiymatning ma'lum type talablariga mosligini tekshiradi, shu bilan birga expressionning aniqroq inferred type ma'lumotlarini saqlab qolishi mumkin. Bu configuration objectlarda type validation va inference o'rtasida yaxshi balans beradi.",
    options: [
      "satisfies qiymatning berilgan type talablariga mosligini tekshiradi va inference ma'lumotlarini saqlashga yordam beradi.",
      "satisfies objectni runtime'da freeze qiladi.",
      "satisfies faqat stringlarni numberga aylantiradi.",
      "satisfies React state'ni global qiladi.",
    ],
  },

  {
    id: 150,
    category: "TypeScript",
    question:
      "TypeScript'da never type yordamida exhaustive checking qanday qilinadi?",
    answer:
      "Discriminated unionning barcha variantlari switch ichida ko'rib chiqilganda default branchda never talab qilish qolgan variant bo'lsa compiler xatosini chiqarishga yordam beradi. Bu yangi variant qo'shilganda uni unutib qo'ymaslik uchun foydali.",
    options: [
      "never yordamida switch kabi joylarda barcha union variantlari ko'rib chiqilganini compile-time tekshirish mumkin.",
      "never barcha qiymatlarni stringga aylantiradi.",
      "never faqat async function uchun ishlatiladi.",
      "Exhaustive checking TypeScript'da mumkin emas.",
    ],
  },

  {
    id: 151,
    category: "React",
    question:
      "React'da functional component va class component o'rtasidagi farq nima?",
    answer:
      "Functional component JavaScript function sifatida yoziladi va Hooks orqali state hamda side effectlarni boshqaradi. Class component esa React.Componentdan meros oladigan class asosida yoziladi. Zamonaviy React loyihalarida functional componentlar keng qo'llanadi.",
    options: [
      "Functional component function va Hooks asosida, class component esa React.Component asosidagi class orqali yaratiladi.",
      "Functional componentda state ishlatib bo'lmaydi.",
      "Class component faqat CSS uchun ishlatiladi.",
      "Ularning hech qanday sintaktik farqi yo'q.",
    ],
  },

  {
    id: 152,
    category: "React",
    question:
      "React'da useReducer Hook nima va qachon useState'dan qulayroq bo'lishi mumkin?",
    answer:
      "useReducer murakkab state transitionlarni action va reducer function orqali markazlashtirishga yordam beradi. State bir nechta bog'liq qiymatlardan iborat yoki update logic murakkab bo'lsa useReducer qulay bo'lishi mumkin.",
    options: [
      "useReducer murakkab state transitionlarni reducer va actionlar orqali boshqarishga yordam beradi.",
      "useReducer faqat API request yuboradi.",
      "useReducer CSS animation yaratadi.",
      "useReducer faqat class componentlarda ishlaydi.",
    ],
  },

  {
    id: 153,
    category: "React",
    question:
      "React'da reducer function qanday prinsip asosida ishlaydi?",
    answer:
      "Reducer odatda oldingi state va actionni qabul qilib, yangi state qaytaradigan pure function sifatida yoziladi. U side effectlarni bajarishdan ko'ra state transitionni aniq va predictable qilishga xizmat qiladi.",
    options: [
      "Reducer oldingi state va action asosida yangi state qaytaradigan pure function sifatida ishlaydi.",
      "Reducer API requestlarni avtomatik yuboradi.",
      "Reducer DOMni to'g'ridan-to'g'ri o'zgartiradi.",
      "Reducer faqat CSS propertylarini boshqaradi.",
    ],
  },

  {
    id: 154,
    category: "React",
    question:
      "React'da useId Hook nima uchun ishlatiladi?",
    answer:
      "useId accessibility bilan bog'liq unique IDlar yoki bir-biriga bog'langan form elementlari uchun barqaror ID yaratishda yordam beradi. U random ID yaratish uchun emas, React render modeliga mos unique identifierlar uchun ishlatiladi.",
    options: [
      "useId accessibility va form elementlari uchun barqaror unique ID yaratishda yordam beradi.",
      "useId database primary key yaratadi.",
      "useId componentni unique qilib beradi.",
      "useId faqat API token yaratadi.",
    ],
  },

  {
    id: 155,
    category: "React",
    question:
      "React'da useLayoutEffect va useEffect o'rtasidagi asosiy farq nima?",
    answer:
      "useLayoutEffect DOM o'zgarishlari qo'llangandan keyin browser paint qilishidan oldin synchronous tarzda ishlashi mumkin. useEffect esa odatda browser paintidan keyin side effectlarni bajarish uchun ishlatiladi. DOM o'lchamini o'qish yoki paintdan oldingi layout ishlari uchun useLayoutEffect kerak bo'lishi mumkin.",
    options: [
      "useLayoutEffect paintdan oldingi layout bilan bog'liq ishlarga, useEffect esa odatiy side effectlarga mos keladi.",
      "useEffect har doim useLayoutEffectdan oldin synchronous ishlaydi.",
      "useLayoutEffect faqat serverda ishlaydi.",
      "Ikkalasining farqi yo'q.",
    ],
  },

  {
    id: 156,
    category: "React",
    question:
      "React'da stale closure muammosi nima?",
    answer:
      "Stale closure callback yoki effect eski renderdagi state yoki props qiymatini yopib olganda yuzaga kelishi mumkin. Dependencylarni to'g'ri belgilash yoki functional state update kabi usullar bunday muammolarni kamaytiradi.",
    options: [
      "Stale closure callback eski renderdagi state yoki props qiymatini ishlatib qolishi bilan bog'liq muammo.",
      "Stale closure faqat CSS cache xatosidir.",
      "Stale closure state'ni avtomatik yangilaydi.",
      "React'da closure mavjud emas.",
    ],
  },

  {
    id: 157,
    category: "React",
    question:
      "React'da functional state update qachon kerak bo'ladi?",
    answer:
      "Yangi state oldingi state qiymatiga bog'liq bo'lsa, setterga function berish foydali. Masalan setCount(prev => prev + 1) ketma-ket update yoki batching sharoitida oldingi state bilan ishonchli ishlashga yordam beradi.",
    options: [
      "Yangi state oldingi statega bog'liq bo'lsa, functional update eng ishonchli yondashuvlardan biridir.",
      "Functional update faqat string state uchun ishlaydi.",
      "Functional update componentni unmount qiladi.",
      "U faqat CSS state uchun kerak.",
    ],
  },

  {
    id: 158,
    category: "React",
    question:
      "React'da state initialization functiondan foydalanishning foydasi nima?",
    answer:
      "useStatega function berish initial state hisoblashni lazy qilish imkonini beradi. Bu boshlang'ich qiymatni hisoblash qimmat bo'lsa, uni har bir renderda qayta hisoblashning oldini olishga yordam beradi.",
    options: [
      "Lazy initializer initial state hisoblashni faqat kerakli initialization vaqtida bajarishga yordam beradi.",
      "U state'ni global qiladi.",
      "U har bir renderda initial qiymatni qayta hisoblaydi.",
      "Lazy initializer faqat CSS uchun ishlatiladi.",
    ],
  },

  {
    id: 159,
    category: "React",
    question:
      "React'da context qiymati o'zgarganda consumer componentlarga qanday ta'sir qiladi?",
    answer:
      "Context providerning value qiymati o'zgarganda shu contextdan foydalanadigan consumerlar qayta render qilinishi mumkin. Shu sababli context value'sini keraksiz yangi reference bilan yaratish performance muammolariga olib kelishi mumkin.",
    options: [
      "Context value o'zgarganda undan foydalanadigan componentlar qayta render qilinishi mumkin.",
      "Context o'zgarsa hech qanday component render bo'lmaydi.",
      "Faqat CSS componentlar render bo'ladi.",
      "Context qiymati hech qachon o'zgarmaydi.",
    ],
  },

  {
    id: 160,
    category: "React",
    question:
      "React'da state colocation nima?",
    answer:
      "State colocation state'ni undan foydalanadigan componentlarga imkon qadar yaqin joyda saqlash yondashuvidir. Bu keraksiz global state va prop drillingni kamaytirib, architecture'ni soddalashtirishi mumkin.",
    options: [
      "State colocation state'ni undan foydalanadigan joyga yaqin saqlash orqali architecture'ni soddalashtirishga yordam beradi.",
      "Colocation barcha state'ni global qiladi.",
      "Colocation faqat CSS layout texnikasidir.",
      "State doim root componentda bo'lishi kerak.",
    ],
  },

  {
    id: 161,
    category: "React",
    question:
      "React'da composition nima va inheritance o'rniga nega ko'p ishlatiladi?",
    answer:
      "Composition componentlarni children, props yoki boshqa componentlar orqali birlashtirib reusable UI yaratish usulidir. React ekotizimida composition ko'pincha inheritancega qaraganda moslashuvchanroq va componentlar orasidagi bog'liqlikni kamaytiradi.",
    options: [
      "Composition componentlarni birlashtirib reusable UI yaratadi va React'da ko'pincha inheritancega qaraganda moslashuvchanroq.",
      "Composition faqat class inheritance bilan ishlaydi.",
      "Composition componentlarni o'chiradi.",
      "React compositionni qo'llab-quvvatlamaydi.",
    ],
  },

  {
    id: 162,
    category: "React",
    question:
      "React'da render phase va commit phase o'rtasidagi farq nima?",
    answer:
      "Render phase React qaysi UI natijasi kerakligini hisoblaydigan bosqichdir. Commit phase esa hisoblangan o'zgarishlarni DOM kabi host environmentga qo'llash bosqichidir. Render phase'dagi logic imkon qadar pure bo'lishi kerak.",
    options: [
      "Render phase yangi UI natijasini hisoblaydi, commit phase esa kerakli o'zgarishlarni DOMga qo'llaydi.",
      "Commit phase faqat API request yuboradi.",
      "Render phase faqat CSS yuklaydi.",
      "Ikki phase aynan bir xil vazifani bajaradi.",
    ],
  },

  {
    id: 163,
    category: "React",
    question:
      "React StrictMode nima va development vaqtida qanday yordam beradi?",
    answer:
      "StrictMode development muhitida potential muammolarni aniqlashga yordam beradigan qo'shimcha tekshiruvlar va ayrim lifecycle/effect xatti-harakatlarini tekshirish mexanizmlarini yoqadi. U production UIga odatda xuddi shu tarzda ta'sir qilmaydi.",
    options: [
      "StrictMode developmentda potential React muammolarini aniqlash uchun qo'shimcha tekshiruvlar beradi.",
      "StrictMode productionni har doim ikki marta render qiladi.",
      "StrictMode faqat CSSni tekshiradi.",
      "StrictMode state management kutubxonasi hisoblanadi.",
    ],
  },

  {
    id: 164,
    category: "React",
    question:
      "React'da hydration nima?",
    answer:
      "Hydration server tomonidan chiqarilgan HTMLni browserdagi React bilan bog'lab, unga interactivity va event handlerlarni ulash jarayonidir. Server rendering ishlatiladigan ilovalarda bu muhim bosqich hisoblanadi.",
    options: [
      "Hydration serverdan kelgan HTMLga React interactivity va event handlerlarini ulash jarayonidir.",
      "Hydration faqat image optimization jarayonidir.",
      "Hydration state'ni databasega yozadi.",
      "Hydration CSSni JavaScriptga aylantiradi.",
    ],
  },

  {
    id: 165,
    category: "React",
    question:
      "React hydration mismatch nima sababdan yuzaga kelishi mumkin?",
    answer:
      "Serverda render qilingan HTML va clientdagi birinchi render natijasi bir-biridan farq qilsa hydration mismatch yuzaga kelishi mumkin. Random qiymatlar, current time, browser-only API yoki server va clientda turlicha ma'lumot ishlatilishi bunga sabab bo'lishi mumkin.",
    options: [
      "Hydration mismatch server va clientning birinchi render natijalari mos kelmaganda yuzaga keladi.",
      "Hydration mismatch faqat CSS fayl yetishmaganda yuz beradi.",
      "Hydration mismatch faqat database connection sababli bo'ladi.",
      "React hydration mismatchni hech qachon ko'rsatmaydi.",
    ],
  },

  {
    id: 166,
    category: "React",
    question:
      "React'da portal nima va qachon ishlatiladi?",
    answer:
      "Portal componentning JSXini React tree ichidagi mantiqiy joyidan boshqa DOM node ichiga render qilish imkonini beradi. Modal, tooltip yoki overlay kabi UI elementlari uchun foydali bo'lishi mumkin.",
    options: [
      "Portal React componentini boshqa DOM node ichiga render qilishga imkon beradi va modal yoki overlaylarda foydali.",
      "Portal componentni boshqa projectga ko'chiradi.",
      "Portal faqat API endpoint yaratadi.",
      "Portal faqat CSS import qiladi.",
    ],
  },

  {
    id: 167,
    category: "React",
    question:
      "React'da ref forwarding qaysi UI holatlarda foydali bo'lishi mumkin?",
    answer:
      "Custom component tashqarisidan ichki DOM elementga focus, selection yoki boshqa imperative browser API orqali murojaat qilish kerak bo'lsa ref forwarding foydali bo'lishi mumkin.",
    options: [
      "Ref forwarding parentga custom component ichidagi DOM element bilan imperative tarzda ishlash imkonini beradi.",
      "Ref forwarding faqat database query uchun ishlatiladi.",
      "Ref forwarding componentni global qiladi.",
      "Ref forwarding faqat CSS ranglarini uzatadi.",
    ],
  },

  {
    id: 168,
    category: "React",
    question:
      "React'da imperative handle nima uchun ishlatiladi?",
    answer:
      "useImperativeHandle parent orqali olinadigan refning tashqi API'sini custom qilish uchun ishlatiladi. Masalan component ichidagi DOMning barcha imkoniyatlarini berish o'rniga faqat focus kabi kerakli metodlarni expose qilish mumkin.",
    options: [
      "useImperativeHandle ref orqali parentga beriladigan custom imperative API'ni belgilashga imkon beradi.",
      "useImperativeHandle state'ni global qiladi.",
      "U faqat CSS animation yaratadi.",
      "U API requestlarni cache qiladi.",
    ],
  },

  {
    id: 169,
    category: "React",
    question:
      "React'da useSyncExternalStore nima uchun mavjud?",
    answer:
      "useSyncExternalStore React tashqarisidagi external store bilan React componentlarini xavfsiz va consistent tarzda bog'lash uchun ishlatiladi. Bu custom global store yoki browser subscription kabi holatlarda foydali bo'lishi mumkin.",
    options: [
      "useSyncExternalStore React tashqarisidagi store yoki subscription bilan componentni consistent bog'lash uchun ishlatiladi.",
      "U faqat localStorage qiymatini o'chiradi.",
      "U faqat CSS state bilan ishlaydi.",
      "U API endpoint yaratadi.",
    ],
  },

  {
    id: 170,
    category: "React",
    question:
      "React'da optimistic UI nima?",
    answer:
      "Optimistic UI server javobini kutmasdan, request muvaffaqiyatli bo'ladi deb hisoblab interfeysni darhol yangilash yondashuvidir. Agar request muvaffaqiyatsiz bo'lsa, UI oldingi holatga qaytarilishi yoki xato ko'rsatilishi mumkin.",
    options: [
      "Optimistic UI server javobini kutmasdan foydalanuvchi interfeysini taxminiy muvaffaqiyat asosida darhol yangilaydi.",
      "Optimistic UI faqat CSS animationdir.",
      "Optimistic UI requestni hech qachon yubormaydi.",
      "Optimistic UI faqat database backup uchun ishlatiladi.",
    ],
  },

  {
    id: 171,
    category: "React",
    question:
      "React'da suspense boundary qanday vazifani bajaradi?",
    answer:
      "Suspense boundary uning ichidagi UI ma'lum asynchronous ishni kutayotgan vaqtda fallback UI ko'rsatish imkonini beradi. Bu loading holatlarini component daraxtida aniq joylashtirishga yordam beradi.",
    options: [
      "Suspense boundary asynchronous UI tayyor bo'lguncha fallback interfeys ko'rsatishga yordam beradi.",
      "Suspense barcha requestlarni bekor qiladi.",
      "Suspense faqat CSS validation uchun ishlatiladi.",
      "Suspense state management kutubxonasi hisoblanadi.",
    ],
  },

  {
    id: 172,
    category: "React",
    question:
      "React'da memoization performance muammosini avtomatik hal qiladimi?",
    answer:
      "Yo'q. Memoization faqat ma'lum hisoblash yoki renderlarni kamaytirishi mumkin. Noto'g'ri yoki ortiqcha memoization kodni murakkablashtirishi va o'zining overheadiga ega bo'lishi mumkin. Avval performance muammosini o'lchash muhim.",
    options: [
      "Memoization barcha performance muammolarini avtomatik hal qilmaydi va faqat kerakli joylarda ishlatilishi kerak.",
      "Memoization har doim performance'ni oshiradi.",
      "Memoization React renderlarini butunlay yo'q qiladi.",
      "Memoization faqat CSS uchun ishlaydi.",
    ],
  },

  {
    id: 173,
    category: "React",
    question:
      "React'da unnecessary re-renderlarni aniqlash uchun qanday yondashuv ishlatilishi mumkin?",
    answer:
      "React DevTools Profiler orqali renderlar va componentlarning ishlash vaqtini kuzatish mumkin. Shuningdek props reference'lari, context update'lari va state joylashuvini tekshirish orqali keraksiz render sabablarini aniqlash mumkin.",
    options: [
      "React DevTools Profiler va component props, state hamda contextlarini tahlil qilish orqali unnecessary renderlarni aniqlash mumkin.",
      "Faqat console.log ishlatish yetarli.",
      "Re-renderlarni aniqlashning iloji yo'q.",
      "Faqat CSS inspector kerak.",
    ],
  },

  {
    id: 174,
    category: "React",
    question:
      "React'da list virtualization nima va qachon kerak bo'ladi?",
    answer:
      "List virtualization katta listdagi barcha elementlarni birdan DOMga chiqarish o'rniga faqat ko'rinadigan yoki viewportga yaqin elementlarni render qilish usulidir. Minglab elementlardan iborat listlarda rendering va DOM xarajatlarini kamaytirishi mumkin.",
    options: [
      "Virtualization katta listlarda faqat kerakli ko'rinadigan elementlarni render qilib performance xarajatini kamaytiradi.",
      "Virtualization barcha list elementlarini ikki marta render qiladi.",
      "Virtualization faqat CSS grid uchun kerak.",
      "Virtualization database index yaratadi.",
    ],
  },

  {
    id: 175,
    category: "React",
    question:
      "React'da accessibility haqida component yaratishda nimalarga e'tibor berish kerak?",
    answer:
      "Semantic HTML, keyboard navigation, focus management, label va form elementlarining to'g'ri bog'lanishi, accessible name va kerak bo'lsa ARIA atributlariga e'tibor berish kerak. Native HTML elementlarini imkon qadar to'g'ri ishlatish accessibilityni yaxshilaydi.",
    options: [
      "Semantic HTML, keyboard navigation, focus, label va kerakli ARIA atributlariga e'tibor berish muhim.",
      "Accessibility faqat CSS ranglarini o'zgartirishdan iborat.",
      "ARIA har doim native HTML o'rnini bosadi.",
      "Accessibility faqat mobile qurilmalarda kerak.",
    ],
  },

  {
    id: 176,
    category: "Next.js",
    question:
      "Next.js App Router'da dynamic segment params qanday olinadi?",
    answer:
      "Dynamic route segmentlari page yoki layoutga beriladigan params orqali olinadi. Masalan [id] segmenti bo'lsa, params ichida id qiymati mavjud bo'ladi va shu qiymat asosida kerakli ma'lumotni olish mumkin.",
    options: [
      "Dynamic route qiymatlari params orqali olinadi va [id] kabi segmentlarning qiymatini beradi.",
      "Dynamic params faqat CSS orqali olinadi.",
      "params faqat browser cookie'dan keladi.",
      "App Router dynamic paramsni qo'llab-quvvatlamaydi.",
    ],
  },

  {
    id: 177,
    category: "Next.js",
    question:
      "Next.js App Router'da searchParams nima uchun ishlatiladi?",
    answer:
      "searchParams URL query stringdagi qiymatlarni olish uchun ishlatiladi. Masalan /products?category=phone URLida category qiymatini olish va serverda shu asosida data filterlash mumkin.",
    options: [
      "searchParams URL query string parametrlarini olish va ular asosida UI yoki data logicni boshqarish uchun ishlatiladi.",
      "searchParams faqat CSS querylarni boshqaradi.",
      "searchParams database passwordini yaratadi.",
      "searchParams faqat dynamic [id] segmentini almashtiradi.",
    ],
  },

  {
    id: 178,
    category: "Next.js",
    question:
      "Next.js App Router'da generateStaticParams nima uchun ishlatiladi?",
    answer:
      "generateStaticParams dynamic route segmentlari uchun oldindan ma'lum bo'lgan parametrlar ro'yxatini berib, ularning route'larini oldindan generatsiya qilishga yordam beradi.",
    options: [
      "generateStaticParams dynamic route parametrlarini oldindan belgilab, mos sahifalarni static tarzda generatsiya qilishga yordam beradi.",
      "generateStaticParams browser cookie yaratadi.",
      "generateStaticParams faqat CSS route yaratadi.",
      "U faqat POST request yuboradi.",
    ],
  },

  {
    id: 179,
    category: "Next.js",
    question:
      "Next.js App Router'da notFound() funksiyasi nima qiladi?",
    answer:
      "notFound() joriy route uchun 404 holatini ko'rsatish uchun ishlatiladi. Masalan database'dan kerakli record topilmasa, notFound() chaqirilib 404 UIga o'tish mumkin.",
    options: [
      "notFound() resurs topilmagan holatda Next.js 404 interfeysiga o'tishga yordam beradi.",
      "notFound() serverni to'xtatadi.",
      "notFound() database recordini o'chiradi.",
      "notFound() faqat CSS error yaratadi.",
    ],
  },

  {
    id: 180,
    category: "Next.js",
    question:
      "Next.js'da parallel routes nima uchun ishlatilishi mumkin?",
    answer:
      "Parallel routes bir xil layout ichida bir nechta route segmentlarini bir vaqtda mustaqil render qilishga imkon beradi. Dashboard kabi murakkab UIlar yoki bir nechta mustaqil viewlarni boshqarishda foydali.",
    options: [
      "Parallel routes bir layout ichida bir nechta mustaqil route segmentlarini parallel boshqarishga imkon beradi.",
      "Parallel routes faqat CSS flexboxni boshqaradi.",
      "Parallel routes database querylarni parallel yuborishni anglatadi.",
      "Parallel routes faqat image formatini o'zgartiradi.",
    ],
  },

  {
    id: 181,
    category: "Next.js",
    question:
      "Next.js'da intercepting routes nima uchun kerak bo'lishi mumkin?",
    answer:
      "Intercepting routes boshqa route'ni joriy navigation kontekstida intercept qilib, masalan sahifani modal ko'rinishida ko'rsatish kabi tajribalarni yaratishga yordam beradi. To'g'ridan-to'g'ri URLga kirilganda esa to'liq route ko'rinishi mumkin.",
    options: [
      "Intercepting routes navigation paytida boshqa route'ni modal yoki maxsus kontekstda ko'rsatish kabi UX yaratishga yordam beradi.",
      "Intercepting routes faqat CSS animation uchun ishlatiladi.",
      "Ular faqat API requestni bloklaydi.",
      "Intercepting routes database migration hisoblanadi.",
    ],
  },

  {
    id: 182,
    category: "Next.js",
    question:
      "Next.js App Router'da route segment configuration nima uchun ishlatiladi?",
    answer:
      "Route segment configuration route rendering, dynamic xatti-harakat yoki boshqa framework sozlamalarini route darajasida boshqarishga imkon beradi. Bu sahifaning qanday render qilinishini aniqroq belgilashda foydali.",
    options: [
      "Route segment configuration ayrim rendering va route xatti-harakatlarini route darajasida boshqarishga yordam beradi.",
      "U faqat CSS fayllarini sozlaydi.",
      "U faqat browser historyni tozalaydi.",
      "Route segment configuration mavjud emas.",
    ],
  },

  {
    id: 183,
    category: "Next.js",
    question:
      "Next.js'da revalidate tushunchasi nima?",
    answer:
      "Revalidation oldindan yaratilgan yoki cache qilingan ma'lumotni ma'lum shart yoki vaqt asosida yangilash imkonini beradi. Bu staticga yaqin performance bilan yangilanib turadigan ma'lumotlar o'rtasida balans yaratishi mumkin.",
    options: [
      "Revalidation cache yoki static natijalarni kerakli vaqtda yangilash strategiyasini boshqarishga yordam beradi.",
      "Revalidation barcha cache'ni abadiy o'chiradi.",
      "Revalidation faqat CSS uchun ishlatiladi.",
      "Revalidation faqat authenticationni o'chiradi.",
    ],
  },

  {
    id: 184,
    category: "Next.js",
    question:
      "Next.js'da revalidatePath nima uchun ishlatiladi?",
    answer:
      "revalidatePath ma'lum path bilan bog'liq cached yoki rendered ma'lumotni qayta validatsiya qilish uchun ishlatilishi mumkin. Mutationdan keyin shu route'dagi yangi ma'lumotni ko'rsatish kerak bo'lganda foydali.",
    options: [
      "revalidatePath ma'lum route pathining cache yoki rendering natijasini qayta validatsiya qilishga yordam beradi.",
      "revalidatePath route'ni butunlay o'chiradi.",
      "revalidatePath faqat CSS faylini qayta yuklaydi.",
      "revalidatePath browser cookie yaratadi.",
    ],
  },

  {
    id: 185,
    category: "Next.js",
    question:
      "Next.js'da revalidateTag nima uchun ishlatiladi?",
    answer:
      "revalidateTag ma'lum cache tag bilan bog'langan ma'lumotlarni qayta validatsiya qilishga yordam beradi. Bu bir nechta route yoki requestlarda ishlatiladigan umumiy data yangilanganda foydali bo'lishi mumkin.",
    options: [
      "revalidateTag ma'lum cache tag bilan bog'liq ma'lumotlarni qayta validatsiya qilishga yordam beradi.",
      "revalidateTag HTML taglarini o'zgartiradi.",
      "revalidateTag faqat CSS selectorlar uchun ishlatiladi.",
      "revalidateTag authentication tokenini o'chiradi.",
    ],
  },

  {
    id: 186,
    category: "Next.js",
    question:
      "Next.js'da cookies va headers server tomonida qanday olinishi mumkin?",
    answer:
      "App Router server-side kodida requestga tegishli cookies va headers ma'lumotlarini olish uchun Next.js tomonidan taqdim etilgan APIlardan foydalanish mumkin. Ular authentication, locale yoki request metadata kabi vazifalarda ishlatiladi.",
    options: [
      "Server-side App Router kodida Next.js APIlari orqali request cookies va headers ma'lumotlarini olish mumkin.",
      "Cookies va headers faqat CSS orqali olinadi.",
      "Server component browser localStorage'ini to'g'ridan-to'g'ri o'qiydi.",
      "Headers faqat database'dan olinadi.",
    ],
  },

  {
    id: 187,
    category: "Next.js",
    question:
      "Next.js'da fetch bilan data fetching qanday amalga oshiriladi?",
    answer:
      "Server Componentlarda fetch orqali backend API yoki tashqi servisdan ma'lumot olish mumkin. Next.js rendering va caching modeliga mos ravishda requestlarni boshqarishga imkon beradi. Dynamic data kerak bo'lsa cache strategiyasini to'g'ri belgilash muhim.",
    options: [
      "Server Componentlarda fetch orqali data olish va Next.js rendering hamda caching imkoniyatlaridan foydalanish mumkin.",
      "Next.js'da fetch ishlatib bo'lmaydi.",
      "fetch faqat CSS fayllarini yuklaydi.",
      "fetch faqat browser localStorage'iga yozadi.",
    ],
  },

  {
    id: 188,
    category: "Next.js",
    question:
      "Next.js'da client-side data fetching qachon kerak bo'lishi mumkin?",
    answer:
      "Agar ma'lumot foydalanuvchi interactioniga bog'liq bo'lsa, browser API talab qilsa yoki real-time/client-only behavior kerak bo'lsa client-side fetching foydali bo'lishi mumkin. Bunday holatda Client Component va mos data fetching library ishlatilishi mumkin.",
    options: [
      "User interaction, browser-only behavior yoki real-time client logic kerak bo'lganda client-side data fetching foydali bo'lishi mumkin.",
      "Barcha data faqat clientda olinishi kerak.",
      "Client-side fetching faqat CSS uchun kerak.",
      "Client-side fetching serverni avtomatik o'chiradi.",
    ],
  },

  {
    id: 189,
    category: "Next.js",
    question:
      "Next.js'da server-only kodni clientga tasodifan yubormaslik nima uchun muhim?",
    answer:
      "Server-only kodda secret key, database credential yoki serverga tegishli APIlar bo'lishi mumkin. Bunday kod Client Component chegarasidan o'tib ketmasligi kerak. To'g'ri server/client boundary xavfsizlik va bundle hajmi uchun muhim.",
    options: [
      "Server-only kod secret va database kabi ma'lumotlarni himoya qilish hamda client bundle'ni kichik saqlash uchun clientga yuborilmasligi kerak.",
      "Server secretlarini clientga yuborish xavfsiz.",
      "Server-only kod faqat CSSdan iborat.",
      "Client va server boundary xavfsizlikka ta'sir qilmaydi.",
    ],
  },

  {
    id: 190,
    category: "Next.js",
    question:
      "Next.js'da Client Component ichidan Server Componentni oddiy import qilish nega cheklangan?",
    answer:
      "Client Component browser bundle'ining bir qismi sifatida qaraladi, Server Component esa serverda bajarilishi kerak bo'lgan logicni saqlaydi. Shu sababli Server Componentni Client Component ichiga oddiy import qilish server/client boundaryni buzishi mumkin. Buning o'rniga server componentni composition orqali child sifatida berish kabi patternlar qo'llanadi.",
    options: [
      "Server Component serverda qolishi kerak bo'lgan logicni o'z ichiga olishi mumkinligi sababli uni Client Component ichiga oddiy import qilish boundaryni buzishi mumkin.",
      "Client va Server Componentlarni istalgancha import qilish har doim xavfsiz.",
      "Server Component faqat CSSdan iborat.",
      "Bu cheklov faqat TypeScript sababli mavjud.",
    ],
  },

  {
    id: 191,
    category: "Next.js",
    question:
      "Next.js'da middleware orqali authentication tekshiruvini qilishda nimalarga e'tibor berish kerak?",
    answer:
      "Middleware requestni routega yetishidan oldin tekshirish uchun qulay bo'lishi mumkin, lekin barcha authorization logicni faqat middlewarega yuklash shart emas. Sensitive resource uchun server-side authorization ham tekshirilishi kerak. Cookie yoki tokenni xavfsiz boshqarish muhim.",
    options: [
      "Middleware dastlabki route tekshiruviga yordam beradi, ammo sensitive resource uchun server-side authorization ham bajarilishi kerak.",
      "Middleware orqali tekshirish qilingan bo'lsa boshqa authorization kerak emas.",
      "Authentication faqat CSS bilan amalga oshiriladi.",
      "Middleware faqat image optimization uchun mavjud.",
    ],
  },

  {
    id: 192,
    category: "Next.js",
    question:
      "Next.js'da static assetlar va imported assetlar o'rtasidagi farq nima?",
    answer:
      "public papkasidagi assetlar URL orqali to'g'ridan-to'g'ri servis qilinadi. Imported assetlar esa bundler tomonidan application module graphiga kiritilib, framework tomonidan optimallashtirilishi yoki metadata bilan boshqarilishi mumkin.",
    options: [
      "public assetlar URL orqali olinadi, imported assetlar esa application build/module tizimi bilan boshqariladi.",
      "Ikkalasi har doim bir xil tarzda ishlaydi.",
      "public assetlarni browserdan olish mumkin emas.",
      "Imported assetlar faqat database'da saqlanadi.",
    ],
  },

  {
    id: 193,
    category: "Next.js",
    question:
      "Next.js'da font optimization nima uchun kerak?",
    answer:
      "Web fontlar loading performance va layoutga ta'sir qilishi mumkin. Next.js font tooling fontlarni application build jarayoniga integratsiya qilish, kerakli fontlarni boshqarish va loading tajribasini yaxshilashga yordam beradi.",
    options: [
      "Font optimization font loading va rendering performanceini yaxshilashga yordam beradi.",
      "Font optimization faqat database querylarni tezlashtiradi.",
      "Fontlar web performancega ta'sir qilmaydi.",
      "Font optimization faqat image formatini o'zgartiradi.",
    ],
  },

  {
    id: 194,
    category: "Next.js",
    question:
      "Next.js'da streaming rendering nima va foydalanuvchi tajribasiga qanday foyda beradi?",
    answer:
      "Streaming server tayyor bo'lgan UI qismlarini bosqichma-bosqich clientga yuborish imkonini beradi. Natijada foydalanuvchi butun sahifa tayyor bo'lishini kutmasdan sahifaning ayrim qismlarini ko'rishi mumkin.",
    options: [
      "Streaming tayyor bo'lgan UI qismlarini bosqichma-bosqich yuborib, initial perceived loadingni yaxshilashga yordam beradi.",
      "Streaming barcha ma'lumotni faqat browser cache'iga yozadi.",
      "Streaming faqat CSS fayllarida ishlaydi.",
      "Streaming sahifani har doim to'liq bloklaydi.",
    ],
  },

  {
    id: 195,
    category: "Next.js",
    question:
      "Next.js'da loading UI va streaming bir-biri bilan qanday bog'liq?",
    answer:
      "loading.js Suspense boundary orqali route segmentining loading holatini ko'rsatishga yordam beradi. Streaming bilan birga ishlaganda foydalanuvchi tayyor bo'lgan UI qismlarini va qolgan qismlar uchun fallbackni bosqichma-bosqich ko'rishi mumkin.",
    options: [
      "loading.js Suspense fallback orqali loading UI beradi va streaming bilan bosqichma-bosqich UI ko'rsatish tajribasini yaxshilashi mumkin.",
      "loading.js streamingni butunlay o'chiradi.",
      "Streaming faqat database migration bilan bog'liq.",
      "loading.js faqat CSS fayl yuklaydi.",
    ],
  },

  {
    id: 196,
    category: "Next.js",
    question:
      "Next.js'da SEO uchun sitemap nima uchun kerak?",
    answer:
      "Sitemap search engine crawlerlariga saytdagi muhim URLlarni topishda yordam beradigan XML yoki framework orqali generatsiya qilinadigan ma'lumotdir. Ayniqsa ko'p sahifali saytlar uchun crawl qilinadigan URLlarni tushunarli ko'rsatishga yordam beradi.",
    options: [
      "Sitemap search engine crawlerlariga saytdagi muhim URLlarni aniqlash va crawl qilishga yordam beradi.",
      "Sitemap faqat CSS route yaratadi.",
      "Sitemap authentication tokenini saqlaydi.",
      "Sitemap faqat browser history uchun kerak.",
    ],
  },

  {
    id: 197,
    category: "Next.js",
    question:
      "Next.js'da robots.txt faylining vazifasi nima?",
    answer:
      "robots.txt crawlerlarga qaysi URL yoki pathlarni crawl qilish bo'yicha ko'rsatmalar berish uchun ishlatiladi. U authentication yoki haqiqiy security mexanizmi emas va maxfiy ma'lumotni himoya qilish vositasi sifatida ishlatilmasligi kerak.",
    options: [
      "robots.txt search crawlerlariga crawl qilish bo'yicha ko'rsatmalar beradi, lekin maxfiy ma'lumotni himoya qiluvchi security mexanizmi emas.",
      "robots.txt barcha userlarni bloklaydi.",
      "robots.txt database passwordini yashiradi.",
      "robots.txt faqat CSS fayllarni boshqaradi.",
    ],
  },

  {
    id: 198,
    category: "Next.js",
    question:
      "Next.js'da API endpoint va Server Action o'rtasida qanday farq bor?",
    answer:
      "Route Handler HTTP API endpoint sifatida GET, POST kabi requestlarni qabul qiladi va tashqi clientlar bilan API sifatida ishlashi mumkin. Server Action esa server functionini application interaction yoki form mutation bilan bog'lashga ko'proq yo'naltirilgan.",
    options: [
      "Route Handler HTTP endpoint yaratadi, Server Action esa server functionini application interaction yoki mutation bilan bog'lashga mo'ljallangan.",
      "Ikkalasi faqat CSS animation yaratadi.",
      "Server Action faqat public REST API sifatida ishlaydi.",
      "Route Handler faqat React state boshqaradi.",
    ],
  },

  {
    id: 199,
    category: "Next.js",
    question:
      "Next.js ilovasida performance optimizatsiyasini boshlashdan oldin nimalarni o'lchash kerak?",
    answer:
      "Avval real bottleneckni aniqlash kerak: bundle hajmi, JavaScript execution, server response, image size, rendering yoki network latency kabi ko'rsatkichlar o'lchanadi. Keyin profiler va browser performance tools yordamida muammo manbasi topilib, kerakli optimizatsiya tanlanadi.",
    options: [
      "Avval bundle, network, server response, rendering va JavaScript execution kabi bottlenecklarni o'lchab, keyin optimizatsiya qilish kerak.",
      "Har doim barcha componentlarga memo qo'yish kerak.",
      "Performance faqat CSS bilan belgilanadi.",
      "O'lchamasdan optimizatsiya qilish har doim eng yaxshi usul.",
    ],
  },

  {
    id: 200,
    category: "Next.js",
    question:
      "Katta Next.js loyihasini arxitektura qilishda frontend developer nimalarga e'tibor berishi kerak?",
    answer:
      "Routing, Server va Client Component chegaralari, data fetching, caching, authentication, authorization, reusable UI, error handling, loading holatlari, performance, SEO va project structure birgalikda ko'rib chiqilishi kerak. Muhimi, har bir feature uchun kerakli darajadagi murakkablikni tanlash va keraksiz abstractionlardan qochishdir.",
    options: [
      "Routing, server/client boundary, data fetching, caching, auth, reusable UI, error handling, SEO va performance kabi omillar birgalikda hisobga olinadi.",
      "Faqat component nomlarini to'g'ri tanlash kifoya.",
      "Katta Next.js loyihasida architecture kerak emas.",
      "Barcha logic bitta component ichida bo'lishi kerak.",
    ],
  },
];