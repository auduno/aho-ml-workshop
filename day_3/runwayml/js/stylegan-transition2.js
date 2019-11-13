// CODE TAKEN FROM https://editor.p5js.org/codingtrain/sketches/K6l0JbS6u 
// and https://editor.p5js.org/codingtrain/sketches/KVXguIFNg
// by the coding train / Daniel Shiffman (https://www.youtube.com/watch?v=QzRW0xzm10c&t=6622s)

let outputImage;

const c = [];
const imgSize = 512; //our image will be 512x512 pixels, which is what StyleGAN requires

let amt = 0.0;
let count = 0;
let n_steps = 50;
let step = 1 / n_steps;
var loop = true;
let runway_port;

let a1 = [-0.04760359695430907,-0.05406439844912736,-0.08445043943995963,-0.01794779960739472,0.06370001536702521,0.06781217208469599,-0.06544986810658582,0.12738284920984758,0.0023823667232226063,0.04723976933661485,-0.05004321747566811,-0.08839370942289308,-0.20425685699363028,-0.045419661926715094,-0.102854736615055,0.02335100358552884,-0.16782224929247574,-0.12015722380361674,-0.03675903250076686,0.033369713700016936,0.17210623647549933,0.1063868043193783,-0.05964396836235473,-0.011967070577499328,0.008802716143252365,-0.1658365817467636,0.028345158011820894,0.023546933426172957,-0.054980820077563844,0.08081948945886115,0.003408767312939265,0.007208614940389069,-0.0661523052233485,-0.059869519316963694,0.21593893144730697,0.03201585803556846,-0.07175098870742938,0.05153645696128519,0.09678609769474562,-0.057754849415500596,0.03359228780042178,-0.1071035045784948,-0.09682634625283892,0.05340219028630431,-0.07104561704373777,-0.02596305566451553,-0.06565932250392778,-0.10743645888345439,-0.12416297022300275,-0.19930528683739404,-0.12190294094469944,0.2135405726875681,-0.1656798856525473,-0.11086257244953504,-0.060280767553983684,0.05915197715912779,-0.034706254339269015,0.026162262568014506,0.17222057405447036,0.013199404191442188,-0.16406579028080653,0.0643842882720973,-0.058249005266812405,0.004258729649070236,0.10464830984355836,-0.032330752626576496,-0.007536389245802156,-0.022084160975404377,0.13525394342535027,-0.215504834598842,0.1345824215169536,-0.09647811604826861,0.006156824017702256,0.0672280424303147,-0.15322634610652303,-0.1475386574945193,0.055656461284750505,-0.05291248712168493,0.05924418847024811,0.0022304515447621577,-0.07170553615590594,-0.23588034727892024,0.14341802448121416,-0.19429648417989215,0.00903862220951721,-0.00833168408140752,0.06912411620783673,0.10107246306857531,0.0007282909898997048,0.16708108730762677,-0.13791149230241656,0.0012121432735249017,0.1899524381787848,-0.04189997319838197,0.0448517841465673,0.08494868680831766,-0.06664241711867813,0.05194406733744543,-0.005750844799778854,-0.12796878917058918,0.17462140831972564,0.07829090640992593,0.1062148976695867,-0.018687307403995667,-0.09429481017498524,0.006834013542679962,0.056502931405367815,-0.06011452426428301,0.07120818933370732,0.07490149919197604,0.05192660987659074,-0.04530124077059359,0.028651637533715135,0.11548206776541647,0.1475998809493409,-0.11368179903014411,-0.06407150625978524,0.07033193453546778,0.01738646455956827,0.05003799152485966,-0.025424024307805305,0.15216098643554538,-0.01266717715454524,0.023481457294539786,-0.08514453330213892,-0.0944682449802853,0.19875093688470874,0.07963534490607689,-0.07133086749844102,0.006289507991561205,0.11279727664367475,0.0698968353564969,0.16315704002436798,-0.026972619213212656,-0.04347524567496075,-0.009383303205004268,-0.11258773982653665,0.08704368469199109,0.07354067417615698,0.0670115983969671,0.043218487552411755,0.07774009766721504,-0.03739181358385206,-0.09046360259050808,0.06156443524311221,0.06210870940309725,-0.00423912826359274,-0.11340634873414399,-0.007538964998425435,-0.08454398928058442,-0.04297059954919682,-0.04588563771580319,-0.1227176497400753,0.07130602907238189,-0.16252126570850917,0.07329588679359453,0.10766181159404349,0.12701461838614464,-0.09345429716570841,0.007249187974256888,-0.06473126908949486,-0.03119014522388932,-0.0010444016851755221,0.12481476755368046,0.10561072038241814,-0.0020382055950877386,-0.08115150972177032,-0.08478041625078907,0.152426377765042,-0.010289576147242218,-0.11797215437224766,0.0224973450832767,0.029695177947426644,0.008955485708567145,-0.04155127422075191,-0.12223397399515293,0.05296891067070657,-0.11665981493880899,-0.09595060876530095,-0.07570314888582086,0.05493578918178166,0.19426609745591888,-0.08930931928478145,0.018866461971818183,-0.14351057805096934,-0.04159008239150106,-0.12958784995567324,-0.05016892113606515,0.0451072256979911,-0.01745610801646098,0.00023905473968124368,-0.18004528650370366,0.03594115563871485,0.11843105506992586,0.03681042432172656,0.0074678032664772685,0.066612693117637,0.05315299437591543,0.06271483704388388,0.08394085079199201,0.017687491805867327,-0.04282040437556711,-0.13991432079910324,0.022606898793327092,0.10509266670348794,0.058299430762554304,0.049406678505077475,0.10510742356118472,-0.04865543502669904,0.10802322132343933,-0.13586451864686638,-0.022168097839935185,-0.07101386362577414,0.04400394482516479,0.04413846134196442,-0.029912868757777388,-0.04896248369000533,0.006734548038658783,0.03982903245152016,-0.034280954272191536,0.01656417102777876,0.04352027177355398,0.03416387690887026,0.14755890590685555,-0.04238975122339328,0.02475726266701308,0.010273592016317857,0.0526844861924161,-0.02798948692589027,0.06761575491565468,-0.015433570342808168,0.28981617421348427,-0.06040340541889302,-0.009801548473082544,0.08611996205748014,-0.02150910681306186,-0.014372555807208531,0.027666362229207396,-0.07499347738363901,-0.12607670725229694,0.05627009203820492,0.1239544526082951,0.010307252955538715,0.03497347267980526,-0.07920144797321838,-0.20890960938950132,-0.025514420242177583,-0.2484276103544822,-0.009458359518426107,0.028283290668818673,-0.010404244836135135,0.06017993681989316,-0.004252760069048111,-0.156570477861029,0.03266865596386222,-0.037027346944233666,-0.12484823626385153,-0.04765514288997439,0.049742948631606866,-0.017104010788289603,-0.030191371361851883,-0.062296331799188295,-0.006267065704485919,-0.07818529101805796,0.06496647005828518,0.060679628631302406,0.01883922375263376,-0.040066488475363204,0.05215996866042696,-0.07534869088190801,0.020844190476503942,-0.17354584505058193,0.04030412413650923,-0.13885610741081794,-0.048690489054799266,-0.10839950669655418,-0.09177900787303236,-0.08585572804046696,-0.03807399986361437,-0.004469502243369927,0.16140356550308574,-0.025229775859512405,-0.024720221481012494,-0.08214169440566996,-0.09885531481010937,-0.18176144533520114,-0.024913071944330057,-0.01847598234971688,-0.07619735137556205,0.04457269312238514,-0.15169618320584025,0.11855673461205055,0.1486972753692414,-0.01428696914502554,-0.12982790398232535,0.034662480778935745,0.01301215962336517,0.01690498748376381,0.02429269303290029,0.004174725756938713,-0.14165141514992086,0.17520856240589094,0.06219404012044576,-0.0803815396196561,0.1384151153114585,0.06520916235306187,-0.00197978290120826,-0.18762236192608964,0.09405265637852649,0.127228511987541,-0.13877977298720987,-0.04735377964587624,-0.09577697195262606,0.020376058287990606,-0.07348500605984096,-0.06120108171597512,0.09063225719036741,-0.02585483415075167,0.016244498210074544,-0.10644824918575795,-0.05435157099748542,0.17007463283403795,0.08443448361221133,-0.14829669058712575,-0.027246617006041342,-0.006896124256614478,0.06799184202478337,0.1343682962333193,-0.02344604381709372,-0.038389753924988224,-0.10425004892111715,0.065758361417668,-0.04352570843696633,0.07528687989507218,-0.09725966863068151,0.03892062926056017,0.013737745272606895,-0.05306365325688027,-0.005973017894946153,-0.1258799048011605,0.0075197178377233165,0.08308737788374616,0.0665645975399796,-0.15560327986723183,0.05145516189369337,-0.053802258356854794,-0.0829851409455391,0.02993483116068978,0.09835416499179477,-0.15909175709416384,0.017612107775724795,-0.010139111437614456,0.012982673596740834,0.029078782348055478,0.07668315264940188,-0.010125128425350117,-0.0327478340542255,-0.031211441312164558,-0.053141439036675744,-0.016802218923026847,0.04095939801278616,-0.04352682306213289,-0.052833049568732714,0.027041360687824322,-0.049595019848902314,0.08248342184068642,-0.05567930917557522,0.011477752624763759,0.0298495798933466,0.0012878924258623136,-0.024002554622680083,-0.10344559718687867,-0.08575096106054217,-0.15205742165151728,0.07076296332563911,0.15708415867161934,0.03828436387975147,0.18651181573264958,-0.049864433919722104,-0.05292356047062548,-0.1711897384368024,0.056602979627940274,-0.04703383410102413,-0.10425589621032838,0.04524989769544589,-0.0648670588224423,0.05325811809886778,-0.1717531627234458,0.026793607528460762,0.047765478217044154,0.07407212755806372,0.024616627481160603,0.001695105330739999,0.11324341836692602,-0.06774317620430192,-0.007296686722640455,0.02175082765896752,-0.0709619514186997,0.14983488274426637,0.11411761881648345,0.012906686826279313,-0.1803373507828788,0.036817908182257233,0.034462573949039045,0.1033055768478059,0.0023568961360562746,0.03195202321449351,0.028972411331840853,0.11854435361013005,-0.012906368994289074,0.06056401941100962,-0.043666148485016265,0.16395491657216282,-0.042720399749901806,-0.1183975586455416,0.05177026757378052,0.06448637528589325,-0.1654970484769483,-0.02037175776322986,0.006037271410057698,-0.11759790511695253,0.05646416648985255,-0.03609925048353677,-0.02150758237807766,0.0871311781808024,-0.04483679953194244,-0.07901119871363242,-0.20449771171024467,0.026539648237221325,0.009397742168721645,0.0014847851367637333,-0.0636951089935617,-0.18063457793975632,-0.10366834674812146,-0.09925570533125941,0.03732711485212219,-0.017167880373268572,0.17999254700851192,-0.053449139286744975,-0.10354286252549053,0.1363911786210009,0.052024735331096306,0.06281780677045737,-0.0022144631057005705,0.14326664193498564,-0.020057725340261713,0.06282586094434288,-0.1769096275341533,-0.01001829913588903,-0.052637820438420226,0.0009247171627134066,0.04785852649677817,-0.06400870401910268,-0.016397357559725913,0.04759529604803383,-0.0225326806681335,0.06433844533486077,0.2039338161173939,0.036818985183966736,0.009384184297945807,-0.02871871505141499,-0.1749722778487533,-0.011263106831332336,-0.010526100296992524,-0.11839215580123423,-0.07754849704260627,-0.017853412938467983,0.055546822185223645,-0.017964268110791704,0.07423316392884524,-0.17324531186838463,-0.1306913583362987,0.06852996167106032,0.05839734671972119,-0.06910678916123292,-0.046995827705740824,-0.08716905887426636,0.11027098267674358,0.047553360266096155,0.16706518758665725,0.06551100564554257,0.012026996594108663,0.038620445890621816,0.08676558039951265,-0.05012996212240859,0.08818526524788277,0.041326331934774085,0.022321807163869157,-0.07708961867699102,-0.21141745594742783,0.09374042346659942,-0.18269933856248902,0.0054208050448073305,-0.02036719341738378,0.08767043573961182,-0.050293931801287516,-0.0012424536805541563,-0.01625650633387572,0.026021928795194695,-0.12949267960459246,0.09165729442294177,-0.14512358071827508,-0.0919848481315741,-0.10116039743803804,0.043752614794882835,-0.009149265613966496,-0.08622891555350716,-0.022171233294854355,0.13839683981806222,0.019257086629164456,0.04952787897770321,0.1340349867244477];
let b1 = [0.0081775062767825,0.19274966000867183,-0.050630273238408345,-0.1457077611349193,0.3870463553799091,0.22855734601157537,-0.03842391268154381,0.02045039136395746,-0.1267813774334126,-0.2109453393959139,-0.2500193591803211,0.012366896705756527,-0.24884530520370057,-0.23818604730102513,-0.34159876231961733,-0.12323823575888487,-0.3135888936295024,-0.009827254817897847,-0.28317529144924686,-0.10207372595162509,0.2510653322291417,-0.023400988603238346,-0.2494450787471757,-0.1449504675387128,-0.03616949678308215,-0.26370520390193786,-0.07838101467240738,0.05901971397260717,-0.24696077120514398,0.04385529978493757,0.1243660423851555,0.1285607101047902,0.039027012538426026,-0.05190840707710712,0.19723088947847184,0.08444168670593663,0.15680480009429595,-0.01130134240133468,0.16681812901011672,-0.20183738342813756,0.12508377702383414,-0.12200551446864875,0.017904517922768606,0.10746118526569227,0.06044791290970944,-0.1457773115334524,-0.12472148152615492,-0.16379333616986302,-0.0028574251260124056,-0.1957204586450711,-0.09319415993567377,0.2533844850074138,-0.1494749952155872,-0.3805426694584813,-0.05745209821509028,0.08063065035780777,0.054502494135607225,0.029439102331186677,0.2016987854318649,-0.07970215511821771,-0.3277676595878843,0.21288017818113256,0.14198348601278815,0.100220498323753,0.15897441724496375,-0.09244167776811182,0.09114913647860594,0.04657018323691512,0.21063911419843018,-0.3338022042678033,0.20586224204037812,0.13676942014831933,0.22352851443992228,0.19736168249985936,0.05540443388912355,0.2199956033661307,0.28811865193162645,0.01776113724475256,0.1879074434653493,0.0749239180730764,-0.15051760820255627,-0.4550084359243647,0.1432878370072354,-0.2931844688843889,-0.07492464661604997,-0.0699630960644021,-0.006994196723395296,0.02849320613648739,0.02605857911548034,0.09467621811184673,-0.05793757328078626,-0.02197090311300156,0.01597524580830032,0.02951720064584453,-0.1499045578680494,0.1311487653677629,-0.18832362866928143,0.07726676647512197,-0.023146138443243692,-0.15472448578111223,0.04677636705080057,0.18029467572086058,-0.006099911823670728,-0.059536865720991775,0.002244451748759549,-0.021499926623327434,-0.10102655906886424,0.11593371733178473,0.23402390349191904,0.09785938523966703,0.23894172541208838,0.22052767251708724,0.11085744598154328,0.15865346285494258,-0.1368700355680038,-0.23820769019088742,-0.20543231304820408,-0.07808399194793147,0.014756425081967207,0.16347071746906794,-0.3343008627932137,0.11600075687892464,0.03963729485195208,0.23636131051429346,0.1358885524026055,-0.17582363735770187,0.37975926550408634,0.21509850265983732,-0.001040357465643624,0.1124086820284407,0.20739899397861702,-0.0039737227356997085,-0.24520100954258167,-0.054285934097095,-0.03648023331241717,-0.1102614187536886,-0.030109563215282867,0.091746056231204,0.06972693529010492,0.11271203551282452,0.2452267866614859,0.10082582478451402,0.09588179186778263,-0.3015185057771629,0.06788480420388747,-0.17013247191118613,-0.020131602934161445,-0.04714228482944604,-0.09883746544542052,-0.3724576709697571,0.15984350208909348,-0.25029348473581176,-0.30607134999956837,0.050391083819403604,-0.2693414553858287,0.17276211674910288,0.061341600073433686,-0.02169463715832349,-0.045202325399594456,0.12347950240217186,0.013881914443819615,0.14833165547119664,-0.021038594931065996,0.14138022053166885,0.06291806400285621,0.14331088729608635,-0.09341091031671178,-0.05647428047498835,0.21148301510707174,-0.0945039153269177,-0.07016134331130078,-0.029797445144260457,0.12302610377943728,0.03293828293708527,0.04899674706060021,-0.16141929391756715,0.07955054231200519,-0.21178822493004007,-0.07017653638526221,0.028569528846036474,0.25395553183158387,0.1532351323975477,-0.1968967031588041,-0.0703709051645123,-0.4122396957137952,0.15896588588344843,-0.08067862983748417,-0.0028794063668295122,0.12897894655615483,0.3477758930043291,0.09499478848268461,-0.06449571159239748,0.21866890739996842,-0.06701499579124075,0.002631101518516671,-0.03280525638350901,-0.05562895760970443,-0.000016170407873516892,0.18713465111209468,-0.09186384031193723,0.3005204209620681,0.03092364619447482,-0.2367491174350403,-0.12976624304045611,0.2599989306308863,0.0538327667389821,-0.33081989450447075,0.18481526153722988,-0.43540759128573986,-0.05846707124043049,-0.11095176006891737,-0.029687420203368273,0.06929322724339987,0.04545096636094606,0.18011947225456526,-0.03082713373163072,-0.04447423298845542,-0.06516310994830224,-0.11530745649690047,-0.0797054644315535,-0.024039453499390268,0.07487310336787173,0.12318176619022177,-0.004826017581851756,-0.1409511574038451,0.2536088015205834,-0.005362874762451623,0.03215116665362672,-0.08535285626015376,0.1526871417536882,-0.17625586601867793,0.39854976383329943,0.08363890144795434,-0.12615661804185593,-0.10764519682595851,0.07024599960486888,-0.14756257907984666,0.09357197960759697,0.02438910433244862,-0.14511061035872147,-0.051147636771962046,0.17375791060157333,0.18862452479574413,-0.1703318576150008,0.06304632756555877,-0.45962454284427223,-0.1474613247978727,-0.34354092492453897,0.030776111181264956,0.22485407691471182,0.08393815129254727,0.06180154295361561,-0.04211353643366863,-0.19445844875270724,-0.0071285521001464396,-0.19015656269996364,-0.2654763541508573,-0.007926670272624062,0.09968247670537075,-0.02010224890580186,-0.16097138383939452,-0.012429532019703935,-0.22655589956545014,-0.23372088524951565,0.06693235917001887,0.3531862760701801,-0.15216958385377446,0.10042783125588592,-0.13367683682783343,0.05768115552886406,0.09104124367292939,-0.21082115435304535,-0.12332032801443361,-0.18235732054520282,-0.03789618660504587,-0.22377723842489386,-0.02380647278641187,-0.058325309541154835,0.13481927740559524,-0.3393003694736024,0.020583481939305676,0.10939672744787995,-0.031674532591355525,0.030481632057680078,0.12780000903784525,-0.44110163191020935,-0.18747509797081474,-0.07788149994951538,-0.05961217771737504,0.13325178375955957,-0.039318293251088286,-0.039708043145823074,0.1861449386169705,-0.1438283050788362,-0.0951683026465569,-0.2588986654803783,-0.015331717148603471,0.08080000682587804,0.028352663000156153,0.10341425325300202,-0.21602503586053085,0.3128194940124311,0.046338199345485366,-0.29353922871730287,0.07703506834654142,-0.11011651625434887,0.16043007921454835,-0.2587998065198415,0.15566586343645375,-0.14843018575536804,-0.12040994547758291,0.29156415470032626,0.004347881014161864,0.33551802986726337,-0.1693156543420214,0.0234424661887431,0.10505917461869563,-0.0872652217534249,0.1975487215141987,0.0978154157288777,-0.1313768750177537,0.35223701295801824,0.38699865062704386,-0.2733564992038009,0.13090815405977219,-0.11421932923246499,0.30911702982690525,0.04069390946327168,-0.037193911011088876,-0.08835297376285439,0.04849414604519876,0.09565429043449122,-0.07374934919875772,0.17296515557965444,-0.3558602462395021,0.04609870509149032,0.0005496840157694777,-0.23461341405757358,-0.026949015924906762,-0.01821944985717778,-0.09980126171530132,0.0969443564446051,0.050394950316832755,-0.5782960350427628,0.06840788275156356,-0.032230527327179015,-0.1597192568076687,0.22334111505275211,0.05475575372387219,-0.02332266381796337,-0.007383393679573927,-0.05157443765292393,0.22592583623281126,0.08468161709715497,-0.12223291451778401,0.11551228120216094,-0.07813576330748405,-0.05869217357768513,-0.07634716777365398,-0.2248835208545313,-0.03228219903530359,-0.1228469440826918,0.02222911636392763,-0.09009200178313052,-0.06984117715961315,-0.0260719863950285,-0.13081902278284363,-0.1275682636348985,-0.06419066293628756,0.061333549672749885,-0.3248413164244154,-0.3060066033787059,0.08090642185546507,-0.06730701399497255,0.083522962006312,0.12325387410776398,0.09250635745786429,0.22402987349725162,-0.3028718727430534,-0.016112747940973282,-0.16002420689238955,-0.27359788813333696,-0.058180269082139295,0.12415227916567138,0.09876127200860682,-0.038074972897426125,0.10851670730800542,-0.16090699434692482,-0.022132108208196402,0.12241951098084272,-0.008580629644731143,0.055522617419756094,-0.09116359663015586,-0.05035054683780955,-0.3402098863830568,0.08876177051492076,0.16403763069660823,-0.09028213081097806,0.20814226349042264,0.2173194803740469,-0.12186492717115259,-0.2028181759180579,-0.05657484425491757,0.11843870334105869,0.08099840672128913,-0.1444247164786513,0.06881483963814565,0.031037610064112927,0.14121531110911792,0.12506259861282834,0.15298602284165685,-0.04610577443509207,0.22934468156513133,-0.05373067661481069,-0.13317092659907762,0.1063183260170977,0.11691546568327366,-0.03534432208198707,0.05310952500920658,-0.07492385299788307,-0.09136244525963394,0.06640074969017609,-0.0006942725329980165,-0.33483803640160315,0.05989808167386926,-0.06934255775849282,-0.17058473794863066,-0.30899341104511335,-0.00774463152391195,0.015575885400251649,-0.21392170261984847,-0.07390294941215987,-0.3194260142137592,-0.04462031548183512,0.15311759315230686,0.003061847755703888,0.00017956605760759137,0.3201124335521073,0.09958387405194397,-0.07136013599837752,-0.14979630986615788,-0.07143254553717406,0.18079104007569663,0.05173091933018632,0.14902860579243798,-0.07457719133975735,-0.12452262943946145,-0.20810406576932353,-0.11900786663736732,0.00411789847026409,0.16755560627430627,0.07842374839446647,0.07521568117709143,-0.11955875510885976,-0.14944387080845,-0.02787717245850211,0.17238562390166975,0.2754101949342395,-0.02459622667984586,-0.076344503051471,-0.06401672694956943,-0.38089942405370225,0.10019656072310452,-0.02452312092686696,-0.05300583763436329,-0.12441846529676515,-0.21422233868070056,0.10099722907233366,-0.07045510938301028,0.16369278723585626,-0.2848239296676611,-0.09740328043445812,0.0536081796738135,0.20425848091200732,0.042598343536880745,-0.0801012785452292,0.05392535195117565,0.29156882020647157,0.12684424340801476,-0.012188651200115187,0.17022780491853062,-0.04719761359838299,-0.043310125662085565,0.2669228925837543,-0.266957711389358,0.2385746283054791,0.12464355769525255,0.08506294860131663,-0.1196613006369255,-0.4016194410072207,-0.18509566979922648,-0.10893780409010888,0.06103881055396354,-0.15186145297274734,0.09824535478535366,-0.027519515853698183,-0.055873283189383206,-0.15406537532974576,-0.19801608526408593,-0.05561443602059204,0.1862903356703754,-0.3548890412689304,-0.08563479598129155,-0.11115117182143174,-0.19838704882435484,0.10258405861368272,-0.02151593296524895,0.22718030363078096,0.16409468585389014,0.292169502568384,0.09542582855441675,0.24906950618914975];

function setup() {
  createCanvas(imgSize, imgSize);
}

function generateImage() {
  runway_port = document.getElementsByName('runway_port')[0].value;
  const path = "http://localhost:"+runway_port+"/query"; //the default path used by Runway / StyleGAN for receiving post requests
  let a,b;
  try {
    a = eval(document.getElementsByName('latentA')[0].value);
    b = eval(document.getElementsByName('latentB')[0].value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      alert(e.message);
      return;
    }
  }
  if (a === undefined || b === undefined || a.length < 512 || b.length < 512) {
    alert('Please fill in valid input vectors of length 512!');
    return;
  }
  for (let i = 0; i < imgSize; i++) { //loop through all pixels, and select the corresponding value for the vector with the randomness generated from our Noise Loop function
    c[i] = lerp(a[i], b[i], amt);
  }
  amt += step;

  let truncation = parseFloat(document.getElementsByName('truncation')[0].value);
  const data = {
    z: c, //generated latent space vector
    truncation: truncation, //variation in image generations - higher is more random, lower is more similar
  };
  httpPost(path, 'json', data, gotImage, gotError);
}

function gotError(error) { //if the generate image post request fails
  //console.error(error);
  alert('Could not connect to Runway ML server at port '+runway_port+'. Please start Runway ML server and try again! ')
}

function gotImage(result) { //called once generate image has received a response
  outputImage = createImg(result.image, imageReady);
  outputImage.remove();
}

function imageReady() { //saves the image
  image(outputImage, 0, 0);
  let save_image = document.getElementsByName('save')[0].checked;
  if (save_image) {
  	 //nf formats numbers to strings //if you don't want to output to Runway, you can save the images straight from processing by uncommenting this line.
    save('outputImage_'+(new Date).getTime());
  }
  count++;
  if (count == n_steps) {
    count = 0;
    step *= -1; 
  }
  if (loop) {
    setTimeout(generateImage, 100);
  }
}
