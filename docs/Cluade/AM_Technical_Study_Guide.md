# সহকারী ব্যবস্থাপক (কারিগরি) – বিস্তারিত স্টাডি গাইড
> প্রতিটি টপিকে **ধারণা → মূল তথ্য/সংখ্যা → সূত্র → MCQ-তে যা আসে** এই ক্রমে সাজানো। MCQ ইংরেজিতে আসবে, তাই পরিভাষা ইংরেজিতে রাখা হয়েছে।
> ⚠️ Bangladesh টেলিকম অংশের তারিখ/সংখ্যা পরীক্ষার আগে সর্বশেষ সূত্র থেকে যাচাই করুন।

---
# 1. Telecom Basics

## 1.1 Communication system-এর ৫টি অংশ
Source → Transmitter → Channel (noise যুক্ত হয়) → Receiver → Destination।

## 1.2 Analog vs Digital
| বিষয় | Analog | Digital |
|---|---|---|
| সিগন্যাল | continuous | discrete (0/1) |
| noise | জমা হতে থাকে | regenerate করা যায় |
| error control | কঠিন | সম্ভব (FEC, CRC) |
সুবিধা: digital-এ multiplexing, encryption, compression সহজ।

## 1.3 PCM (Pulse Code Modulation)
ধাপ: **Sampling → Quantization → Encoding**।
- Nyquist: fs ≥ 2·fmax। ভয়েস 4 kHz ⇒ fs = 8000 samples/s।
- 8 bit/sample ⇒ 8000 × 8 = **64 kbps** (DS0)।
- SQNR ≈ **6.02n + 1.76 dB** (n = bit সংখ্যা)।
- Companding: A-law (ইউরোপ/বাংলাদেশ, E1) ও μ-law (উত্তর আমেরিকা/জাপান, T1)।

## 1.4 TDM Hierarchy (মুখস্থ করুন)
| Level | Rate | Channels (64k) |
|---|---|---|
| E1 | 2.048 Mbps | 32 slots (30 ভয়েস) |
| E2 | 8.448 Mbps | 120 |
| E3 | 34.368 Mbps | 480 |
| E4 | 139.264 Mbps | 1920 |
| T1 | 1.544 Mbps | 24 |
| T3 | 44.736 Mbps | 672 |
E1: TS0 = frame sync, TS16 = signalling (CAS)।

## 1.5 SDH/SONET
STM-1 = **155.52 Mbps**, STM-4 = 622.08, STM-16 = 2488.32 (≈2.5G), STM-64 = 9953.28 (≈10G)। OC-1 = 51.84 Mbps।

## 1.6 Multiplexing
FDM (frequency), TDM (time), WDM (wavelength; CWDM ≈ 18 channel, DWDM ≈ 40–160+), CDM (code), SDM (space)।

## 1.7 Transmission impairments
Attenuation (dB/km), Distortion, Noise (thermal, shot, crosstalk, impulse), Dispersion (fiber)। Fiber: Single-mode (core ≈ 9 µm, লম্বা দূরত্ব), Multi-mode (50/62.5 µm, ছোট দূরত্ব)। Windows: 850, 1310, 1550 nm (সর্বনিম্ন loss ≈ 1550 nm)।

## 1.8 Decibel সূত্র
- dB = 10 log₁₀(P₂/P₁) = 20 log₁₀(V₂/V₁)
- dBm = 10 log₁₀(P/1 mW); 0 dBm = 1 mW, 30 dBm = 1 W, 20 dBm = 100 mW।
- dBW = dBm − 30। 3 dB ≈ ×2, 6 dB ≈ ×4, 10 dB = ×10, 20 dB = ×100।

## 1.9 Traffic engineering
- Erlang = (কল সংখ্যা × গড় holding time) / পর্যবেক্ষণ সময়।
- BHCA = Busy Hour Call Attempts। Grade of Service (GoS) = blocking probability (যেমন 0.02 = 2%)।
- **Erlang B** = blocked calls cleared (blocking), **Erlang C** = queued calls (call center)।

## 1.10 Shannon & Nyquist
- Noiseless (Nyquist): C = 2B log₂M। Noisy (Shannon): **C = B log₂(1 + SNR)** (SNR রৈখিক, dB নয়)।
- Bit rate = Baud × bits/symbol।

## 1.11 Signalling
CAS (Channel Associated Signalling) বনাম CCS (Common Channel Signalling = SS7)। SS7-এর উপাদান: SSP, STP, SCP; layers: MTP1–3, SCCP, TCAP, ISUP, MAP।

## 1.12 OSI/TCP-IP (সংক্ষেপে)
Physical, Data Link (MAC/switch), Network (IP/router), Transport (TCP/UDP), Session, Presentation, Application। TCP = reliable, UDP = unreliable/real-time।

**MCQ-তে যা আসে:** E1/T1 rate, PCM ধাপ, Nyquist, dB/dBm রূপান্তর, Erlang গণনা, STM-1 rate, fiber window, TDM বনাম FDM।

---
# 2. Radio Communication Basics

## 2.1 Frequency bands
| Band | Range | ব্যবহার |
|---|---|---|
| LF | 30–300 kHz | navigation |
| MF | 0.3–3 MHz | AM radio |
| HF | 3–30 MHz | shortwave |
| VHF | 30–300 MHz | FM radio (88–108), TV |
| UHF | 0.3–3 GHz | মোবাইল (GSM/LTE), TV |
| SHF | 3–30 GHz | microwave, satellite |
| EHF | 30–300 GHz | mmWave, 5G FR2 |
- λ = c/f (c = 3×10⁸ m/s)।
- 5G: **FR1 = 410 MHz–7.125 GHz**, **FR2 = 24.25–52.6 GHz**।

## 2.2 Propagation
Ground wave (<3 MHz), Sky wave (HF, ionosphere reflection), Line-of-Sight (VHF+)। Mechanisms: Reflection, Diffraction, Scattering। Radio horizon ≈ 4.12(√h₁ + √h₂) km (h মিটারে)।

## 2.3 Path loss
- **FSPL (dB) = 20log₁₀(d_km) + 20log₁₀(f_MHz) + 32.44**
- দূরত্ব ×2 ⇒ +6 dB; ফ্রিকোয়েন্সি ×2 ⇒ +6 dB।
- Path loss exponent n: free space = 2, urban = 2.7–3.5, indoor obstructed = 4–6।
- Models: Okumura-Hata (150–1500 MHz), COST-231 Hata (1500–2000 MHz), 3GPP UMa/UMi (5G)।

## 2.4 Link budget
- EIRP = Tx power(dBm) + Tx antenna gain(dBi) − cable loss।
- Rx power = EIRP − Path loss + Rx gain − Rx losses।
- Noise floor = −174 + 10log₁₀(B) + NF (dBm)। 10 MHz, NF 7 dB ⇒ −97 dBm।
- Link margin = Rx power − Rx sensitivity। Fade margin বাড়ালে availability বাড়ে।
- SNR(dB) = S(dBm) − N(dBm)।

## 2.5 Antenna parameters
Gain (dBi), Directivity, Beamwidth (HPBW, 3 dB), Polarization (V, H, ±45° cross-pol), Front-to-back ratio, VSWR (আদর্শ 1:1; <1.5 ভালো), Return Loss, Downtilt (mechanical/electrical)। dBi = dBd + 2.15।

## 2.6 Modulation
| Scheme | bits/symbol |
|---|---|
| BPSK | 1 |
| QPSK | 2 |
| 16QAM | 4 |
| 64QAM | 6 |
| 256QAM | 8 |
| 1024QAM | 10 |
GMSK (GSM), 8-PSK (EDGE)। উচ্চ order = বেশি speed কিন্তু বেশি SNR দরকার।

## 2.7 Fading
- **Large-scale**: path loss, shadowing (log-normal)।
- **Small-scale**: multipath → Rayleigh (NLOS), Rician (LOS আছে)।
- Time dispersion: delay spread → ISI, frequency-selective fading। Coherence bandwidth ≈ 1/delay spread।
- Doppler shift: fd = v·f/c; coherence time ≈ 1/fd।
- প্রতিরোধ: Diversity (space/frequency/time/polarization), Equalizer, OFDM+CP, RAKE receiver (CDMA), Interleaving+Coding।

## 2.8 Multiple access & duplex
FDMA, TDMA, CDMA, OFDMA, SC-FDMA, NOMA। Duplex: FDD (দুই ফ্রিকোয়েন্সি), TDD (এক ফ্রিকোয়েন্সি, time ভাগ)। TDD-তে DL/UL asymmetry সম্ভব ও channel reciprocity (massive MIMO-র জন্য ভালো)।

## 2.9 OFDM মূল ধারণা
Orthogonal subcarriers, Cyclic Prefix (CP) ISI রোধ করে, FFT/IFFT দিয়ে বাস্তবায়ন, সমস্যা: উচ্চ PAPR। LTE subcarrier spacing 15 kHz।

## 2.10 MIMO ও Beamforming
- Spatial multiplexing (capacity), Diversity (reliability), Beamforming (coverage/SINR)।
- Massive MIMO (64T64R ইত্যাদি) 5G-র মূল প্রযুক্তি। SU-MIMO, MU-MIMO।
- Max streams = min(Tx antennas, Rx antennas)।

**MCQ-তে যা আসে:** band ranges, FSPL গণনা, EIRP, Doppler, modulation bits, Rayleigh বনাম Rician, FDD বনাম TDD, FR1/FR2।

---
# 3. Basic Concept of Cellular Networks

## 3.1 মূল ধারণা
Cell = একটি base station-এর কভারেজ এলাকা। একই ফ্রিকোয়েন্সি দূরবর্তী সেলে পুনর্ব্যবহার (**frequency reuse**) করে capacity বাড়ানো হয়।

## 3.2 Cluster ও reuse
- Cluster size **N = i² + ij + j²** (সম্ভাব্য: 1,3,4,7,9,12…)
- Reuse distance **D = R√(3N)**; D/R = √(3N)।
- Frequency reuse factor = 1/N।
- Channels per cell = মোট channel / N।
- N বাড়ালে interference কমে, কিন্তু capacity কমে।
- Co-channel interference (CCI) ও Adjacent-channel interference (ACI)। SIR ≈ (D/R)^n / 6 (প্রথম স্তরের ৬ interferer)।

## 3.3 Capacity বাড়ানোর পদ্ধতি
1. **Cell splitting** (R অর্ধেক ⇒ সেল ×4)
2. **Sectorization** (120° বা 60°) ⇒ CCI কমে
3. **Microcell/Picocell/Femtocell** (small cell)
4. **Cell range extension/Repeater/Distributed Antenna System**
5. Spectrum বাড়ানো, উন্নত modulation, MIMO, carrier aggregation

## 3.4 Cell প্রকার
Macro (কিমি), Micro (~শতাধিক মিটার–1 km), Pico (<100 m, indoor), Femto (home, ~10–50 m)। Umbrella cell।

## 3.5 Handover
| প্রকার | বর্ণনা |
|---|---|
| Hard (break-before-make) | GSM, LTE |
| Soft (make-before-break) | CDMA/WCDMA, একসাথে একাধিক সেল |
| Softer | একই সাইটের সেক্টরগুলোর মধ্যে |
| Intra-/Inter-frequency, Inter-RAT | ফ্রিকোয়েন্সি/প্রযুক্তি বদলায় |
Handover trigger: RSRP/RSRQ, RSSI, distance; hysteresis ও time-to-trigger ping-pong কমায়। Handover failure, call drop, Handover success rate = KPI।

## 3.6 Power control ও near-far problem
CDMA-তে কাছের UE-র সিগন্যাল দূরেরটিকে ঢেকে দেয় ⇒ fast closed-loop power control (WCDMA-তে 1500 Hz)।

## 3.7 Roaming ও Location management
Location Area (LA) / Tracking Area (TA)। Idle UE LAU/TAU করে, network paging দিয়ে খুঁজে। Roaming = অন্য নেটওয়ার্কে সার্ভিস (HLR/HSS হোম থেকে প্রোফাইল)।

## 3.8 Generations সারণি
| Gen | প্রযুক্তি | Access | বৈশিষ্ট্য |
|---|---|---|---|
| 1G | AMPS, NMT | FDMA | analog voice |
| 2G | GSM, IS-95 | TDMA/CDMA | digital voice, SMS |
| 2.5G | GPRS | TDMA | packet data |
| 2.75G | EDGE | TDMA | 8-PSK |
| 3G | UMTS/WCDMA, CDMA2000 | CDMA | 5 MHz channel, ≥144 kbps mobile |
| 3.5G | HSPA/HSPA+ | CDMA | 14–42 Mbps |
| 4G | LTE/LTE-A | OFDMA/SC-FDMA | all-IP, 100 Mbps mobile / 1 Gbps stationary (IMT-Advanced) |
| 5G | NR | OFDMA (CP-OFDM) | eMBB, URLLC, mMTC |

## 3.9 GSM মূল সংখ্যা (বহুল পরীক্ষিত)
- Channel spacing **200 kHz**, **8 timeslots/carrier**, modulation **GMSK**, gross rate 270.833 kbps।
- GSM900: UL 890–915, DL 935–960 MHz (duplex spacing 45 MHz, 124 carriers)। GSM1800: UL 1710–1785, DL 1805–1880 (duplex 95 MHz, 374 carriers)।
- Timeslot ≈ 577 µs, TDMA frame ≈ 4.615 ms, multiframe 26/51 frames। Speech codec: FR 13 kbps, EFR 12.2, AMR 4.75–12.2।
- Max cell radius (timing advance) ≈ 35 km।

## 3.10 LTE মূল সংখ্যা
- Channel BW: 1.4, 3, 5, 10, 15, 20 MHz। RB বিন্যাস: 6, 15, 25, 50, 75, **100 RB**।
- 1 RB = 12 subcarriers × 15 kHz = **180 kHz** (frequency), 1 slot = 0.5 ms; subframe = 1 ms; radio frame = 10 ms।
- DL OFDMA, UL SC-FDMA। PCI = 504 (0–503)। Max MIMO Rel-8: 4×4। Carrier aggregation Rel-10 (সর্বোচ্চ 100 MHz)।

## 3.11 5G NR মূল সংখ্যা
- Numerology μ: SCS = 15 × 2^μ kHz (15, 30, 60, 120, 240); slot = 1/2^μ ms।
- Max carrier BW: FR1 100 MHz, FR2 400 MHz। PCI = 1008। ট্র্যাকিং: SSB, beam management।

**MCQ-তে যা আসে:** cluster সূত্র, D/R, cell splitting, soft handover, GSM/LTE সংখ্যা, near-far, প্রজন্মের তুলনা।

---
# 4. Mobile Core and Backhaul Architectures

## 4.1 GSM Architecture
- **MS** = ME + SIM।
- **BSS** = BTS + BSC (+TRAU/Transcoder)।
- **NSS** = MSC, VLR, HLR, AuC, EIR, GMSC।
- **OSS/NMC** (OMC)।
Interfaces: Um (MS–BTS), Abis (BTS–BSC), A (BSC–MSC), B (MSC–VLR), C (GMSC–HLR), D (VLR–HLR), E (MSC–MSC), F (MSC–EIR), G (VLR–VLR)।
GPRS যোগ: PCU (BSC-তে), SGSN, GGSN; Gb (PCU–SGSN), Gn (SGSN–GGSN), Gr (SGSN–HLR), Gi (GGSN–PDN)।

## 4.2 UMTS Architecture
UE (USIM+ME) → UTRAN (NodeB + RNC) → CN (CS: MSC/GMSC; PS: SGSN/GGSN; HLR/AuC/EIR)।
Interfaces: Uu, Iub (NodeB–RNC), Iur (RNC–RNC), Iu-CS, Iu-PS। NodeB-তে scrambling/spreading/power control, RNC-তে radio resource management/handover।

## 4.3 LTE/EPC Architecture
E-UTRAN (শুধু eNB) + EPC।
| Node | কাজ |
|---|---|
| eNB | radio, scheduling, RRC, handover |
| MME | NAS signaling, authentication, mobility, bearer mgmt, paging, TA list |
| S-GW | user plane anchor (intra-LTE), packet forwarding |
| P-GW | IP allocation, PDN gateway, policy enforcement, charging |
| HSS | subscriber DB + AuC |
| PCRF | policy & charging rules |
| ePDG/ANDSF | non-3GPP access |
Interfaces: Uu, X2 (eNB–eNB), S1-MME, S1-U, S11 (MME–SGW), S5/S8 (SGW–PGW; S8 = roaming), S6a (MME–HSS, Diameter), SGi (PGW–PDN), Gx (PCRF–PGW), Rx (PCRF–AF), S10 (MME–MME), S3/S4 (2G/3G interworking)।
- Control plane stack: NAS / RRC / PDCP / RLC / MAC / PHY। User plane: IP / PDCP / RLC / MAC / PHY। S1-U = GTP-U/UDP/IP; S1-MME = S1AP/SCTP/IP।
- **Pool of MMEs** (S1-flex), TA list।

## 4.4 5G System Architecture (NG-RAN + 5GC)
- NG-RAN: gNB (NR), ng-eNB (LTE → 5GC)। gNB-CU/DU split।
- 5GC NFs: AMF, SMF, UPF, UDM, UDR, AUSF, PCF, NRF, NSSF, NEF, AF, SMSF, CHF। Reference points: N1 (UE–AMF), N2 (gNB–AMF), N3 (gNB–UPF), N4 (SMF–UPF), N6 (UPF–DN), N9 (UPF–UPF), N11 (AMF–SMF), Xn (gNB–gNB), N26 (AMF–MME interworking)।

## 4.5 Backhaul, Midhaul, Fronthaul
| Segment | সংযোগ | প্রযুক্তি |
|---|---|---|
| Fronthaul | RU ↔ DU/BBU | CPRI/eCPRI, dark fiber, WDM, PON |
| Midhaul | DU ↔ CU | Ethernet/IP |
| Backhaul | CU/Cell site ↔ Core | Fiber, Microwave, MPLS, Carrier Ethernet |
Backhaul প্রযুক্তি তুলনা:
| মাধ্যম | সুবিধা | অসুবিধা |
|---|---|---|
| Fiber | সর্বোচ্চ capacity, কম latency | খরচ, ROW সমস্যা |
| Microwave | দ্রুত স্থাপন, কম খরচ | line-of-sight, বৃষ্টি-ক্ষয় (বিশেষ করে >10 GHz) |
| Satellite | দুর্গম এলাকা | বেশি latency (GEO ≈ 250–280 ms one-way) |
| Copper (xDSL) | বিদ্যমান লাইন | সীমিত speed |
Microwave bands: 6, 7, 8, 11, 13, 15, 18, 23, 38 GHz; **E-band 71–76/81–86 GHz** (মাল্টি-Gbps); V-band ≈ 60 GHz। Techniques: ACM (Adaptive Coding & Modulation), XPIC, link aggregation, 1+1 protection, Hot standby।
PON: GPON (2.488G DL / 1.244G UL), XGS-PON (10G symmetric), split ratio 1:32/1:64।
Synchronization: SyncE (frequency), **IEEE 1588v2 PTP** (phase/time), GNSS। TDD/5G-তে phase sync ≈ ±1.5 µs।
Transport protocols: **MPLS / MPLS-TP**, Carrier Ethernet (MEF: E-Line, E-LAN, E-Tree), Segment Routing, IPsec (S1/N2 নিরাপত্তা), Y.1731 OAM, BFD।

## 4.6 Core network deployment
CS core (MSC) ⇒ CS+PS (3G) ⇒ all-IP EPC ⇒ cloud-native 5GC। Core location: central DC, edge DC (MEC/UPF edge)।

**MCQ-তে যা আসে:** interface নাম (Abis, A, Iub, S1, S11, S6a, N2, N3, N4), node কাজ, backhaul মাধ্যম, E-band, PTP/SyncE।

---
# 5. Packet-Switched Mobile Networks

## 5.1 GPRS/EDGE
- GPRS: GMSK, coding scheme CS-1…CS-4 = 9.05, 13.4, 15.6, **21.4 kbps/slot**; 8 slot ⇒ 171.2 kbps theoretical।
- EDGE: 8-PSK, MCS-1…9, সর্বোচ্চ 59.2 kbps/slot ⇒ 473.6 kbps (প্রচলিত ≈ 384 kbps)।
- PDP context = IP session; **APN** = গন্তব্য PDN। SGSN: mobility, session, charging; GGSN: IP allocation, gateway।
- GTP-U (UDP 2152), GTP-C (UDP 2123)।

## 5.2 UMTS/HSPA
- WCDMA: chip rate **3.84 Mcps**, 5 MHz, spreading factor, scrambling, OVSF code।
- HSDPA: 16QAM/64QAM, AMC, **HARQ**, fast scheduling at NodeB, TTI = 2 ms, HS-DSCH; peak 14.4 Mbps (Rel-5)।
- HSUPA: E-DCH, TTI 2/10 ms, 5.76 Mbps। HSPA+: 64QAM, MIMO, DC-HSDPA ≈ 42 Mbps (Rel-8) ⇒ 84/168 Mbps।

## 5.3 LTE
- All-IP, **flat** architecture, DL OFDMA, UL SC-FDMA (কম PAPR)।
- Peak (Rel-8, 20 MHz): DL 150 Mbps (2×2), 300 Mbps (4×4); UL 75 Mbps।
- LTE-Advanced (Rel-10): CA (5 CC×20 MHz), 8×8 DL MIMO ⇒ 1 Gbps।
- Layer-2: PDCP (header compression, ciphering), RLC (AM/UM/TM, segmentation), MAC (scheduling, HARQ, multiplexing), PHY। Channels: logical → transport → physical (PDSCH, PUSCH, PDCCH, PBCH, PRACH)।
- **Bearer & QoS**: EPS bearer (default/dedicated), GBR/non-GBR, **QCI**।
| QCI | টাইপ | উদাহরণ |
|---|---|---|
| 1 | GBR | conversational voice (VoLTE) |
| 2 | GBR | live video |
| 4 | GBR | buffered video |
| 5 | non-GBR | IMS signaling |
| 6–8 | non-GBR | TCP, video, interactive |
| 9 | non-GBR | default bearer (best effort) |
- ARP = Allocation and Retention Priority; AMBR = aggregate max bit rate।
- TCP/IP over wireless সমস্যা: latency, packet loss ⇒ TCP window, PEP/optimization।

## 5.4 5G User plane
PDU Session ⇒ QoS Flows (**QFI**, **5QI**); SDAP স্তর (QFI ↔ DRB mapping); CP-OFDM (UL-ও), flexible numerology, mini-slot।

**MCQ-তে যা আসে:** GPRS/EDGE rate, HSDPA টেকনিক, OFDMA/SC-FDMA, TTI, QCI, GTP port, PDP context বনাম EPS bearer।

---
# 6. Network Function Virtualization (NFV) in Cellular Systems

## 6.1 কেন NFV
প্রচলিত: dedicated proprietary box ⇒ vendor lock-in, দীর্ঘ rollout, কম resource utilization। NFV: **Software functions on COTS servers** (VM/container)।

## 6.2 ETSI NFV architecture (ETSI GS NFV 002)
- **VNF** (Virtual Network Function) + EMS।
- **NFVI** = Hardware (compute, storage, network) + Virtualization layer (hypervisor) + virtual resources।
- **NFV MANO**: **NFVO** (Orchestrator: network service ও resource orchestration), **VNFM** (VNF lifecycle: instantiate, scale, heal, terminate), **VIM** (NFVI রিসোর্স ম্যানেজ; OpenStack)।
- OSS/BSS ইন্টারঅপারেশন।
- Descriptors: **VNFD, NSD**, VNFFGD।
Reference points: Vi-Ha, Vn-Nf, Nf-Vi, Or-Vnfm, Vi-Vnfm, Or-Vi।

## 6.3 Virtualization প্রযুক্তি
- **Hypervisor**: Type-1 (bare-metal: KVM, ESXi, Xen), Type-2 (hosted: VirtualBox)।
- **Container** (Docker) + **Kubernetes** (orchestration) ⇒ **CNF (Cloud-native NF)**, microservices, CI/CD।
- VM vs Container: VM = আলাদা OS, ভারী, বেশি isolation; Container = shared kernel, হালকা, দ্রুত start।
- Performance: **SR-IOV, DPDK, PCI passthrough, NUMA**, SmartNIC।
- OpenStack components: Nova (compute), Neutron (network), Cinder (block storage), Glance (image), Keystone (identity), Heat (orchestration)।

## 6.4 NFV vs SDN
- SDN: control plane ও data plane আলাদা, centralized controller, OpenFlow/NETCONF।
- NFV: network function-কে hardware থেকে আলাদা।
- দুটি পরিপূরক; NFV + SDN ⇒ network slicing, automation।

## 6.5 Cellular-এ প্রয়োগ
vEPC, vIMS, vCPE, vRAN/Cloud RAN, vFirewall, vDPI, 5G cloud-native core (SBA)। Telco Cloud: central DC → regional → edge (MEC)।

## 6.6 সুবিধা ও চ্যালেঞ্জ
সুবিধা: CAPEX/OPEX কম, দ্রুত service rollout, scaling (**elasticity**), automation, resource sharing।
চ্যালেঞ্জ: performance (carrier-grade, latency), interoperability, security (hypervisor/container escape), MANO জটিলতা, license, legacy integration, skill gap।

## 6.7 অন্যান্য
Scale up/down vs Scale out/in; Healing; Orchestration; **NFV Forum, OPNFV, ONAP, OSM**; **Intent-based/Zero-touch automation**।

**MCQ-তে যা আসে:** MANO অংশ, VIM উদাহরণ, VNF বনাম CNF, hypervisor type, NFV বনাম SDN, সুবিধা।

---
# 7. Cloud RAN (C-RAN) ও Open RAN (O-RAN)

## 7.1 D-RAN → C-RAN → vRAN → O-RAN
- **D-RAN** (Distributed): BBU+RRU প্রতি সাইটে।
- **C-RAN** (Centralized/Cloud/Collaborative/Clean): BBU pool কেন্দ্রে, সাইটে RRH; China Mobile প্রস্তাবিত।
- **vRAN**: baseband ফাংশন সফটওয়্যার (COTS)।
- **Open RAN / O-RAN**: খোলা ইন্টারফেস + multi-vendor + intelligent controller।

## 7.2 C-RAN সুবিধা ও অসুবিধা
সুবিধা: pooling gain, CoMP/eICIC সহজ, কম সাইট খরচ ও power, দ্রুত rollout।
অসুবিধা: **fronthaul** এ বিশাল bandwidth ও কঠোর latency (CPRI ≈ 100 µs one-way budget), ফাইবার ঘাটতি।

## 7.3 Fronthaul
- **CPRI** (constant bit rate, I/Q sampling) ⇒ bandwidth ∝ antenna ও BW; 5G-তে অপ্রযুক্তিগত।
- **eCPRI** (Ethernet/packet, functional split বদলে bandwidth কমায়)।
- Transport: dark fiber, WDM (passive/active), PON, Ethernet।

## 7.4 3GPP Functional Split (NR)
Option 1 (RRC/PDCP), **Option 2 (PDCP/RLC) = F1: CU↔DU (High-Layer Split)**, Option 3 (RLC intra), Option 4 (RLC/MAC), Option 5 (MAC intra), Option 6 (MAC/PHY), **Option 7 (Intra-PHY; 7.2x = O-RAN fronthaul)**, **Option 8 (PHY/RF = CPRI)**।
- gNB = **gNB-CU (CU-CP + CU-UP)** + **gNB-DU**। F1-C/F1-U (CU–DU), E1 (CU-CP–CU-UP), W1 (ng-eNB), Xn।

## 7.5 O-RAN আর্কিটেকচার
- **O-RU** (Low-PHY + RF), **O-DU** (RLC/MAC/High-PHY), **O-CU** (RRC/PDCP/SDAP)।
- **RIC**: **Near-RT RIC** (10 ms–1 s, **xApps**, E2 interface), **Non-RT RIC** (>1 s, **rApps**, SMO-র অংশ, A1 interface)।
- **SMO** (Service Management & Orchestration): O1 (OAM FCAPS), O2 (O-Cloud), A1, Open FH M-plane।
- **O-Cloud**: কমন কনটেইনার/VM প্ল্যাটফর্ম।
- Interfaces: **A1** (Non-RT RIC↔Near-RT RIC: policy, ML model, enrichment), **E2** (Near-RT RIC↔E2 nodes), **O1**, **O2**, **Open Fronthaul (C/U/S/M-plane)**, F1, E1, Xn, NG।
- Open FH planes: **C** (control), **U** (user), **S** (sync), **M** (management)।
- Use cases: traffic steering, energy saving, QoE optimization, massive MIMO beam optimization, anomaly detection।
- সংস্থা: **O-RAN Alliance (২০১৮, AT&T, China Mobile, DT, NTT Docomo, Orange প্রতিষ্ঠাতা)**, TIP OpenRAN, Linux Foundation (OSC)।
- নিরাপত্তা চ্যালেঞ্জ: বেশি attack surface, supply chain, xApp trust।

**MCQ-তে যা আসে:** fronthaul/midhaul/backhaul, CPRI/eCPRI, split option 2/7.2/8, RIC ধরন ও সময়, A1/E2/O1/O2/F1 ইন্টারফেস, O-RAN লক্ষ্য।

---
# 8. 5G Network Slicing

## 8.1 ধারণা
একই ভৌত infrastructure-এ একাধিক **logical, isolated, end-to-end** নেটওয়ার্ক (RAN + Transport + Core) যার প্রতিটির নিজস্ব SLA/KPI। সক্ষমকারী: NFV, SDN, cloud-native, SBA।

## 8.2 Use case ও KPI (IMT-2020)
| Parameter | লক্ষ্য |
|---|---|
| Peak data rate | DL 20 Gbps, UL 10 Gbps |
| User-experienced rate | DL 100 Mbps, UL 50 Mbps |
| Latency (user plane) | eMBB 4 ms, **URLLC 1 ms** |
| Connection density | **10⁶ devices/km²** |
| Mobility | 500 km/h |
| Area traffic capacity | 10 Mbps/m² |
| Spectrum efficiency | 3× IMT-Advanced |
| Energy efficiency | 100× |
- **eMBB**: 4K/8K video, AR/VR, FWA। **URLLC**: autonomous driving, remote surgery, industrial automation (reliability 99.999%)। **mMTC**: smart meter, sensors।

## 8.3 Slice identifiers
- **S-NSSAI = SST (8 bit) + SD (24 bit, ঐচ্ছিক)**।
- **SST**: 1 = eMBB, 2 = URLLC, 3 = MIoT, 4 = V2X, 5 = HMTC।
- NSSAI = S-NSSAI-এর তালিকা: **Configured, Requested, Allowed, Rejected NSSAI**। একটি UE সর্বোচ্চ 8 S-NSSAI সমর্থন করে।
- **NSI** (Network Slice Instance), **NSSI** (Subnet Instance)।

## 8.4 Slice-সংশ্লিষ্ট NF
- **NSSF**: slice selection।
- **AMF**: registration-এ allowed NSSAI নির্ধারণ।
- **SMF/UPF**: slice-ভিত্তিক session ও data plane।
- **NRF**: slice অনুযায়ী NF discovery।
- Management: **CSMF** (Communication Service Mgmt), **NSMF**, **NSSMF** (3GPP TS 28.531)। GSMA **GST** (Generic Slice Template) ও **NEST**।

## 8.5 Slicing বাস্তবায়ন স্তর
- **RAN slicing**: PRB reservation, scheduler priority, numerology আলাদা।
- **Transport slicing**: VLAN/VRF, MPLS, Segment Routing, FlexE।
- **Core slicing**: আলাদা UPF/SMF/AMF instance।
- QoS: 5QI (যেমন 5QI 1 voice, 82 delay-critical GBR, 9 default), Resource types: GBR, non-GBR, Delay-critical GBR।

## 8.6 Slice lifecycle
Preparation → Commissioning → Operation (activation, modification, supervision) → Decommissioning। **Isolation** (security/performance), **elasticity**, **slice SLA**।

**MCQ-তে যা আসে:** eMBB/URLLC/mMTC উদাহরণ, S-NSSAI গঠন, SST মান, NSSF, KPI সংখ্যা, slicing-এর সক্ষমকারী প্রযুক্তি।

---
# 9. Packet Switching and Call Control

## 9.1 Switching তুলনা
| | Circuit | Packet (Datagram) | Packet (Virtual circuit) |
|---|---|---|---|
| Path | dedicated | প্রতি প্যাকেট স্বাধীন | আগে সেটআপ |
| Resource | reserved | shared (statistical mux) | shared |
| Delay | constant | variable | variable |
| উদাহরণ | PSTN, GSM voice | IP | MPLS, X.25, ATM |
Delay উপাদান: processing + queuing + transmission (L/R) + propagation (d/s)। জ্যাম: congestion control (TCP), QoS: DiffServ (DSCP: EF voice), IntServ, MPLS TE।

## 9.2 PSTN/SS7 Call control
- Nodes: **SSP** (switch), **STP** (signal transfer), **SCP** (database/IN)।
- Stack: MTP1-3, **SCCP**, **TCAP**, **ISUP** (trunk/call setup), **MAP** (mobile), INAP/CAP।
- ISUP call flow: **IAM → ACM → ANM** → (কথা) → **REL → RLC**। Point Code দিয়ে node address।
- Intelligent Network (IN): SSP + SCP; prepaid, toll-free।

## 9.3 SIP (RFC 3261) ও VoIP
- Elements: **UA (UAC/UAS), Proxy, Registrar, Redirect, B2BUA, Location server**।
- Methods: **INVITE, ACK, BYE, CANCEL, REGISTER, OPTIONS**, (PRACK, UPDATE, SUBSCRIBE, NOTIFY, MESSAGE, REFER)।
- Responses: **1xx** provisional (100 Trying, **180 Ringing**, 183 Session Progress), **2xx** success (200 OK), **3xx** redirect, **4xx** client error (401 Unauthorized, 403, 404, 486 Busy), **5xx** server error (500, 503), **6xx** global failure (603 Decline)।
- Basic call: INVITE → 100 → 180 → 200 OK → ACK → (RTP) → BYE → 200 OK। (**3-way handshake**)
- Port 5060 (UDP/TCP), 5061 (TLS)। Message = text-based (HTTP-সদৃশ), header: Via, From, To, Call-ID, CSeq, Contact।
- **SDP**: media type, codec, IP/port (offer/answer)। **RTP** (UDP, payload), **RTCP** (feedback)। **SRTP** (encrypted)।
- Codecs: **G.711 (64 kbps)**, G.729 (8 kbps), G.722 (wideband), **AMR-NB** (4.75–12.2), **AMR-WB** (6.6–23.85), **EVS**।
- VoIP QoS: one-way delay <150 ms (G.114), jitter <30 ms, loss <1%; MOS স্কোর (1–5; ≥4 ভালো)। Jitter buffer।
- Others: **H.323** (ITU, পুরনো), **MGCP**, **H.248/Megaco** (MGC↔MGW), **SIGTRAN** (SS7 over IP: M3UA/SCTP), **ENUM** (E.164 → URI)।

## 9.4 Softswitch / IP telephony
Media Gateway Controller (call control) + Media Gateway (media conversion) + Signalling Gateway। Class 4 (tandem/transit), Class 5 (local/subscriber) switch।

## 9.5 Mobile call control (CS)
MO call: Channel request → Service request → Authentication → Ciphering → Setup → Call proceeding → Alerting → Connect। MT call: GMSC→HLR (SRI)→VLR (PRN)→MSRN→MSC→Paging→...

## 9.6 Billing/CDR
CDR (Call Detail Record), OCS (online charging, Diameter Gy/Ro), OFCS (offline), prepaid/postpaid, Mediation।

**MCQ-তে যা আসে:** circuit বনাম packet, ISUP ক্রম, SIP method/code, port 5060, SDP/RTP, codec rate, SS7 stack, H.248।

---
# 10. Evolution from Circuit Switching to Packet Core (EPC & 5GC)

## 10.1 3GPP Release টাইমলাইন
| Release | বিষয় |
|---|---|
| Rel-99 | UMTS (WCDMA) |
| Rel-4 | MSC Server/MGW split (bearer-independent CS) |
| Rel-5 | HSDPA, **IMS** |
| Rel-6 | HSUPA, MBMS |
| Rel-7 | HSPA+ |
| **Rel-8** | **LTE, EPC (SAE)** |
| Rel-10 | LTE-Advanced |
| Rel-13/14 | NB-IoT, CUPS (Rel-14), LAA |
| **Rel-15** | **5G Phase 1 (NSA ও SA)** |
| Rel-16 | URLLC, IIoT, V2X, NR-U |
| Rel-17 | RedCap, NTN |
| Rel-18 | 5G-Advanced |

## 10.2 CS থেকে PS যাত্রা
2G: CS (MSC) ভয়েস। 2.5G: GPRS ⇒ PS domain যোগ (SGSN/GGSN)। 3G: CS + PS (Rel-4 থেকে MSC Server + MGW)। 4G: শুধুই **PS (all-IP)**, ভয়েস VoLTE (IMS)। 5G: cloud-native **SBA**, ভয়েস VoNR। (EPS Fallback ও CSFB পরিবর্তনকালীন সমাধান)।

## 10.3 EPC বৈশিষ্ট্য
Flat architecture, কম latency, control/user plane আলাদা (MME vs SGW/PGW), সব IP, বিভিন্ন access (3GPP + non-3GPP)। **CUPS** (Rel-14): SGW-C/U, PGW-C/U।

## 10.4 5GC ও SBA
- **Service-Based Architecture**: NF গুলো **Service-Based Interfaces (Nxxx)** দিয়ে সার্ভিস প্রকাশ/ব্যবহার করে (Namf, Nsmf, Nudm, Nausf, Npcf, Nnrf, Nnssf)। প্রোটোকল: **HTTP/2 + JSON (REST)**, TLS, OAuth2।
- প্রধান NF ও কাজ:
| NF | কাজ |
|---|---|
| AMF | registration, connection, mobility, NAS termination, access authentication |
| SMF | session management, UE IP allocation, UPF selection/control |
| UPF | user plane forwarding, QoS, anchor (PSA), traffic usage |
| AUSF | authentication server (5G-AKA/EAP) |
| UDM | subscription data, SUCI de-concealment, auth credentials |
| UDR | unified data repository |
| PCF | policy control (QoS/charging rules) |
| NRF | NF registration & discovery |
| NSSF | slice selection |
| NEF | exposure to 3rd party/AF |
| CHF | charging function (convergent) |
| SMSF | SMS over NAS |
| SCP/SEPP | service communication proxy / roaming security proxy |
| N3IWF | untrusted non-3GPP access |

## 10.5 EPC ↔ 5GC ম্যাপিং
| EPC | 5GC |
|---|---|
| MME | AMF (+SMF অংশত) |
| SGW-C/PGW-C | SMF |
| SGW-U/PGW-U | UPF |
| HSS | UDM/UDR/AUSF |
| PCRF | PCF |
| SCEF | NEF |
| EPS bearer | PDU session + QoS flow |
| QCI | 5QI |
| IMSI/GUTI | SUPI/5G-GUTI |
| APN | DNN |
| TAU | Registration Update |

## 10.6 Deployment options
- **SA (Standalone)**: Option 2 (gNB + 5GC), Option 4।
- **NSA (Non-Standalone)**: Option 3/3a/3x (**EN-DC**: LTE master + NR secondary, **EPC**), Option 7 (ng-eNB + 5GC), Option 4/4a (NR master)।
- **Option 3x** প্রথম ধাপের সবচেয়ে জনপ্রিয় (EPC, দ্রুত rollout)।
- Interworking: **N26** (AMF–MME), idle/connected mode mobility।

## 10.7 নতুন সক্ষমতা
Network slicing, MEC (edge UPF), dual connectivity, Local breakout, ATSSS, URSP।

**MCQ-তে যা আসে:** Release-এ কী (Rel-8 EPC, Rel-15 5G), MME→AMF/SMF, SGW/PGW→UPF, SBA/HTTP2, NSA vs SA, CUPS, EPC↔5GC মিল।

---
# 11. Call Flow, Session Management, and Mobility Control

## 11.1 Mobility states
- LTE: **RRC_IDLE, RRC_CONNECTED**; EMM: DEREGISTERED/REGISTERED; ECM: IDLE/CONNECTED।
- 5G: **RRC_IDLE, RRC_INACTIVE, RRC_CONNECTED**; 5GMM: DEREGISTERED/REGISTERED; CM-IDLE/CM-CONNECTED।
- Idle: PLMN selection → **cell selection (S-criterion)** → **cell reselection** (priority-based, hysteresis) → camped। DRX দিয়ে ব্যাটারি সাশ্রয়। Paging occasion।

## 11.2 LTE Initial Access ও Attach ক্রম
1. Cell search (PSS/SSS ⇒ PCI), MIB (PBCH), SIB1/SIBs।
2. **RACH**: Msg1 preamble → Msg2 RAR → Msg3 RRC Connection Request → Msg4 Contention Resolution/RRC Setup।
3. RRC Connection Setup Complete (+ NAS **Attach Request + PDN Connectivity Request**)।
4. S1AP Initial UE Message → MME।
5. **Authentication** (AKA) + **NAS Security Mode Command** → NAS ciphering/integrity।
6. MME → HSS (S6a: Update Location) subscription data।
7. Create Session Request (S11) → SGW → PGW (S5) (IP allocate, PCRF)।
8. Initial Context Setup Request (S1AP) + **Attach Accept** (default bearer, IP) → AS Security Mode → RRC Reconfiguration।
9. Attach Complete → Modify Bearer → data।
- **Service Request**: Idle → Connected (UL data/paging response)।
- **Detach**: UE-initiated/Network-initiated।

## 11.3 5G Registration ও PDU Session
- Registration Request (SUCI, Requested NSSAI) → AMF → AUSF/UDM (5G-AKA) → Security Mode → UDM subscription → PCF AM policy → **Registration Accept** (5G-GUTI, Allowed NSSAI, TAI list) → Complete।
- **PDU Session Establishment**: UE → AMF (N1) → SMF (Nsmf_PDUSession_CreateSMContext) → PCF (SM policy) → UPF selection → N4 session establishment → SMF → AMF: N2 request → gNB → UE RRC Reconfiguration (DRB, QoS) → N3 tunnel।
- Types: IPv4, IPv6, IPv4v6, Ethernet, Unstructured। SSC modes 1/2/3।

## 11.4 Mobility Management
- **Idle**: Tracking Area Update (periodic/normal), TA list।
- **Connected**: Handover (network-controlled, UE-assisted)।
- **Measurement events** (LTE): **A1** serving > threshold, **A2** serving < threshold, **A3** neighbour offset-better than serving, A4 neighbour > threshold, A5 serving < th1 & neighbour > th2, B1/B2 inter-RAT।
- **Handover ধাপ**: Measurement report → Decision → Handover Request (X2/S1) → Admission Control → Handover Request Ack → HO Command (RRC Reconfig with mobilityControlInfo) → UE RACH on target → HO Complete → Path Switch (MME, SGW) → UE Context Release।
- X2 HO (সরাসরি eNB–eNB), S1 HO (MME মাধ্যমে; X2 না থাকলে বা MME/SGW বদল)। Data forwarding। **Xn HO** (5G)।
- **Inter-RAT**: SRVCC (VoLTE→CS), CSFB, 5G→LTE (EPS Fallback)।
- **Timing Advance**, UL synchronization; **Random access** (contention-based/free)।

## 11.5 Session management (SM)
Default/dedicated bearer; bearer modification/deactivation; PCC (Gx) rule-based; QoS enforcement; **PDU session modification/release**; Always-on, Idle-mode paging, **Network-triggered Service Request** (downlink data)।

## 11.6 GSM Location Update ও Call
- **Location Update**: MS → BSS → MSC/VLR → HLR (Update Location) → ভিজিটর ডেটা ইনসার্ট → Cancel Location (পুরনো VLR)।
- **MT call**: GMSC → HLR (SRI) → HLR → VLR (PRN) → MSRN → GMSC → Visited MSC → VLR (SIFIC) → **Paging** → Setup।
- **MO call**: Channel Request (RACH) → Immediate Assignment (AGCH) → CM Service Request → Authentication → Ciphering → Setup → Call Proceeding → Alerting → Connect → ACK।

## 11.7 KPI
Call Setup Success Rate (CSSR), Drop Call Rate (DCR), Handover Success Rate (HOSR), RRC Setup Success Rate, E-RAB Setup SR, Accessibility/Retainability/Mobility/Integrity।

**MCQ-তে যা আসে:** RACH ক্রম, Attach ধাপ, A3, X2 vs S1 HO, TAU, RRC_INACTIVE, PDU session, SRVCC, MT call HLR/MSRN।

---
# 12. IMS Architecture for Voice and Multimedia Switching

## 12.1 ধারণা
**IP Multimedia Subsystem** (3GPP Rel-5): **SIP**-ভিত্তিক, access-independent সার্ভিস ডেলিভারি। VoLTE, ViLTE, VoNR, VoWiFi, RCS, SMS-over-IP, Presence, Conferencing।

## 12.2 Layers
Application layer (AS), IMS/Control layer (CSCF, HSS, MRF), Transport/Access layer (EPC/5GC, WiFi, fixed)।

## 12.3 নোড ও কাজ
| Node | কাজ |
|---|---|
| **P-CSCF** | UE-র প্রথম যোগাযোগ, SIP proxy, IPsec/TLS, compression, **Rx** দিয়ে PCRF/PCF-কে QoS জানানো, emergency detection |
| **I-CSCF** | home network entry, HSS query (**Cx**), S-CSCF selection, topology hiding |
| **S-CSCF** | **registrar**, session control, iFC অনুযায়ী AS invoke (**ISC**), routing |
| **E-CSCF** | emergency call routing (LRF/PSAP) |
| **HSS** | subscriber/IMS profile (IMPU/IMPI, iFC) |
| **AS (TAS/MMTel)** | call forwarding, barring, hold, CLIP/CLIR, conference |
| **MRFC/MRFP** | conference, tone/announcement, transcoding |
| **BGCF** | PSTN breakout নির্ধারণ |
| **MGCF + IM-MGW** | SIP↔ISUP signalling ও media (RTP↔TDM) interworking |
| **SBC/IBCF** | border control, interconnect |
| **ENUM/DNS** | number→SIP URI |

## 12.4 Interfaces
**Gm** (UE–P-CSCF), **Mw** (CSCF–CSCF), **Mm**, **Mg** (CSCF–MGCF), **Mi**, **Mj**, **Mr** (S-CSCF–MRF), **Cx/Dx** (CSCF–HSS, Diameter), **Sh** (AS–HSS), **ISC** (S-CSCF–AS), **Rx** (P-CSCF–PCRF), **Gx**, **Ut** (UE–AS, XCAP)।

## 12.5 Identities
**IMPI** (Private user identity, SIP authentication; NAI), **IMPU** (Public: sip:user@domain / tel:+880...)। ISIM/USIM থেকে। **iFC** (initial Filter Criteria) trigger দেয়।

## 12.6 IMS Registration
UE (IP পাওয়ার পর P-CSCF discovery) → REGISTER → P-CSCF → I-CSCF → S-CSCF → Cx: MAR/MAA (vector) → **401 Unauthorized** (nonce/AKA challenge) → UE REGISTER (response, IPsec SA) → Cx: SAR/SAA (profile) → **200 OK** → third-party register to AS → SUBSCRIBE reg event।

## 12.7 VoLTE call setup
INVITE (SDP offer) → P-CSCF → S-CSCF → (AS) → ... → terminating UE → 183 Session Progress (SDP answer) → **PRACK** → **Dedicated bearer QCI 1** (via Rx/Gx) → UPDATE → 180 Ringing → 200 OK → ACK → RTP (AMR/EVS)। Signalling bearer QCI 5 (default IMS APN)।
- **Preconditions** (QoS reserve আগে), **SRVCC** (VoLTE → 2G/3G CS: MSC enhanced for SRVCC), **eSRVCC**, **rSRVCC**।
- **VoWiFi**: ePDG (EPC) বা N3IWF (5GC) এর মাধ্যমে IMS। **VoNR**: 5G NR + IMS; **EPS Fallback**।
- **SMS over IMS/SGs**, **RCS** (Rich Communication Services)।

## 12.8 নিরাপত্তা ও কাজ
IMS AKA, IPsec ESP (UE–P-CSCF), TLS (core), SIP digest। Charging: Diameter Rf/Ro, **CDF/OCS**। Interconnect: IBCF/NNI, IPX। 

**MCQ-তে যা আসে:** CSCF তিন প্রকারের কাজ, Cx/Gm/Rx/ISC, IMPI/IMPU, QCI 1/5, SRVCC, MGCF/BGCF/MRF, 401 challenge।

---
# 13. Mobile User Data Management & Authentication

## 13.1 Identifiers
| ID | বর্ণনা |
|---|---|
| **IMSI** | ≤15 digit = **MCC (3) + MNC (2/3) + MSIN**; সাবস্ক্রাইবার শনাক্তকারী (E.212) |
| **MSISDN** | ফোন নম্বর (E.164, ≤15) = CC + NDC + SN (বাংলাদেশ +880 1X...) |
| **IMEI** | 15 digit = **TAC (8) + SNR (6) + Check digit (Luhn)**; IMEISV = 16 (TAC 8 + SNR 6 + SVN 2) |
| **TMSI/P-TMSI** | অস্থায়ী (2G/3G) |
| **GUTI** | LTE temporary (GUMMEI + M-TMSI) |
| **SUPI / SUCI** | 5G permanent / concealed |
| **5G-GUTI, 5G-S-TMSI** | 5G temporary |
| **LAI** = MCC+MNC+LAC; **CGI** = LAI+CI; **TAI** = PLMN+TAC |
| **MSRN** | roaming number (call delivery) |
| **ICCID** | SIM কার্ড সিরিয়াল (≤19–20 digit) |
বাংলাদেশ **MCC = 470**; MNC: GP 01, Robi 02, Banglalink 03, Teletalk 04 (সাধারণভাবে পরিচিত; যাচাই করুন)।

## 13.2 SIM/USIM/ISIM/eSIM
- SIM (2G): IMSI, Ki, A3/A8। **USIM** (3G+): K, f1–f5, mutual authentication। **ISIM** (IMS): IMPI/IMPU। **UICC** = ভৌত কার্ড।
- **eSIM (eUICC)**: remote provisioning (SM-DP+)। Form factors: Mini/Micro/Nano SIM।

## 13.3 Security Principles
Confidentiality (ciphering), Integrity, Authentication, Authorization, Non-repudiation, Availability, Privacy (identity confidentiality)।

## 13.4 GSM Authentication & Ciphering
- AuC: **(RAND, Ki) → A3 → SRES; A8 → Kc**; Triplet = **RAND, SRES, Kc**।
- MS ও VLR SRES তুলনা করে। **শুধু network → user authenticate (one-way)**।
- Air-interface cipher: **A5/1** (Europe, দুর্বল), A5/2 (export, ভাঙা), **A5/3** (KASUMI)। Kc 64-bit।
- **Weakness**: fake BTS (IMSI catcher), downgrade।

## 13.5 UMTS/LTE AKA
- **Quintet**: RAND, XRES, CK, IK, AUTN (AUTN = SQN⊕AK ‖ AMF ‖ MAC)। **Mutual authentication** (UE AUTN যাচাই করে), **SQN** replay আটকায়।
- **LTE key hierarchy**: K (USIM/AuC) → CK, IK → **KASME** (HSS/UE, serving network ID সহ) → **KeNB**, **KNASenc, KNASint** → KRRCenc/int, KUPenc।
- Algorithms: **EEA0/1/2/3** = null / **SNOW 3G** / **AES** / **ZUC**; **EIA1/2/3** integrity। NAS ও AS আলাদা।
- Security Mode Command (NAS & AS)।

## 13.6 5G Security
- **5G-AKA ও EAP-AKA'**; **SUPI** কখনো পরিষ্কার পাঠানো হয় না — **SUCI** (ECIES: Profile A Curve25519 / B secp256r1; home-network public key)।
- Key hierarchy: K → CK/IK → **KAUSF → KSEAF → KAMF** → KNASint/enc, **KgNB** → KRRC, KUP।
- Functions: **SEAF** (AMF-এ), **AUSF**, **ARPF/UDM**, **SIDF** (SUCI de-conceal)।
- সম্পূর্ণ **user-plane integrity protection** (optional), **NEA/NIA 1–3**, **SEPP** (roaming, N32), network domain security।
- Home network control বেশি (visited network কে auth result নিশ্চিত করতে হয়)।

## 13.7 User data management
Provisioning (CRM → HLR/HSS/UDM), subscription profile: services, APN/DNN, AMBR, QoS profile, roaming, barring, CAMEL/IN triggers। **Data layered architecture (DLA)**: Front-End (stateless) + UDR/Back-End।

## 13.8 অন্যান্য
Lawful Interception, SIM swap fraud, IMSI catcher (Stingray) প্রতিরোধ: SUCI, **SIM registration (বাংলাদেশে বায়োমেট্রিক)**, IMEI registration/blocking (NEIR)।

**MCQ-তে যা আসে:** IMSI/IMEI গঠন, triplet/quintet, A3/A8/A5, কে কাকে authenticate করে, KASME, SUCI/SUPI, 5G-AKA, EEA algorithms।

---
# 14. HLR, HSS, and Registry Systems for Mobile Communication

## 14.1 GSM registers
| Register | কী রাখে | অবস্থান |
|---|---|---|
| **HLR** | স্থায়ী profile (IMSI, MSISDN, services, barring, forwarding), বর্তমান **VLR/MSC address**, SGSN address | home network |
| **VLR** | visiting subscriber-এর temporary data (TMSI, LAI, copy profile, auth info) | সাধারণত MSC-র সাথে সমন্বিত |
| **AuC** | Ki, algorithm A3/A8, vector generator | HLR-এর সাথে |
| **EIR** | IMEI list (White/Grey/Black) | নেটওয়ার্কে |
| **GMLC/SMLC** | location services | |
সুরক্ষা: AuC ও HLR অত্যন্ত সুরক্ষিত; Ki কখনো বেরোয় না।

## 14.2 কার্যপ্রবাহ
- **Location Update**: MS নতুন LA → VLR নতুন হলে HLR-কে **Update Location** → HLR profile ডাউনলোড (**Insert Subscriber Data**) → পুরনো VLR-কে **Cancel Location**।
- **Call delivery**: GMSC → HLR: **Send Routing Information (SRI)** → HLR → VLR: **Provide Roaming Number (PRN)** → **MSRN** → HLR → GMSC।
- **SMS**: SMSC → GMSC → HLR (SRI-for-SM) → MSC/SGSN।
- **Interfaces**: C (GMSC–HLR), D (VLR–HLR), Gr (SGSN–HLR), Gc (GGSN–HLR), F (MSC–EIR); প্রোটোকল **MAP over SS7 (TCAP/SCCP)**, বা **SIGTRAN**।
- Number Portability: **MNP** — NPDB/IPDB, ported number-এর জন্য query/ACQ/SRF/onward routing।

## 14.3 HSS (LTE/IMS)
- HSS = **HLR + AuC + IMS ডেটা**: EPS subscription (APN, QoS, AMBR, ARP), IMS profile (IMPU/IMPI, iFC, S-CSCF name), authentication vector।
- **S6a/S6d** (MME/SGSN–HSS), **Cx/Dx** (CSCF–HSS), **Sh** (AS–HSS), **Zh**; সবই **Diameter** (RFC 6733, SCTP/TCP)।
- Diameter messages: ULR/ULA (Update Location), AIR/AIA (Authentication Info), CLR (Cancel Location), IDR (Insert Subscriber Data), MAR/MAA, SAR/SAA, LIR/LIA, UAR/UAA।
- **Diameter Routing Agent (DRA)**, **DEA (Edge Agent)**; Realm, Origin-Host/Realm।
- **SPR** (Subscription Profile Repository, PCRF-এর জন্য), **UDC** (User Data Convergence) architecture।

## 14.4 5GC data functions
- **UDM** (Nudm; SUCI de-conceal, auth credential, subscription, SMS/registration data), **UDR** (Nudr; subscription/policy/exposure data), **UDSF** (unstructured data), **AUSF**।
- Stateless NF + UDSF ⇒ resilience; HTTP/2 SBI।

## 14.5 তুলনা
| 2G/3G | 4G | 5G |
|---|---|---|
| HLR | HSS | UDM/UDR |
| AuC | HSS (AuC অংশ) | ARPF/AUSF |
| VLR | MME (data) | AMF |
| EIR | EIR (S13) | 5G-EIR (N17) |
| MAP/SS7 | Diameter | HTTP/2 (SBI) |

## 14.6 অন্যান্য রেজিস্ট্রি
- **EIR/CEIR (Central EIR)**: চুরি/নকল handset ব্লক (বাংলাদেশে **NEIR**, BTRC)।
- **DNS/ENUM registry**, **Number portability database**, **Domain registry**, **GSMA IMEI DB**।
- সমস্যা/রিসিলিয়েন্স: HLR geo-redundancy, pool, load sharing।

**MCQ-তে যা আসে:** HLR/VLR/AuC/EIR কী রাখে, HLR→HSS→UDM, MSRN ক্রম, S6a/Cx/Sh/Gr, MAP বনাম Diameter, white/grey/black list।
