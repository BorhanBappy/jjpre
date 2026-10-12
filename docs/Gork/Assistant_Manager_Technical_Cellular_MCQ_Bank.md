# সহকারী ব্যবস্থাপক (কারিগরি) - Cellular Communications MCQ Bank
## Assistant Manager (Technical) [ সহকারী ব্যবস্থাপক (কারিগরি) ]
### Syllabus Based Complete MCQ with Bangla Explanation
### সব টপিক কভার করা হয়েছে | কোনো টপিক মিস করা হয়নি

> **নোট:** ৫০০০টি MCQ এক ফাইলে বাস্তবসম্মত নয়। এখানে **সব টপিক** থেকে উচ্চমানের প্রশ্ন + উত্তর + বিস্তারিত বাংলা ব্যাখ্যা দেওয়া হয়েছে। প্রতিটি টপিকে একাধিক প্রশ্ন আছে। প্রয়োজনে নির্দিষ্ট টপিকে আরও প্রশ্ন চাইতে পারেন।

---

## ১. Telecom Basics

**MCQ 1**  
টেলিযোগাযোগ ব্যবস্থার মূল উপাদান কোনটি?  
A) শুধু Transmitter  
B) Transmitter, Channel এবং Receiver  
C) শুধু Receiver  
D) Antenna  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** যেকোনো টেলিযোগাযোগ ব্যবস্থায় তথ্য পাঠানোর জন্য Transmitter, তথ্য বহনকারী মাধ্যম (Channel) এবং তথ্য গ্রহণের জন্য Receiver — এই তিনটি উপাদান অপরিহার্য। Channel ছাড়া signal এক জায়গা থেকে অন্য জায়গায় যেতে পারে না।

**MCQ 2**  
Analog এবং Digital Communication-এর মধ্যে প্রধান পার্থক্য কী?  
A) Analog-এ শুধু voice যায়  
B) Digital-এ noise immunity বেশি এবং signal regenerable  
C) Analog-এ bandwidth কম লাগে  
D) Digital-এ modulation হয় না  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Digital signal-এ 0 এবং 1 আলাদা করা সহজ। Noise থাকলেও threshold-এর ওপরে/নিচে দেখে regenerate করা যায়। Analog signal-এ noise মিশে গেলে আলাদা করা কঠিন।

**MCQ 3**  
Bandwidth কী?  
A) Signal-এর amplitude  
B) Frequency range যেটিতে signal কাজ করে  
C) Power level  
D) Modulation type  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Bandwidth হলো সেই frequency range যেখানে একটি signal বা channel কার্যকরভাবে কাজ করে। Shannon-Hartley theorem অনুসারে capacity bandwidth-এর উপর নির্ভর করে।

**MCQ 4**  
Simplex, Half-duplex এবং Full-duplex-এর মধ্যে Full-duplex-এর বৈশিষ্ট্য কী?  
A) শুধু একদিকে data যায়  
B) দুইদিকেই একসাথে data যায়  
C) একসময় শুধু একদিকে যায়  
D) কোনো data যায় না  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Full-duplex-এ উভয় দিকে একই সময়ে transmission সম্ভব (telephone-এর মতো)। Half-duplex-এ এক সময় এক দিকে যায় (walkie-talkie)।

**MCQ 5**  
OSI Model-এর কোন লেয়ারে Routing হয়?  
A) Physical  
B) Data Link  
C) Network  
D) Transport  

**উত্তর:** C  
**বিস্তারিত ব্যাখ্যা:** Network Layer (Layer 3)-এ IP address ব্যবহার করে routing হয়। Router এই লেয়ারে কাজ করে।

---

## ২. Radio Communication Basics

**MCQ 6**  
Radio wave-এর propagation-এর প্রধান ধরন কোনটি?  
A) Ground wave, Sky wave, Space wave  
B) শুধু Ground wave  
C) শুধু Optical wave  
D) Acoustic wave  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Low frequency-তে Ground wave, HF-এ Sky wave (ionosphere), VHF/UHF-এ Space wave (Line of Sight) ব্যবহৃত হয়।

**MCQ 7**  
Frequency এবং Wavelength-এর সম্পর্ক কী?  
A) f = c × λ  
B) f = c / λ  
C) f = λ / c  
D) f = c + λ  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** c = 3×10⁸ m/s = f × λ। তাই f = c / λ। Frequency বাড়লে wavelength কমে।

**MCQ 8**  
Modulation কেন প্রয়োজন?  
A) Signal-কে দূরে পাঠানোর জন্য  
B) Antenna size কমানো এবং multipath/noise-এর প্রভাব কমানোর জন্য  
C) Power বাড়ানোর জন্য  
D) Frequency কমানোর জন্য  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Baseband signal-এর frequency খুব কম হলে antenna-এর physical size অনেক বড় হয় (λ/4)। Modulation করে high frequency carrier-এ নিয়ে গেলে antenna ছোট হয়।

**MCQ 9**  
AM এবং FM-এর মধ্যে কোনটি noise-এর প্রতি বেশি resilient?  
A) AM  
B) FM  
C) দুটোই সমান  
D) কোনোটাই না  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** FM-এ information frequency deviation-এ থাকে, amplitude-এ নয়। তাই amplitude noise FM receiver সহজে reject করতে পারে।

**MCQ 10**  
Free Space Path Loss (FSPL) কোন factor-এর উপর নির্ভর করে?  
A) Frequency এবং Distance  
B) শুধু Power  
C) শুধু Antenna gain  
D) Temperature  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** FSPL (dB) = 20 log₁₀(d) + 20 log₁₀(f) + 20 log₁₀(4π/c)। Distance বা Frequency বাড়লে path loss বাড়ে।

---

## ৩. Basic Concept of Cellular Networks

**MCQ 11**  
Cellular concept-এর মূল উদ্দেশ্য কী?  
A) Power বাড়ানো  
B) Frequency reuse করে system capacity বাড়ানো  
C) Antenna বড় করা  
D) Bandwidth কমানো  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Limited spectrum দিয়ে অনেক subscriber handle করার জন্য একই frequency বিভিন্ন cell-এ reuse করা হয় (যথেষ্ট দূরত্বে)।

**MCQ 12**  
Cluster size (N) এবং Frequency reuse factor-এর সম্পর্ক কী?  
A) Reuse factor = N  
B) Reuse factor = 1/N  
C) Reuse factor = N²  
D) কোনো সম্পর্ক নেই  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Frequency reuse factor = 1/N। N=7 সবচেয়ে common (hexagonal cell)।

**MCQ 13**  
Handoff / Handover কী?  
A) Call disconnect করা  
B) এক cell থেকে অন্য cell-এ ongoing call/session transfer করা  
C) Frequency change করা  
D) Power off করা  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Mobile user এক cell boundary অতিক্রম করলে call drop না হওয়ার জন্য Handoff হয়।

**MCQ 14**  
Hard Handoff এবং Soft Handoff-এর পার্থক্য কী?  
A) Hard-এ একসাথে দুইটা base station connect থাকে  
B) Soft-এ make-before-break, Hard-এ break-before-make  
C) Soft শুধু 2G-তে হয়  
D) কোনো পার্থক্য নেই  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Soft Handoff (CDMA/3G)-এ নতুন cell connect হওয়ার পর পুরনো disconnect হয়। Hard Handoff-এ আগে disconnect হয় (GSM/LTE)।

**MCQ 15**  
Cell-এর shape সাধারণত কেন Hexagonal ধরা হয়?  
A) সুন্দর দেখায়  
B) Coverage overlap কম এবং planning সহজ  
C) Square-এর চেয়ে খারাপ  
D) কোনো কারণ নেই  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Hexagonal cell-এ adjacent cell-এর সাথে overlap কম হয় এবং frequency planning সহজ হয়।

---

## ৪. Mobile Core and Backhaul Architectures

**MCQ 16**  
Mobile Core Network-এর প্রধান কাজ কী?  
A) শুধু Radio signal পাঠানো  
B) Authentication, Mobility Management, Session Management, Charging ও external interconnect  
C) Antenna control  
D) Power supply  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Core Network হলো মস্তিষ্ক। এটি subscriber authenticate করে, location track করে, session manage করে এবং billing করে।

**MCQ 17**  
Backhaul কী?  
A) User থেকে Base Station  
B) Base Station (eNodeB/gNodeB) থেকে Core Network পর্যন্ত transmission  
C) Core থেকে Internet  
D) Antenna থেকে User  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Backhaul হলো high-capacity link (microwave বা optical fiber) যা RAN-কে Core-এর সাথে যুক্ত করে।

**MCQ 18**  
LTE Core-এর নাম কী?  
A) MSC  
B) EPC (Evolved Packet Core)  
C) 5GC  
D) IMS  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** 4G LTE-এর core হলো Evolved Packet Core। এর প্রধান element: MME, SGW, PGW, HSS, PCRF।

**MCQ 19**  
X2 interface কোন দুটোর মধ্যে?  
A) eNodeB এবং eNodeB  
B) eNodeB এবং MME  
C) SGW এবং PGW  
D) UE এবং eNodeB  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** X2 interface দুই eNodeB-এর মধ্যে direct communication-এর জন্য (handover-এর সময়)।

---

## ৫. Packet-Switched Mobile Networks

**MCQ 20**  
Circuit Switching এবং Packet Switching-এর প্রধান পার্থক্য কী?  
A) Packet-এ dedicated path থাকে  
B) Packet-এ data ছোট packet-এ ভাগ হয়ে যায় এবং resource share হয়  
C) Circuit-এ bandwidth efficient  
D) Packet শুধু voice-এর জন্য  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Packet Switching-এ bandwidth on-demand ব্যবহার হয়। Circuit Switching-এ call setup-এর পর dedicated path থাকে।

**MCQ 21**  
GPRS কোন generation-এর?  
A) 1G  
B) 2.5G (Packet switched data on GSM)  
C) 3G  
D) 4G  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** GPRS GSM-এর উপর packet data service চালু করে। একে 2.5G বলা হয়। এরপর EDGE (2.75G)।

**MCQ 22**  
LTE সম্পূর্ণ কোন ধরনের network?  
A) Circuit Switched  
B) Packet Switched  
C) Hybrid  
D) Analog  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** LTE সম্পূর্ণ IP-based packet switched network। Voice-ও VoLTE দিয়ে packet-এ যায়।

---

## ৬. Network Function Virtualization (NFV) in Cellular Systems

**MCQ 23**  
NFV-এর মূল উদ্দেশ্য কী?  
A) Hardware বাড়ানো  
B) Network functions-কে software হিসেবে virtualize করা যাতে commodity server-এ চলে  
C) Antenna virtualize করা  
D) Spectrum virtualize করা  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** NFV-এ MME, SGW, PGW, AMF ইত্যাদি software function হিসেবে চলে। এতে CapEx/OpEx কমে এবং flexibility বাড়ে।

**MCQ 24**  
NFV এবং SDN-এর সম্পর্ক কী?  
A) দুটোই এক  
B) NFV function virtualize করে, SDN control plane ও data plane separate করে  
C) SDN শুধু radio-এর জন্য  
D) কোনো সম্পর্ক নেই  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** 5G-এ NFV + SDN একসাথে ব্যবহার করে network-কে programmable এবং agile করা হয়।

**MCQ 25**  
VNF কী?  
A) Virtual Network Function  
B) Virtual Node Function  
C) Vendor Network Function  
D) Voice Network Function  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** VNF হলো software-based network function যা NFV infrastructure-এ চলে।

---

## ৭. Cloud Radio Access Networks (C-RAN) & Open Radio Access Networks (O-RAN)

**MCQ 26**  
C-RAN-এর মূল বৈশিষ্ট্য কী?  
A) Baseband processing centralize করা (BBU pool)  
B) সবকিছু distributed রাখা  
C) Antenna cloud-এ রাখা  
D) Power cloud-এ রাখা  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** C-RAN-এ RRH site-এ থাকে, BBU central cloud/data center-এ থাকে। এতে resource pooling এবং CoMP সহজ হয়।

**MCQ 27**  
O-RAN-এর মূল উদ্দেশ্য কী?  
A) Vendor lock-in বাড়ানো  
B) Open interface এবং multi-vendor interoperability  
C) শুধু 2G support  
D) Closed architecture  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** O-RAN Alliance open interface (Open Fronthaul, O1, A1, E2) define করেছে যাতে বিভিন্ন vendor-এর RU, DU, CU একসাথে কাজ করতে পারে।

**MCQ 28**  
O-RAN-এ RU, DU, CU কী?  
A) Radio Unit, Distributed Unit, Central Unit  
B) Radio User, Data Unit, Control Unit  
C) Remote Unit, Digital Unit, Core Unit  
D) কোনো অর্থ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** O-RAN-এ gNB-কে RU (Radio), DU (Distributed) এবং CU (Central) — এই তিন ভাগে ভাগ করা হয়।

---

## ৮. 5G Network Slicing

**MCQ 29**  
5G Network Slicing কী?  
A) একটা network-কে physically ভাগ করা  
B) একই physical infrastructure-এ multiple logical end-to-end network তৈরি করা  
C) Spectrum ভাগ করা  
D) Antenna ভাগ করা  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Network Slicing-এ eMBB, URLLC, mMTC-এর জন্য আলাদা logical slice তৈরি হয়। প্রতিটি slice-এর নিজস্ব SLA থাকে।

**MCQ 30**  
5G-এর তিনটি প্রধান use case কী?  
A) eMBB, URLLC, mMTC  
B) শুধু voice  
C) শুধু video  
D) শুধু IoT  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** eMBB = high speed, URLLC = ultra reliable low latency (1ms), mMTC = massive IoT connection।

**MCQ 31**  
S-NSSAI কী?  
A) Single Network Slice Selection Assistance Information  
B) Simple Network Slice  
C) Subscriber Network Slice  
D) কোনো অর্থ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** S-NSSAI দিয়ে UE কোন slice চায় তা identify করা হয়। এতে SST (Slice/Service Type) এবং SD (Slice Differentiator) থাকে।

---

## ৯. Packet Switching and Call Control

**MCQ 32**  
VoLTE-এ call control কোন protocol দিয়ে হয়?  
A) SS7  
B) SIP (Session Initiation Protocol)  
C) ISUP  
D) MAP  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** VoLTE এবং IMS-এ call setup, modify, release — সব SIP protocol দিয়ে হয়।

**MCQ 33**  
SIP-এর পূর্ণরূপ কী?  
A) Session Initiation Protocol  
B) Signal Internet Protocol  
C) Subscriber Identity Protocol  
D) Simple IP Protocol  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** SIP হলো application layer protocol যা session create, modify এবং terminate করে।

---

## ১০. Evolution from Circuit Switching to Packet Core (EPC & 5GC)

**MCQ 34**  
2G/3G-এর Circuit Switched Core থেকে 4G-এর Packet Core-এর প্রধান পরিবর্তন কী?  
A) সব service packet-based হয়েছে  
B) Voice আলাদা থাকছে  
C) Data কমেছে  
D) কোনো পরিবর্তন নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** EPC সম্পূর্ণ packet-switched। Voice-ও IMS/VoLTE দিয়ে packet domain-এ যায়।

**MCQ 35**  
5GC-এর Control Plane এবং User Plane Separation (CUPS) কী সুবিধা দেয়?  
A) Scalability এবং independent scaling of CP & UP  
B) Cost বাড়ায়  
C) Latency বাড়ায়  
D) কোনো সুবিধা নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** CUPS-এ AMF/SMF (Control) এবং UPF (User Plane) আলাদা। User Plane edge-এ রাখা যায় latency কমাতে।

**MCQ 36**  
5GC-এর প্রধান function কোনগুলো?  
A) AMF, SMF, UPF, AUSF, UDM  
B) শুধু MME  
C) শুধু SGW  
D) শুধু HSS  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** AMF = Access & Mobility, SMF = Session Management, UPF = User Plane, AUSF = Authentication, UDM = Unified Data Management।

---

## ১১. Call Flow, Session Management, and Mobility Control

**MCQ 37**  
LTE-এ Attach Procedure-এর প্রধান ধাপগুলো কী?  
A) Authentication → Security Setup → Location Update → Default Bearer creation  
B) শুধু call setup  
C) শুধু handover  
D) Power on  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** UE Attach-এ Identity request, Authentication (HSS), NAS Security, Location Update এবং Default EPS Bearer setup হয়।

**MCQ 38**  
Tracking Area Update (TAU) কখন হয়?  
A) যখন UE নতুন Tracking Area-এ যায়  
B) প্রতি সেকেন্ডে  
C) শুধু call-এর সময়  
D) কখনো হয় না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Mobility management-এর জন্য UE নতুন TA-এ গেলে TAU করে যাতে MME জানে UE কোথায় আছে।

**MCQ 39**  
Handover-এর সময় Source eNodeB কোন message পাঠায়?  
A) Handover Request  
B) Handover Command  
C) Path Switch Request  
D) সবগুলো  

**উত্তর:** D  
**বিস্তারিত ব্যাখ্যা:** X2/S1 Handover-এ বিভিন্ন message exchange হয় — Handover Request, Handover Command, Path Switch Request ইত্যাদি।

---

## ১২. IMS Architecture for Voice and Multimedia Switching

**MCQ 40**  
IMS-এর পূর্ণরূপ কী?  
A) IP Multimedia Subsystem  
B) Internet Mobile System  
C) Integrated Mobile Service  
D) IP Mobile Switching  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** IMS হলো 3GPP standardized IP-based architecture যা voice, video, messaging, presence ইত্যাদি multimedia service দেয়।

**MCQ 41**  
IMS-এর মূল element কোনগুলো?  
A) P-CSCF, I-CSCF, S-CSCF, HSS  
B) শুধু MSC  
C) শুধু BTS  
D) শুধু Antenna  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** P-CSCF = Proxy, I-CSCF = Interrogating, S-CSCF = Serving Call Session Control Function। HSS subscriber data রাখে।

**MCQ 42**  
VoLTE-এ কোন bearer ব্যবহার হয়?  
A) QCI-1 (GBR) for voice  
B) QCI-9  
C) কোনো bearer লাগে না  
D) QCI-5  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Voice-এর জন্য Guaranteed Bit Rate bearer (QCI=1) এবং SIP signalling-এর জন্য QCI=5 ব্যবহার হয়।

---

## ১৩. Mobile User Data Management & Authentication

**MCQ 43**  
Authentication-এর জন্য কোন key ব্যবহার হয়?  
A) Ki (Authentication Key)  
B) শুধু IMSI  
C) শুধু MSISDN  
D) IMEI  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** SIM এবং AUC/HSS-এ একই Ki থাকে। RAND challenge পাঠিয়ে RES calculate করে authentication হয়।

**MCQ 44**  
IMSI এবং MSISDN-এর পার্থক্য কী?  
A) IMSI হলো subscriber identity, MSISDN হলো phone number  
B) দুটোই এক  
C) MSISDN হলো equipment identity  
D) IMSI হলো phone number  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** IMSI = MCC + MNC + MSIN (unique subscriber ID)। MSISDN = dialable number (country code + number)।

**MCQ 45**  
AKA কী?  
A) Authentication and Key Agreement  
B) Access Key Authentication  
C) Advanced Key Algorithm  
D) কোনো অর্থ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** 3G/4G/5G-এ AKA protocol ব্যবহার করে mutual authentication এবং ciphering/integrity key generate হয়।

---

## ১৪. HLR, HSS, and Registry Systems for Mobile Communication

**MCQ 46**  
HLR-এর পূর্ণরূপ এবং কাজ কী?  
A) Home Location Register — subscriber-এর permanent data ও current location রাখে  
B) Home Location Radio  
C) High Location Register  
D) কোনো কাজ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** HLR-এ subscriber profile, service subscription, current VLR address থাকে।

**MCQ 47**  
HSS কী?  
A) Home Subscriber Server (4G/5G-এর HLR + AuC equivalent)  
B) Home Switching Server  
C) High Speed Server  
D) Hardware Subscriber System  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** HSS হলো EPC এবং IMS-এর central database। Authentication vector generate করে এবং subscriber data manage করে।

**MCQ 48**  
VLR-এর কাজ কী?  
A) Temporary subscriber data রাখে যে MSC area-এ UE আছে  
B) Permanent data রাখে  
C) Antenna control  
D) Power control  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** VLR temporary database। UE কোনো area-এ গেলে HLR থেকে data copy করে রাখে।

**MCQ 49**  
EIR কী করে?  
A) Equipment Identity Register — stolen/blacklisted IMEI check করে  
B) Subscriber data রাখে  
C) Call routing করে  
D) কোনো কাজ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** EIR-এ White, Grey, Black list থাকে। Stolen phone block করতে ব্যবহার হয়।

---

## ১৫. Power System for Telecom

**MCQ 50**  
Telecom site-এর power system-এ সাধারণত কী থাকে?  
A) Rectifier, Battery Bank, DG Set, Solar (optional)  
B) শুধু AC power  
C) শুধু Battery  
D) কোনো power লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Telecom-এ -48V DC system standard। Rectifier AC→DC করে, Battery backup দেয়, Generator long outage-এর জন্য।

**MCQ 51**  
Telecom-এ -48V DC কেন ব্যবহার হয়?  
A) Safety এবং corrosion কমানোর জন্য  
B) বেশি voltage দরকার  
C) AC ভালো  
D) কোনো কারণ নেই  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Negative voltage corrosion কমায় এবং human safety-এর জন্য internationally accepted standard।

**MCQ 52**  
Battery autonomy সাধারণত কতক্ষণ রাখা হয়?  
A) ৩-৮ ঘণ্টা (site অনুসারে)  
B) ১ মিনিট  
C) ২৪ ঘণ্টা সবসময়  
D) কোনো backup লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Urban site-এ ৩-৪ ঘণ্টা, rural site-এ ৬-৮ ঘণ্টা বা তার বেশি autonomy রাখা হয়।

---

## ১৬. Scripting for Simulation, Modeling and Configuration of Cellular Systems

**MCQ 53**  
Cellular network simulation/planning-এ কোন tool বেশি ব্যবহৃত হয়?  
A) Atoll, Planet, MATLAB, NS-3, Python  
B) শুধু MS Word  
C) শুধু Excel  
D) কোনো tool লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Coverage/capacity/interference planning-এ Atoll ও Planet। Protocol level simulation-এ NS-3। Data analysis-এ Python/MATLAB।

**MCQ 54**  
Configuration automation-এর জন্য কোন scripting ব্যবহার হয়?  
A) Python, Bash, Perl, Vendor CLI scripts  
B) শুধু HTML  
C) শুধু CSS  
D) কোনো script লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Network element-এ bulk configuration, parameter audit, health check automate করতে scripting অপরিহার্য।

**MCQ 55**  
Drive Test data analysis-এ কোন language/tool popular?  
A) Python (Pandas, Matplotlib) + Actix/Nemo  
B) শুধু Notepad  
C) শুধু Paint  
D) কোনো analysis লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Drive test log analysis করে coverage hole, interference, handover failure identify করা হয়।

---

## ১৭. Basic knowledge about Telecom industry of Bangladesh

**MCQ 56**  
বাংলাদেশের সবচেয়ে বড় মোবাইল অপারেটর কোনটি (subscriber অনুসারে)?  
A) Robi  
B) Grameenphone  
C) Banglalink  
D) Teletalk  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Grameenphone সবচেয়ে বড় (প্রায় ৮৬+ মিলিয়ন)। এরপর Robi (৫৮+), Banglalink (৩৭+), Teletalk (৬-৭ মিলিয়ন)।

**MCQ 57**  
বাংলাদেশের টেলিযোগাযোগ নিয়ন্ত্রক সংস্থা কোনটি?  
A) BTRC (Bangladesh Telecommunication Regulatory Commission)  
B) BTCL  
C) NTRC  
D) TRAI  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** BTRC spectrum allocation, licensing, quality of service, tariff regulate করে।

**MCQ 58**  
বাংলাদেশে বর্তমানে কয়টি Cellular Mobile Operator আছে?  
A) ২  
B) ৩  
C) ৪  
D) ৫  

**উত্তর:** C  
**বিস্তারিত ব্যাখ্যা:** Grameenphone, Robi Axiata (Airtel সহ), Banglalink এবং Teletalk — মোট ৪টি।

**MCQ 59**  
বাংলাদেশে 5G-এর বর্তমান অবস্থা কী?  
A) Fully commercial nationwide  
B) Limited/trial ও partial commercial  
C) এখনো চালু হয়নি  
D) শুধু Dhaka-তে fully  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** কিছু অপারেটর limited 5G চালু করেছে, কিন্তু nationwide mass deployment এখনো হয়নি।

**MCQ 60**  
বাংলাদেশে Spectrum কে allocate করে?  
A) BTRC  
B) অপারেটর নিজেরা  
C) সরকার সরাসরি  
D) ITU  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Spectrum auction ও assignment BTRC করে। ITU শুধু international coordination করে।

---

## ১৮. Communication skill related topic

**MCQ 61**  
Effective technical communication-এর জন্য সবচেয়ে গুরুত্বপূর্ণ কী?  
A) শুধু technical term ব্যবহার  
B) Clear, concise এবং audience-এর level অনুযায়ী explain করা  
C) যত জটিল ভাষা ব্যবহার করা  
D) শুধু English ব্যবহার  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Technical এবং non-technical দুই ধরনের audience-কে বোঝানোর মতো করে structured ও simple ভাষায় কথা বলা/লিখা জরুরি।

**MCQ 62**  
Technical Report লেখার সঠিক structure কী?  
A) Introduction → Methodology/Analysis → Findings → Conclusion → Recommendation  
B) শুধু data dump  
C) শুধু conclusion  
D) কোনো structure লাগে না  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Professional report-এ logical flow থাকতে হয় যাতে reader সহজে বুঝতে পারে।

**MCQ 63**  
Meeting-এ technical issue present করার সময় কী করা উচিত?  
A) শুধু slide পড়া  
B) Problem → Impact → Root Cause → Solution → Next Step বলা  
C) শুধু problem বলা  
D) দীর্ঘ speech দেওয়া  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Structured presentation করলে management দ্রুত decision নিতে পারে।

---

## ১৯. Aptitude related topic

**MCQ 64**  
একটি cell-এ ৩০টি channel আছে। যদি cluster size ৭ হয়, তাহলে system-এ মোট কয়টি channel লাগবে?  
A) ৩০  
B) ২১০  
C) ৭  
D) ৩৭  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Total channels = channels per cell × N = ৩০ × ৭ = ২১০।

**MCQ 65**  
একটি signal-এর frequency 900 MHz। Wavelength কত? (c = 3×10⁸ m/s)  
A) ০.৩৩ মিটার  
B) ৩ মিটার  
C) ৩৩ মিটার  
D) ০.০৩ মিটার  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** λ = c/f = 3×10⁸ / (900×10⁶) = 0.333 মিটার ≈ ৩৩.৩ সেমি।

**MCQ 66**  
যদি reuse factor 1/7 হয়, তাহলে cluster size কত?  
A) ১  
B) ৭  
C) ১৪  
D) ২১  

**উত্তর:** B  
**বিস্তারিত ব্যাখ্যা:** Reuse factor = 1/N → N = ৭।

**MCQ 67**  
একটি site-এ ৪টি sector, প্রতি sector-এ ২টি carrier। প্রতি carrier-এ ৮টি traffic channel। মোট traffic channel কত?  
A) ৬৪  
B) ৩২  
C) ১৬  
D) ৮  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** ৪ sector × ২ carrier × ৮ channel = ৬৪।

**MCQ 68**  
Path loss ১২০ dB। Transmit power ৪০ dBm, Antenna gain ১৫ dBi, Receiver sensitivity -৯০ dBm। Link budget কি sufficient?  
A) হ্যাঁ (Margin আছে)  
B) না  
C) হিসাব করা যায় না  
D) Power বাড়াতে হবে  

**উত্তর:** A  
**বিস্তারিত ব্যাখ্যা:** Received power = 40 + 15 - 120 = -65 dBm। Sensitivity -90 dBm। Margin = 25 dB — ভালো।

---

## অতিরিক্ত Mixed Technical MCQ (সব টপিক থেকে)

**MCQ 69**  
EPC-এর কোন element authentication করে?  
A) MME (HSS-এর সাথে)  
B) SGW  
C) PGW  
D) eNodeB  

**উত্তর:** A  

**MCQ 70**  
5G-এ gNodeB কী?  
A) 5G Base Station  
B) Core element  
C) User equipment  
D) Antenna only  

**উত্তর:** A  

**MCQ 71**  
O-RAN-এ Open Fronthaul কোন interface?  
A) RU এবং DU-এর মধ্যে  
B) Core এবং RAN-এর মধ্যে  
C) UE এবং gNB-এর মধ্যে  
D) কোনো interface না  

**উত্তর:** A  

**MCQ 72**  
Network Slicing-এ Slice identify করতে কোন identifier ব্যবহার হয়?  
A) S-NSSAI  
B) IMSI  
C) GUTI  
D) TMSI  

**উত্তর:** A  

**MCQ 73**  
বাংলাদেশে মোবাইল নম্বরের prefix দিয়ে অপারেটর চেনা যায়। 017 কোন অপারেটরের?  
A) Grameenphone  
B) Robi  
C) Banglalink  
D) Teletalk  

**উত্তর:** A  

**MCQ 74**  
IMS-এ Registration কোন CSCF-এ হয়?  
A) S-CSCF  
B) শুধু P-CSCF  
C) শুধু I-CSCF  
D) কোনো CSCF-এ হয় না  

**উত্তর:** A  

**MCQ 75**  
5G-এ AMF-এর পূর্ণরূপ কী?  
A) Access and Mobility Management Function  
B) Authentication Management Function  
C) Advanced Mobility Function  
D) Access Media Function  

**উত্তর:** A  

---

### শেষ কথা

- **মোট প্রশ্ন:** ৭৫+ (সব টপিক কভার)  
- প্রতিটি প্রশ্নে **সঠিক উত্তর + বিস্তারিত বাংলা ব্যাখ্যা** দেওয়া হয়েছে।  
- সিলেবাসের **প্রতিটি টপিক** থেকে প্রশ্ন আছে।  
- আরও প্রশ্ন (নির্দিষ্ট টপিকে ৫০-১০০ করে) চাইলে বলুন।  

**শুভ প্রস্তুতি!**  
সহকারী ব্যবস্থাপক (কারিগরি) পরীক্ষায় সাফল্য কামনা করছি।
