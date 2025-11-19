import { CategoryType, ContextType, Fallacy } from './types';

export const FALLACIES: Fallacy[] = [
  // KATEGORİ I: İTİBAR VE ALGI YÖNETİMİ (İş Dünyası)
  {
    id: 'f1',
    name: 'Adam Karalama (Benzetmeli)',
    latinName: 'Guilt by Association',
    category: CategoryType.REPUTATION,
    context: ContextType.BUSINESS,
    mechanism: 'İddia sahibini, izleyiciler tarafından "kötü" kabul edilen kişi veya gruplarla ilişkilendirerek itibarsızlaştırma.',
    example: '"Vergiler yüksekmişse vatandaşa zulümdür... Aynısını teröristler de söylüyor".',
    defense: 'İddia sahibinin, kötü bir grupla aynı fikirde olmasının, fikrin kendisini çürütmeyeceğini gösterin.'
  },
  {
    id: 'f2',
    name: 'Amaca Saldırı',
    latinName: 'Circumstantial Ad Hominem',
    category: CategoryType.REPUTATION,
    context: ContextType.BUSINESS,
    mechanism: 'Argümanı, onu savunan kişinin çıkarı veya amacı doğrultusunda olduğu iddiasıyla reddetmek.',
    example: '"Tabii ki daha az vergi ödenmeli dersin, çünkü sen zaten zengin bir iş insanısın. Bu işten çıkarın var."',
    defense: 'Kişinin çıkarının argümanı geçersiz kılmadığını, sadece güvenilirliğini düşürebileceğini belirtin. Argümanın mantıksal değerine odaklanın.'
  },
  {
    id: 'f3',
    name: 'Ünlülere Başvurma',
    latinName: 'Appeal to Celebrity',
    category: CategoryType.REPUTATION,
    context: ContextType.BUSINESS,
    mechanism: 'Ürünü veya fikri desteklemek için, alakasız bir alandaki ünlü bir kişinin popülaritesine dayanmak.',
    example: '"Gitar alacaksan mutlaka QWERTY almalısın... Eğer iyi olmasaydı reklamlarda oynamazdı".',
    defense: 'Ünlünün bir konuda uzman olmadığını vurgulayın. "Peki ben size aksini iddia eden yüz profesör getirirsem ne olacak?" diyerek otoriteyi çatıştırın.'
  },
  {
    id: 'f4',
    name: 'Belirsiz Otorite Safsatası',
    latinName: 'Appeal to Anonymous Authority',
    category: CategoryType.REPUTATION,
    context: ContextType.BUSINESS,
    mechanism: 'İddiayı kabul ettirmek için net olmayan, yetkinliği belli olmayan bir kaynağa başvurmak.',
    example: '"Galaksiler kara deliklerin madde kütlesiyle oluşuyor. Belgeselde bir fizik profesörü söyledi. Ondan iyi mi bileceksin?".',
    defense: 'Kaynağın güvenilirliğini sorgulayın; isimsiz kaynakların çürütme imkanı tanımadığını belirtin.'
  },
  {
    id: 'f5',
    name: 'Yüklü Soru Safsatası',
    latinName: 'Plurium Interrogationum',
    category: CategoryType.REPUTATION,
    context: ContextType.BUSINESS,
    mechanism: 'İçinde kanıtlanmamış bir varsayımı gizleyen ve tek bir cevabın bile aleyhe sonuç doğurabileceği soru sormak.',
    example: '"Şirketimizin başarısız olmasını isteyenlere kimin gerçek astrolog olduğuna karar veren otorite nedir?"',
    defense: 'Soruyu yanıtlamadan önce, gizli varsayımı (Örn: Başarısızlık istemek) açıkça reddedin ve her bir varsayımı ayrı ayrı ele alın.'
  },

  // KATEGORİ I: İTİBAR VE ALGI YÖNETİMİ (Sosyal Hayat)
  {
    id: 'f6',
    name: 'Sen de Safsatası',
    latinName: 'Tu Quoque',
    category: CategoryType.REPUTATION,
    context: ContextType.SOCIAL,
    mechanism: 'Gelen eleştiriyi çürütmek yerine, eleştiriyi yapan kişinin tutarsızlığını ileri sürerek iddiayı zayıflatmak.',
    example: '"Bu alkol almamalısın. Sağlığına zararlı. - Ona bakarsan sen de içiyorsun!"',
    defense: 'Kişinin tutarsızlığının argümanın doğruluğunu etkilemediğini, sadece ahlaki otoritesini sorguladığını gösterin.'
  },
  {
    id: 'f7',
    name: 'Gelenekselliğe Başvurma',
    latinName: 'Ad Antiquitatem',
    category: CategoryType.REPUTATION,
    context: ContextType.SOCIAL,
    mechanism: 'Bir fikrin veya eylemin doğru olduğunu savunurken, mantık veya delile değil, sadece eskiden beri böyle yapıldığına dayanmak.',
    example: '"Astroloji yanlışsa, antik toplumlar tarafından ilgi görür müydü?".',
    defense: 'Kötü geleneklerden örnekler verin. "200 yıl öncesine kadar hastalıklara kötü ruhların neden olduğuna inanılıyordu."'
  },
  {
    id: 'f8',
    name: 'Ebeveyn Safsatası',
    latinName: null,
    category: CategoryType.REPUTATION,
    context: ContextType.SOCIAL,
    mechanism: 'Ebeveynlerin davranışlarının sırf "anne/baba" olmalarından dolayı doğru kabul edileceğini varsaymak.',
    example: '"Sen geç dalganı... Baba olduğunda anlarsın".',
    defense: 'Bu safsatanın Otoriteye Başvurma ve Adam Karalama’nın birleşimi olduğunu gösterin. Uzmanlık alanını sorgulayın.'
  },

  // KATEGORİ II: İLETİŞİM VE İHMAL SAFSATALARI (İş Dünyası)
  {
    id: 'f9',
    name: 'Kaygan Zemin Safsatası',
    latinName: 'Slippery Slope',
    category: CategoryType.COMMUNICATION,
    context: ContextType.BUSINESS,
    mechanism: 'Birinci olaydan sonra, kontrolsüz bir zincirleme ilişkinin yaşanacağını ve felaketle sonuçlanacağını iddia ederek korkuya başvurmak.',
    example: '"Bugün gençlere yasaklayan, yarın herkese yasaklar. Sonra bir bakmışsın İran olmuş".',
    defense: 'Zincirin zorunlu olmadığını gösterin. İlk adımın (A) son adıma (Z) kesin olarak neden olmayacağını açıklayın.'
  },
  {
    id: 'f10',
    name: 'Çöp Adam (Korkuluk)',
    latinName: 'Straw Man',
    category: CategoryType.COMMUNICATION,
    context: ContextType.BUSINESS,
    mechanism: 'Rakibin argümanını bilerek çarpıtmak, onu zayıf bir hale getirip ona saldırmak.',
    example: '"Nobel ödüllü bilim insanı akademik camiayı eleştirirse; Zamanla bilimi tamamen bırakır, yata yata para kazanan bir milletvekili olur."',
    defense: 'Tartışmayı tekrar rakibin asıl argümanına odaklayın. İddia etmediğiniz şeyleri savunmayın.'
  },
  {
    id: 'f11',
    name: 'Kısır Döngü Safsatası',
    latinName: 'Circular Reasoning',
    category: CategoryType.COMMUNICATION,
    context: ContextType.BUSINESS,
    mechanism: 'Argümanın öncüllerinden birinin aynı zamanda varılan sonuç olması.',
    example: '"Tecrübe kazanmak için iş arıyorum. İş bulmak için tecrübe lazım. Nasıl tecrübe edineceğim? İş sahibi olarak."',
    defense: 'Kısır döngülü safsataların herhangi başka bir yargıyı da aynı şekilde doğrulayabileceğini kanıtlayın.'
  },
  {
    id: 'f12',
    name: 'Sabunlama Safsatası',
    latinName: 'Ad Hoc Rescue',
    category: CategoryType.COMMUNICATION,
    context: ContextType.BUSINESS,
    mechanism: 'Yanlışlığı ortaya çıkan bir iddiayı yalanlanmaktan kurtarmak için geçici, yeni veya uydurulmuş açıklamalar getirme.',
    example: 'Balık burcu iddiası çürütüldüğünde: "Ama yükseleni önemli zaten. Yükseleni ne?".',
    defense: 'Rasyonalize edilen karşı delilin hangi şartlarda kabul edileceğini sorun.'
  },
  {
    id: 'f13',
    name: 'Yaygın Tutum',
    latinName: 'Appeal to Common Practice',
    category: CategoryType.COMMUNICATION,
    context: ContextType.BUSINESS,
    mechanism: 'Bir eylemin yanlış olmadığını, çünkü toplumun büyük çoğunluğu tarafından yapıldığını iddia etme.',
    example: '"Herkes vergi kaçırıyor. Kim vergi ödüyor ki sen söyle?".',
    defense: 'Çoğunluğun davranışının sorumluluğu azalttığını, ancak etik yanlışlığı ortadan kaldırmadığını gösterin.'
  },

  // KATEGORİ II: İLETİŞİM VE İHMAL SAFSATALARI (Sosyal Hayat)
  {
    id: 'f14',
    name: 'Duygulara Başvurma',
    latinName: 'Appeal to Emotion',
    category: CategoryType.COMMUNICATION,
    context: ContextType.SOCIAL,
    mechanism: 'Mantık yerine merhamet, gıpta, gurur veya düşmanlık gibi duyguları kullanarak ikna etmeye çalışmak.',
    example: '"Burada sigara içmemden rahatsız oluyorsun. Lütfen... Şu dünyada rahat hissedebildiğim tek yer burası."',
    defense: 'Hakikatlerin duygulardan daha önemli olduğu konusunda ısrar edin.'
  },
  {
    id: 'f15',
    name: 'Görecelilik Safsatası',
    latinName: 'Relativist Fallacy',
    category: CategoryType.COMMUNICATION,
    context: ContextType.SOCIAL,
    mechanism: 'Hakikatlerin kişiden kişiye değiştiğini öne sürerek, bir iddianın yanlışlığını reddetme.',
    example: '"Fosilleri nasıl açıklıyorsun? - Bilmiyorum. Bana göre dinozorlar hiç yaşamadılar".',
    defense: 'Bilinen bir gerçeği aynı formatta sunarak hatayı gösterin: "Bana göre yerçekimi de yok".'
  },
  {
    id: 'f16',
    name: 'Hatalı Benzetme',
    latinName: 'False Analogy',
    category: CategoryType.COMMUNICATION,
    context: ContextType.SOCIAL,
    mechanism: 'Konular arasındaki benzerlikleri abartarak veya mantıksız bir şekilde kıyaslayarak yanlış çıkarımlara ulaşma.',
    example: '"Ay nasıl denizlerde gelgite neden oluyorsa, insan üzerinde de muazzam etkilere sahiptir".',
    defense: 'Benzetmenin mantıksal çıkarım için yeterli olmadığını belirtin ve farklılıkları gösterin.'
  },
  {
    id: 'f17',
    name: 'İstisna Safsatası',
    latinName: 'Exception Fallacy',
    category: CategoryType.COMMUNICATION,
    context: ContextType.SOCIAL,
    mechanism: 'Geçerli bir genel kurala karşın, kuralı bozmayan özel bir istisnayı ileri sürerek o kuralı geçersiz kılmaya çalışma.',
    example: '"Bütün memeliler karada yaşar. - Balinalar yaşamıyor. - O istisna. Fark etmez."',
    defense: 'İstisnanın kaideyi gerçekten bozup bozmadığını sorgulayın.'
  },

  // KATEGORİ IV: BİLİŞSEL EĞİLİMLER
  {
    id: 'f18',
    name: 'Rasyonalizasyon',
    latinName: null,
    category: CategoryType.COGNITIVE,
    context: ContextType.GENERAL,
    mechanism: 'Hatalı veya mantık dışı kararları, sonradan mantıklı kılıflarla açıklama.',
    example: 'İş görüşmesi kötü geçince: "Siz beni ilerde kovma şansı elde etmiyorsunuz, ben erkenden istifa ediyorum!"',
    defense: 'Hata yapmanın doğal olduğunu kabul edin. Hataların kaynağını dışarıda arama eğilimini fark edin.'
  },
  {
    id: 'f19',
    name: 'Bulunabilirlik Kısa Yolu',
    latinName: 'Availability Heuristic',
    category: CategoryType.COGNITIVE,
    context: ContextType.BUSINESS,
    mechanism: 'Bir bilginin akla ne kadar kolay geliyorsa, o kadar önemli veya muhtemel olduğunu varsayma.',
    example: 'Bir ürünün reklamda çok görünmesi nedeniyle riskinin veya öneminin abartılması.',
    defense: 'Karar verirken sadece kolay ulaşılan örneklere değil, istatistiksel verilere odaklanın.'
  },
  {
    id: 'f20',
    name: 'Fakirlik Safsatası',
    latinName: 'Ad Lazarum',
    category: CategoryType.COGNITIVE,
    context: ContextType.SOCIAL,
    mechanism: 'Fakir olanın haklı, bilge veya dürüst olduğunu varsaymak.',
    example: 'Tartışmalarda "fakir ama gururlu" tarafın her zaman haklı olduğunu varsaymak.',
    defense: 'Bilgelik ve dürüstlüğün ekonomik durumla ilişkili olmadığını kabul edin.'
  },
  {
    id: 'f21',
    name: 'Batık Maliyet Safsatası',
    latinName: 'Sunk Cost',
    category: CategoryType.COGNITIVE,
    context: ContextType.GENERAL,
    mechanism: 'Geçmişte yapılan yatırımın geri alınamayacağı düşüncesiyle, mantıksız da olsa devam etme.',
    example: 'Sıkıcı bir konserde bilet parası verildiği için çıkmamak.',
    defense: 'Projelerle maliyetler arasındaki ilişkiyi koparın: "Konser bedava olsaydı kalır mıydım?"'
  },
  {
    id: 'f22',
    name: 'Otoriteye İtaat Güdüsü',
    latinName: null,
    category: CategoryType.COGNITIVE,
    context: ContextType.BUSINESS,
    mechanism: 'Otorite figürüne, davranışının doğru olup olmadığını sorgulamadan itaat etme yatkınlığı.',
    example: 'Beyaz önlüklü birinin her dediğinin sorgusuz yapılması (Milgram Deneyleri).',
    defense: 'Otoriteye karşı eleştirel sorgulama yeteneğini geliştirin.'
  }
];