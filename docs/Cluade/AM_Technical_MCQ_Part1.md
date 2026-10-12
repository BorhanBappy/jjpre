# সহকারী ব্যবস্থাপক (কারিগরি) – MCQ ব্যাংক (Part 1)

> **নোট:** এটি Part 1। সিলেবাসের সব টপিক থেকে প্রশ্ন আছে। পরবর্তী Part-এ প্রতিটি টপিকের প্রশ্ন বাড়ানো হবে।
> কিছু তথ্য (বিশেষ করে বাংলাদেশ টেলিকম অংশের তারিখ/সংখ্যা) পরীক্ষার আগে সর্বশেষ সূত্র থেকে মিলিয়ে নিন।

---

## টপিক ১: Telecom Basics

**১।** টেলিকম নেটওয়ার্কে Traffic Intensity মাপার একক কোনটি?
ক) Hertz  খ) Erlang  গ) Decibel  ঘ) Baud
**উত্তর: খ) Erlang**
**ব্যাখ্যা:** Erlang হলো টেলিকম ট্রাফিকের একক। এক ঘণ্টায় একটি চ্যানেল সম্পূর্ণ ব্যস্ত থাকলে ট্রাফিক ১ Erlang। Hertz ফ্রিকোয়েন্সির, dB অনুপাতের এবং Baud সিম্বল রেটের একক।

**২।** ঘণ্টায় ৩০টি কল এবং প্রতি কলের গড় সময় ১২০ সেকেন্ড হলে ট্রাফিক কত?
ক) ০.৫ Erlang  খ) ১ Erlang  গ) ২ Erlang  ঘ) ৩০ Erlang
**উত্তর: খ) ১ Erlang**
**ব্যাখ্যা:** Traffic = (কল সংখ্যা × গড় সময়) / ৩৬০০ = (৩০ × ১২০)/৩৬০০ = ১ Erlang।

**৩।** ভয়েস সিগন্যাল (৪ kHz) ডিজিটাল করতে Nyquist অনুযায়ী Sampling rate কত?
ক) 4000 sample/s  খ) 8000 sample/s  গ) 16000 sample/s  ঘ) 64000 sample/s
**উত্তর: খ) 8000 sample/s**
**ব্যাখ্যা:** Nyquist theorem অনুযায়ী fs ≥ 2 × fmax = 2 × 4000 = 8000।

**৪।** PCM-এ ৮ বিট কোডিং ও ৮০০০ sample/s হলে একটি ভয়েস চ্যানেলের bit rate কত?
ক) 8 kbps  খ) 32 kbps  গ) 64 kbps  ঘ) 128 kbps
**উত্তর: গ) 64 kbps**
**ব্যাখ্যা:** ৮ বিট × ৮০০০ = ৬৪,০০০ bps = ৬৪ kbps। এটিই DS0 চ্যানেল।

**৫।** E1 লিংকের data rate এবং timeslot সংখ্যা কত?
ক) 1.544 Mbps, 24  খ) 2.048 Mbps, 32  গ) 2.048 Mbps, 30  ঘ) 8.448 Mbps, 128
**উত্তর: খ) 2.048 Mbps, 32**
**ব্যাখ্যা:** E1-এ ৩২ timeslot × ৬৪ kbps = ২.০৪৮ Mbps। এর মধ্যে ৩০টি ভয়েস/ডেটার জন্য, TS0 সিঙ্ক্রোনাইজেশন ও TS16 সিগন্যালিংয়ের জন্য। T1 হলো ১.৫৪৪ Mbps (২৪ চ্যানেল, উত্তর আমেরিকা)।

**৬।** ১০০ mW পাওয়ার dBm-এ কত?
ক) 10 dBm  খ) 20 dBm  গ) 30 dBm  ঘ) 100 dBm
**উত্তর: খ) 20 dBm**
**ব্যাখ্যা:** dBm = 10 log₁₀(P/1 mW) = 10 log₁₀(100) = 20।

**৭।** পাওয়ার দ্বিগুণ হলে প্রায় কত dB লাভ হয়?
ক) 1 dB  খ) 3 dB  গ) 6 dB  ঘ) 10 dB
**উত্তর: খ) 3 dB**
**ব্যাখ্যা:** 10 log₁₀(2) ≈ 3.01 dB। ভোল্টেজ দ্বিগুণ হলে ২০ log₁₀(2) ≈ 6 dB।

**৮।** Shannon Capacity সূত্র কোনটি?
ক) C = B log₂(1 + S/N)  খ) C = 2B log₂ M  গ) C = B × N  ঘ) C = S/N
**উত্তর: ক)**
**ব্যাখ্যা:** Shannon-Hartley theorem অনুযায়ী noisy চ্যানেলে সর্বোচ্চ তাত্ত্বিক ক্যাপাসিটি C = B log₂(1+SNR)। খ) হলো Nyquist-এর noiseless ক্ষেত্রের সূত্র।

---

## টপিক ২: Radio Communication Basics

**১।** ৯০০ MHz সিগন্যালের তরঙ্গদৈর্ঘ্য (λ) প্রায় কত?
ক) 0.33 m  খ) 3.33 m  গ) 33 cm এর কম  ঘ) 1 m
**উত্তর: ক) 0.33 m**
**ব্যাখ্যা:** λ = c/f = (3×10⁸)/(900×10⁶) = 0.333 m।

**২।** Free Space Path Loss-এ দূরত্ব দ্বিগুণ করলে loss কত dB বাড়ে?
ক) 3 dB  খ) 6 dB  গ) 9 dB  ঘ) 12 dB
**উত্তর: খ) 6 dB**
**ব্যাখ্যা:** FSPL ∝ 20 log₁₀(d)। d দ্বিগুণ হলে ২০ log₁₀(2) ≈ ৬ dB। ফ্রিকোয়েন্সি দ্বিগুণ করলেও ৬ dB বাড়ে।

**৩।** dBi কিসের সাপেক্ষে অ্যান্টেনা গেইন মাপে?
ক) Dipole  খ) Isotropic radiator  গ) Yagi  ঘ) Parabolic dish
**উত্তর: খ) Isotropic radiator**
**ব্যাখ্যা:** dBi মানে isotropic অ্যান্টেনার তুলনায় গেইন। dBd মানে half-wave dipole-এর তুলনায়। dBi = dBd + 2.15।

**৪।** QPSK-তে প্রতি সিম্বলে কত বিট বহন হয়?
ক) 1  খ) 2  গ) 4  ঘ) 6
**উত্তর: খ) 2**
**ব্যাখ্যা:** QPSK-তে ৪টি ফেজ স্টেট, তাই log₂4 = ২ বিট/সিম্বল। 16QAM = ৪, 64QAM = ৬, 256QAM = ৮ বিট।

**৫।** Line-of-sight না থাকলে ফেডিংয়ের কোন মডেল প্রযোজ্য?
ক) Rician  খ) Rayleigh  গ) Gaussian  ঘ) Poisson
**উত্তর: খ) Rayleigh**
**ব্যাখ্যা:** NLOS পরিবেশে multipath-এর কারণে Rayleigh fading হয়। LOS উপাদান থাকলে Rician fading।

**৬।** OFDM-এর প্রধান সুবিধা কোনটি?
ক) Multipath/ISI প্রতিরোধ  খ) Power বেশি লাগে  গ) শুধু analog-এ কাজ করে  ঘ) Bandwidth কমায় না
**উত্তর: ক)**
**ব্যাখ্যা:** OFDM উচ্চ-গতির ডেটাকে অনেক ধীর সাবক্যারিয়ারে ভাগ করে এবং Cyclic Prefix ব্যবহার করে ISI কমায়। LTE downlink ও 5G NR-এ ব্যবহৃত।

---

## টপিক ৩: Basic Concept of Cellular Networks

**১।** Frequency Reuse-এর মূল উদ্দেশ্য কী?
ক) Power বাড়ানো  খ) সীমিত spectrum দিয়ে বেশি capacity পাওয়া  গ) Tower কমানো  ঘ) Delay কমানো
**উত্তর: খ)**
**ব্যাখ্যা:** একই ফ্রিকোয়েন্সি যথেষ্ট দূরের ভিন্ন সেলে পুনর্ব্যবহার করে মোট capacity বাড়ানো হয়।

**২।** Cluster size N = i² + ij + j² সূত্রে i=2, j=1 হলে N কত?
ক) 3  খ) 4  গ) 7  ঘ) 12
**উত্তর: গ) 7**
**ব্যাখ্যা:** N = 4 + 2 + 1 = 7। এটি সবচেয়ে প্রচলিত 7-cell reuse pattern।

**৩।** Co-channel Interference কমানোর উপায় কোনটি?
ক) Cluster size কমানো  খ) D/R অনুপাত বাড়ানো  গ) Tx power দ্বিগুণ করা  ঘ) Sector কমানো
**উত্তর: খ)**
**ব্যাখ্যা:** Reuse distance D এবং cell radius R-এর অনুপাত (D/R = √3N) বাড়ালে co-channel সেল দূরে সরে যায়, ফলে interference কমে। তবে cluster size বাড়ে বলে capacity কমে।

**৪।** Cell Splitting-এর ফল কী?
ক) Capacity বাড়ে  খ) Capacity কমে  গ) Coverage বাড়ে  ঘ) Handover বন্ধ হয়
**উত্তর: ক)**
**ব্যাখ্যা:** বড় সেলকে ছোট সেলে ভাগ করলে প্রতি এলাকায় channel reuse বাড়ে, তাই capacity বাড়ে। তবে handover সংখ্যাও বাড়ে।

**৫।** Handover (Handoff) কখন ঘটে?
ক) কল শেষ হলে  খ) ব্যবহারকারী এক সেল থেকে অন্য সেলে গেলে কল চালু রেখে  গ) ফোন বন্ধ করলে  ঘ) SIM বদলালে
**উত্তর: খ)**
**ব্যাখ্যা:** Handover হলো চলমান কল/সেশন ছিন্ন না করে এক সেল (বা চ্যানেল) থেকে অন্যটিতে স্থানান্তর। Hard handover-এ আগে সংযোগ ছিন্ন হয়, soft handover-এ আগে নতুন সংযোগ হয় (WCDMA)।

**৬।** Sectorization-এ ৩-sector সাইটে প্রতি sector-এর beamwidth প্রায় কত?
ক) 60°  খ) 90°  গ) 120°  ঘ) 360°
**উত্তর: গ) 120°**
**ব্যাখ্যা:** ৩৬০° ÷ ৩ = ১২০°। Sectorization co-channel interference কমিয়ে capacity বাড়ায়।

---

## টপিক ৪: Mobile Core and Backhaul Architectures

**১।** GSM-এ MSC-র প্রধান কাজ কী?
ক) Radio resource ম্যানেজ  খ) কল সুইচিং ও মোবিলিটি ম্যানেজমেন্ট  গ) Billing  ঘ) SMS ডিলিভারি শুধু
**উত্তর: খ)**
**ব্যাখ্যা:** MSC (Mobile Switching Centre) circuit-switched domain-এর কেন্দ্র, যা কল সেটআপ, রাউটিং ও মোবিলিটি সাপোর্ট করে।

**২।** LTE-তে eNB ও EPC-র মধ্যকার ইন্টারফেস কোনটি?
ক) X2  খ) S1  গ) Uu  ঘ) S6a
**উত্তর: খ) S1**
**ব্যাখ্যা:** S1-MME (eNB↔MME, control plane) ও S1-U (eNB↔S-GW, user plane)। X2 হলো eNB↔eNB। Uu হলো UE↔eNB। S6a হলো MME↔HSS।

**৩।** 5G NR-এ gNB থেকে AMF-এ control plane ইন্টারফেস কোনটি?
ক) N1  খ) N2  গ) N3  ঘ) N6
**উত্তর: খ) N2**
**ব্যাখ্যা:** N2 = gNB↔AMF (control), N3 = gNB↔UPF (user plane), N1 = UE↔AMF (NAS), N6 = UPF↔Data Network।

**৪।** সর্বোচ্চ ক্যাপাসিটি ও সবচেয়ে কম latency-র ব্যাকহল মাধ্যম কোনটি?
ক) Microwave  খ) Satellite  গ) Optical Fiber  ঘ) Copper (xDSL)
**উত্তর: গ) Optical Fiber**
**ব্যাখ্যা:** ফাইবার বহু Gbps থেকে Tbps পর্যন্ত ক্যাপাসিটি দিতে পারে, attenuation কম, interference নেই। 5G-তে ফাইবার ব্যাকহল আদর্শ।

**৫।** Backhaul বলতে বোঝায়—
ক) UE থেকে BTS সংযোগ  খ) Cell site/RAN থেকে core network সংযোগ  গ) Core থেকে Internet  ঘ) বিদ্যুৎ সংযোগ
**উত্তর: খ)**
**ব্যাখ্যা:** Backhaul হলো base station/RAN এবং core নেটওয়ার্কের মধ্যবর্তী transport। RRH↔BBU সংযোগকে বলে Fronthaul।

**৬।** LTE EPC-তে user plane ট্রাফিক রাউটিংয়ের মূল নোড কোনটি?
ক) MME  খ) HSS  গ) S-GW/P-GW  ঘ) PCRF
**উত্তর: গ) S-GW/P-GW**
**ব্যাখ্যা:** MME কেবল control plane (signaling, mobility)। S-GW লোকাল mobility anchor এবং P-GW বাহ্যিক PDN-এর গেটওয়ে (IP allocation সহ)।

---

## টপিক ৫: Packet-Switched Mobile Networks

**১।** GPRS-এ SGSN ও GGSN-এর মধ্যে ইন্টারফেস কোনটি?
ক) Gn  খ) Gb  গ) Gi  ঘ) Iu
**উত্তর: ক) Gn**
**ব্যাখ্যা:** Gn = SGSN↔GGSN, Gb = BSS(PCU)↔SGSN, Gi = GGSN↔বাহ্যিক PDN, Iu = 3G-তে RNC↔core।

**২।** GTP-এর পূর্ণরূপ কী?
ক) General Transport Protocol  খ) GPRS Tunnelling Protocol  গ) Global Telecom Protocol  ঘ) Gateway Transfer Process
**উত্তর: খ) GPRS Tunnelling Protocol**
**ব্যাখ্যা:** GTP-U ইউজার ডেটা এবং GTP-C কন্ট্রোল মেসেজ টানেলে বহন করে। LTE ও 5G (N3, N9)-এও ব্যবহৃত।

**৩।** LTE নেটওয়ার্ক কোন ধরনের?
ক) শুধু circuit-switched  খ) All-IP packet-switched  গ) Analog  ঘ) Hybrid CS+PS
**উত্তর: খ) All-IP packet-switched**
**ব্যাখ্যা:** LTE-তে CS domain নেই, ভয়েসসহ সব সার্ভিস IP-তে চলে (VoLTE/IMS)। ভয়েসের বিকল্প হিসেবে CSFB ব্যবহৃত হতো।

**৪।** APN (Access Point Name) কী নির্দেশ করে?
ক) টাওয়ার ID  খ) UE যে বাহ্যিক নেটওয়ার্ক/সার্ভিসে সংযুক্ত হবে তার নাম  গ) IMEI  ঘ) Phone number
**উত্তর: খ)**
**ব্যাখ্যা:** APN দিয়ে নেটওয়ার্ক জানে ডিভাইস কোন PDN (যেমন internet, IMS) ব্যবহার করবে। 5G-তে সমতুল্য ধারণা DNN।

**৫।** PDP Context এর LTE-সমতুল্য ধারণা কোনটি?
ক) EPS Bearer  খ) RRC Connection  গ) Location Area  ঘ) Paging
**উত্তর: ক) EPS Bearer**
**ব্যাখ্যা:** GPRS/UMTS-এর PDP context-এর স্থলে LTE-তে EPS bearer এবং 5G-তে PDU Session ও QoS Flow।

**৬।** কোনটি 3G packet data উন্নয়ন প্রযুক্তি?
ক) EDGE  খ) HSPA  গ) GSM  ঘ) AMPS
**উত্তর: খ) HSPA**
**ব্যাখ্যা:** HSDPA/HSUPA (HSPA) UMTS/WCDMA-র উন্নত সংস্করণ। EDGE হলো 2.5G/2.75G GSM উন্নয়ন।

---

## টপিক ৬: Network Function Virtualization (NFV)

**১।** NFV-এর মূল ধারণা কী?
ক) নেটওয়ার্ক ফাংশনকে dedicated হার্ডওয়্যার থেকে software-এ আলাদা করে সাধারণ সার্ভারে চালানো  খ) শুধু রাউটার বদলানো  গ) Fiber বসানো  ঘ) Antenna পরিবর্তন
**উত্তর: ক)**
**ব্যাখ্যা:** NFV-তে firewall, EPC, IMS ইত্যাদি VNF হিসেবে COTS হার্ডওয়্যারে VM/container-এ চলে।

**২।** ETSI NFV আর্কিটেকচারের তিনটি প্রধান অংশ কোনটি?
ক) VNF, NFVI, MANO  খ) HSS, MME, PCRF  গ) RRH, BBU, CU  ঘ) AMF, SMF, UPF
**উত্তর: ক)**
**ব্যাখ্যা:** VNF = সফটওয়্যার ফাংশন, NFVI = compute/storage/network ও virtualization layer, MANO = Management and Orchestration।

**৩।** MANO-র অন্তর্গত উপাদান কোনটি?
ক) NFVO, VNFM, VIM  খ) OLT, ONU, ODN  গ) eNB, gNB, RRU  ঘ) STP, SSP, SCP
**উত্তর: ক)**
**ব্যাখ্যা:** NFVO সার্ভিস ও রিসোর্স অর্কেস্ট্রেশন, VNFM VNF লাইফসাইকেল, VIM ইনফ্রাস্ট্রাকচার রিসোর্স ম্যানেজ করে।

**৪।** NFV-এর অন্যতম সুবিধা কোনটি?
ক) CAPEX/OPEX হ্রাস ও দ্রুত সার্ভিস ডিপ্লয়মেন্ট  খ) Hardware lock-in বৃদ্ধি  গ) Scalability কমা  ঘ) Latency শূন্য
**উত্তর: ক)**
**ব্যাখ্যা:** Vendor-specific box-এর বদলে সাধারণ হার্ডওয়্যার ব্যবহারে খরচ কমে, এবং software-ভিত্তিক scaling সহজ হয়।

**৫।** Hypervisor-এর কাজ কী?
ক) Physical রিসোর্সকে একাধিক VM-এ ভাগ করা  খ) রেডিও সিগন্যাল মডুলেট করা  গ) IP address বরাদ্দ  ঘ) Billing
**উত্তর: ক)**
**ব্যাখ্যা:** KVM, VMware ESXi ইত্যাদি hypervisor হার্ডওয়্যারের উপর একাধিক VM চালাতে দেয়। Container-ভিত্তিক (Docker/Kubernetes) ডিপ্লয়মেন্ট হালকা বিকল্প (CNF)।

**৬।** SDN ও NFV-এর সম্পর্ক কোনটি?
ক) একে অপরের পরিপূরক  খ) একই জিনিস  গ) সম্পূর্ণ বিরোধী  ঘ) শুধু 2G-তে ব্যবহৃত
**উত্তর: ক)**
**ব্যাখ্যা:** SDN control plane ও data plane আলাদা করে, আর NFV ফাংশনকে ভার্চুয়ালাইজ করে। দুটি একসাথে নেটওয়ার্ক প্রোগ্রামেবল করে। (প্রোটোকল উদাহরণ: OpenFlow)

---

## টপিক ৭: Cloud RAN (C-RAN) এবং Open RAN (O-RAN)

**১।** C-RAN-এ BBU কোথায় থাকে?
ক) প্রতিটি টাওয়ারে  খ) কেন্দ্রীয় BBU pool/data center-এ  গ) UE-তে  ঘ) Core-এ
**উত্তর: খ)**
**ব্যাখ্যা:** C-RAN-এ baseband প্রসেসিং কেন্দ্রীভূত হয়, সাইটে শুধু RRH (Remote Radio Head) থাকে। এতে resource pooling ও coordination সহজ হয়।

**২।** RRH ও BBU সংযোগকারী নেটওয়ার্ককে কী বলে?
ক) Backhaul  খ) Midhaul  গ) Fronthaul  ঘ) Core
**উত্তর: গ) Fronthaul**
**ব্যাখ্যা:** Fronthaul-এ CPRI/eCPRI ব্যবহৃত হয় এবং এটি অত্যন্ত কম latency ও বেশি bandwidth চায়। DU↔CU = Midhaul, CU↔Core = Backhaul।

**৩।** O-RAN আর্কিটেকচারে RAN-এর তিনটি ফাংশনাল ইউনিট কোনটি?
ক) O-RU, O-DU, O-CU  খ) AMF, SMF, UPF  গ) HSS, MME, SGW  ঘ) VNF, VIM, NFVO
**উত্তর: ক)**
**ব্যাখ্যা:** O-RU রেডিও, O-DU রিয়েল-টাইম baseband (RLC/MAC/High-PHY), O-CU উচ্চস্তর (RRC/PDCP/SDAP)।

**৪।** O-RAN RIC (RAN Intelligent Controller) কয় প্রকার এবং কী কী?
ক) ২ প্রকার: Near-RT ও Non-RT  খ) ১ প্রকার  গ) ৩ প্রকার  ঘ) ৪ প্রকার
**উত্তর: ক)**
**ব্যাখ্যা:** Near-RT RIC কন্ট্রোল লুপ ১০ ms থেকে ১ s, Non-RT RIC ১ s-এর বেশি (SMO-র অংশ)। xApp Near-RT RIC-এ এবং rApp Non-RT RIC-এ চলে।

**৫।** Near-RT RIC ও E2 node (O-CU/O-DU)-এর মধ্যকার ইন্টারফেস কোনটি?
ক) A1  খ) E2  গ) O1  ঘ) Open Fronthaul
**উত্তর: খ) E2**
**ব্যাখ্যা:** A1 = Non-RT RIC↔Near-RT RIC (policy), O1 = SMO↔RAN nodes (OAM), Open Fronthaul (7-2x split) = O-DU↔O-RU।

**৬।** O-RAN-এর মূল লক্ষ্য কী?
ক) ইন্টারফেস উন্মুক্ত ও ইন্টারঅপারেবল করে multi-vendor ইকোসিস্টেম গঠন  খ) শুধু একক vendor লক-ইন  গ) Core বাদ দেওয়া  ঘ) Spectrum বাড়ানো
**উত্তর: ক)**
**ব্যাখ্যা:** Open interface, virtualization ও intelligence-এর মাধ্যমে vendor lock-in কমিয়ে নতুন ইনোভেশন ও খরচ সাশ্রয় করা O-RAN Alliance-এর লক্ষ্য।

---

## টপিক ৮: 5G Network Slicing

**১।** 5G-এর তিনটি প্রধান ব্যবহার ক্ষেত্র কোনটি?
ক) eMBB, URLLC, mMTC  খ) GSM, UMTS, LTE  গ) VoIP, IPTV, VoD  ঘ) FDD, TDD, SDD
**উত্তর: ক)**
**ব্যাখ্যা:** eMBB = উচ্চ গতির ব্রডব্যান্ড, URLLC = অতি নির্ভরযোগ্য কম latency (যেমন ১ ms লক্ষ্য), mMTC = বিপুল সংখ্যক IoT ডিভাইস (প্রতি বর্গকিমিতে প্রায় ১০ লক্ষ)।

**২।** Network Slice শনাক্ত করতে কোন identifier ব্যবহৃত হয়?
ক) S-NSSAI  খ) IMSI  গ) IMEI  ঘ) MSISDN
**উত্তর: ক) S-NSSAI**
**ব্যাখ্যা:** Single Network Slice Selection Assistance Information (SST ও ঐচ্ছিক SD নিয়ে গঠিত)। UE-র অনুরোধকৃত স্লাইস NSSAI-এর মাধ্যমে নির্বাচিত হয়।

**৩।** স্লাইস সিলেকশনে 5GC-র কোন NF সাহায্য করে?
ক) NSSF  খ) EIR  গ) GGSN  ঘ) SGSN
**উত্তর: ক) NSSF**
**ব্যাখ্যা:** Network Slice Selection Function UE-র জন্য উপযুক্ত slice ও AMF সেট নির্ধারণ করে।

**৪।** Network Slicing কোন প্রযুক্তির উপর নির্ভরশীল?
ক) Virtualization (NFV/SDN) ও cloud-native  খ) Analog switching  গ) Copper loop  ঘ) Manual wiring
**উত্তর: ক)**
**ব্যাখ্যা:** একই ফিজিক্যাল অবকাঠামোতে একাধিক logical end-to-end নেটওয়ার্ক তৈরি করতে virtualization অপরিহার্য।

**৫।** Autonomous vehicle কন্ট্রোলের জন্য কোন স্লাইস উপযুক্ত?
ক) eMBB  খ) URLLC  গ) mMTC  ঘ) কোনোটিই নয়
**উত্তর: খ) URLLC**
**ব্যাখ্যা:** এতে অতি কম latency ও উচ্চ নির্ভরযোগ্যতা দরকার, যা URLLC দেয়।

**৬।** Slice isolation বলতে কী বোঝায়?
ক) এক স্লাইসের সমস্যা অন্য স্লাইসকে প্রভাবিত না করা  খ) সব স্লাইস একত্র করা  গ) স্লাইস মুছে ফেলা  ঘ) শুধু ফ্রিকোয়েন্সি আলাদা করা
**উত্তর: ক)**
**ব্যাখ্যা:** Isolation নিশ্চিত করে security ও performance guarantee, যাতে SLA রক্ষা পায়।

---

## টপিক ৯: Packet Switching and Call Control

**১।** Packet switching ও circuit switching-এর প্রধান পার্থক্য কী?
ক) Packet switching-এ নির্দিষ্ট path dedicated থাকে না  খ) Circuit switching-এ কোনো setup লাগে না  গ) Packet switching শুধু voice-এর জন্য  ঘ) কোনো পার্থক্য নেই
**উত্তর: ক)**
**ব্যাখ্যা:** Circuit switching-এ কলের সময় পুরো পথ রিজার্ভ থাকে, packet switching-এ ডেটা প্যাকেটে ভেঙে স্বতন্ত্রভাবে বা shared রিসোর্সে পাঠানো হয় (statistical multiplexing)।

**২।** PSTN-এ কল সেটআপ সিগন্যালিংয়ে ব্যবহৃত প্রোটোকল কোনটি?
ক) SS7 (ISUP)  খ) HTTP  গ) FTP  ঘ) SMTP
**উত্তর: ক) SS7**
**ব্যাখ্যা:** Signalling System No. 7-এর ISUP অংশ এক্সচেঞ্জগুলোর মধ্যে কল সেটআপ/রিলিজ করে। SCCP/TCAP/MAP মোবাইল নেটওয়ার্কে ব্যবহৃত হয়।

**৩।** SIP-এ কল শুরুর মেসেজ কোনটি?
ক) REGISTER  খ) INVITE  গ) BYE  ঘ) ACK
**উত্তর: খ) INVITE**
**ব্যাখ্যা:** INVITE সেশন শুরুর অনুরোধ। BYE সেশন শেষ করে, REGISTER ইউজারের location রেজিস্টার করে, ACK তিন-ধাপ হ্যান্ডশেক সম্পূর্ণ করে।

**৪।** Voice over IP-এ real-time মিডিয়া সাধারণত কোন প্রোটোকলে বহন হয়?
ক) RTP  খ) SMTP  গ) POP3  ঘ) SNMP
**উত্তর: ক) RTP**
**ব্যাখ্যা:** Real-time Transport Protocol UDP-র উপর ভয়েস/ভিডিও বহন করে, আর RTCP কোয়ালিটি ফিডব্যাক দেয়।

**৫।** Packet switching-এ কোনটি প্রধান সমস্যা?
ক) Jitter ও packet loss  খ) Channel শেষ হয়ে যাওয়া  গ) Dedicated path বেশি খরচ  ঘ) Setup delay
**উত্তর: ক)**
**ব্যাখ্যা:** শেয়ার্ড নেটওয়ার্কে queuing delay ও congestion থাকে, তাই real-time সার্ভিসে QoS (DiffServ, QCI) ব্যবহার করা হয়।

**৬।** Call Control-এ "Call Detail Record (CDR)" কীসের জন্য?
ক) Billing ও ট্রাফিক বিশ্লেষণ  খ) Radio planning শুধু  গ) Encryption  ঘ) Handover
**উত্তর: ক)**
**ব্যাখ্যা:** প্রতিটি কলের শুরু-শেষ সময়, কলার/কলি ইত্যাদি তথ্য CDR-এ রেকর্ড হয়, যা বিলিং ও fraud detection-এ লাগে।

---

## টপিক ১০: Evolution from Circuit Switching to Packet Core (EPC & 5GC)

**১।** Evolved Packet Core (EPC) কোন প্রজন্মের core?
ক) 2G  খ) 3G  গ) 4G LTE  ঘ) 5G
**উত্তর: গ) 4G LTE**
**ব্যাখ্যা:** EPC হলো 3GPP Release 8-এ প্রবর্তিত flat, all-IP core (MME, S-GW, P-GW, HSS, PCRF)।

**২।** 5G Core (5GC) আর্কিটেকচার কোন ধরনের?
ক) Service-Based Architecture (SBA)  খ) Point-to-point only  গ) Circuit-switched  ঘ) Monolithic hardware
**উত্তর: ক)**
**ব্যাখ্যা:** 5GC-র NF গুলো Service-Based Interface (HTTP/2, REST/JSON) এর মাধ্যমে একে অপরের সার্ভিস ব্যবহার করে (যেমন Namf, Nsmf)।

**৩।** 5GC-তে MME-র কাজ কোন দুটি NF-এ ভাগ হয়েছে?
ক) AMF ও SMF  খ) UPF ও AUSF  গ) NRF ও NSSF  ঘ) PCF ও UDM
**উত্তর: ক)**
**ব্যাখ্যা:** AMF = access ও mobility ম্যানেজমেন্ট, SMF = session ম্যানেজমেন্ট। এভাবে function-কে মডুলার ও স্বাধীনভাবে স্কেলযোগ্য করা হয়েছে।

**৪।** EPC-র S-GW/P-GW-এর user plane ফাংশন 5GC-তে কোন NF করে?
ক) UPF  খ) AMF  গ) UDM  ঘ) NEF
**উত্তর: ক) UPF**
**ব্যাখ্যা:** User Plane Function প্যাকেট রাউটিং, QoS enforcement ও usage reporting করে। CUPS (Control and User Plane Separation) নীতির ফল।

**৫।** 5GC-তে NF discovery ও registration-এর NF কোনটি?
ক) NRF  খ) AUSF  গ) SMSF  ঘ) UDR
**উত্তর: ক) NRF**
**ব্যাখ্যা:** Network Repository Function সব NF-এর profile সংরক্ষণ করে এবং অন্য NF-কে সন্ধান করতে সাহায্য করে।

**৬।** 2G → 3G → 4G → 5G core বিবর্তনের সঠিক ক্রম কোনটি?
ক) MSC/VLR → MSC + SGSN/GGSN → EPC → 5GC  খ) EPC → MSC → 5GC → SGSN  গ) 5GC → EPC → GGSN → MSC  ঘ) GGSN → 5GC → MSC → EPC
**উত্তর: ক)**
**ব্যাখ্যা:** ২জি CS, ২.৫জি GPRS (PS যুক্ত), ৩জি UMTS CS+PS, ৪জি EPC (all-IP), ৫জি SBA cloud-native core।

---

## টপিক ১১: Call Flow, Session Management, and Mobility Control

**১।** LTE-তে UE নেটওয়ার্কে সংযুক্ত হতে প্রথম কোন প্রক্রিয়া চালায়?
ক) Attach procedure  খ) Detach  গ) Handover  ঘ) Paging
**উত্তর: ক) Attach**
**ব্যাখ্যা:** Attach-এ authentication, security setup, default bearer ও IP address প্রাপ্তি ঘটে। 5G-তে সমতুল্য Registration procedure।

**২।** 5G-তে data সেশন শুরুর procedure কোনটি?
ক) PDU Session Establishment  খ) Tracking Area Update  গ) Paging  ঘ) Detach
**উত্তর: ক)**
**ব্যাখ্যা:** UE AMF-এর মাধ্যমে SMF-কে অনুরোধ করে; SMF UPF নির্বাচন করে ও QoS flow কনফিগার করে।

**৩।** 5G NR-এর RRC state কোনগুলো?
ক) RRC_IDLE, RRC_CONNECTED, RRC_INACTIVE  খ) শুধু IDLE ও CONNECTED  গ) ACTIVE, SLEEP  ঘ) ON, OFF
**উত্তর: ক)**
**ব্যাখ্যা:** RRC_INACTIVE নতুন state, যেখানে UE-র context RAN-এ সংরক্ষিত থাকে এবং দ্রুত connected-এ ফেরা যায়।

**৪।** Idle mode-এ UE-কে খুঁজে পেতে নেটওয়ার্ক কোন পদ্ধতি ব্যবহার করে?
ক) Paging  খ) Handover  গ) Scheduling  ঘ) Ciphering
**উত্তর: ক) Paging**
**ব্যাখ্যা:** Tracking Area (বা Location Area)-র সেলগুলোতে paging message পাঠিয়ে idle UE-কে জাগানো হয়।

**৫।** UE এক Tracking Area থেকে অন্যে গেলে কোন procedure হয়?
ক) Tracking Area Update (TAU)  খ) Attach  গ) Detach  ঘ) Bearer Release
**উত্তর: ক)**
**ব্যাখ্যা:** TAU করে নেটওয়ার্ক UE-র নতুন অবস্থান জানতে পারে। 2G/3G-তে সমতুল্য Location Area Update।

**৬।** LTE-তে eNB-এর মধ্যে X2-ভিত্তিক handover-এ target eNB-কে প্রথমে কোন মেসেজ যায়?
ক) Handover Request  খ) Attach Request  গ) Paging  ঘ) RRC Release
**উত্তর: ক)**
**ব্যাখ্যা:** Source eNB X2 দিয়ে Handover Request পাঠায়, target admission control করে Ack দেয়, তারপর UE-কে RRC Connection Reconfiguration যায়।

**৭।** Default bearer সম্পর্কে সঠিক কোনটি?
ক) Attach-এর সময় তৈরি হয় এবং IP address পায়  খ) শুধু ভয়েসের জন্য  গ) UE বন্ধ থাকলে তৈরি হয়  ঘ) GBR সবসময়
**উত্তর: ক)**
**ব্যাখ্যা:** Default bearer non-GBR, always-on IP কানেক্টিভিটি দেয়। dedicated bearer নির্দিষ্ট QoS (যেমন VoLTE-র GBR QCI 1) চাইলে যোগ হয়।

---

## টপিক ১২: IMS Architecture for Voice and Multimedia Switching

**১।** IMS-এর পূর্ণরূপ কী?
ক) IP Multimedia Subsystem  খ) Internet Mobile Service  গ) Integrated Media Switch  ঘ) IP Mobile System
**উত্তর: ক)**
**ব্যাখ্যা:** IMS হলো 3GPP-এর SIP-ভিত্তিক আর্কিটেকচার যা IP নেটওয়ার্কে ভয়েস, ভিডিও ও মেসেজিং সার্ভিস দেয় (VoLTE, VoNR, RCS)।

**২।** IMS-এ ইউজার রেজিস্ট্রেশন ও সেশন কন্ট্রোল করে কোন CSCF?
ক) S-CSCF  খ) P-CSCF  গ) I-CSCF  ঘ) PCRF
**উত্তর: ক) S-CSCF**
**ব্যাখ্যা:** Serving-CSCF registrar হিসেবে কাজ করে ও সার্ভিস ট্রিগার (TAS) চালায়। P-CSCF UE-র প্রথম যোগাযোগ বিন্দু, I-CSCF হোম নেটওয়ার্কের এন্ট্রি ও S-CSCF নির্বাচনে সাহায্য করে।

**৩।** IMS-এ প্রধান সিগন্যালিং প্রোটোকল কোনটি?
ক) SIP  খ) SS7  গ) H.323 only  ঘ) BGP
**উত্তর: ক) SIP**
**ব্যাখ্যা:** SIP + SDP সেশন সেটআপ করে, Diameter (Cx, Rx) ইন্টারফেসে ব্যবহার হয়, এবং মিডিয়া বহন করে RTP।

**৪।** VoLTE কলের voice bearer-এর জন্য সাধারণ QCI কত?
ক) 1  খ) 5  গ) 9  ঘ) 8
**উত্তর: ক) 1**
**ব্যাখ্যা:** QCI 1 = Conversational Voice (GBR)। QCI 5 = IMS signalling (non-GBR), QCI 9 = সাধারণ ডেটা।

**৫।** IMS থেকে PSTN-এ কল পাঠানোর জন্য কোন নোড দরকার?
ক) MGCF/MGW (BGCF)  খ) HSS  গ) PCRF  ঘ) AUSF
**উত্তর: ক)**
**ব্যাখ্যা:** MGCF সিগন্যালিং (SIP↔ISUP) এবং MGW মিডিয়া (RTP↔TDM) রূপান্তর করে। BGCF কোন নেটওয়ার্কে কল ব্রেকআউট হবে তা নির্ধারণ করে।

**৬।** 5G Standalone-এ IMS ভয়েসকে বলে—
ক) VoNR  খ) CSFB  গ) VoIP  ঘ) SRVCC
**উত্তর: ক) VoNR**
**ব্যাখ্যা:** Voice over New Radio, যেখানে 5G NR-এর মাধ্যমে IMS ভয়েস চলে। SRVCC হলো LTE থেকে 2G/3G CS-এ কল হস্তান্তর।

---

## টপিক ১৩: Mobile User Data Management & Authentication

**১।** IMSI-তে মোট সর্বোচ্চ কত ডিজিট থাকে?
ক) 10  খ) 15  গ) 20  ঘ) 8
**উত্তর: খ) 15**
**ব্যাখ্যা:** IMSI = MCC (৩ ডিজিট) + MNC (২ বা ৩) + MSIN। বাংলাদেশের MCC = 470।

**২।** SIM-এ গোপন authentication key-র নাম কী?
ক) Ki  খ) Kc  গ) TMSI  ঘ) LAI
**উত্তর: ক) Ki**
**ব্যাখ্যা:** Ki SIM ও AuC-তে সংরক্ষিত থাকে এবং কখনো রেডিও ইন্টারফেসে পাঠানো হয় না। A3 দিয়ে SRES এবং A8 দিয়ে Kc তৈরি হয়।

**৩।** GSM authentication triplet-এর উপাদান কোনটি?
ক) RAND, SRES, Kc  খ) IMSI, IMEI, TMSI  গ) RAND, XRES, CK, IK, AUTN  ঘ) SUPI, SUCI, GUTI
**উত্তর: ক)**
**ব্যাখ্যা:** GSM-এ triplet (RAND, SRES, Kc)। UMTS/LTE-তে quintet/vector (RAND, XRES, AUTN, CK, IK/KASME)।

**৪।** TMSI ব্যবহারের উদ্দেশ্য কী?
ক) IMSI গোপন রেখে ইউজারের গোপনীয়তা রক্ষা  খ) ডেটা স্পিড বাড়ানো  গ) বিলিং  ঘ) IMEI বদল
**উত্তর: ক)**
**ব্যাখ্যা:** রেডিওতে স্থায়ী IMSI-র বদলে অস্থায়ী TMSI (LTE-তে GUTI, 5G-তে 5G-GUTI) পাঠালে ট্র্যাকিং কঠিন হয়।

**৫।** 5G-তে স্থায়ী subscriber identity এবং তার এনক্রিপ্টেড রূপ কী?
ক) SUPI এবং SUCI  খ) IMEI এবং IMSI  গ) GUTI এবং TMSI  ঘ) MSISDN এবং IMEI
**উত্তর: ক)**
**ব্যাখ্যা:** SUPI (ইউজারের স্থায়ী আইডি) সরাসরি না পাঠিয়ে public key দিয়ে এনক্রিপ্ট করে SUCI পাঠানো হয়, ফলে IMSI-catcher আক্রমণ কঠিন।

**৬।** IMEI কী শনাক্ত করে?
ক) মোবাইল ডিভাইস (হ্যান্ডসেট)  খ) সাবস্ক্রাইবার  গ) টাওয়ার  ঘ) অপারেটর
**উত্তর: ক)**
**ব্যাখ্যা:** IMEI ১৫ ডিজিটের হ্যান্ডসেট আইডি। চুরি হওয়া ডিভাইস ব্লক করতে EIR (Equipment Identity Register)-এ ব্ল্যাকলিস্ট করা হয়।

**৭।** 5G-তে primary authentication প্রোটোকল কোনটি?
ক) 5G-AKA ও EAP-AKA'  খ) PAP  গ) CHAP  ঘ) Kerberos
**উত্তর: ক)**
**ব্যাখ্যা:** AUSF ও UDM/ARPF মিলে 5G AKA সম্পন্ন করে। এখানে home network নিয়ন্ত্রণ আরও জোরদার।

---

## টপিক ১৪: HLR, HSS, and Registry Systems for Mobile Communication

**১।** HLR কী সংরক্ষণ করে?
ক) সাবস্ক্রাইবারের স্থায়ী প্রোফাইল ও বর্তমান MSC/VLR লোকেশন  খ) শুধু IMEI  গ) রেডিও প্ল্যান  ঘ) বিলিং কপি
**উত্তর: ক)**
**ব্যাখ্যা:** HLR হোম ডাটাবেস: IMSI, MSISDN, সার্ভিস সাবস্ক্রিপশন, সাপ্লিমেন্টারি সার্ভিস ও বর্তমান VLR/MSC ঠিকানা।

**২।** VLR-এর কাজ কী?
ক) ভিজিটিং সাবস্ক্রাইবারের অস্থায়ী ডেটা রাখা  খ) পার্মানেন্ট ডেটা রাখা  গ) এনক্রিপশন কী বানানো  ঘ) IP বরাদ্দ
**উত্তর: ক)**
**ব্যাখ্যা:** VLR সাধারণত MSC-র সাথে যুক্ত এবং তার এলাকায় থাকা সাবস্ক্রাইবারের ডেটা HLR থেকে এনে ক্যাশ করে।

**৩।** LTE ও IMS-এ HLR-এর সমতুল্য কোনটি?
ক) HSS  খ) MSC  গ) SGSN  ঘ) EIR
**উত্তর: ক) HSS**
**ব্যাখ্যা:** Home Subscriber Server HLR+AuC-র উন্নত সংস্করণ। 5G-তে সমতুল্য ফাংশন UDM/UDR/AUSF।

**৪।** MME ও HSS-এর মধ্যে ইন্টারফেস কোনটি?
ক) S6a (Diameter)  খ) S1-U  গ) X2  ঘ) Gn
**উত্তর: ক) S6a**
**ব্যাখ্যা:** S6a Diameter প্রোটোকলে সাবস্ক্রিপশন ডেটা ও authentication vector আদান-প্রদান করে। 2G/3G-তে HLR-এর সাথে MAP প্রোটোকল ব্যবহৃত হতো।

**৫।** AuC (Authentication Centre) কী তৈরি করে?
ক) Authentication triplets/vectors  খ) IP address  গ) বিল  ঘ) Paging message
**উত্তর: ক)**
**ব্যাখ্যা:** AuC-তে প্রতিটি সাবস্ক্রাইবারের Ki থাকে এবং সেখান থেকে RAND, SRES, Kc ইত্যাদি তৈরি হয়।

**৬।** EIR-এ "White list, Grey list, Black list" কীসের জন্য?
ক) ডিভাইস IMEI-র অনুমোদন/নিষেধ  খ) সাবস্ক্রাইবার বিল  গ) সাইট লিস্ট  ঘ) ফ্রিকোয়েন্সি তালিকা
**উত্তর: ক)**
**ব্যাখ্যা:** White = অনুমোদিত, Grey = নজরদারির অধীন, Black = চুরি/নিষিদ্ধ ডিভাইস।

---

## টপিক ১৫: Power System for Telecom

**১।** টেলিকম সাইটে সাধারণত ব্যবহৃত DC ভোল্টেজ কত?
ক) −48 V  খ) 12 V AC  গ) 230 V DC  ঘ) 5 V
**উত্তর: ক) −48 V DC**
**ব্যাখ্যা:** −48 V DC স্ট্যান্ডার্ড; পজিটিভ বাসবার আর্থ করা থাকে, ফলে ক্ষয় (corrosion) কমে। (কিছু আধুনিক সাইটে +24 V ইত্যাদিও থাকে।)

**২।** Rectifier কী কাজ করে?
ক) AC থেকে DC রূপান্তর  খ) DC থেকে AC  গ) ভোল্টেজ বাড়ায় শুধু  ঘ) ফ্রিকোয়েন্সি পাল্টায়
**উত্তর: ক)**
**ব্যাখ্যা:** Rectifier গ্রিড/জেনারেটরের AC-কে −48 V DC-তে রূপান্তর করে লোড চালায় ও ব্যাটারি চার্জ করে। DC→AC করে Inverter।

**৩।** ৪৮ V, ১০০ Ah ব্যাটারি ব্যাংকের মোট শক্তি কত?
ক) 0.48 kWh  খ) 4.8 kWh  গ) 48 kWh  ঘ) 480 Wh
**উত্তর: খ) 4.8 kWh**
**ব্যাখ্যা:** Energy = V × Ah = 48 × 100 = 4800 Wh = 4.8 kWh।

**৪।** ১.২ kW লোডে উপরের ব্যাটারি তাত্ত্বিকভাবে কত ঘণ্টা চলবে (DoD ও দক্ষতা অগ্রাহ্য)?
ক) 2 ঘণ্টা  খ) 4 ঘণ্টা  গ) 8 ঘণ্টা  ঘ) 12 ঘণ্টা
**উত্তর: খ) 4 ঘণ্টা**
**ব্যাখ্যা:** ব্যাকআপ = 4.8 kWh ÷ 1.2 kW = 4 ঘণ্টা। বাস্তবে DoD (যেমন ৮০%) ও ব্যাটারির বয়সের কারণে কম হয়।

**৫।** টেলিকমে সর্বাধিক ব্যবহৃত রক্ষণাবেক্ষণ-সহজ ব্যাটারি কোনটি?
ক) VRLA (Sealed lead-acid)  খ) Alkaline only  গ) Dry cell  ঘ) Mercury cell
**উত্তর: ক) VRLA**
**ব্যাখ্যা:** Valve Regulated Lead Acid ব্যাটারিতে পানি দেওয়া লাগে না। বর্তমানে Lithium-ion (LiFePO₄)-ও জনপ্রিয় হচ্ছে।

**৬।** ব্যাটারির Depth of Discharge (DoD) বেশি হলে কী হয়?
ক) আয়ু (cycle life) কমে  খ) আয়ু বাড়ে  গ) কিছুই হয় না  ঘ) চার্জ দ্রুত হয়
**উত্তর: ক)**
**ব্যাখ্যা:** গভীর ডিসচার্জ বারবার করলে ব্যাটারির cycle life উল্লেখযোগ্যভাবে কমে যায়।

**৭।** গ্রিড বিদ্যুৎ না থাকলে টেলিকম সাইটে কোন ব্যাকআপ চালু হয়?
ক) Battery তারপর DG (Diesel Generator)/Solar  খ) শুধু UPS  গ) কিছুই না  ঘ) শুধু হাতে চালানো
**উত্তর: ক)**
**ব্যাখ্যা:** তাৎক্ষণিক ব্যাটারি লোড নেয়; দীর্ঘ সময়ের জন্য ATS-সহ DG বা সোলার হাইব্রিড সিস্টেম চালু হয়।

**৮।** ATS (Automatic Transfer Switch)-এর কাজ কী?
ক) গ্রিড ও জেনারেটরের মধ্যে স্বয়ংক্রিয় সুইচিং  খ) ফ্রিকোয়েন্সি বদলানো  গ) ভোল্টেজ মাপা  ঘ) আর্থিং
**উত্তর: ক)**
**ব্যাখ্যা:** গ্রিড ফেইল করলে ATS লোড DG-তে স্থানান্তর করে এবং গ্রিড ফিরলে আবার গ্রিডে নেয়।

**৯।** বাংলাদেশে সাধারণ AC সরবরাহ কত?
ক) 230 V, 50 Hz  খ) 110 V, 60 Hz  গ) 220 V, 60 Hz  ঘ) 240 V, 25 Hz
**উত্তর: ক) 230 V, 50 Hz**
**ব্যাখ্যা:** সিঙ্গেল ফেজ ২৩০ V ও থ্রি-ফেজ ৪০০ V (লাইন-টু-লাইন), ফ্রিকোয়েন্সি ৫০ Hz।

**১০।** Lightning arrester ও earthing কেন প্রয়োজন?
ক) বজ্রপাত ও সার্জ থেকে যন্ত্রপাতি রক্ষা  খ) সিগন্যাল বাড়াতে  গ) ব্যাটারি চার্জ করতে  ঘ) তাপ বাড়াতে
**উত্তর: ক)**
**ব্যাখ্যা:** উঁচু টাওয়ার বজ্রপাতপ্রবণ। উপযুক্ত গ্রাউন্ডিং সার্জ কারেন্টকে নিরাপদে মাটিতে পাঠায় এবং কর্মী ও যন্ত্রপাতি রক্ষা করে।

---

## টপিক ১৬: Scripting for Simulation, Modeling and Configuration of Cellular Systems

**১।** Python-এ নিচের কোডের আউটপুট কী? `import math; print(10*math.log10(100))`
ক) 10  খ) 20.0  গ) 100  ঘ) 2
**উত্তর: খ) 20.0**
**ব্যাখ্যা:** log₁₀(100) = 2, ×10 = 20.0। (পাওয়ার ratio → dB রূপান্তর)

**২।** নেটওয়ার্ক সিমুলেশনে বহুল ব্যবহৃত ওপেন-সোর্স সিমুলেটর কোনটি?
ক) ns-3  খ) Photoshop  গ) Excel  ঘ) Notepad
**উত্তর: ক) ns-3**
**ব্যাখ্যা:** ns-3 C++/Python-ভিত্তিক discrete-event সিমুলেটর, LTE/5G মডিউল (যেমন 5G-LENA) আছে। MATLAB ও OMNeT++ও প্রচলিত।

**৩।** 5G কোর টেস্টের জন্য ওপেন-সোর্স কোর কোনটি?
ক) Open5GS  খ) Open Office  গ) OpenCV  ঘ) OpenGL
**উত্তর: ক) Open5GS**
**ব্যাখ্যা:** Open5GS (ও free5GC) 4G EPC ও 5GC-র ওপেন-সোর্স ইমপ্লিমেন্টেশন, যা srsRAN বা UERANSIM-এর সাথে টেস্টবেডে ব্যবহার করা যায়।

**৪।** ডিভাইস কনফিগারেশন অটোমেশনে ব্যবহৃত টুল কোনটি?
ক) Ansible  খ) Paint  গ) VLC  ঘ) Zip
**উত্তর: ক) Ansible**
**ব্যাখ্যা:** Ansible YAML playbook দিয়ে একাধিক নেটওয়ার্ক ডিভাইস স্বয়ংক্রিয়ভাবে কনফিগার করে। NETCONF/YANG আধুনিক স্ট্যান্ডার্ড মডেল-ভিত্তিক কনফিগারেশন।

**৫।** Linux-এ লগ ফাইল থেকে "error" খুঁজতে কোন কমান্ড?
ক) grep "error" file.log  খ) mkdir error  গ) cd error  ঘ) rm error
**উত্তর: ক)**
**ব্যাখ্যা:** `grep` প্যাটার্ন সার্চ করে। `tail -f` লাইভ লগ দেখায়, `awk`/`sed` টেক্সট প্রসেস করে।

**৬।** Python-এ `len([2,4,6,8])` এর মান কত?
ক) 3  খ) 4  গ) 8  ঘ) 20
**উত্তর: খ) 4**
**ব্যাখ্যা:** `len()` লিস্টের উপাদান সংখ্যা দেয়।

**৭।** Monte Carlo সিমুলেশন কীসের উপর ভিত্তি করে?
ক) Random sampling  খ) Fixed constant  গ) Manual measure  ঘ) Hardware only
**উত্তর: ক)**
**ব্যাখ্যা:** এলোমেলো স্যাম্পলিং দিয়ে ফেডিং, ইউজার ডিস্ট্রিবিউশন, কভারেজ ইত্যাদির পরিসংখ্যানগত ফল পাওয়া যায়।

**৮।** নেটওয়ার্ক রিচেবিলিটি পরীক্ষার সবচেয়ে প্রচলিত কমান্ড কোনটি?
ক) ping  খ) ls  গ) cat  ঘ) top
**উত্তর: ক) ping**
**ব্যাখ্যা:** ICMP Echo ব্যবহার করে latency ও reachability জানায়। `traceroute` পথ দেখায়।

---

## টপিক ১৭: Basic Knowledge about Telecom Industry of Bangladesh

**১।** বাংলাদেশে টেলিকম খাতের নিয়ন্ত্রক সংস্থা কোনটি?
ক) BTRC  খ) BTCL  গ) BSTI  ঘ) BERC
**উত্তর: ক) BTRC**
**ব্যাখ্যা:** Bangladesh Telecommunication Regulatory Commission, ২০০২ সালে "বাংলাদেশ টেলিযোগাযোগ আইন ২০০১" অনুযায়ী গঠিত।

**২।** বাংলাদেশের রাষ্ট্রীয় মালিকানাধীন মোবাইল অপারেটর কোনটি?
ক) Teletalk  খ) Robi  গ) Grameenphone  ঘ) Banglalink
**উত্তর: ক) Teletalk**
**ব্যাখ্যা:** টেলিটক বাংলাদেশ লিমিটেড সরকারি মালিকানাধীন। অন্যগুলো বেসরকারি/বিদেশি বিনিয়োগকৃত।

**৩।** বাংলাদেশের সাবমেরিন ক্যাবল ল্যান্ডিং স্টেশন প্রধানত কোথায়?
ক) কক্সবাজার  খ) ঢাকা  গ) সিলেট  ঘ) রাজশাহী
**উত্তর: ক) কক্সবাজার**
**ব্যাখ্যা:** SEA-ME-WE-4 ও SEA-ME-WE-5 কক্সবাজারে ল্যান্ড করেছে। SEA-ME-WE-6 কুয়াকাটায় সংযুক্ত হওয়ার কথা বলা হয়েছে; সর্বশেষ তথ্য যাচাই করুন।

**৪।** বাংলাদেশের জাতীয় আন্তর্জাতিক ইন্টারনেট প্রবেশদ্বার লাইসেন্স কোনটি?
ক) IGW  খ) ICX  গ) NTTN  ঘ) ISP
**উত্তর: ক) IGW**
**ব্যাখ্যা:** IGW (International Gateway) আন্তর্জাতিক ইন্টারনেট ব্যান্ডউইথ আনে, ICX আন্তর্জাতিক ভয়েস কল ইন্টারকানেকশন দেখে, NTTN দেশব্যাপী ট্রান্সমিশন নেটওয়ার্ক (ফাইবার/টাওয়ার ভাড়া) দেয়।

**৫।** বাংলাদেশে 4G সেবা চালু হয় কোন বছরে?
ক) ২০১৮  খ) ২০১২  গ) ২০২২  ঘ) ২০০৯
**উত্তর: ক) ২০১৮**
**ব্যাখ্যা:** ২০১৮ সালের ফেব্রুয়ারিতে স্পেকট্রাম নিলামের পর 4G চালু হয়। 3G ২০১২-তে এসেছিল।

**৬।** বাংলাদেশের MCC (Mobile Country Code) কত?
ক) 470  খ) 404  গ) 310  ঘ) 460
**উত্তর: ক) 470**
**ব্যাখ্যা:** MCC দেশ শনাক্ত করে। ভারত 404/405, যুক্তরাষ্ট্র 310–316, চীন 460।

**৭।** বাংলাদেশের দেশীয় কান্ট্রি কোড কত?
ক) +880  খ) +91  গ) +92  ঘ) +60
**উত্তর: ক) +880**
**ব্যাখ্যা:** ITU E.164 অনুযায়ী বাংলাদেশের কান্ট্রি কোড +880। ভারত +91, পাকিস্তান +92।

---

## টপিক ১৮: Communication Skill Related Topic

**১।** "The team ___ working on the project." সঠিক কোনটি?
ক) is  খ) are  গ) were  ঘ) be
**উত্তর: ক) is**
**ব্যাখ্যা:** "team" collective noun যা একক ইউনিট হিসেবে ধরলে singular verb (is) হয়।

**২।** ফর্মাল ইমেইলের শুরুতে কোনটি উপযুক্ত?
ক) Dear Sir/Madam,  খ) Hey buddy!  গ) Yo,  ঘ) Hi mate
**উত্তর: ক)**
**ব্যাখ্যা:** অফিসিয়াল যোগাযোগে ভদ্র, সম্মানজনক ও পেশাদার ভাষা ব্যবহার করতে হয়।

**৩।** 7 C's of Communication-এর অন্তর্ভুক্ত নয় কোনটি?
ক) Clarity  খ) Courtesy  গ) Concreteness  ঘ) Confusion
**উত্তর: ঘ) Confusion**
**ব্যাখ্যা:** ৭টি C: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous।

**৪।** Active listening-এর অংশ কোনটি?
ক) মনোযোগ দিয়ে শোনা ও ফিডব্যাক দেওয়া  খ) মাঝপথে থামানো  গ) ফোন দেখা  ঘ) অন্যদিকে তাকানো
**উত্তর: ক)**
**ব্যাখ্যা:** সক্রিয় শ্রবণে চোখের যোগাযোগ, paraphrase করা ও প্রশ্ন করা অন্তর্ভুক্ত।

**৫।** "Synonym of 'Rapid'" কোনটি?
ক) Fast  খ) Slow  গ) Weak  ঘ) Heavy
**উত্তর: ক) Fast**
**ব্যাখ্যা:** Rapid মানে দ্রুত, যার সমার্থক Fast/Quick/Swift।

**৬।** Communication-এর বাধা (barrier) কোনটি?
ক) Noise ও ভাষার পার্থক্য  খ) পরিষ্কার বার্তা  গ) ফিডব্যাক  ঘ) সরাসরি আলোচনা
**উত্তর: ক)**
**ব্যাখ্যা:** Physical noise, semantic ও psychological বাধা যোগাযোগকে ব্যাহত করে।

**৭।** "He has been working here ___ 2019." সঠিক শব্দ কোনটি?
ক) since  খ) for  গ) from  ঘ) at
**উত্তর: ক) since**
**ব্যাখ্যা:** নির্দিষ্ট সময়বিন্দুর আগে since, সময়কালের আগে for (যেমন for five years)।

**৮।** Non-verbal communication-এর উদাহরণ কোনটি?
ক) Body language  খ) Email  গ) Phone call  ঘ) Report
**উত্তর: ক)**
**ব্যাখ্যা:** অঙ্গভঙ্গি, মুখের ভাব ও চোখের যোগাযোগ non-verbal।

---

## টপিক ১৯: Aptitude Related Topic

**১।** ২৫০-এর ২০% কত?
ক) ৪০  খ) ৫০  গ) ৬০  ঘ) ২০
**উত্তর: খ) ৫০**
**ব্যাখ্যা:** ২৫০ × ২০/১০০ = ৫০।

**২।** ৬০ km/h গতিতে ২.৫ ঘণ্টায় কত দূরত্ব?
ক) ১২০ km  খ) ১৫০ km  গ) ১৮০ km  ঘ) ২০০ km
**উত্তর: খ) ১৫০ km**
**ব্যাখ্যা:** দূরত্ব = গতি × সময় = ৬০ × ২.৫ = ১৫০।

**৩।** ধারা: 2, 6, 12, 20, 30, ?
ক) 40  খ) 42  গ) 44  ঘ) 36
**উত্তর: খ) 42**
**ব্যাখ্যা:** n(n+1): ১×২, ২×৩, ৩×৪, ৪×৫, ৫×৬, পরেরটি ৬×৭ = ৪২।

**৪।** A একটি কাজ ১০ দিনে, B ১৫ দিনে করে। একসাথে কত দিনে?
ক) ৫  খ) ৬  গ) ৭  ঘ) ৮
**উত্তর: খ) ৬**
**ব্যাখ্যা:** ১/১০ + ১/১৫ = ৫/৩০ = ১/৬, তাই ৬ দিন।

**৫।** ক্রয়মূল্য ৮০০ টাকা, বিক্রয়মূল্য ১০০০ টাকা হলে লাভ কত %?
ক) ২০%  খ) ২৫%  গ) ৩০%  ঘ) ১৫%
**উত্তর: খ) ২৫%**
**ব্যাখ্যা:** লাভ = ২০০; লাভ% = ২০০/৮০০ × ১০০ = ২৫%।

**৬।** ১০, ২০, ৩০, ৪০, ৫০-এর গড় কত?
ক) ২৫  খ) ৩০  গ) ৩৫  ঘ) ৪০
**উত্তর: খ) ৩০**
**ব্যাখ্যা:** যোগফল ১৫০ ÷ ৫ = ৩০।

**৭।** দুটি সংখ্যার অনুপাত ৩:৫ এবং যোগফল ৬৪ হলে ছোট সংখ্যা কত?
ক) ২০  খ) ২৪  গ) ২৮  ঘ) ৪০
**উত্তর: খ) ২৪**
**ব্যাখ্যা:** মোট ৮ ভাগ, ১ ভাগ = ৮; ছোটটি = ৩ × ৮ = ২৪।

**৮।** ৫০০০ টাকা, ১০% হারে ২ বছরের সরল সুদ কত?
ক) ৫০০  খ) ১০০০  গ) ১১০০  ঘ) ১২০০
**উত্তর: খ) ১০০০**
**ব্যাখ্যা:** I = PRT/100 = ৫০০০ × ১০ × ২ / ১০০ = ১০০০।

**৯।** ১৫০ মিটার লম্বা ট্রেন ৫৪ km/h গতিতে একটি খুঁটি অতিক্রম করতে কত সময় নেবে?
ক) ৫ সেকেন্ড  খ) ১০ সেকেন্ড  গ) ১৫ সেকেন্ড  ঘ) ২০ সেকেন্ড
**উত্তর: খ) ১০ সেকেন্ড**
**ব্যাখ্যা:** ৫৪ km/h = ৫৪ × ৫/১৮ = ১৫ m/s; সময় = ১৫০/১৫ = ১০ সেকেন্ড।

**১০।** ঘড়িতে ঠিক ৩:০০ টায় ঘণ্টা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত?
ক) ৬০°  খ) ৯০°  গ) ১২০°  ঘ) ১৫০°
**উত্তর: খ) ৯০°**
**ব্যাখ্যা:** প্রতি ঘণ্টায় ৩০° কোণ; ৩ ঘণ্টা × ৩০° = ৯০°।

**১১।** ধারা: 3, 9, 27, 81, ?
ক) ১২১  খ) ২৪৩  গ) ২৪০  ঘ) ৩২৪
**উত্তর: খ) ২৪৩**
**ব্যাখ্যা:** প্রতিটি পদ আগের পদের ৩ গুণ: ৮১ × ৩ = ২৪৩।

**১২।** সব A হলো B এবং সব B হলো C হলে কোনটি সঠিক?
ক) সব A হলো C  খ) কোনো A, C নয়  গ) সব C হলো A  ঘ) কিছুই বলা যায় না
**উত্তর: ক)**
**ব্যাখ্যা:** Syllogism-এর transitive নিয়ম: A ⊂ B ⊂ C, অতএব A ⊂ C।

---

## পরবর্তী Part-এর পরিকল্পনা

- Part 2: Telecom Basics, Radio, Cellular, Core/Backhaul (আরও কঠিন ও ক্যালকুলেশনভিত্তিক)
- Part 3: NFV, C-RAN/O-RAN, Slicing, Packet Core, Call Flow
- Part 4: IMS, Authentication, HLR/HSS, Power System
- Part 5: Scripting, Bangladesh Telecom, Communication, Aptitude

*মোট প্রশ্ন (Part 1): ১২৭টি*
