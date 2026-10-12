# Topic 09: Packet Switching and Call Control

**Q1.** In circuit switching:
A) A dedicated path is reserved for the call duration  B) Data is split into packets  C) No setup needed  D) Path changes per packet
**Answer: A)**
**ব্যাখ্যা:** PSTN/2G কল circuit switched; resource কল শেষ না হওয়া পর্যন্ত reserved।

**Q2.** Packet switching efficiently shares resources through:
A) Statistical multiplexing  B) Dedicated slots  C) Analog filters  D) Frequency guard
**Answer: A)**
**ব্যাখ্যা:** প্যাকেট আসা অনুযায়ী ব্যান্ডউইথ ব্যবহৃত হয়, idle সময়ে অপচয় কম।

**Q3.** Which is a feature of virtual-circuit packet switching?
A) A logical path is set up before data transfer  B) No routing  C) Each packet has no header  D) No ordering
**Answer: A)**
**ব্যাখ্যা:** Datagram-এ প্রতিটি প্যাকেট স্বতন্ত্র; virtual circuit-এ আগে path সেটআপ হয় (যেমন MPLS LSP)।

**Q4.** The default port of SIP over UDP/TCP is:
A) 5060  B) 80  C) 443  D) 25
**Answer: A) 5060**
**ব্যাখ্যা:** SIP over TLS = 5061।

**Q5.** SIP response code 180 means:
A) Ringing  B) OK  C) Trying  D) Busy
**Answer: A) Ringing**
**ব্যাখ্যা:** 100 = Trying, 180 = Ringing, 200 = OK, 486 = Busy Here।

**Q6.** The SIP message used to terminate a session is:
A) BYE  B) INVITE  C) ACK  D) REGISTER
**Answer: A) BYE**
**ব্যাখ্যা:** CANCEL শুরু হওয়া কিন্তু সম্পন্ন হয়নি এমন INVITE বাতিল করে।

**Q7.** SDP in a SIP call is used to:
A) Describe media (codec, IP, port)  B) Authenticate  C) Route  D) Charge
**Answer: A)**
**ব্যাখ্যা:** Session Description Protocol offer/answer মডেলে মিডিয়া প্যারামিটার নেগোসিয়েট করে।

**Q8.** In SS7/ISUP, the first message to set up a call is:
A) IAM  B) ACM  C) ANM  D) REL
**Answer: A) IAM**
**ব্যাখ্যা:** Initial Address Message → ACM (Address Complete) → ANM (Answer) → REL (Release) → RLC।

**Q9.** The ISUP message indicating the called party answered is:
A) ANM  B) IAM  C) RLC  D) ACM
**Answer: A) ANM**
**ব্যাখ্যা:** ANM পাওয়ার পর বিলিং শুরু হয়।

**Q10.** The gateway control protocol standardized jointly by ITU/IETF is:
A) H.248/Megaco  B) FTP  C) SNMP  D) NTP
**Answer: A) H.248/Megaco**
**ব্যাখ্যা:** MGC (softswitch) ও MGW-র মধ্যে নিয়ন্ত্রণ প্রোটোকল।

**Q11.** A softswitch separates:
A) Call control from media transport  B) Radio from core  C) SIM from phone  D) Power from signal
**Answer: A)**
**ব্যাখ্যা:** Media Gateway Controller (সিগন্যালিং) ও Media Gateway (মিডিয়া) আলাদা হয়।

**Q12.** Which parameter is most critical for real-time voice over packets?
A) Delay and jitter  B) File size  C) Color depth  D) Screen resolution
**Answer: A)**
**ব্যাখ্যা:** One-way delay সাধারণত <150 ms রাখা উচিত (ITU G.114)।
