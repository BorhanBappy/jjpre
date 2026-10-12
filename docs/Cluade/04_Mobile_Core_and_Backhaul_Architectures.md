# Topic 04: Mobile Core and Backhaul Architectures

**Q1.** In GSM, the interface between BTS and BSC is:
A) Um  B) Abis  C) A  D) E
**Answer: B) Abis**
**ব্যাখ্যা:** Um = MS↔BTS (air), Abis = BTS↔BSC, A = BSC↔MSC।

**Q2.** In UMTS, the interface between NodeB and RNC is:
A) Iub  B) Iu  C) Iur  D) Uu
**Answer: A) Iub**
**ব্যাখ্যা:** Iub = NodeB↔RNC, Iur = RNC↔RNC, Iu-CS/Iu-PS = RNC↔core, Uu = UE↔NodeB।

**Q3.** The LTE interface between MME and Serving Gateway is:
A) S11  B) S6a  C) S5  D) SGi
**Answer: A) S11**
**ব্যাখ্যা:** S11 = MME↔S-GW, S6a = MME↔HSS, S5/S8 = S-GW↔P-GW, SGi = P-GW↔PDN।

**Q4.** Which EPC node is purely a control-plane entity?
A) S-GW  B) P-GW  C) MME  D) eNodeB
**Answer: C) MME**
**ব্যাখ্যা:** MME NAS signaling, authentication, mobility ও bearer management করে, user data বহন করে না।

**Q5.** The P-GW connects EPC to:
A) External packet data networks (Internet/IMS)  B) HSS  C) eNodeB  D) MME
**Answer: A)**
**ব্যাখ্যা:** P-GW UE-কে IP address দেয় এবং SGi ইন্টারফেসে PDN-এ গেটওয়ে হিসেবে কাজ করে।

**Q6.** The function of PCRF in EPC is:
A) Policy and charging control  B) Authentication  C) Radio scheduling  D) Paging
**Answer: A)**
**ব্যাখ্যা:** QoS policy ও charging rule নির্ধারণ করে P-GW (PCEF)-কে জানায়। 5G-তে PCF।

**Q7.** In 5G Core, the interface between SMF and UPF is:
A) N4  B) N2  C) N3  D) N6
**Answer: A) N4**
**ব্যাখ্যা:** N4 (PFCP protocol) দিয়ে SMF UPF-কে নিয়ন্ত্রণ করে। N3 = gNB↔UPF, N6 = UPF↔DN, N9 = UPF↔UPF।

**Q8.** Which backhaul medium offers the highest capacity?
A) Copper  B) Microwave  C) Optical fiber  D) Satellite
**Answer: C) Optical fiber**
**ব্যাখ্যা:** ফাইবারে Gbps–Tbps ক্যাপাসিটি ও কম latency পাওয়া যায়।

**Q9.** Synchronization in packet-based backhaul is commonly provided by:
A) SyncE and IEEE 1588 (PTP)  B) HTTP  C) SMTP  D) DNS
**Answer: A)**
**ব্যাখ্যা:** TDD/LTE-A/5G-তে সঠিক frequency/phase sync লাগে; SyncE frequency এবং PTP phase/time দেয়।

**Q10.** The E-band microwave frequency range is approximately:
A) 6–11 GHz  B) 18–23 GHz  C) 71–86 GHz  D) 200–300 GHz
**Answer: C) 71–86 GHz**
**ব্যাখ্যা:** E-band (71–76 / 81–86 GHz) মাল্টি-Gbps ক্ষমতার short-hop backhaul দেয়, তবে বৃষ্টি-ক্ষয় বেশি।

**Q11.** A GMSC is used to:
A) Route incoming calls to the correct MSC by querying HLR  B) Control radio  C) Store IMEI  D) Allocate IP
**Answer: A)**
**ব্যাখ্যা:** Gateway MSC নেটওয়ার্কে আসা কলের জন্য HLR-এ routing info (SRI) জিজ্ঞেস করে সঠিক visited MSC-তে পাঠায়।

**Q12.** Carrier Ethernet and MPLS are used in backhaul mainly to:
A) Provide packet transport with QoS and resilience  B) Generate RF  C) Encrypt SIM  D) Allocate spectrum
**Answer: A)**
**ব্যাখ্যা:** MPLS-TP/Carrier Ethernet (MEF) পরিষেবা-মান, OAM ও protection switching দেয়।
