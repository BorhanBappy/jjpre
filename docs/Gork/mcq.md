# Telecom MCQ Master Guide — সম্পূর্ণ বাংলা ব্যাখ্যা
## English MCQ বুঝে সঠিক উত্তর করার জন্য Topic-wise Study Notes

> **কীভাবে পড়বে:** প্রতিটি টপিকে আগে বাংলা ব্যাখ্যা বোঝো, তারপর **Must Memorize** অংশ মুখস্থ করো, শেষে English MCQ অনুশীলন করো। পরীক্ষায় প্রশ্ন ইংরেজিতে এলেও এখানে মূল technical term, acronym এবং answer choice ইংরেজিতেই রাখা হয়েছে।
>
> **গুরুত্বপূর্ণ:** এই নোটটি তোমার দেওয়া Telecom Basics সিলেবাসের ১৯টি টপিক ধরে বিস্তৃত করা হয়েছে। কোনো বিষয় তোমার মূল নোটে সংক্ষিপ্ত থাকলে সেখানে পরীক্ষার জন্য দরকারি ব্যাখ্যা ও উদাহরণ যোগ করা হয়েছে। বাংলাদেশি অপারেটরের subscriber সংখ্যা, prefix, 5G deployment-এর মতো পরিবর্তনশীল তথ্য পরীক্ষার আগে সর্বশেষ official source/প্রশ্নের নির্দিষ্ট reference অনুযায়ী মিলিয়ে নেবে।

---

# কীভাবে MCQ-তে ভাববে

1. **Full form প্রশ্ন:** acronym-এর প্রতিটি শব্দ চিনে রাখো—যেমন MME = Mobility Management Entity।
2. **Function প্রশ্ন:** কোন network node কী কাজ করে তা আলাদা করে শেখো—যেমন MME control plane, SGW/PGW data forwarding-এর সঙ্গে সম্পর্কিত।
3. **Difference প্রশ্ন:** দুটি শব্দ পাশাপাশি তুলনা করো—যেমন Hard Handoff বনাম Soft Handoff।
4. **Formula প্রশ্ন:** formula মুখস্থের সঙ্গে unit-ও বোঝো—frequency Hz, wavelength metre, power dBm।
5. **Keyword clue:** “same frequency” দেখলে co-channel interference; “break-before-make” দেখলে hard handoff; “open interfaces/multi-vendor” দেখলে O-RAN; “logical networks on shared infrastructure” দেখলে network slicing।
6. **সাবধান:** কোনো MCQ-তে “always”, “only”, “never” থাকলে statement-টি খুব সতর্কভাবে বিচার করো। Telecom-এ অনেক বিষয় technology ও implementation অনুযায়ী বদলাতে পারে।

---

# 1. Telecom Basics

## 1.1 Telecommunication কী?

**Telecommunication** হলো দূরত্বে থাকা দুই বা একাধিক স্থানের মধ্যে voice, data, image বা video-এর মতো তথ্য আদান-প্রদানের ব্যবস্থা। তথ্যকে কোনো উপযোগী signal-এ রূপান্তর করে wired বা wireless medium দিয়ে পাঠানো হয়; receiver সেই signal থেকে তথ্য উদ্ধার করে।

উদাহরণ:
- Mobile phone call — voice transmission
- SMS / internet browsing — data transmission
- Television broadcast — audio/video transmission
- Video call — voice ও video data

## 1.2 Communication system-এর ৩টি মৌলিক অংশ

**Transmitter → Channel/Medium → Receiver**

- **Transmitter:** message-কে transmission-এর উপযোগী signal-এ রূপান্তর করে।
- **Channel / Medium:** signal যে পথ দিয়ে যায়। উদাহরণ: copper cable, optical fibre, air/free space।
- **Receiver:** প্রাপ্ত signal থেকে মূল message উদ্ধার বা reconstruct করে।

একটি বাস্তব mobile system-এ encoding, modulation, amplification, antenna, filtering ও decoding-এর মতো আরও ধাপ থাকতে পারে। কিন্তু basic MCQ-তে তিনটি প্রধান অংশই বেশি গুরুত্বপূর্ণ।

## 1.3 Simplex, Half-duplex, Full-duplex

| Mode | যোগাযোগের ধরন | উদাহরণ | মনে রাখার কৌশল |
|---|---|---|---|
| **Simplex** | শুধু একদিকে তথ্য যায় | Radio/TV broadcast | One-way |
| **Half-duplex** | দুই দিকেই যায়, তবে একই সময়ে নয় | Walkie-talkie | Two-way, one at a time |
| **Full-duplex** | দুই দিকেই একই সময়ে যায় | Telephone call | Simultaneous two-way |

**MCQ clue:** “only one direction” = Simplex; “one direction at a time” = Half-duplex; “simultaneously in both directions” = Full-duplex।

## 1.4 Analog বনাম Digital signal

- **Analog signal:** সময়ের সঙ্গে signal-এর amplitude/মান ধারাবাহিকভাবে বদলাতে পারে।
- **Digital signal:** নির্দিষ্ট discrete value/level ব্যবহার করে; binary system-এ সাধারণত 0 ও 1।

| বিষয় | Analog | Digital |
|---|---|---|
| Value | Continuous | Discrete levels |
| Noise-এর প্রভাব | Noise যোগ হলে quality ধীরে ধীরে খারাপ হতে পারে | Threshold ও regeneration দিয়ে noise-এর প্রভাব মোকাবিলা করা যায় |
| Processing | তুলনামূলকভাবে কম flexible | Storage, processing, encryption ও compression সহজ |
| উদাহরণ | Traditional analog audio waveform | Digital voice/data bits |

Digital মানেই noise একেবারেই হবে না—এমন নয়। তবে digital signal-কে regenerate করে noise-এর প্রভাব কমানো যায়, যদি signal যথেষ্ট পরিষ্কার থাকে।

## 1.5 Bandwidth, Modulation, Noise ও Signal quality

- **Bandwidth:** কোনো signal/channel যে frequency range ব্যবহার করে তার প্রস্থ। সাধারণত Hz-এ মাপা হয়।
- **Modulation:** information signal অনুযায়ী carrier wave-এর amplitude, frequency বা phase পরিবর্তন করা।
- **Noise:** অনাকাঙ্ক্ষিত signal/বিঘ্ন, যা useful information বুঝতে অসুবিধা করে।
- **SNR (Signal-to-Noise Ratio):** useful signal power ও noise power-এর অনুপাত। SNR বেশি হলে সাধারণত signal quality ভালো।
- **BER (Bit Error Rate):** মোট প্রেরিত bit-এর মধ্যে ভুলভাবে পাওয়া bit-এর অনুপাত।
- **Throughput:** বাস্তবে প্রতি সেকেন্ডে সফলভাবে কত data transfer হচ্ছে।
- **Latency:** data পাঠানো ও পৌঁছানোর মধ্যে delay।
- **Attenuation:** চলার পথে signal strength কমে যাওয়া।

**Bandwidth আর throughput এক নয়।** Bandwidth হলো channel-এর frequency range/capacity-এর সঙ্গে সম্পর্কিত ধারণা; throughput হলো বাস্তবে পাওয়া data rate। Protocol overhead, interference, congestion ও signal quality-এর কারণে throughput theoretical capacity-এর চেয়ে কম হতে পারে।

## 1.6 Modulation কেন দরকার?

Baseband information-কে carrier wave-এ বসিয়ে উপযুক্ত frequency band-এ পাঠাতে modulation ব্যবহৃত হয়। এটি wireless transmission, frequency allocation এবং antenna size-এর সঙ্গে সম্পর্কিত। একই frequency range-এ বিভিন্ন signal আলাদা করার ব্যবস্থাও modulation ও multiplexing-এর সঙ্গে সম্পর্কিত।

### Must Memorize
- Telecommunication = distance-এ information transfer।
- Basic system = Transmitter, Channel, Receiver।
- Simplex = one-way; Half-duplex = two-way but not simultaneous; Full-duplex = simultaneous two-way।
- Analog = continuous; Digital = discrete।
- SNR বেশি সাধারণত ভালো; BER কম সাধারণত ভালো।
- Latency = delay; Throughput = actual successful data rate; Attenuation = signal loss।

### English MCQ Practice
**Q1. Which component converts information into a signal for transmission?**  
A. Receiver  B. Transmitter  C. Channel  D. Antenna tower  
**Answer: B. Transmitter** — তথ্যকে পাঠানোর উপযোগী signal-এ রূপান্তর করে transmitter।

**Q2. Which communication mode allows transmission in both directions, but not at the same time?**  
A. Simplex  B. Half-duplex  C. Full-duplex  D. Broadcast  
**Answer: B. Half-duplex**

**Q3. What does BER measure?**  
A. Signal strength  B. Bit errors relative to transmitted bits  C. Delay only  D. Frequency range  
**Answer: B. Bit errors relative to transmitted bits**

**Q4. Which term refers to the actual rate of successfully delivered data?**  
A. Latency  B. Attenuation  C. Throughput  D. Wavelength  
**Answer: C. Throughput**

---

# 2. Radio Communication Basics

## 2.1 Radio wave কী?

Radio wave হলো electromagnetic wave, যা wireless communication-এ ব্যবহৃত হয়। এটি বাতাস বা vacuum-এর মধ্য দিয়ে electromagnetic energy বহন করতে পারে। Antenna সাধারণত electrical signal-কে electromagnetic wave-এ এবং প্রাপ্ত wave-কে electrical signal-এ রূপান্তরের কাজ করে।

## 2.2 Frequency ও Wavelength-এর সম্পর্ক

মূল সূত্র:

\[
c = f\lambda
\]

সুতরাং,

\[
\lambda = \frac{c}{f}, \qquad f = \frac{c}{\lambda}
\]

এখানে:
- \(c\) = আলোর বেগ, প্রায় \(3 \times 10^8\) m/s (free space-এ)
- \(f\) = frequency, Hz-এ
- \(\lambda\) = wavelength, metre-এ

**মূল নিয়ম:** frequency বাড়লে wavelength কমে; frequency কমলে wavelength বাড়ে।

উদাহরণ: \(f = 100\) MHz হলে,
\[
\lambda = \frac{3 \times 10^8}{100 \times 10^6} = 3\text{ m}
\]

**Unit conversion মনে রাখো:** 1 MHz = \(10^6\) Hz; 1 GHz = \(10^9\) Hz।

## 2.3 Radio propagation-এর ধরন

- **Ground wave:** পৃথিবীর পৃষ্ঠ অনুসরণ করে ছড়ায়; তুলনামূলক low-frequency communication-এ গুরুত্বপূর্ণ।
- **Sky wave:** ionosphere-এর প্রভাবে ফিরে আসতে পারে; HF communication-এ long-distance coverage সম্ভব।
- **Space wave / Line-of-Sight (LOS):** transmitter ও receiver-এর মধ্যে সরাসরি বা প্রায় সরাসরি পথের ওপর নির্ভরশীল; VHF/UHF/microwave ও cellular radio link-এ গুরুত্বপূর্ণ।

**MCQ clue:** “ionosphere” = Sky wave; “follows earth surface” = Ground wave; “direct path / cellular microwave” = Space wave/LOS।

## 2.4 AM, FM ও PM

- **AM (Amplitude Modulation):** carrier-এর amplitude পরিবর্তিত হয়।
- **FM (Frequency Modulation):** carrier-এর frequency পরিবর্তিত হয়।
- **PM (Phase Modulation):** carrier-এর phase পরিবর্তিত হয়।

FM সাধারণত amplitude noise-এর বিরুদ্ধে AM-এর তুলনায় বেশি resistant, তবে performance system design ও noise-এর ধরনেও নির্ভর করে।

## 2.5 Free Space Path Loss (FSPL)

Radio wave দূরত্ব অতিক্রম করলে received power কমে। Ideal free-space model-এ path loss দূরত্ব এবং frequency—দুটির সঙ্গেই বাড়ে।

একটি প্রচলিত সূত্র (d ও f-এর unit অনুযায়ী constant বদলায়):
\[
FSPL(dB)=32.44+20\log_{10}(d_{km})+20\log_{10}(f_{MHz})
\]

এখানে distance km এবং frequency MHz। অন্য unit ব্যবহার করলে constant-ও বদলাতে হবে।

**মনে রাখো:** দূরত্ব দ্বিগুণ হলে free-space path loss প্রায় 6 dB বাড়ে; একই দূরত্বে frequency বাড়লেও FSPL বাড়ে। বাস্তব cellular propagation-এ building, foliage, terrain, reflection ও diffraction-এর প্রভাবও থাকে।

## 2.6 Antenna-এর গুরুত্বপূর্ণ ধারণা

- **Antenna gain:** নির্দিষ্ট direction-এ energy কতটা কেন্দ্রীভূত হচ্ছে, তার পরিমাপ; এটি energy তৈরি করে না।
- **Polarization:** electromagnetic wave-এর electric field-এর orientation।
- **Beamwidth:** antenna pattern-এর প্রধান beam কতটা প্রশস্ত।
- **Omnidirectional antenna:** horizontal plane-এ প্রায় সবদিকে signal ছড়ানোর জন্য ব্যবহৃত হতে পারে।
- **Directional antenna:** নির্দিষ্ট direction-এ বেশি energy কেন্দ্রীভূত করে।

## 2.7 Cellular frequency bands

তোমার মূল নোটে দেওয়া আনুমানিক band:
- **Low band:** 700–900 MHz — সাধারণত coverage ও indoor/longer-range propagation-এ সুবিধা।
- **Mid band:** 1800–2600 MHz — coverage ও capacity-র মধ্যে balance।
- **High band:** 3.5 GHz এবং mmWave — বেশি bandwidth/capacity দিতে পারে, তবে coverage ও penetration challenge থাকতে পারে।

এগুলো illustrative range; country, operator ও allocation অনুযায়ী actual band আলাদা হতে পারে।

### Must Memorize
- \(c=f\lambda\); \(\lambda=c/f\)।
- Frequency ↑ → wavelength ↓।
- Ground wave = earth surface; Sky wave = ionosphere; Space wave = LOS।
- AM changes amplitude; FM changes frequency; PM changes phase।
- FSPL বাড়ে frequency ও distance বাড়লে।
- Antenna gain, polarization, beamwidth radio link-কে প্রভাবিত করে।

### English MCQ Practice
**Q1. If frequency increases while propagation speed remains constant, wavelength will:**  
A. Increase  B. Decrease  C. Remain unchanged  D. Become zero  
**Answer: B. Decrease**

**Q2. Which propagation mode is associated with reflection/refraction by the ionosphere?**  
A. Ground wave  B. Sky wave  C. Space wave  D. Guided wave  
**Answer: B. Sky wave**

**Q3. In FM, which carrier parameter is varied by the information signal?**  
A. Amplitude  B. Frequency  C. Antenna height  D. Wavelength only  
**Answer: B. Frequency**

**Q4. Free Space Path Loss generally increases when:**  
A. Distance increases  B. Frequency increases  C. Both A and B  D. Neither A nor B  
**Answer: C. Both A and B**

---

# 3. Basic Concept of Cellular Networks

## 3.1 Cellular network-এর ধারণা

একটি বড় coverage area-কে ছোট ছোট geographical area বা **cell**-এ ভাগ করে mobile network তৈরি করা হয়। প্রতিটি cell-কে সাধারণত একটি base station বা radio site serve করে। একই frequency অন্য দূরের cell-এ পুনরায় ব্যবহার করা যায়; একে **frequency reuse** বলে। এর ফলে সীমিত spectrum দিয়ে অনেক বেশি user-কে service দেওয়া সম্ভব হয়।

## 3.2 Cell, Cluster ও Frequency Reuse

- **Cell:** নির্দিষ্ট base station/radio site দ্বারা service দেওয়া geographical area।
- **Cluster:** পরিকল্পনার একটি group of cells, যেখানে নির্ধারিত frequency set একবার করে ব্যবহৃত হয়।
- **Cluster size (N):** একটি cluster-এ cell-এর সংখ্যা। প্রচলিত উদাহরণ N = 3, 4, 7, 12।
- **Frequency reuse factor:** সরল মডেলে \(1/N\)।

যদি N = 7 হয়, reuse factor = 1/7। অর্থাৎ একটি frequency set সাতটি cell-এর cluster-এ পুনর্বণ্টিত হয়—এটি simplified planning concept।

**N ছোট হলে:** frequency আরও ঘন ঘন reuse করা যায়, তাই capacity বাড়ার সুযোগ থাকে; কিন্তু একই frequency-র cell কাছাকাছি আসায় co-channel interference বাড়তে পারে।  
**N বড় হলে:** co-channel cell দূরে রাখা সহজ হতে পারে, কিন্তু spectrum reuse কম হওয়ায় capacity-তে trade-off হয়।

## 3.3 Handoff / Handover

Mobile user চলতে থাকলে তার call/data session যেন চলমান থাকে, সে জন্য এক cell/base station থেকে অন্যটিতে connection স্থানান্তর করা হয়। এটিই handoff বা handover।

- **Hard Handoff:** *break-before-make*—পুরোনো link ছাড়ার পরে নতুন link তৈরি হয়।
- **Soft Handoff:** *make-before-break*—পুরোনো link ছাড়ার আগে নতুন link establish হতে পারে; classic CDMA systems-এর সঙ্গে পরিচিত।

মূল নোটে GSM/LTE-কে hard handoff-এর উদাহরণ এবং CDMA-কে soft handoff-এর উদাহরণ হিসেবে দেওয়া হয়েছে। পরীক্ষায় প্রশ্নের framing অনুসরণ করো; handover behavior প্রযুক্তি ও implementation অনুযায়ী আরও জটিল হতে পারে।

## 3.4 Interference-এর ধরন

- **Co-channel interference (CCI):** একই frequency reuse করা cell/transmitter থেকে interference।
- **Adjacent-channel interference (ACI):** কাছাকাছি frequency channel-এর signal থেকে interference; imperfect filtering, receiver selectivity বা power imbalance কারণ হতে পারে।

**Clue:** “same frequency” = co-channel; “neighboring/adjacent frequency” = adjacent-channel।

## 3.5 Sectorization ও Cell Splitting

- **Sectorization:** একটি cell-কে 3 বা 6 sector-এ ভাগ করে directional antenna দিয়ে আলাদা direction serve করা। এতে interference management উন্নত হতে পারে এবং capacity বাড়তে পারে।
- **Cell splitting:** বড় cell-কে ছোট cell-এ ভাগ করে বেশি site ব্যবহার করা। এটি capacity বাড়ায়, তবে site, backhaul, power ও planning-এর প্রয়োজনও বাড়ায়।
- **Hexagonal cell:** বাস্তব radio coverage নিখুঁত hexagon নয়; planning diagram-এ gap/overlap কমিয়ে সহজে area model করার জন্য hexagon ব্যবহার করা হয়।

### Must Memorize
- Frequency reuse = limited spectrum থেকে capacity বাড়ানোর কৌশল।
- Reuse factor = \(1/N\)।
- Smaller N → generally more reuse/capacity, but more co-channel interference risk।
- Hard handoff = break-before-make; Soft handoff = make-before-break।
- CCI = same frequency; ACI = adjacent frequency।
- Sectorization ও cell splitting capacity বাড়াতে সাহায্য করতে পারে।

### English MCQ Practice
**Q1. Why is frequency reuse used in cellular networks?**  
A. To eliminate all noise  B. To increase capacity with limited spectrum  C. To remove antennas  D. To reduce all bandwidth to zero  
**Answer: B. To increase capacity with limited spectrum**

**Q2. If the cluster size is N = 7, the reuse factor is:**  
A. 7  B. 1/3  C. 1/7  D. 7/1  
**Answer: C. 1/7**

**Q3. “Break-before-make” describes:**  
A. Soft handoff  B. Hard handoff  C. Frequency modulation  D. Packet routing  
**Answer: B. Hard handoff**

**Q4. Interference caused by transmitters using the same frequency is called:**  
A. Adjacent-channel interference  B. Co-channel interference  C. Thermal expansion  D. Attenuation  
**Answer: B. Co-channel interference**

---

# 4. Mobile Core and Backhaul Architectures

## 4.1 RAN বনাম Core Network

**RAN (Radio Access Network):** mobile device-কে radio interface দিয়ে network-এর সঙ্গে যুক্ত করে। এতে base station ও radio link থাকে। Technology অনুযায়ী base station-এর নাম হতে পারে:
- **BTS** — প্রচলিত 2G terminology
- **NodeB** — 3G
- **eNodeB / eNB** — 4G LTE
- **gNodeB / gNB** — 5G NR

**Core Network:** authentication, mobility management, session handling, subscriber data, policy/charging এবং external network-এ connectivity-এর মতো কাজ করে।

সহজ analogy: RAN হলো mobile-এর network-এ ঢোকার radio access অংশ; Core হলো subscriber/session ও network service পরিচালনার কেন্দ্রীয় অংশ।

## 4.2 Backhaul কী?

**Backhaul** হলো base station/RAN site থেকে core বা aggregation network-এর দিকে traffic বহন করার connection। মাধ্যম:
- Optical fibre
- Microwave radio link
- Satellite (বিশেষ ক্ষেত্রে)

Backhaul-এ যথেষ্ট capacity, reliability এবং প্রয়োজন অনুযায়ী low latency গুরুত্বপূর্ণ। Radio interface ভালো হলেও backhaul congested হলে user experience খারাপ হতে পারে।

## 4.3 Core network-এর evolution

| Generation | Core ধারণা | গুরুত্বপূর্ণ node (মূল নোট অনুযায়ী) |
|---|---|---|
| 2G/3G | Circuit + Packet domains | MSC, SGSN, GGSN, HLR |
| 4G LTE | Evolved Packet Core (EPC) | MME, SGW, PGW, HSS, PCRF |
| 5G | 5G Core (5GC) | AMF, SMF, UPF, AUSF, UDM |

### Must Memorize
- RAN = radio access/base station side।
- Core = authentication, mobility, session, charging/interconnect।
- Backhaul = base station থেকে core/aggregation-এর দিকে transport।
- 2G/3G: MSC, SGSN, GGSN, HLR; 4G EPC: MME, SGW, PGW, HSS, PCRF; 5GC: AMF, SMF, UPF, AUSF, UDM।

### English MCQ Practice
**Q1. Which network part provides the radio connection between a mobile device and the operator network?**  
A. RAN  B. HLR only  C. Billing office  D. DNS only  
**Answer: A. RAN**

**Q2. What is backhaul in a mobile network?**  
A. A phone battery  B. Connection carrying traffic from a base station toward the core/aggregation network  C. SIM PIN  D. An antenna polarization  
**Answer: B**

**Q3. Which is a 5G base station term?**  
A. BTS only  B. NodeB only  C. gNodeB  D. HLR  
**Answer: C. gNodeB**

---

# 5. Packet-Switched Mobile Networks

## 5.1 Circuit switching

Circuit switching-এ communication-এর জন্য একটি dedicated path/resource connection-এর সময় ধরে বরাদ্দ থাকতে পারে। Traditional telephone network-এর voice call এর classic উদাহরণ। কথা না বললেও dedicated resource কিছু সময় ধরে reserved থাকতে পারে, ফলে bursty data-এর জন্য এটি কম efficient হতে পারে।

## 5.2 Packet switching

Packet switching-এ data ছোট ছোট packet-এ ভাগ হয়ে network resource share করে চলতে পারে। বিভিন্ন user-এর packet একই infrastructure ব্যবহার করে। Routing, congestion ও queueing-এর কারণে delay পরিবর্তিত হতে পারে। Internet, LTE এবং 5G data service packet-based।

| Feature | Circuit Switching | Packet Switching |
|---|---|---|
| Resource/path | Dedicated circuit/resource | Shared network resources |
| Efficiency for bursty data | সাধারণত কম | সাধারণত বেশি |
| Delay | Circuit establish হওয়ার পরে তুলনামূলক predictable হতে পারে | Variable হতে পারে |
| Example | Traditional circuit-switched voice | Internet, LTE/5G data |

## 5.3 GPRS, LTE, VoLTE, VoNR

- **GPRS:** GSM network-এ packet data capability যোগ করে; একে প্রায়ই 2.5G বলা হয়।
- **LTE / EPC:** all-IP packet core architecture ব্যবহার করে।
- **VoLTE:** LTE network-এ IMS ব্যবহার করে voice service।
- **VoNR:** 5G NR/5G network-এ voice service; 5G voice architecture ও operator deployment-এর ওপর নির্ভর করে।

**সতর্কতা:** “LTE is packet-switched” বলা হলেও voice service-এর জন্য IMS/VoLTE architecture ব্যবহৃত হয়; packet network-এর ওপর voice service চলতে পারে।

### Must Memorize
- Circuit switching = dedicated circuit/resource।
- Packet switching = packets + shared resources।
- GPRS = GSM packet data, often called 2.5G।
- LTE/5G = IP packet-based core/data networks।
- VoLTE = Voice over LTE; VoNR = Voice over New Radio/5G NR।

### English MCQ Practice
**Q1. Which switching technique divides data into packets and shares network resources?**  
A. Circuit switching  B. Packet switching  C. Simplex switching  D. Frequency reuse  
**Answer: B. Packet switching**

**Q2. GPRS is commonly associated with which description?**  
A. Packet data added to GSM  B. A 5G core node  C. An antenna type  D. A battery technology  
**Answer: A. Packet data added to GSM**

**Q3. VoLTE voice service uses which architecture?**  
A. IMS  B. EIR only  C. Ground wave  D. Rectifier  
**Answer: A. IMS**

---

# 6. Network Function Virtualization (NFV)

## 6.1 NFV কী?

আগে telecom network-এর অনেক function dedicated proprietary hardware appliance-এ চলত। **NFV (Network Function Virtualization)** এসব network function-কে software হিসেবে চালানোর ধারণা—সাধারণ server/virtualized infrastructure-এ function deploy করা যায়।

**VNF (Virtual Network Function):** software-এ বাস্তবায়িত network function, যেমন virtualized gateway বা control function। আধুনিক cloud-native network-এ containerized/cloud-native function-ও থাকতে পারে; তবে MCQ-তে NFV-এর classic ধারণা হলো network function software হিসেবে standard compute infrastructure-এ চালানো।

## 6.2 NFV-এর সুবিধা

- **Lower CapEx:** dedicated hardware কেনার প্রয়োজন কমতে পারে।
- **Lower OpEx:** operation/maintenance সহজ ও স্বয়ংক্রিয় করা যেতে পারে।
- **Faster deployment:** software update/deployment তুলনামূলক দ্রুত।
- **Scalability:** demand অনুযায়ী resource বাড়ানো/কমানো সহজ।
- **Vendor flexibility:** hardware/software-এর মধ্যে dependency কমানোর সুযোগ।

এগুলো সম্ভাব্য সুবিধা; বাস্তবে savings architecture, licensing, skill ও operations-এর ওপর নির্ভর করে।

## 6.3 NFV বনাম SDN

- **NFV:** network function-কে hardware appliance থেকে software-based implementation-এ নিয়ে আসা।
- **SDN (Software-Defined Networking):** network control plane ও data/forwarding plane-কে আলাদা করে programmable control-এর সুযোগ দেওয়া।

একটি সহজ memory trick:
- NFV প্রশ্নে **“network functions on software/standard servers”** খুঁজবে।
- SDN প্রশ্নে **“separation of control plane and data plane”** খুঁজবে।

### Must Memorize
- NFV = Network Function Virtualization।
- VNF = Virtual Network Function।
- NFV-এর লক্ষ্য software-based network functions এবং flexible deployment।
- SDN = control plane ও data plane separation/programmatic control।
- NFV এবং SDN related হলেও একই জিনিস নয়।

### English MCQ Practice
**Q1. What is the main idea of NFV?**  
A. Replace all IP addresses with phone numbers  B. Implement network functions as software on standard infrastructure  C. Increase antenna height only  D. Eliminate the core network  
**Answer: B**

**Q2. Which concept separates the control plane from the data plane?**  
A. SDN  B. AM  C. HLR  D. FSPL  
**Answer: A. SDN**

**Q3. What does VNF stand for?**  
A. Virtual Network Function  B. Variable Noise Frequency  C. Voice Network Frame  D. Virtual Node Fibre  
**Answer: A. Virtual Network Function**

---

# 7. Cloud RAN (C-RAN) & Open RAN (O-RAN)

## 7.1 C-RAN কী?

**C-RAN (Cloud Radio Access Network)**-এ baseband processing একাধিক site থেকে central location বা pooled compute environment-এ আনা হতে পারে। Traditional architecture-এ site-এ থাকা baseband unit (BBU) বা processing function central pool-এ একত্র করা হয়; radio unit/remote radio head antenna-site-এর কাছাকাছি থাকে।

সম্ভাব্য সুবিধা:
- **Resource pooling:** বিভিন্ন cell-এর processing resource ভাগ করে ব্যবহার করা।
- **Coordination:** CoMP-এর মতো coordination technique-এর সুযোগ।
- **Energy/operational efficiency:** resource utilization উন্নত হতে পারে।

কিন্তু centralization-এর জন্য low-latency, high-capacity fronthaul এবং timing/synchronization প্রয়োজন হতে পারে।

## 7.2 O-RAN কী?

**O-RAN (Open Radio Access Network)** হলো RAN architecture-এ open, interoperable interfaces এবং multi-vendor integration-কে উৎসাহিত করার উদ্যোগ/architecture। লক্ষ্য হলো একটি vendor-এর proprietary ecosystem-এ আটকে থাকার ঝুঁকি কমানো এবং network automation/intelligent control-এর সুযোগ বাড়ানো।

Functional blocks:
- **RU (Radio Unit):** radio frequency transmission/reception-এর কাছাকাছি কাজ।
- **DU (Distributed Unit):** কিছু lower-layer/baseband processing।
- **CU (Central Unit):** higher-layer processing/control functions-এর অংশ।

Open interface-এর উদাহরণ:
- **Open Fronthaul:** RU ও DU-র মধ্যে গুরুত্বপূর্ণ interface।
- **O1:** management/operations-related interface।
- **A1:** Near-RT RIC ও Non-RT RIC-এর মধ্যে policy/optimization-related interface।
- **E2:** Near-RT RIC ও RAN nodes-এর মধ্যে near-real-time control/telemetry-related interface।

Interface-এর নির্দিষ্ট function architecture/version অনুযায়ী বিস্তারিত হতে পারে; MCQ-তে সাধারণত নাম ও broad purpose বেশি আসে।

## 7.3 C-RAN বনাম O-RAN

- **C-RAN:** মূল emphasis baseband processing centralization/resource pooling।
- **O-RAN:** মূল emphasis open interfaces, interoperability, multi-vendor ecosystem ও intelligent control।
- দুটো ধারণা পরস্পরবিরোধী নয়; একটি network-এ centralization এবং open interfaces—দুটিই থাকতে পারে।

### Must Memorize
- C-RAN = centralized/pooled baseband processing।
- O-RAN = open interfaces + multi-vendor interoperability + intelligent control।
- RU = radio; DU = distributed processing; CU = central processing।
- Open Fronthaul, O1, A1, E2 = O-RAN-সম্পর্কিত গুরুত্বপূর্ণ interface নাম।

### English MCQ Practice
**Q1. What is the primary idea of C-RAN?**  
A. Centralizing/pooling baseband processing  B. Replacing SIM cards  C. Circuit switching only  D. Eliminating radio units  
**Answer: A**

**Q2. O-RAN primarily promotes:**  
A. Closed single-vendor interfaces only  B. Open interfaces and multi-vendor interoperability  C. Analog-only voice  D. No network management  
**Answer: B**

**Q3. Which block is most directly associated with radio transmission and reception?**  
A. RU  B. CU  C. HSS  D. MME  
**Answer: A. RU**

---

# 8. 5G Network Slicing

## 8.1 Network slicing কী?

**Network slicing** হলো একই physical network infrastructure-এর ওপর একাধিক logical network তৈরি করা, যেখানে প্রতিটি slice নির্দিষ্ট service-এর প্রয়োজন অনুযায়ী configure/optimize করা যায়। Slice-এর resource, policy, performance requirement এবং management আলাদা হতে পারে।

উদাহরণ:
- high-speed video/broadband user-এর জন্য একটি slice
- ultra-low-latency industrial control-এর জন্য আরেকটি slice
- অনেক sensor/IoT device-এর জন্য আরেকটি slice

Network slicing মানে প্রত্যেক slice-এর জন্য আলাদা physical tower বা সম্পূর্ণ আলাদা cable network লাগবেই—এমন নয়। Logical separation একই shared infrastructure-এর ওপর হতে পারে।

## 8.2 5G-এর তিনটি প্রধান use case

| Acronym | Full form | Main requirement | মনে রাখার clue |
|---|---|---|---|
| **eMBB** | enhanced Mobile Broadband | High data rate / broadband capacity | Faster internet |
| **URLLC** | Ultra-Reliable Low-Latency Communication | Very low latency + high reliability | Critical control |
| **mMTC** | massive Machine-Type Communications | Huge number of connected devices | Massive IoT |

URLLC-র latency target অনেক আলোচনায় প্রায় 1 ms হিসেবে উল্লেখ করা হয়; এটি service/air-interface target-এর সঙ্গে সম্পর্কিত, end-to-end বাস্তব latency সব deployment-এ নিশ্চিতভাবে 1 ms হবে—এমন নয়।

## 8.3 S-NSSAI, SST ও SD

**S-NSSAI = Single Network Slice Selection Assistance Information** — 5G-তে network slice শনাক্ত/নির্বাচনের সঙ্গে সম্পর্কিত identifier।

এতে থাকে:
- **SST (Slice/Service Type):** slice-এর service type/category বোঝায়।
- **SD (Slice Differentiator):** একই SST-এর অধীনে slice আলাদা করতে optional differentiator হিসেবে ব্যবহৃত হতে পারে।

### Must Memorize
- Network slicing = same physical infrastructure-এ multiple logical networks।
- eMBB = high data rate; URLLC = low latency/high reliability; mMTC = massive devices।
- S-NSSAI identifies/assists selection of a network slice।
- S-NSSAI = SST + optional SD।

### English MCQ Practice
**Q1. Which 5G use case targets massive numbers of IoT-type devices?**  
A. eMBB  B. URLLC  C. mMTC  D. AM  
**Answer: C. mMTC**

**Q2. Which use case emphasizes high data rates and broadband capacity?**  
A. eMBB  B. mMTC  C. HLR  D. CUPS  
**Answer: A. eMBB**

**Q3. S-NSSAI is associated with:**  
A. Network slice identification/selection  B. Battery charging  C. Antenna polarization  D. Frequency-to-wavelength conversion  
**Answer: A**

---

# 9. Packet Switching and Call Control

## 9.1 Signaling ও session control

Packet network-এ শুধু user data পাঠালেই হয় না; call/session শুরু, পরিবর্তন ও শেষ করার জন্য control message বা signaling দরকার। যেমন voice call করার সময় network-কে জানাতে হয় কে কাকে call করছে, session parameters কী, এবং কখন call শেষ হবে।

## 9.2 SIP

**SIP (Session Initiation Protocol)** হলো IP-based multimedia session establish, modify ও terminate করার জন্য ব্যবহৃত signaling protocol। VoLTE/IMS architecture-এ SIP গুরুত্বপূর্ণ।

SIP-এর কাজ:
- Session establishment
- Session modification
- Session termination

SIP নিজে সাধারণত voice audio payload বহন করার protocol নয়; media stream আলাদা media transport mechanism-এ চলতে পারে। MCQ-তে SIP-কে **session signaling/control** হিসেবে চেনো।

## 9.3 Diameter ও GTP

- **Diameter:** telecom IP network-এ authentication, authorization, subscriber/policy/charging-related signaling-এর জন্য ব্যবহৃত protocol family।
- **GTP (GPRS Tunnelling Protocol):** mobile packet network-এ user data/control information tunnel করার জন্য ব্যবহৃত হয়; নির্দিষ্ট GTP variant অনুযায়ী role আলাদা।

### Must Memorize
- SIP = session establishment, modification, termination।
- VoLTE/IMS-এ SIP গুরুত্বপূর্ণ।
- Diameter = authentication/authorization/charging/policy-related signaling।
- GTP = mobile packet network-এ tunneling।

### English MCQ Practice
**Q1. Which protocol is commonly used for session control in IMS/VoLTE?**  
A. SIP  B. AM  C. FSPL  D. IMEI  
**Answer: A. SIP**

**Q2. SIP is primarily used to:**  
A. Manage session establishment, modification and termination  B. Generate DC power  C. Identify handset hardware only  D. Measure wavelength  
**Answer: A**

**Q3. Which protocol is associated with tunnelling in mobile packet networks?**  
A. GTP  B. FM  C. HLR  D. BER  
**Answer: A. GTP**

---

# 10. Evolution from Circuit Switching to Packet Core (EPC & 5GC)

## 10.1 Generation অনুযায়ী পরিবর্তন

- **2G:** traditional circuit-switched voice ছিল প্রধান; GSM-এ পরে GPRS packet data যোগ হয়।
- **2.5G/3G:** circuit voice এবং packet data—দুটিই ছিল।
- **4G LTE:** EPC হলো packet core; voice service সাধারণত IMS/VoLTE দিয়ে দেওয়া হয়।
- **5G:** 5G Core (5GC) service-based architecture (SBA) ব্যবহার করে; control ও user plane আলাদা করার flexible architecture-ও গুরুত্বপূর্ণ।

## 10.2 EPC-এর প্রধান node

| Node | Full form | মূল কাজের সহজ ধারণা |
|---|---|---|
| **MME** | Mobility Management Entity | Control plane; mobility, attach/signaling ও security-related control |
| **SGW** | Serving Gateway | LTE user-plane traffic-এর gateway/forwarding, mobility anchor-এর ভূমিকা |
| **PGW** | Packet Data Network Gateway | External packet data network-এ connectivity, IP address/policy-related function |
| **HSS** | Home Subscriber Server | Subscriber profile ও authentication-related data |
| **PCRF** | Policy and Charging Rules Function | Policy ও charging rule control |

**MCQ shortcut:** MME = control plane; SGW/PGW = gateways/user traffic path; HSS = subscriber data; PCRF = policy/charging rules।

## 10.3 5GC-এর প্রধান node

| Node | Full form | মূল কাজের সহজ ধারণা |
|---|---|---|
| **AMF** | Access and Mobility Management Function | Access ও mobility management |
| **SMF** | Session Management Function | PDU session management, UPF control এবং IP address/session-related functions |
| **UPF** | User Plane Function | User data packet forwarding/processing |
| **AUSF** | Authentication Server Function | Authentication-related function |
| **UDM** | Unified Data Management | Subscriber data management |

**সবচেয়ে গুরুত্বপূর্ণ পার্থক্য:**
- AMF → access/mobility
- SMF → session management
- UPF → user-plane data forwarding
- AUSF → authentication
- UDM → subscriber data

## 10.4 CUPS

**CUPS = Control and User Plane Separation.** Control-plane function ও user-plane function আলাদা করে deploy/scale/location অনুযায়ী পরিচালনা করার architecture principle। এর ফলে user-plane function (যেমন UPF) user-এর কাছাকাছি edge location-এ রাখা যেতে পারে, যা কিছু application-এ latency কমাতে সাহায্য করে।

### Must Memorize
- EPC nodes: MME, SGW, PGW, HSS, PCRF।
- 5GC nodes: AMF, SMF, UPF, AUSF, UDM।
- MME = mobility/control; AMF = access & mobility; SMF = session; UPF = user plane; AUSF = authentication; UDM = subscriber data।
- CUPS = control/user plane separation।
- Edge UPF user data-কে user-এর কাছাকাছি process/forward করে latency কমাতে সাহায্য করতে পারে।

### English MCQ Practice
**Q1. Which EPC node primarily handles control-plane mobility management?**  
A. MME  B. PGW  C. UPF  D. RU  
**Answer: A. MME**

**Q2. Which 5GC function manages PDU sessions?**  
A. AMF  B. SMF  C. AUSF  D. EIR  
**Answer: B. SMF**

**Q3. Which 5GC function handles user-plane packet forwarding?**  
A. UDM  B. AUSF  C. UPF  D. AMF  
**Answer: C. UPF**

**Q4. What does CUPS stand for?**  
A. Central User Packet Service  B. Control and User Plane Separation  C. Cellular Utility Power System  D. Core User Privacy Scheme  
**Answer: B**

---

# 11. Call Flow, Session Management, and Mobility Control

## 11.1 UE, attach/registration

- **UE (User Equipment):** mobile handset বা network-এ যুক্ত user device।
- **Attach / Registration:** device network-এ নিজেকে register করে, পরিচয়/authentication যাচাই হয় এবং service পাওয়ার প্রয়োজনীয় control procedure সম্পন্ন হয়।
- LTE-তে attach procedure এবং 5G-তে registration procedure-এর নাম/ধাপ আলাদা হতে পারে।
- Data service-এর জন্য IP/session/bearer বা PDU session-related setup প্রয়োজন হয়।

Basic flow-কে সহজভাবে মনে রাখো: **Device requests access → network authenticates/authorizes → mobility/session context তৈরি হয় → data service available হয়।** বাস্তব protocol flow এর চেয়ে অনেক বেশি বিস্তারিত।

## 11.2 Tracking Area Update (TAU) / Registration Update

Mobile network সবসময় handset-এর exact location প্রতি মুহূর্তে track করে না; বরং location area/tracking area-এর মতো অঞ্চল ব্যবহার করে। UE নতুন Tracking Area-তে গেলে বা নির্দিষ্ট condition হলে location registration update করতে পারে।

- **TAU:** LTE/EPS terminology।
- **Registration Update:** 5G registration/mobility procedure-এর সঙ্গে সম্পর্কিত terminology।

## 11.3 Handover

Connected device চলার সময় radio connection অন্য cell-এ স্থানান্তর হতে পারে।
- **X2-based handover:** LTE-তে eNodeB-গুলোর মধ্যে X2 interface দিয়ে coordination হতে পারে।
- **S1-based handover:** LTE-তে S1/core path দিয়ে coordination হতে পারে; MME-এর ভূমিকা থাকতে পারে।

MCQ-তে X2 = eNodeB-to-eNodeB interface; S1 = eNodeB-to-core (যেমন MME) interface—এই basic distinction মনে রাখো।

## 11.4 Session Management

- **4G:** bearer establishment/modification/release-এর ভাষা বেশি ব্যবহৃত হয়।
- **5G:** PDU session establishment/modification/release।
- Session হলো user-এর data connectivity এবং সংশ্লিষ্ট policy/QoS/context-এর সঙ্গে সম্পর্কিত।

## 11.5 Important identifiers

| Identifier | Full form | কী বোঝায় |
|---|---|---|
| **IMSI** | International Mobile Subscriber Identity | Subscriber-এর permanent identity |
| **GUTI** | Globally Unique Temporary Identifier | Subscriber privacy রক্ষায় temporary identity |
| **TMSI** | Temporary Mobile Subscriber Identity | Temporary subscriber identity, বিশেষত 2G/3G context-এ |
| **IMEI** | International Mobile Equipment Identity | Device/handset identity |
| **MSISDN** | Mobile Station ISDN Number | সাধারণভাবে mobile phone number |

**IMSI বনাম IMEI:** IMSI = subscriber/SIM identity; IMEI = device identity।  
**MSISDN বনাম IMSI:** MSISDN = dial করা phone number; IMSI = network-এর subscriber identity।  
**GUTI/TMSI:** temporary identity; privacy ও signaling-এ permanent identifier বারবার প্রকাশ কমাতে সাহায্য করে।

### Must Memorize
- UE = User Equipment।
- LTE: Attach, TAU, Bearer; 5G: Registration, PDU Session।
- X2 = LTE eNodeB-to-eNodeB; S1 = eNodeB-to-core path।
- IMSI = subscriber; IMEI = device; MSISDN = phone number; GUTI/TMSI = temporary identity।

### English MCQ Practice
**Q1. Which identifier identifies the mobile equipment rather than the subscriber?**  
A. IMSI  B. IMEI  C. MSISDN  D. GUTI  
**Answer: B. IMEI**

**Q2. Which identifier is commonly associated with the subscriber's phone number?**  
A. MSISDN  B. IMEI  C. BER  D. SST  
**Answer: A. MSISDN**

**Q3. In LTE, which interface can support direct handover coordination between eNodeBs?**  
A. X2  B. O1  C. A1  D. Open Fronthaul  
**Answer: A. X2**

---

# 12. IMS Architecture for Voice and Multimedia

## 12.1 IMS কী?

**IMS = IP Multimedia Subsystem.** এটি IP network-এর ওপর voice, video, messaging ও multimedia service দেওয়ার জন্য standardized architecture। VoLTE voice service IMS-এর ওপর নির্ভর করে।

## 12.2 CSCF-এর তিনটি গুরুত্বপূর্ণ node

**CSCF = Call Session Control Function.**

- **P-CSCF (Proxy-CSCF):** UE-এর IMS signaling-এর প্রথম contact point হিসেবে কাজ করে।
- **I-CSCF (Interrogating-CSCF):** subscriber-এর জন্য উপযুক্ত serving node খুঁজে বের করার/route করার কাজে যুক্ত।
- **S-CSCF (Serving-CSCF):** মূল session control এবং service triggering/execution-এর গুরুত্বপূর্ণ node।

Memory trick:
- **P = Proxy / first point**
- **I = Interrogating / find the serving function**
- **S = Serving / main session control**

## 12.3 Other IMS elements

- **HSS:** subscriber profile ও related data।
- **AS (Application Server):** supplementary/application service logic।
- **MRF (Media Resource Function):** conferencing, announcements, media processing/resource-এর মতো কাজ করতে পারে।

## 12.4 VoLTE ও QCI

**VoLTE = Voice over LTE.** LTE radio/core packet network-এ IMS ব্যবহার করে voice service দেয়। তোমার মূল নোটে voice-এর জন্য **QCI = 1** dedicated bearer-এর কথা আছে; LTE QoS mapping-এ QCI 1 conversational voice-এর সঙ্গে পরিচিত এবং সাধারণত GBR bearer হিসেবে ব্যবহৃত হয়।

**সতর্কতা:** QCI হলো LTE QoS Class Identifier। 5G-তে QoS flow-এর জন্য 5QI terminology ব্যবহৃত হয়। MCQ-তে LTE/VoLTE এবং QCI=1 থাকলে এই mapping মনে রাখবে।

### Must Memorize
- IMS = IP Multimedia Subsystem।
- P-CSCF = UE-এর first contact point।
- I-CSCF = appropriate S-CSCF খুঁজে/route করতে সাহায্য করে।
- S-CSCF = main session control/service execution।
- VoLTE uses IMS; LTE voice-এর classic QCI=1 = conversational voice GBR bearer।

### English MCQ Practice
**Q1. What is the full form of IMS?**  
A. IP Multimedia Subsystem  B. Internet Mobility Signal  C. Integrated Mobile Spectrum  D. International Modulation Service  
**Answer: A**

**Q2. Which CSCF is typically the first IMS contact point for the UE?**  
A. S-CSCF  B. I-CSCF  C. P-CSCF  D. HSS  
**Answer: C. P-CSCF**

**Q3. Which CSCF is the main serving session-control function?**  
A. S-CSCF  B. P-CSCF  C. EIR  D. UPF  
**Answer: A. S-CSCF**

**Q4. In LTE/VoLTE, QCI 1 is commonly associated with:**  
A. Conversational voice  B. Battery backup  C. Antenna gain  D. Subscriber phone number  
**Answer: A. Conversational voice**

---

# 13. Mobile User Data Management & Authentication

## 13.1 Authentication কেন প্রয়োজন?

Network নিশ্চিত করতে চায় যে subscriber/device বৈধ কি না এবং তাকে service দেওয়া যাবে কি না। SIM ও operator-এর authentication system-এর মধ্যে secret/key material এবং authentication procedure থাকে।

## 13.2 Ki ও AKA

- **Ki:** SIM/USIM এবং operator-এর authentication system-এ সংরক্ষিত shared secret key-এর classic term।
- **AKA (Authentication and Key Agreement):** challenge-response ভিত্তিক authentication ও key establishment procedure।
- 3G/4G/5G-তে mutual authentication support গুরুত্বপূর্ণ—অর্থাৎ network ও subscriber side একে অপরকে authenticate করার ব্যবস্থা থাকে।

Key material নিরাপদে সংরক্ষিত থাকে; সাধারণত ব্যবহারকারী সরাসরি Ki দেখতে বা জানেন না। Authentication-এর নির্দিষ্ট message ও key derivation generation অনুযায়ী আলাদা হতে পারে।

## 13.3 Identity comparison

| Identity | কাকে identify করে? | মূল কথা |
|---|---|---|
| **IMSI** | Subscriber | Permanent subscriber identity |
| **MSISDN** | Reachable phone number | Dialing number |
| **IMEI** | Device | Handset/equipment identity |
| **GUTI** | Temporary subscriber identity | Privacy support |
| **TMSI** | Temporary subscriber identity | Temporary identifier |

### Must Memorize
- AKA = Authentication and Key Agreement।
- Ki = shared secret key material-এর classic term।
- IMSI subscriber; IMEI device; MSISDN phone number; GUTI temporary ID।
- Authentication identity যাচাই করে; authorization নির্ধারণ করে কোন service/resource ব্যবহার করা যাবে।

### English MCQ Practice
**Q1. What is the main purpose of AKA in mobile networks?**  
A. Authentication and key agreement  B. Increasing antenna beamwidth  C. Rectifying AC power  D. Allocating cluster size  
**Answer: A**

**Q2. Which identity is associated with the mobile subscriber rather than the handset hardware?**  
A. IMEI  B. IMSI  C. Antenna ID  D. BER  
**Answer: B. IMSI**

**Q3. Which identity is a mobile phone number in the traditional numbering sense?**  
A. MSISDN  B. Ki  C. UPF  D. SST  
**Answer: A. MSISDN**

---

# 14. HLR, HSS, and Registry Systems

## 14.1 HLR, VLR, HSS, EIR, UDM

| System | Generation/context | Main function |
|---|---|---|
| **HLR** | 2G/3G | Home Location Register; subscriber profile এবং location-related information |
| **VLR** | 2G/3G circuit-switched domain | Visitor Location Register; visiting subscribers-এর temporary data |
| **HSS** | 4G/LTE, IMS-related context | Home Subscriber Server; subscriber profile ও authentication-related functions/data |
| **EIR** | Multiple generations | Equipment Identity Register; IMEI status/blacklist checking |
| **UDM** | 5G | Unified Data Management; 5G subscriber data management |

## 14.2 HLR বনাম VLR

- **HLR:** subscriber-এর home network-এর permanent/subscription-related data এবং location-related information রাখে।
- **VLR:** নির্দিষ্ট serving area-তে থাকা visitor subscriber-এর temporary data রাখে, যাতে প্রতিটি কাজের জন্য home register-এ যেতে না হয়।

## 14.3 HLR বনাম HSS বনাম UDM

- **HLR:** classic 2G/3G subscriber database।
- **HSS:** LTE/IMS architecture-এ subscriber profile/authentication-related function-এর গুরুত্বপূর্ণ database/server।
- **UDM:** 5G core-এ subscriber data management function।

মূল নোটে HSS-কে “HLR + AuC functions” মিলিয়ে বলা হয়েছে—এটি high-level memory aid। বাস্তব network architecture-এ authentication, subscriber data এবং related functions আলাদা component/function-এও থাকতে পারে।

## 14.4 EIR কী করে?

EIR device-এর IMEI status যাচাই করতে পারে। Blacklisted/stolen/unauthorized equipment চিহ্নিত করার জন্য equipment identity registry ব্যবহৃত হতে পারে। এটি subscriber-এর phone number database নয়।

### Must Memorize
- HLR = 2G/3G home subscriber/location-related register।
- VLR = visitor area-র temporary subscriber data।
- HSS = 4G/LTE subscriber server।
- UDM = 5G subscriber data management।
- EIR = equipment/IMEI checking।

### English MCQ Practice
**Q1. Which system checks equipment identity such as IMEI against equipment status lists?**  
A. EIR  B. HSS  C. MME  D. PCRF  
**Answer: A. EIR**

**Q2. Which database is classically associated with 2G/3G home subscriber information?**  
A. HLR  B. UPF  C. DU  D. RU  
**Answer: A. HLR**

**Q3. Which function is associated with subscriber data management in 5G?**  
A. UDM  B. GGSN only  C. P-CSCF  D. Rectifier  
**Answer: A. UDM**

---

# 15. Power System for Telecom

## 15.1 BTS/site power system

Telecom base station-কে utility power না থাকলেও নির্ভরযোগ্যভাবে চালু রাখতে backup power system প্রয়োজন। Telecom site-এ প্রচলিত DC power architecture হলো **-48 V DC**।

প্রধান component:
- **Rectifier:** AC input-কে DC-তে রূপান্তর করে এবং DC bus/battery charging system-এ power দেয়।
- **Battery bank:** mains power failure হলে backup দেয়।
- **Diesel generator:** দীর্ঘ outage-এ power supply চালাতে পারে।
- **Solar system:** site design অনুযায়ী supplementary/renewable energy source হতে পারে।
- **Power distribution/protection:** breaker, fuse, grounding ইত্যাদির মাধ্যমে নিরাপদ distribution ও protection।

## 15.2 কেন -48 V DC?

- Telecom industry-তে দীর্ঘদিনের established standard।
- DC power system battery backup-এর সঙ্গে সহজে integrate করা যায়।
- Negative-ground -48 V architecture corrosion/electrochemical effects কমানোর ঐতিহাসিক ও engineering সুবিধার সঙ্গে সম্পর্কিত।
- Safety এবং equipment compatibility-ও system design-এর বিবেচ্য বিষয়।

**সতর্কতা:** “-48 V is always harmless” ভুল ধারণা। Voltage তুলনামূলক কম হলেও high-current battery system short circuit, fire ও injury-এর ঝুঁকি তৈরি করতে পারে। কাজের সময় safety procedure মানতে হয়।

## 15.3 Battery autonomy

**Battery autonomy** হলো external power না থাকলে battery কত সময় load চালাতে পারবে। তোমার মূল নোটে সাধারণভাবে 3–8 hours উল্লেখ আছে; বাস্তব সময় নির্ভর করে battery capacity, load, battery health, temperature ও site criticality-এর ওপর।

সরল ধারণা:
\[
\text{Autonomy (hours)} \approx \frac{\text{Usable battery energy (Wh)}}{\text{Load power (W)}}
\]
এটি idealized estimate; conversion loss, discharge limit ও aging থাকলে বাস্তব autonomy কমে।

### Must Memorize
- Telecom site standard DC = -48 V DC।
- Rectifier = AC to DC।
- Battery bank = short/medium-term backup।
- Diesel generator = longer outage backup।
- Battery autonomy = backup duration; মূল নোটে typical range 3–8 hours।

### English MCQ Practice
**Q1. What is the common DC supply voltage used at telecom sites?**  
A. +5 V AC  B. -48 V DC  C. 230 V DC only  D. 1000 V DC  
**Answer: B. -48 V DC**

**Q2. Which component converts AC power to DC?**  
A. Rectifier  B. Antenna  C. HSS  D. MME  
**Answer: A. Rectifier**

**Q3. What does battery autonomy mean?**  
A. Antenna gain  B. Backup operating duration  C. Frequency range  D. Subscriber identity  
**Answer: B. Backup operating duration**

---

# 16. Scripting for Simulation, Modeling and Configuration

## 16.1 Telecom planning ও simulation tools

মূল নোটে উল্লেখ করা tool:
- **Atoll, Planet:** radio/network planning tools।
- **MATLAB:** numerical computation, algorithm development ও simulation।
- **NS-3:** network simulation framework।

Tool-এর version ও project অনুযায়ী ব্যবহার বদলাতে পারে; MCQ-তে tool-এর broad category মনে রাখাই মূল লক্ষ্য।

## 16.2 Automation ও scripting

- **Python:** automation, data analysis, report generation, API/configuration workflow।
- **Bash:** Linux/Unix shell automation।
- **Perl:** text processing ও scripting-এর জন্য ঐতিহাসিকভাবে ব্যবহৃত।

Scripting দিয়ে করা যায়:
1. Bulk parameter change
2. Configuration consistency check
3. Repetitive task automation
4. Report generation
5. Health monitoring/alerting
6. Drive-test data analysis

## 16.3 Drive-test tools ও data

- **Actix, Nemo, TEMS:** drive-test/log analysis ও mobile network performance investigation-এর সঙ্গে পরিচিত tool।
- **Python Pandas:** structured/tabular data analysis, filtering, grouping ও reporting।

### Must Memorize
- Atoll/Planet = radio planning।
- MATLAB/NS-3 = simulation/modeling contexts।
- Python/Bash/Perl = automation/scripting।
- Actix/Nemo/TEMS = drive-test analysis tools।
- Scripting = bulk change, consistency check, reports, health monitoring।

### English MCQ Practice
**Q1. Which language is widely used for telecom automation and data analysis?**  
A. Python  B. HTML only  C. CSS only  D. SQL cannot be used anywhere  
**Answer: A. Python**

**Q2. Which is a network simulation framework?**  
A. NS-3  B. MSISDN  C. HLR  D. QCI  
**Answer: A. NS-3**

**Q3. What is a key benefit of scripting network configuration tasks?**  
A. Repetitive tasks can be automated consistently  B. It removes all RF interference  C. It replaces every base station  D. It changes frequency of light  
**Answer: A**

---

# 17. Telecom Industry of Bangladesh

## 17.1 Mobile operators

তোমার মূল নোটে বাংলাদেশের চারটি mobile operator হিসেবে উল্লেখ আছে:
- **Grameenphone (GP)**
- **Robi Axiata**
- **Banglalink**
- **Teletalk** — state-owned operator

মূল নোটে আনুমানিক subscriber figure দেওয়া ছিল: GP ~86+ million, Robi ~58+ million, Banglalink ~37+ million, Teletalk ~6–7 million। Subscriber সংখ্যা সময়ের সঙ্গে পরিবর্তিত হয়; এগুলোকে স্থায়ী fact ধরে মুখস্থ না করে পরীক্ষার প্রশ্নে reference date দেওয়া থাকলে সেটি অনুসরণ করবে।

## 17.2 BTRC

**BTRC = Bangladesh Telecommunication Regulatory Commission.**

মূল নোট অনুযায়ী regulator-এর গুরুত্বপূর্ণ কাজ:
- Telecom licence প্রদান/নিয়ন্ত্রণ
- Spectrum allocation/management
- Quality of Service পর্যবেক্ষণ
- Tariff guideline/regulatory oversight

Spectrum auction বা assignment-এর নির্দিষ্ট প্রক্রিয়া band ও regulatory decision অনুযায়ী হতে পারে।

## 17.3 Operator prefix বিষয়ে সতর্কতা

মূল নোটে কিছু prefix example দেওয়া হয়েছে, কিন্তু operator prefix/numbering তথ্য পরিবর্তন হতে পারে এবং **Mobile Number Portability (MNP)** থাকলে prefix দেখে বর্তমান operator নিশ্চিত করা যায় না। পরীক্ষায় prefix-ভিত্তিক প্রশ্ন এলে প্রশ্নের reference year/source ও option carefully দেখবে; বাস্তবে শুধু prefix দিয়ে current operator নিশ্চিত করা নিরাপদ নয়।

## 17.4 4G/5G তথ্য

মূল নোটে 4G widely deployed এবং 5G limited/trial/commercial stage-এর কথা বলা হয়েছে। Network rollout ও commercial status সময়ের সঙ্গে বদলায়, তাই current affairs MCQ হলে সর্বশেষ official announcement বা পরীক্ষার নির্দিষ্ট তথ্য ব্যবহার করবে।

### Must Memorize
- মূল নোটে 4 mobile operators: Grameenphone, Robi, Banglalink, Teletalk।
- BTRC = Bangladesh Telecommunication Regulatory Commission।
- BTRC = regulator; operator নয়।
- Subscriber count, prefix ও 5G status পরিবর্তনশীল; পরীক্ষার reference date মিলিয়ে নাও।

### English MCQ Practice
**Q1. What is the full form of BTRC?**  
A. Bangladesh Telecommunication Regulatory Commission  B. Broadband Technology Research Centre  C. Base Transceiver Radio Committee  D. Bangladesh Telecom Routing Core  
**Answer: A**

**Q2. Which of the following is identified as the state-owned mobile operator in the supplied notes?**  
A. Teletalk  B. Grameenphone  C. Robi  D. Banglalink  
**Answer: A. Teletalk**

**Q3. Which organization regulates telecommunications in Bangladesh?**  
A. BTRC  B. MME  C. HSS  D. O-RAN  
**Answer: A. BTRC**

---

# 18. Communication Skill Related Topics

## 18.1 Technical communication কেন দরকার?

Technical professional-কে শুধু সমস্যা solve করলেই হয় না; অন্য engineer, manager, customer বা non-technical audience-কে সমস্যাটি, impact এবং solution বুঝিয়ে বলতে হয়। Audience অনুযায়ী language ও detail বদলাতে হয়।

## 18.2 Technical report/presentation-এর structure

1. **Problem statement:** সমস্যা কী?
2. **Impact:** service, user, cost বা performance-এর ওপর কী প্রভাব পড়েছে?
3. **Root cause analysis:** সমস্যার মূল কারণ কীভাবে শনাক্ত হয়েছে?
4. **Solution options:** কী কী সমাধান সম্ভব?
5. **Recommendation & next steps:** কোন সমাধান বেছে নেওয়া উচিত এবং পরবর্তী কাজ কী?

## 18.3 Good communication-এর বৈশিষ্ট্য

- **Audience-aware:** technical audience-কে প্রয়োজনীয় detail; management-কে impact, risk, cost ও decision।
- **Data-driven:** measurement, trend, evidence ব্যবহার করা।
- **Clear visuals:** chart/table/diagram দিয়ে জটিল বিষয় সহজ করা।
- **Concise:** অপ্রয়োজনীয় কথা বাদ।
- **Action-oriented:** কে কী করবে, কখন করবে—পরিষ্কার রাখা।

### Must Memorize
- Report flow = Problem → Impact → Root cause → Options → Recommendation/Next steps।
- Technical communication audience অনুযায়ী সাজাতে হয়।
- Clear, concise, evidence-based ও action-oriented communication ভালো practice।

### English MCQ Practice
**Q1. What should a good technical report normally identify first?**  
A. Problem statement  B. Final invoice only  C. Unrelated history  D. Personal opinion without evidence  
**Answer: A. Problem statement**

**Q2. When presenting to management, which information is especially useful?**  
A. Impact, risks, costs and recommended actions  B. Only unexplained acronyms  C. Every raw log line without summary  D. No conclusion  
**Answer: A**

**Q3. Root cause analysis is intended to identify:**  
A. The underlying cause of a problem  B. The phone number of every user  C. The antenna colour  D. The report font only  
**Answer: A**

---

# 19. Aptitude Related (Technical Aptitude)

এখানে formula, unit এবং ছোট calculation অনুশীলন করো। MCQ-তে ভুলের বড় কারণ হলো unit conversion না করা অথবা কোন সংখ্যা কোন জায়গায় বসবে তা গুলিয়ে ফেলা।

## 19.1 Frequency ↔ Wavelength

\[
\lambda = \frac{c}{f}, \quad c \approx 3 \times 10^8 \text{ m/s}
\]

Example: 150 MHz signal-এর wavelength:
\[
\lambda = \frac{3 \times 10^8}{150 \times 10^6}=2\text{ m}
\]

**মনে রাখো:** MHz-কে Hz-এ convert করতে \(10^6\) দিয়ে গুণ করো; GHz-কে Hz-এ convert করতে \(10^9\) দিয়ে গুণ করো।

## 19.2 Cluster size ও channel calculation

মূল নোটের simplified formula:
\[
\text{Total channels in system} = \text{Channels per cell} \times \text{Cluster size (N)}
\]
এটি ওই নোটের stated planning calculation। প্রশ্নে যদি “channels per cell” ও “cluster size” দেওয়া থাকে, তাদের গুণ করো। তবে বাস্তব frequency planning-এ channel allocation, reuse pattern, sectorization ও available spectrum-এর বিস্তারিত থাকতে পারে।

Example: channels per cell = 12 এবং N = 7 হলে:
\[
12 \times 7 = 84
\]
**Answer: 84 channels** (প্রশ্নে দেওয়া simplified model অনুযায়ী)।

## 19.3 Reuse factor

\[
\text{Reuse factor} = \frac{1}{N}
\]

Example: N = 4 → reuse factor = 1/4 = 0.25 = 25% (fractional representation)।

## 19.4 Link budget

Simplified received power:
\[
P_r(dBm) \approx P_t(dBm) + G_t(dB) + G_r(dB) - L_{path}(dB) - L_{other}(dB)
\]

যেখানে:
- \(P_t\) = transmit power
- \(G_t\) = transmit antenna gain
- \(G_r\) = receive antenna gain
- \(L_{path}\) = path loss
- \(L_{other}\) = cable, connector, penetration ইত্যাদির other loss

Example: Tx power = 30 dBm, Tx gain = 2 dB, Rx gain = 1 dB, path loss = 100 dB, other losses = 3 dB:
\[
P_r = 30 + 2 + 1 - 100 - 3 = -70\text{ dBm}
\]
সুতরাং received power ≈ **-70 dBm**।

**Unit rule:** dBm হলো absolute power level; dB হলো gain/loss বা ratio। dBm ও dB যোগ-বিয়োগ link budget-এ করা যায়, কারণ dB terms power level-এ gain/loss যোগ/বিয়োগ করে।

## 19.5 Path loss estimation

প্রশ্নে FSPL formula দিলে unit ঠিক রাখো:
\[
FSPL(dB)=32.44+20\log_{10}(d_{km})+20\log_{10}(f_{MHz})
\]

Example: distance = 1 km, frequency = 1000 MHz:
\[
FSPL = 32.44 + 20\log_{10}(1) + 20\log_{10}(1000)
\]
\[
=32.44+0+60=92.44\text{ dB}
\]

এই formula ideal free-space model-এর জন্য; বাস্তব environment-এর extra loss আলাদা হতে পারে।

## 19.6 Erlang traffic — basic idea

**Erlang** হলো telecom traffic intensity-এর unit। Traffic intensity-এর সরল ধারণা:
\[
A = \lambda h
\]
যেখানে \(\lambda\) = গড়ে প্রতি unit time-এ call arrival rate, এবং \(h\) = average call holding time—দুটির time unit consistent হতে হবে।

যদি এক ঘণ্টায় 30টি call আসে এবং প্রতিটির average duration 2 মিনিট হয়:
- মোট call duration = 30 × 2 = 60 মিনিট
- এক ঘণ্টায় 60 মিনিট busy traffic = 1 Erlang

এটি offered traffic-এর basic calculation; blocking probability/capacity নির্ণয়ে Erlang B/C-এর মতো model প্রয়োজন হতে পারে।

## 19.7 Capacity estimation

Simplified question-এ:
\[
\text{Capacity} \propto \text{channels} \times \text{sectors} \times \text{carriers}
\]
কোনো MCQ-তে সবকিছু linear/simple assumption ধরে দেওয়া হলে factor গুণ করে তুলনা করা যায়। বাস্তব capacity spectral efficiency, MIMO, bandwidth, modulation, interference ও load-এর ওপরও নির্ভর করে।

### Must Memorize Formula Sheet
1. \(c=f\lambda\)
2. \(\lambda=c/f\)
3. Reuse factor \(=1/N\)
4. Total channels (simplified) \(=\) channels per cell × N
5. Received power (dBm) ≈ Tx power + antenna gains − path loss − other losses
6. \(FSPL(dB)=32.44+20\log_{10}(d_{km})+20\log_{10}(f_{MHz})\)
7. Traffic intensity \(A=\lambda h\)

### English MCQ Practice
**Q1. A radio signal has a frequency of 100 MHz. Using \(c=3\times10^8\) m/s, its wavelength is:**  
A. 0.3 m  B. 3 m  C. 30 m  D. 300 m  
**Answer: B. 3 m** — \(3\times10^8/(100\times10^6)=3\) m।

**Q2. If cluster size N = 4, the frequency reuse factor is:**  
A. 4  B. 1/4  C. 1/2  D. 0  
**Answer: B. 1/4**

**Q3. Given Tx power = 20 dBm, total antenna gain = 5 dB, path loss = 100 dB, and other losses = 2 dB, received power is approximately:**  
A. -77 dBm  B. 77 dBm  C. -83 dBm  D. 127 dBm  
**Answer: A. -77 dBm** — \(20+5-100-2=-77\) dBm।

**Q4. Which unit is commonly used for traffic intensity?**  
A. Erlang  B. Hertz only  C. Metre  D. Volt  
**Answer: A. Erlang**

**Q5. In the free-space path-loss model, increasing frequency while keeping distance fixed generally makes FSPL:**  
A. Increase  B. Decrease  C. Become zero  D. Unchanged in all cases  
**Answer: A. Increase**

---

# Final Quick Revision — 19 Topic-এর এক নজরে

| Topic | English keyword দেখলে মনে করবে |
|---|---|
| 1. Telecom Basics | Transmitter–Channel–Receiver; simplex/half/full duplex; SNR/BER/latency |
| 2. Radio Basics | \(c=f\lambda\); ground/sky/space wave; AM/FM/PM; FSPL |
| 3. Cellular Networks | Frequency reuse; cluster N; handoff; CCI/ACI; sectorization |
| 4. Core & Backhaul | RAN vs Core; BTS/eNB/gNB; backhaul media |
| 5. Packet Networks | Circuit vs packet switching; GPRS; VoLTE/VoNR |
| 6. NFV | Network function as software; VNF; SDN vs NFV |
| 7. C-RAN/O-RAN | Centralized baseband vs open interfaces/multi-vendor |
| 8. Network Slicing | eMBB, URLLC, mMTC; S-NSSAI = SST + SD |
| 9. Signaling | SIP = session control; Diameter = auth/charging; GTP = tunneling |
| 10. EPC/5GC | MME/SGW/PGW/HSS/PCRF; AMF/SMF/UPF/AUSF/UDM; CUPS |
| 11. Call Flow/Mobility | Attach/registration; TAU; X2/S1; IMSI/IMEI/MSISDN/GUTI |
| 12. IMS | P-CSCF/I-CSCF/S-CSCF; VoLTE; QCI 1 |
| 13. Authentication | Ki; AKA; subscriber vs device identity |
| 14. Registries | HLR/VLR/HSS/UDM/EIR |
| 15. Power | -48 V DC; rectifier; battery; generator; autonomy |
| 16. Scripting | Atoll/Planet; MATLAB/NS-3; Python/Bash; Actix/Nemo/TEMS |
| 17. Bangladesh Telecom | GP/Robi/Banglalink/Teletalk; BTRC |
| 18. Communication Skills | Problem → Impact → Root cause → Options → Recommendation |
| 19. Aptitude | Wavelength, reuse, link budget, FSPL, Erlang, capacity |

---

# Last-minute MCQ Memory Tricks

- **P-CSCF = Proxy = first point**
- **S-CSCF = Serving = main session control**
- **MME = LTE control/mobility**
- **AMF = 5G access and mobility**
- **SMF = session management**
- **UPF = user plane / user packets**
- **AUSF = authentication**
- **UDM = subscriber data**
- **HSS/HLR = subscriber information; EIR = equipment/IMEI**
- **SIP = session control; GTP = tunneling**
- **NFV = software network functions; SDN = control/data plane separation**
- **C-RAN = centralized baseband; O-RAN = open interfaces**
- **eMBB = broadband; URLLC = reliable + low latency; mMTC = massive devices**
- **Simplex = one-way; Half-duplex = two-way, one at a time; Full-duplex = simultaneous**
- **Co-channel = same frequency; Adjacent-channel = nearby frequencies**
- **Hard handoff = break-before-make; Soft handoff = make-before-break**
- **Rectifier = AC to DC; telecom DC = -48 V**
- **IMSI = subscriber; IMEI = device; MSISDN = phone number; GUTI/TMSI = temporary ID**

---

# Mixed English MCQ Test (All Topics)

**1. Which ratio compares signal power to noise power?**  
A. BER  B. SNR  C. MSISDN  D. SST  
**Answer: B. SNR**

**2. Which wave propagation mode uses the ionosphere for long-distance propagation?**  
A. Ground wave  B. Sky wave  C. Space wave  D. Fibre wave  
**Answer: B. Sky wave**

**3. Which technique improves cellular capacity by reusing frequencies in different cells?**  
A. Frequency reuse  B. Rectification  C. Authentication  D. Attenuation  
**Answer: A. Frequency reuse**

**4. Which technology is associated with packet data in GSM and is often called 2.5G?**  
A. GPRS  B. VoNR  C. O-RAN  D. UDM  
**Answer: A. GPRS**

**5. Which term describes implementing network functions in software on general-purpose infrastructure?**  
A. NFV  B. AM  C. HLR  D. FSPL  
**Answer: A. NFV**

**6. Which 5G use case is most associated with massive numbers of connected sensors/devices?**  
A. eMBB  B. mMTC  C. URLLC  D. CUPS  
**Answer: B. mMTC**

**7. Which protocol is used for session establishment and termination in IMS?**  
A. SIP  B. GTP only  C. FM  D. EIR  
**Answer: A. SIP**

**8. Which 5GC function manages access and mobility?**  
A. AMF  B. SMF  C. UPF  D. UDM  
**Answer: A. AMF**

**9. Which identity identifies the handset equipment?**  
A. IMSI  B. IMEI  C. MSISDN  D. GUTI  
**Answer: B. IMEI**

**10. Which IMS node is the first contact point for the UE?**  
A. P-CSCF  B. I-CSCF  C. S-CSCF  D. PCRF  
**Answer: A. P-CSCF**

**11. Which telecom component converts AC to DC?**  
A. Rectifier  B. Battery bank  C. Antenna  D. MME  
**Answer: A. Rectifier**

**12. Which organization regulates telecommunications in Bangladesh?**  
A. BTRC  B. HSS  C. 3GPP only  D. MME  
**Answer: A. BTRC**

**13. What is the reuse factor for a cluster size of 7?**  
A. 7  B. 1/7  C. 1/4  D. 14  
**Answer: B. 1/7**

**14. Which term means delay in data transmission?**  
A. Throughput  B. Latency  C. Bandwidth  D. Gain  
**Answer: B. Latency**

**15. Which architecture concept permits control-plane and user-plane functions to be separated?**  
A. CUPS  B. AM  C. TMSI  D. ACI  
**Answer: A. CUPS**

**16. Which interface is associated with LTE handover coordination directly between eNodeBs?**  
A. X2  B. O1  C. A1  D. E2  
**Answer: A. X2**

**17. Which identifier is associated with a subscriber's telephone number?**  
A. MSISDN  B. IMEI  C. Ki  D. UPF  
**Answer: A. MSISDN**

**18. Which option best describes O-RAN?**  
A. Open interfaces and multi-vendor RAN  B. Dedicated battery backup  C. Analog modulation  D. Subscriber database  
**Answer: A**

**19. Which metric represents the fraction of bits received incorrectly?**  
A. BER  B. SNR  C. FSPL  D. QCI  
**Answer: A. BER**

**20. In the simplified link budget, path loss is:**  
A. Added to received power  B. Subtracted from transmitted power plus gains  C. Always zero  D. Same as frequency  
**Answer: B**

---

## শেষ কথা

এই নোট পড়ার সময় শুধু full form মুখস্থ না করে প্রতিটি acronym-এর **কাজ**, কাছাকাছি ধারণা থেকে **পার্থক্য**, এবং প্রশ্নে থাকা **keyword** চিনে নাও। প্রতিটি English MCQ-তে আগে প্রশ্নটি কোন topic-এর তা শনাক্ত করো, তারপর উপরের comparison/table/formula থেকে উত্তর বের করো। সবচেয়ে ভালো প্রস্তুতির জন্য প্রথমে ১৯টি topic পড়ো, দ্বিতীয়বার শুধু “Must Memorize” অংশ পড়ো, এবং শেষে mixed MCQ-গুলো উত্তর না দেখে solve করো।
