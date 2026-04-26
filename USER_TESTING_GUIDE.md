# User Testing Guide — Portfolio Website

## 🎯 Tujuan Testing

Memvalidasi bahwa portfolio website mudah dipahami oleh 2 tipe user:
1. **User Teknis** (Hiring Manager / Tech Lead)
2. **User Awam** (HRD / Recruiter non-teknis)

**Durasi:** 15-20 menit per user  
**Format:** Remote (Zoom/Google Meet) atau in-person

---

## 👥 Rekrutmen Tester

### User Teknis
- **Profil:** Software Engineer, Data Scientist, Tech Lead
- **Pengalaman:** 2+ tahun di industri tech
- **Kriteria:** Familiar dengan Python, SQL, atau BI tools

### User Awam
- **Profil:** HRD, Recruiter, Business Analyst
- **Pengalaman:** Tidak harus tech background
- **Kriteria:** Pernah review CV/portfolio kandidat

---

## 📋 Testing Scenario

### **Scenario 1: First Impression (2 menit)**

**Instruksi:**
> "Bayangkan Anda sedang mencari kandidat Data Scientist untuk tim Anda.  
> Buka website ini dan ceritakan kesan pertama Anda dalam 30 detik."

**Yang Diobservasi:**
- [ ] Apakah user langsung tahu ini portfolio siapa?
- [ ] Apakah user langsung tahu spesialisasi kandidat?
- [ ] Apakah user tertarik scroll lebih jauh?

**Pertanyaan Follow-up:**
1. Dalam 3 kata, bagaimana Anda mendeskripsikan kandidat ini?
2. Apakah Anda langsung tahu skill utama kandidat?

**Expected Answer:**
- "Data Scientist", "Predictive Analytics", "Business Intelligence"
- User harus bisa menyebutkan minimal 2 dari 3: Python, SQL, SAP

---

### **Scenario 2: Mencari Bukti Kredibilitas (5 menit)**

**Instruksi:**
> "Anda ingin tahu apakah kandidat ini punya pengalaman nyata.  
> Cari 1 proyek yang paling menarik dan ceritakan mengapa."

**Yang Diobservasi:**
- [ ] Apakah user menemukan halaman Projects dengan mudah?
- [ ] Apakah user memahami filter kategori?
- [ ] Apakah user melihat metrik performa (MAPE, Accuracy, dll.)?

**Pertanyaan Follow-up:**
1. Proyek mana yang paling menarik? Mengapa?
2. Apakah Anda melihat hasil terukur dari proyek tersebut?
3. Apakah chart/visualisasi membantu Anda memahami proyek?

**Expected Answer:**
- User harus bisa menyebutkan minimal 1 metrik (contoh: "MAPE 2.3%")
- User harus bisa menjelaskan value bisnis (contoh: "mengurangi dead stock 30%")

---

### **Scenario 3: Memahami Technical Depth (User Teknis) (5 menit)**

**Instruksi:**
> "Anda ingin tahu apakah kandidat ini benar-benar paham teknisnya.  
> Buka detail 1 proyek dan cari informasi teknis."

**Yang Diobservasi:**
- [ ] Apakah user menemukan tab "Code Snippet"?
- [ ] Apakah user memahami stack teknologi yang digunakan?
- [ ] Apakah user melihat metrics (MAPE, R², dll.)?

**Pertanyaan Follow-up:**
1. Apakah Anda yakin kandidat ini bisa coding?
2. Apakah stack teknologi yang digunakan relevan dengan kebutuhan Anda?
3. Apakah Anda ingin melihat lebih banyak detail teknis?

**Expected Answer:**
- User harus bisa menyebutkan minimal 2 teknologi (Python, TensorFlow, SQL)
- User harus merasa "cukup yakin" kandidat punya skill teknis

---

### **Scenario 4: Memahami Business Impact (User Awam) (5 menit)**

**Instruksi:**
> "Anda ingin tahu apakah kandidat ini bisa memberikan value ke bisnis.  
> Cari informasi tentang hasil bisnis dari proyek kandidat."

**Yang Diobservasi:**
- [ ] Apakah user menemukan toggle "Business Impact" di About page?
- [ ] Apakah user memahami metrik bisnis (30% efisiensi, 3 hari saved)?
- [ ] Apakah user merasa kandidat "worth it" untuk diinterview?

**Pertanyaan Follow-up:**
1. Apakah Anda paham value yang kandidat bisa berikan ke perusahaan?
2. Apakah Anda melihat angka/metrik yang konkret?
3. Apakah Anda ingin interview kandidat ini?

**Expected Answer:**
- User harus bisa menyebutkan minimal 1 metrik bisnis (30% efisiensi, 3 hari saved)
- User harus merasa "tertarik" untuk lanjut ke tahap interview

---

### **Scenario 5: Call to Action (2 menit)**

**Instruksi:**
> "Anda tertarik dengan kandidat ini dan ingin menghubungi.  
> Coba cari cara untuk kontak kandidat."

**Yang Diobservasi:**
- [ ] Apakah user menemukan tombol "Contact Me" / "Hubungi Saya"?
- [ ] Apakah user menemukan tombol "Download CV"?
- [ ] Apakah user merasa proses kontak "mudah"?

**Pertanyaan Follow-up:**
1. Apakah Anda menemukan cara untuk kontak kandidat dengan mudah?
2. Apakah Anda ingin download CV terlebih dahulu?

**Expected Answer:**
- User harus menemukan CTA dalam <10 detik
- User harus merasa "tidak ada hambatan" untuk kontak

---

## 📊 Metrics yang Diukur

### Quantitative Metrics

| Metric | Target | Cara Ukur |
|--------|--------|-----------|
| **Time to First Impression** | <30 detik | Stopwatch dari landing sampai user bisa jelaskan value prop |
| **Time to Find Project** | <1 menit | Stopwatch dari instruksi sampai user klik project card |
| **Time to Find CTA** | <10 detik | Stopwatch dari instruksi sampai user klik "Contact" |
| **Task Success Rate** | 100% | Jumlah task berhasil / total task |

### Qualitative Metrics

| Metric | Cara Ukur |
|--------|-----------|
| **Clarity** | "Apakah Anda langsung paham kandidat ini spesialis apa?" (Ya/Tidak) |
| **Credibility** | "Apakah Anda percaya kandidat ini punya pengalaman nyata?" (Skala 1-5) |
| **Interest** | "Apakah Anda tertarik interview kandidat ini?" (Skala 1-5) |
| **Ease of Use** | "Apakah website ini mudah digunakan?" (Skala 1-5) |

---

## 🎤 Post-Testing Interview (5 menit)

### Pertanyaan Umum:
1. **Apa yang paling Anda suka dari website ini?**
2. **Apa yang paling membingungkan?**
3. **Jika Anda bisa ubah 1 hal, apa itu?**
4. **Apakah Anda akan rekomendasikan kandidat ini ke tim Anda?** (Ya/Tidak/Mungkin)

### Pertanyaan Spesifik (User Teknis):
5. **Apakah code snippet membantu Anda memahami skill kandidat?**
6. **Apakah Anda ingin melihat lebih banyak detail teknis?** (contoh: GitHub repo, architecture diagram)

### Pertanyaan Spesifik (User Awam):
7. **Apakah toggle "Business Impact" membantu Anda memahami value kandidat?**
8. **Apakah Anda merasa "overwhelmed" dengan informasi teknis?**

---

## 📝 Template Hasil Testing

### User 1: [Nama] — [Profil: Teknis/Awam]

**Scenario 1: First Impression**
- Time: ___ detik
- Kesan pertama: ___
- Clarity (Ya/Tidak): ___

**Scenario 2: Mencari Bukti Kredibilitas**
- Time to find project: ___ detik
- Proyek yang dipilih: ___
- Metrik yang disebutkan: ___
- Credibility (1-5): ___

**Scenario 3/4: Technical Depth / Business Impact**
- Toggle ditemukan (Ya/Tidak): ___
- Metrik yang disebutkan: ___
- Interest (1-5): ___

**Scenario 5: Call to Action**
- Time to find CTA: ___ detik
- Ease of Use (1-5): ___

**Post-Testing Interview:**
- Yang paling disukai: ___
- Yang paling membingungkan: ___
- Saran perbaikan: ___
- Akan rekomendasikan? (Ya/Tidak/Mungkin): ___

---

## 🔧 Action Items Berdasarkan Hasil Testing

### Jika Time to First Impression >30 detik:
- [ ] Perbesar font H1 di hero section
- [ ] Tambahkan highlight warna pada value proposition
- [ ] Kurangi elemen yang "bersaing" di hero

### Jika User Tidak Menemukan Metrik:
- [ ] Perbesar font metrik di project card
- [ ] Tambahkan warna kontras pada angka
- [ ] Tambahkan icon di sebelah metrik

### Jika User Bingung dengan Toggle:
- [ ] Tambahkan tooltip "Klik untuk lihat detail teknis"
- [ ] Ubah label toggle lebih jelas
- [ ] Tambahkan animasi saat toggle

### Jika User Tidak Menemukan CTA:
- [ ] Perbesar tombol "Contact Me"
- [ ] Tambahkan sticky CTA di bottom
- [ ] Ubah warna tombol lebih kontras

---

## ✅ Success Criteria

Testing dianggap **berhasil** jika:

1. **100% user** bisa jelaskan value proposition dalam <30 detik
2. **100% user** bisa temukan minimal 1 metrik performa
3. **100% user** bisa temukan CTA dalam <10 detik
4. **Rata-rata Credibility score ≥4/5**
5. **Rata-rata Interest score ≥4/5**
6. **Minimal 80% user** akan rekomendasikan kandidat

---

## 📅 Timeline

| Aktivitas | Durasi |
|-----------|--------|
| Rekrutmen tester | 2-3 hari |
| Testing session (2 user) | 1 hari |
| Analisis hasil | 1 hari |
| Implementasi perbaikan | 2-3 hari |
| **Total** | **6-8 hari** |

---

## 🎯 Next Steps After Testing

1. **Compile hasil testing** ke dalam 1 dokumen
2. **Prioritize action items** berdasarkan severity:
   - **P0 (Critical):** User tidak bisa temukan CTA
   - **P1 (High):** User bingung dengan value proposition
   - **P2 (Medium):** User ingin lebih banyak detail
   - **P3 (Low):** Nice-to-have improvements
3. **Implement perbaikan** untuk P0 dan P1
4. **Re-test** dengan user yang sama (optional)

---

**Dibuat oleh:** Kiro AI Assistant  
**Tanggal:** 2026-04-26  
**Versi:** 1.0.0
