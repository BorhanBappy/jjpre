# Topic 05: Packet-Switched Mobile Networks

**Q1.** The two core nodes added to GSM for GPRS are:
A) SGSN and GGSN  B) MME and S-GW  C) AMF and SMF  D) MSC and VLR
**Answer: A) SGSN and GGSN**
**ব্যাখ্যা:** SGSN mobility/session ম্যানেজ করে, GGSN বাইরের PDN-এর গেটওয়ে।

**Q2.** The theoretical maximum GPRS data rate (8 timeslots, CS-4) is approximately:
A) 56 kbps  B) 171.2 kbps  C) 384 kbps  D) 2 Mbps
**Answer: B) 171.2 kbps**
**ব্যাখ্যা:** ৮ slot × 21.4 kbps (CS-4) = 171.2 kbps।

**Q3.** EDGE improves data rate over GPRS by using:
A) 8-PSK modulation  B) OFDM  C) 256-QAM  D) CDMA
**Answer: A) 8-PSK**
**ব্যাখ্যা:** GMSK-এর বদলে 8-PSK প্রতি symbol-এ ৩ বিট বহন করে।

**Q4.** HSDPA uses which key techniques?
A) Adaptive modulation & coding and HARQ  B) Circuit switching  C) FDMA  D) Analog FM
**Answer: A)**
**ব্যাখ্যা:** 16QAM/64QAM, fast scheduling, HARQ ও 2 ms TTI HSDPA-তে ব্যবহৃত।

**Q5.** WCDMA chip rate and channel bandwidth are:
A) 3.84 Mcps, 5 MHz  B) 1.2288 Mcps, 1.25 MHz  C) 200 kcps, 200 kHz  D) 10 Mcps, 20 MHz
**Answer: A)**
**ব্যাখ্যা:** UMTS WCDMA: 3.84 Mcps, 5 MHz। CDMA2000 = 1.2288 Mcps।

**Q6.** LTE downlink multiple access scheme is:
A) OFDMA  B) SC-FDMA  C) TDMA  D) CDMA
**Answer: A) OFDMA**
**ব্যাখ্যা:** LTE DL = OFDMA, UL = SC-FDMA।

**Q7.** SC-FDMA is chosen for LTE uplink because it has:
A) Lower PAPR  B) Higher PAPR  C) No cyclic prefix  D) Wider guard band
**Answer: A) Lower PAPR**
**ব্যাখ্যা:** কম Peak-to-Average Power Ratio UE-র power amplifier ও ব্যাটারির জন্য সুবিধাজনক।

**Q8.** The LTE Transmission Time Interval (TTI) is:
A) 0.5 ms  B) 1 ms  C) 2 ms  D) 10 ms
**Answer: B) 1 ms**
**ব্যাখ্যা:** একটি subframe = 1 ms; frame = 10 ms (10 subframes)।

**Q9.** The UDP port used by GTP-U is:
A) 2152  B) 2123  C) 5060  D) 80
**Answer: A) 2152**
**ব্যাখ্যা:** GTP-U = UDP 2152, GTP-C = UDP 2123, SIP = 5060।

**Q10.** In LTE, the UE's IP address is allocated by:
A) P-GW  B) MME  C) HSS  D) eNodeB
**Answer: A) P-GW**
**ব্যাখ্যা:** P-GW (বা DHCP/AAA সহযোগে) UE-কে IPv4/IPv6 address বরাদ্দ করে।

**Q11.** LTE Release 8 theoretical peak DL rate with 20 MHz and 4×4 MIMO is about:
A) 100 Mbps  B) 150 Mbps  C) 300 Mbps  D) 1 Gbps
**Answer: C) 300 Mbps**
**ব্যাখ্যা:** Rel-8: DL ≈ 300 Mbps, UL ≈ 75 Mbps। 2×2 MIMO-তে ≈ 150 Mbps।

**Q12.** QCI in LTE is used to define:
A) QoS class of a bearer  B) Cell ID  C) Cipher key  D) IMSI range
**Answer: A)**
**ব্যাখ্যা:** QoS Class Identifier delay budget, packet loss ও priority নির্ধারণ করে। (QCI 1 = voice, QCI 9 = default data)
