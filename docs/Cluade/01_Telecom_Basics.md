# Topic 01: Telecom Basics
*(Exam-style MCQ — English প্রশ্ন, বাংলা ব্যাখ্যা)*

**Q1.** What is the unit of telecommunication traffic intensity?
A) Hertz  B) Erlang  C) Decibel  D) Baud
**Answer: B) Erlang**
**ব্যাখ্যা:** ১ Erlang = একটি চ্যানেল ১ ঘণ্টা সম্পূর্ণ ব্যস্ত থাকা। Hertz = frequency, dB = অনুপাত, Baud = symbol rate।

**Q2.** The nominal bandwidth allocated to a voice channel in telephony is:
A) 1 kHz  B) 4 kHz  C) 20 kHz  D) 64 kHz
**Answer: B) 4 kHz**
**ব্যাখ্যা:** ভয়েসের কার্যকর রেঞ্জ 300–3400 Hz, guard band সহ 4 kHz বরাদ্দ করা হয়।

**Q3.** The correct order of steps in PCM is:
A) Encoding → Sampling → Quantization  B) Sampling → Quantization → Encoding  C) Quantization → Sampling → Encoding  D) Sampling → Encoding → Quantization
**Answer: B**
**ব্যাখ্যা:** আগে analog সিগন্যাল sample করা হয়, তারপর level-এ quantize, শেষে binary code-এ encode।

**Q4.** According to the Nyquist theorem, the minimum sampling rate for a signal with highest frequency fmax is:
A) fmax  B) 2 fmax  C) fmax/2  D) 4 fmax
**Answer: B) 2 fmax**
**ব্যাখ্যা:** fs ≥ 2fmax না হলে aliasing হয়। 4 kHz ভয়েসের জন্য 8000 samples/s।

**Q5.** The bit rate of one E1 line is:
A) 1.544 Mbps  B) 2.048 Mbps  C) 34.368 Mbps  D) 8.448 Mbps
**Answer: B) 2.048 Mbps**
**ব্যাখ্যা:** ৩২ timeslot × ৬৪ kbps = 2.048 Mbps। T1 = 1.544 Mbps (২৪ চ্যানেল)।

**Q6.** Which multiplexing technique assigns different time slots to different users?
A) FDM  B) TDM  C) WDM  D) CDM
**Answer: B) TDM**
**ব্যাখ্যা:** Time Division Multiplexing-এ প্রতিটি ইউজার নির্দিষ্ট সময়-স্লটে পাঠায়। FDM = ফ্রিকোয়েন্সি, WDM = আলোর তরঙ্গদৈর্ঘ্য, CDM = কোড।

**Q7.** WDM is used mainly in:
A) Coaxial cable  B) Optical fiber  C) Twisted pair  D) Microwave only
**Answer: B) Optical fiber**
**ব্যাখ্যা:** Wavelength Division Multiplexing একই ফাইবারে বিভিন্ন wavelength-এ একাধিক সিগন্যাল পাঠায়। DWDM/CWDM এর প্রকার।

**Q8.** A signal has a baud rate of 1200 and each symbol carries 4 bits. The bit rate is:
A) 300 bps  B) 1200 bps  C) 4800 bps  D) 9600 bps
**Answer: C) 4800 bps**
**ব্যাখ্যা:** Bit rate = Baud rate × bits per symbol = 1200 × 4 = 4800 bps।

**Q9.** A walkie-talkie works in which communication mode?
A) Simplex  B) Half duplex  C) Full duplex  D) Broadcast
**Answer: B) Half duplex**
**ব্যাখ্যা:** দুই দিকে যোগাযোগ হয় কিন্তু একসাথে নয়। টেলিফোন = full duplex, রেডিও/টিভি = simplex।

**Q10.** Approximate SQNR of an n-bit uniform quantizer is given by:
A) 3n dB  B) 6.02n + 1.76 dB  C) 10n dB  D) 20n dB
**Answer: B) 6.02n + 1.76 dB**
**ব্যাখ্যা:** প্রতি অতিরিক্ত bit-এ প্রায় ৬ dB উন্নতি। ৮ বিটে ≈ ৪৯.৯ dB।

**Q11.** In DTMF signaling, each key press generates:
A) One tone  B) Two simultaneous tones  C) Three tones  D) A pulse train
**Answer: B) Two simultaneous tones**
**ব্যাখ্যা:** ৪টি low-group ও ৪টি high-group frequency থেকে একটি করে মোট দুটি tone একসাথে যায়।

**Q12.** Which OSI layer is responsible for routing of packets?
A) Data Link  B) Network  C) Transport  D) Session
**Answer: B) Network**
**ব্যাখ্যা:** Network layer (IP) রাউটিং ও logical addressing করে। Data link = MAC/frame, Transport = TCP/UDP।
