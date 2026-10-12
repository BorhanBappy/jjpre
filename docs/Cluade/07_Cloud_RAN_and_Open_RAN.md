# Topic 07: Cloud RAN (C-RAN) & Open RAN (O-RAN)

**Q1.** In C-RAN the baseband processing is:
A) Centralized in a BBU pool  B) Done in each UE  C) Done in the core only  D) Not required
**Answer: A)**
**ব্যাখ্যা:** সাইটে শুধু RRH থাকে; BBU কেন্দ্রে pool হয়ে resource sharing ও coordination সহজ করে।

**Q2.** The link between RRH and BBU is called:
A) Fronthaul  B) Midhaul  C) Backhaul  D) Sidehaul
**Answer: A) Fronthaul**
**ব্যাখ্যা:** DU↔CU = Midhaul, CU↔Core = Backhaul।

**Q3.** Which fronthaul interface standard is used in traditional C-RAN?
A) CPRI  B) HTTP  C) FTP  D) MQTT
**Answer: A) CPRI**
**ব্যাখ্যা:** CPRI অত্যন্ত বেশি bandwidth চায়; 5G-তে eCPRI (packet-based) ব্যবহৃত।

**Q4.** The O-RAN functional units are:
A) O-RU, O-DU, O-CU  B) AMF, SMF, UPF  C) MME, HSS, PCRF  D) VNF, VIM, NFVO
**Answer: A)**
**ব্যাখ্যা:** O-RU = রেডিও, O-DU = real-time baseband, O-CU = RRC/PDCP/SDAP।

**Q5.** The control loop time of the Near-RT RIC is:
A) <10 ms  B) 10 ms–1 s  C) >1 s  D) >1 hour
**Answer: B) 10 ms–1 s**
**ব্যাখ্যা:** Non-RT RIC-এর loop >1 s। Near-RT RIC-এ xApp, Non-RT RIC-এ rApp চলে।

**Q6.** The interface between Near-RT RIC and E2 nodes is:
A) E2  B) A1  C) O1  D) F1
**Answer: A) E2**
**ব্যাখ্যা:** A1 = Non-RT RIC↔Near-RT RIC (policy), O1 = SMO↔RAN (OAM), F1 = CU↔DU।

**Q7.** The A1 interface carries:
A) Policy guidance and ML models from Non-RT to Near-RT RIC  B) User data  C) NAS  D) GTP-U
**Answer: A)**
**ব্যাখ্যা:** A1 policy, enrichment info ও AI/ML model ডেলিভারি করে।

**Q8.** The O-RAN open fronthaul interface typically uses which functional split?
A) Split 7.2x  B) Split 1  C) Split 8 only  D) Split 3
**Answer: A) Split 7.2x**
**ব্যাখ্যা:** O-DU ও O-RU-র মধ্যে 7.2x split (low-PHY O-RU-তে) নির্ধারিত; CPRI Split 8-এর তুলনায় কম bandwidth।

**Q9.** The 3GPP interface between CU and DU is:
A) F1  B) X2  C) S1  D) N2
**Answer: A) F1**
**ব্যাখ্যা:** gNB-CU ও gNB-DU F1 (F1-C/F1-U) দিয়ে যুক্ত। CU-CP↔CU-UP = E1।

**Q10.** SMO in O-RAN stands for:
A) Service Management and Orchestration  B) Simple Mobile Operator  C) Signal Modulation Option  D) Site Monitoring Output
**Answer: A)**
**ব্যাখ্যা:** SMO-র ভেতরে Non-RT RIC থাকে এবং O1, O2, A1 ইন্টারফেস পরিচালনা করে।

**Q11.** The O2 interface connects:
A) SMO and O-Cloud  B) UE and gNB  C) O-DU and O-RU  D) AMF and SMF
**Answer: A)**
**ব্যাখ্যা:** O-Cloud-এ virtualized RAN functions ডিপ্লয়/ম্যানেজ করতে O2 ব্যবহৃত।

**Q12.** The main goal of O-RAN is:
A) Open, interoperable multi-vendor RAN with intelligence  B) Single-vendor lock-in  C) Removing the core  D) Removing spectrum
**Answer: A)**
**ব্যাখ্যা:** O-RAN Alliance (2018) খোলা ইন্টারফেস, virtualization ও AI/ML দিয়ে খরচ কমাতে চায়।
