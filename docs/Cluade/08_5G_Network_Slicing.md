# Topic 08: 5G Network Slicing

**Q1.** Which are the three main 5G usage scenarios defined by ITU (IMT-2020)?
A) eMBB, URLLC, mMTC  B) GSM, UMTS, LTE  C) FDD, TDD, SDD  D) VoIP, IPTV, VoD
**Answer: A)**
**ব্যাখ্যা:** eMBB = বেশি গতি, URLLC = অতি কম latency/নির্ভরযোগ্যতা, mMTC = বিপুল IoT সংযোগ।

**Q2.** Network slice is identified by:
A) S-NSSAI  B) IMEI  C) MSISDN  D) APN only
**Answer: A) S-NSSAI**
**ব্যাখ্যা:** Single Network Slice Selection Assistance Information = SST (8 bit) + SD (24 bit, optional)।

**Q3.** The standardized SST value 1 represents:
A) eMBB  B) URLLC  C) MIoT  D) V2X
**Answer: A) eMBB**
**ব্যাখ্যা:** SST 1 = eMBB, 2 = URLLC, 3 = MIoT (mMTC), 4 = V2X।

**Q4.** The 5GC function that helps select appropriate network slice instances is:
A) NSSF  B) AUSF  C) UPF  D) SMSF
**Answer: A) NSSF**
**ব্যাখ্যা:** Network Slice Selection Function UE-র allowed NSSAI অনুযায়ী slice ও AMF নির্বাচন করে।

**Q5.** The target user-plane latency for URLLC is about:
A) 1 ms  B) 10 ms  C) 50 ms  D) 100 ms
**Answer: A) 1 ms**
**ব্যাখ্যা:** ITU লক্ষ্য: URLLC user-plane latency ~1 ms, eMBB ~4 ms।

**Q6.** The target connection density for mMTC is:
A) 10⁶ devices/km²  B) 10³ devices/km²  C) 10 devices/km²  D) 100 devices/km²
**Answer: A) 10⁶ devices/km²**
**ব্যাখ্যা:** IMT-2020 লক্ষ্য প্রতি বর্গকিমিতে ১০ লক্ষ ডিভাইস।

**Q7.** The target peak data rate of IMT-2020 (eMBB downlink) is:
A) 20 Gbps  B) 1 Gbps  C) 100 Mbps  D) 300 Mbps
**Answer: A) 20 Gbps**
**ব্যাখ্যা:** Peak DL 20 Gbps, UL 10 Gbps; user-experienced rate ১০০ Mbps (DL)।

**Q8.** Network slicing is enabled mainly by:
A) Virtualization (NFV/SDN) and cloud-native design  B) Analog switching  C) Copper loops  D) Manual cabling
**Answer: A)**
**ব্যাখ্যা:** একই ভৌত অবকাঠামোতে একাধিক logical end-to-end নেটওয়ার্ক তৈরি হয়।

**Q9.** Slice isolation means:
A) Issues in one slice do not affect another  B) All slices share fate  C) Slices are deleted  D) Only frequency separated
**Answer: A)**
**ব্যাখ্যা:** Performance ও security isolation SLA রক্ষা করে।

**Q10.** NSMF in slice management stands for:
A) Network Slice Management Function  B) New Signal Mobile Function  C) Network Service Mapping File  D) None
**Answer: A)**
**ব্যাখ্যা:** NSMF সম্পূর্ণ Network Slice Instance-এর লাইফসাইকেল ম্যানেজ করে; NSSMF সাব-নেটওয়ার্ক slice ম্যানেজ করে।

**Q11.** Remote surgery and autonomous driving most suit which slice?
A) URLLC  B) eMBB  C) mMTC  D) Voice only
**Answer: A) URLLC**
**ব্যাখ্যা:** এতে নির্ভরযোগ্যতা ও অতি-কম বিলম্ব সবচেয়ে গুরুত্বপূর্ণ।

**Q12.** Smart-meter and sensor networks most suit which slice?
A) mMTC  B) eMBB  C) URLLC  D) None
**Answer: A) mMTC**
**ব্যাখ্যা:** কম ডেটা, কম পাওয়ার ও বিপুল সংখ্যক ডিভাইস।
