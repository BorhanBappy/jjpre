# Topic 02: Radio Communication Basics

**Q1.** The VHF band covers frequencies:
A) 3–30 MHz  B) 30–300 MHz  C) 300 MHz–3 GHz  D) 3–30 GHz
**Answer: B) 30–300 MHz**
**ব্যাখ্যা:** HF 3–30 MHz, VHF 30–300 MHz, UHF 300 MHz–3 GHz, SHF 3–30 GHz।

**Q2.** The wavelength of a 1800 MHz signal is approximately:
A) 0.167 m  B) 1.67 m  C) 0.33 m  D) 16.7 m
**Answer: A) 0.167 m**
**ব্যাখ্যা:** λ = c/f = 3×10⁸ / 1.8×10⁹ ≈ 0.167 m।

**Q3.** EIRP is calculated as:
A) Tx power + antenna gain − cable loss  B) Tx power − antenna gain  C) Rx power + path loss  D) Antenna gain × 2
**Answer: A**
**ব্যাখ্যা:** Effective Isotropic Radiated Power = Tx power (dBm) + Antenna gain (dBi) − feeder/cable loss (dB)।

**Q4.** Tx power = 43 dBm, antenna gain = 15 dBi, cable loss = 3 dB. EIRP is:
A) 55 dBm  B) 61 dBm  C) 25 dBm  D) 58 dBm
**Answer: A) 55 dBm**
**ব্যাখ্যা:** 43 + 15 − 3 = 55 dBm।

**Q5.** The thermal noise power density at room temperature is:
A) −174 dBm/Hz  B) −100 dBm/Hz  C) −204 dBm/Hz  D) −144 dBm/Hz
**Answer: A) −174 dBm/Hz**
**ব্যাখ্যা:** N = kT ≈ −174 dBm/Hz (290 K)। ১০ MHz ব্যান্ডউইথে noise floor = −174 + 70 = −104 dBm।

**Q6.** Received signal = −90 dBm, noise floor = −104 dBm. The SNR is:
A) 14 dB  B) −14 dB  C) 194 dB  D) 7 dB
**Answer: A) 14 dB**
**ব্যাখ্যা:** SNR(dB) = Signal(dBm) − Noise(dBm) = −90 − (−104) = 14 dB।

**Q7.** A receiver moves at 108 km/h at 2 GHz carrier. The maximum Doppler shift is:
A) 100 Hz  B) 200 Hz  C) 600 Hz  D) 2 kHz
**Answer: B) 200 Hz**
**ব্যাখ্যা:** v = 30 m/s। fd = v·f/c = 30 × 2×10⁹ / 3×10⁸ = 200 Hz।

**Q8.** Which technique is used to mitigate multipath fading?
A) Diversity reception  B) Increasing carrier frequency  C) Reducing antenna height only  D) Using AM
**Answer: A) Diversity reception**
**ব্যাখ্যা:** Space, frequency, time বা polarization diversity ফেডিংয়ের প্রভাব কমায়।

**Q9.** The ideal VSWR value is:
A) 0  B) 1:1  C) 2:1  D) ∞
**Answer: B) 1:1**
**ব্যাখ্যা:** VSWR 1:1 মানে কোনো reflection নেই, সম্পূর্ণ matching। বেশি VSWR মানে বেশি reflected power।

**Q10.** For reliable microwave link, the minimum clearance of the first Fresnel zone should be about:
A) 0%  B) 20%  C) 60%  D) 200%
**Answer: C) 60%**
**ব্যাখ্যা:** প্রথম Fresnel zone-এর অন্তত ৬০% বাধামুক্ত থাকলে free-space-এর কাছাকাছি loss হয়।

**Q11.** MIMO primarily increases:
A) Spectral efficiency/capacity  B) Antenna height  C) Cable length  D) Noise
**Answer: A)**
**ব্যাখ্যা:** Spatial multiplexing দিয়ে একই ব্যান্ডে একাধিক stream পাঠিয়ে throughput বাড়ে।

**Q12.** The Okumura–Hata model is typically valid for:
A) 150–1500 MHz  B) 28–60 GHz  C) 10–100 kHz  D) 3–10 GHz
**Answer: A) 150–1500 MHz**
**ব্যাখ্যা:** Macrocell path loss মডেল। COST-231 Hata এটিকে ~2 GHz পর্যন্ত বাড়ায়।
