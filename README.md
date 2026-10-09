<p align="center">
  <a href="https://nelmkt.com"><img src="assets/banner.png" width="100%" alt="Nelly Almaktoum - نيللي المكتوم: researcher, innovator, ML engineer and green tech"></a>
</p>

<p align="center">
  <b>Undergraduate researcher merging technology with complex problems to contribute in real-world impact.</b><br>
  Computer Science at King Abdulaziz University, FCIT - Waed Distinctive Excellence track, Jeddah, Saudi Arabia<br>
  Youngest UN-certified Saudi researcher - 6 national and international recognitions and 3 national and international awards
</p>

<p align="center">
  <a href="https://nelmkt.com"><img src="https://img.shields.io/badge/Portfolio-nelmkt.com-ff4f9a?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=2a0a20" alt="Portfolio"></a>
  <a href="https://www.linkedin.com/in/nelmkt/"><img src="https://img.shields.io/badge/LinkedIn-nelmkt-ff8a3d?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+PHBhdGggZmlsbD0nd2hpdGUnIGQ9J00yMC40NSAyMC40NWgtMy41NnYtNS41N2MwLTEuMzMtLjAyLTMuMDQtMS44NS0zLjA0LTEuODUgMC0yLjE0IDEuNDUtMi4xNCAyLjk0djUuNjdIOS4zNVY5aDMuNDF2MS41NmguMDVjLjQ4LS45IDEuNjQtMS44NSAzLjM3LTEuODUgMy42IDAgNC4yNyAyLjM3IDQuMjcgNS40NnY2LjI4ek01LjM0IDcuNDNhMi4wNiAyLjA2IDAgMSAxIDAtNC4xMyAyLjA2IDIuMDYgMCAwIDEgMCA0LjEzek03LjEyIDIwLjQ1SDMuNTZWOWgzLjU2djExLjQ1ek0yMi4yMiAwSDEuNzdDLjc5IDAgMCAuNzcgMCAxLjczdjIwLjU0QzAgMjMuMjMuNzkgMjQgMS43NyAyNGgyMC40NWMuOTggMCAxLjc4LS43NyAxLjc4LTEuNzNWMS43M0MyNCAuNzcgMjMuMiAwIDIyLjIyIDB6Jy8+PC9zdmc+&labelColor=2a0a20" alt="LinkedIn"></a>
  <a href="https://x.com/nelmkt"><img src="https://img.shields.io/badge/X-@nelmkt-f2c12e?style=for-the-badge&logo=x&logoColor=white&labelColor=2a0a20" alt="X"></a>
  <a href="mailto:scifinel@gmail.com"><img src="https://img.shields.io/badge/Email-scifinel%40gmail.com-2fbf71?style=for-the-badge&logo=gmail&logoColor=white&labelColor=2a0a20" alt="Email"></a>
</p>

<p align="center">
  <a href="https://orcid.org/0009-0007-9887-0280"><img src="https://img.shields.io/badge/ORCID-0009--0007--9887--0280-3d9be9?style=flat-square&logo=orcid&logoColor=white&labelColor=2a0a20" alt="ORCID"></a>
  <a href="https://scholar.google.com/citations?user=MAgd-b0AAAAJ"><img src="https://img.shields.io/badge/Google%20Scholar-Nelly%20F.%20Almaktoum-6e62e5?style=flat-square&logo=googlescholar&logoColor=white&labelColor=2a0a20" alt="Google Scholar"></a>
  <a href="https://www.researchgate.net/profile/Nelly-Almaktoum"><img src="https://img.shields.io/badge/ResearchGate-Nelly--Almaktoum-a855e0?style=flat-square&logo=researchgate&logoColor=white&labelColor=2a0a20" alt="ResearchGate"></a>
</p>

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## About me

I'm a computer science student at King Abdulaziz University who loves solving problems with code and hardware, from machine learning models and full-stack web apps to [Aykah](https://github.com/nelmkt/Smart-Bin-Aykah), a solar-powered smart waste bin I designed, built and prototyped end to end.

My research connects computing with real-world systems, especially water and the environment: reproducible ML pipelines, satellite data and IoT, from measuring what urban greening really does in [Wahaj](https://github.com/nelmkt/Wahaj-Framework) to catching pipeline leaks in real time with [Maeen](https://github.com/nelmkt/maeen). I'm aiming for a Ph.D. and a career in academia. Away from the keyboard, I'm an artist.

- **Leading** the Technical Committee of the Waed Students Community at KAU
- **Focus areas:** AI/ML engineering, full-stack web development, IoT and embedded systems, remote sensing, sustainable technology
- **Portfolio** at [nelmkt.com](https://nelmkt.com): a playable retro arcade, with a professional mode one click away

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Research and projects

### [Maeen - مَعين](https://github.com/nelmkt/maeen)

<a href="https://github.com/nelmkt/maeen"><img align="right" width="360" src="https://raw.githubusercontent.com/nelmkt/maeen/main/reports/leak_size_sweep.png" alt="Maeen: leak detection and correct pipe segment for every leak size, from under 2% of the flow upward"></a>

Real-time detection, location and explanation of leaks and water-quality problems in water pipelines. It turns in-pipe sensor streams into decisions: what is wrong, where, how serious, why and what to do. *Maeen* is the Quranic word for flowing, pure water.

- **Accuracy:** physics-aware features plus gradient boosting reach 94.1% fault-type accuracy across 6 classes with 0.3% false alarms on unseen scenarios, against 78.5% for classic threshold rules
- **Location:** the right pair of devices 99.9% of the time, within about 110 m on a 5 km line, with a 5-minute median detection delay for leaks
- **Prototype:** complete and working, trained and stress-tested on a physics-based pipeline simulator with randomised leaks, blockages, contamination, corrosion and sensor faults
- **Engineering:** a FastAPI service with an Arabic/English dashboard, plain-language evidence for every alert, a model registry and a CI quality gate

<p>
  <a href="https://github.com/nelmkt/maeen/blob/main/reports/EVALUATION.md"><img src="https://img.shields.io/badge/Evaluation%20report-3d9be9?style=flat-square&labelColor=2a0a20" alt="Evaluation report"></a>
  <img src="https://img.shields.io/badge/Python-3d9be9?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/scikit--learn-3d9be9?style=flat-square&logo=scikitlearn&logoColor=white" alt="scikit-learn">
  <img src="https://img.shields.io/badge/Anomaly%20detection-3d9be9?style=flat-square" alt="Anomaly detection">
  <img src="https://img.shields.io/badge/FastAPI-3d9be9?style=flat-square&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/Docker-3d9be9?style=flat-square&logo=docker&logoColor=white" alt="Docker">
</p>

<br clear="right">

### [Wahaj - وهاج](https://github.com/nelmkt/Wahaj-Framework)

<a href="https://github.com/nelmkt/Wahaj-Framework"><img align="right" width="360" src="https://raw.githubusercontent.com/nelmkt/Wahaj-Framework/v11-framework-ml/figures_r1/fig_r1_dose_contrasts.png" alt="Wahaj: measured land surface temperature change for each number of greened pixels, relative to matched never-vegetated controls"></a>

A reproducible machine learning framework, in Python and Google Earth Engine, for weighing the cooling benefits of urban greening against its energy costs in desalination-dependent cities. Jeddah is the case study.

- **Model:** XGBoost land surface temperature model on Landsat 8, scored with spatial cross-validation (R² 0.795 on 19,650 cells) and benchmarked against random forest, gradient boosting and linear regression
- **Measured cooling:** a matched-contrast benchmark finds −1.18 °C per greened pixel outside the built-up area, checked against an emissivity re-retrieval, alternative NDVI thresholds and a simulation of the sensor's thermal footprint
- **Honest predictions:** counterfactual gates test whether the model's predicted greening effects hold up, and report where they do not
- **Trade-offs:** the Normalized Environmental Gain Index (NEGI), with its assumptions stated, plus a water–energy ledger: each degree of measured cooling carries about 2.9–5.3 MWh per year of desalination energy under central assumptions
- **Reproducible:** archived on Zenodo with code, Earth Engine exports, figures, tables, a reproduction guide and citation metadata

<p>
  <a href="https://doi.org/10.5281/zenodo.23168529"><img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.23168529-2fbf71?style=flat-square&labelColor=2a0a20" alt="DOI"></a>
  <a href="https://github.com/nelmkt/Wahaj-Framework/releases/latest"><img src="https://img.shields.io/github/v/release/nelmkt/Wahaj-Framework?style=flat-square&color=2fbf71&labelColor=2a0a20" alt="Latest release"></a>
  <img src="https://img.shields.io/badge/Python-2fbf71?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/XGBoost-2fbf71?style=flat-square" alt="XGBoost">
  <img src="https://img.shields.io/badge/Google%20Earth%20Engine-2fbf71?style=flat-square&logo=googleearthengine&logoColor=white" alt="Google Earth Engine">
  <img src="https://img.shields.io/badge/Landsat%208-2fbf71?style=flat-square" alt="Landsat 8">
  <img src="https://img.shields.io/badge/Spatial%20statistics-2fbf71?style=flat-square" alt="Spatial statistics">
</p>

<br clear="right">

### [Aykah - آيكة](https://github.com/nelmkt/Smart-Bin-Aykah)

<a href="https://github.com/nelmkt/Smart-Bin-Aykah"><img align="right" width="220" src="https://raw.githubusercontent.com/nelmkt/Smart-Bin-Aykah/main/images/prototype.jpg" alt="The Aykah smart bin prototype"></a>

A patented, cost-effective, solar-powered IoT smart bin, taken from scientific research on a Sustainable Development Goal problem all the way to a working prototype and a business concept.

- **Hardware:** Raspberry Pi with ultrasonic fill sensing, an LCD interface, LED status indicators and air filtration
- **Research:** a community survey of 222 participants on waste disposal habits and acceptance of smart waste technology
- **Patent:** the system is protected by a patent
- **Recognition:** Young Researchers Award (Modern Technologies) at UNCCD COP16, and featured in the [Saudi Gazette](https://saudigazette.com.sa/article/664214/saudi-arabia/how-curiosity-led-a-saudi-teenager-to-develop-a-un-award-winning-smart-waste-management-solution)

<p>
  <img src="https://img.shields.io/badge/Patented-a855e0?style=flat-square" alt="Patented">
  <img src="https://img.shields.io/badge/IoT-a855e0?style=flat-square" alt="IoT">
  <img src="https://img.shields.io/badge/Raspberry%20Pi-a855e0?style=flat-square&logo=raspberrypi&logoColor=white" alt="Raspberry Pi">
  <img src="https://img.shields.io/badge/Solar%20power-a855e0?style=flat-square" alt="Solar power">
  <img src="https://img.shields.io/badge/Rapid%20prototyping-a855e0?style=flat-square" alt="Rapid prototyping">
</p>

<br clear="right">

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Recognition

| Year | Recognition | Awarded by |
| :---: | --- | --- |
| — | **Patent** for Aykah, a solar-powered IoT smart waste management system | Inventor: Nelly Almaktoum |
| 2026 | [Feature story](https://saudigazette.com.sa/article/664214/saudi-arabia/how-curiosity-led-a-saudi-teenager-to-develop-a-un-award-winning-smart-waste-management-solution) on my journey from curiosity to the award-winning Aykah smart bin | Saudi Gazette |
| 2026 | Certificate of Appreciation for distinguished participation in local and international competitions | King Abdulaziz University |
| 2026 | Academic Excellence Award 2025–2026, for a GPA of 4.5 or higher across two consecutive semesters | King Abdulaziz University |
| 2025 | IEEE Ideation Competition, 22nd International Learning and Technology Conference: presenter and team lead of five, with a top-ranked paper at the Human Machine Fusion exhibition | IEEE |
| 2024 | **Young Researchers Award, Modern Technologies.** Selected by an international panel and received at 16, making me the youngest UN-certified Saudi researcher (youngest of 209 researchers and professors from 36 countries) | United Nations Convention to Combat Desertification (UNCCD COP16) |
| 2024 | National recognition for Aykah among the selected Young Researchers at UNCCD COP16 | National Center for Meteorology (NCM) |
| 2024 | National recognition for Aykah | Ministry of Environment, Water and Agriculture (MEWA) |
| 2022 | National Mathematics Olympiad, final stage, representing the Western Region | Ministry of Education, Saudi Arabia |

**Competitions and events:** NSMO Mathematical Saudi Olympiad 2022, UNCCD COP16 (United Nations Convention to Combat Desertification) 2024, Consulting Championship 2025 (Aramco), Hackathon Al Hareeq (Ministry of Environment, Water and Agriculture, 2025), The 2nd Scientific Forum (King Abdulaziz University, 2025), IECE 2026, the International Engineering Conference and Exhibition (Saudi Council of Engineers), 2nd Conference on Sustainability and Quality of Life 2026 (King Abdulaziz University, research paper), Miyahthon 2027 (Saudi Water Authority)

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Education

| School | Programme | Years |
| --- | --- | :---: |
| **King Abdulaziz University** | BS Computer Science, FCIT - Waed Distinctive Excellence track for gifted students | 2025–2030 |
| **Dar Al Fikr Schools** | American High School Diploma - Mawhiba Alumna | 2022–2025 |

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Technical skills

**Languages**

<p>
  <img src="https://img.shields.io/badge/Python-ff4f9a?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Rust-ff4f9a?style=for-the-badge&logo=rust&logoColor=white" alt="Rust">
  <img src="https://img.shields.io/badge/Ruby-ff4f9a?style=for-the-badge&logo=ruby&logoColor=white" alt="Ruby">
  <img src="https://img.shields.io/badge/TypeScript-ff4f9a?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/JavaScript-ff4f9a?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript">
</p>

**Working knowledge**

<p>
  <img src="https://img.shields.io/badge/C++-ff8a3d?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++">
  <img src="https://img.shields.io/badge/C%23-ff8a3d?style=for-the-badge&logo=dotnet&logoColor=white" alt="C#">
  <img src="https://img.shields.io/badge/Java-ff8a3d?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
</p>

**ML engineering and data**

<p>
  <img src="https://img.shields.io/badge/XGBoost-f2c12e?style=for-the-badge" alt="XGBoost">
  <img src="https://img.shields.io/badge/scikit--learn-f2c12e?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="scikit-learn">
  <img src="https://img.shields.io/badge/pandas-f2c12e?style=for-the-badge&logo=pandas&logoColor=white" alt="pandas">
  <img src="https://img.shields.io/badge/NumPy-f2c12e?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy">
  <img src="https://img.shields.io/badge/Spatial%20cross--validation-f2c12e?style=for-the-badge" alt="Spatial cross-validation">
</p>

**Remote sensing**

<p>
  <img src="https://img.shields.io/badge/Google%20Earth%20Engine-2fbf71?style=for-the-badge&logo=googleearthengine&logoColor=white" alt="Google Earth Engine">
  <img src="https://img.shields.io/badge/Landsat%208%20Collection%202-2fbf71?style=for-the-badge" alt="Landsat 8 Collection 2">
</p>

**Front end**

<p>
  <img src="https://img.shields.io/badge/HTML-3d9be9?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
  <img src="https://img.shields.io/badge/CSS-3d9be9?style=for-the-badge&logo=css&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-3d9be9?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript">
  <img src="https://img.shields.io/badge/TypeScript-3d9be9?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Next.js-3d9be9?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
</p>

**Back end**

<p>
  <img src="https://img.shields.io/badge/Python-6e62e5?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Ruby-6e62e5?style=for-the-badge&logo=ruby&logoColor=white" alt="Ruby">
  <img src="https://img.shields.io/badge/Rust-6e62e5?style=for-the-badge&logo=rust&logoColor=white" alt="Rust">
  <img src="https://img.shields.io/badge/Node.js-6e62e5?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/FastAPI-6e62e5?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
</p>

**Tools**

<p>
  <img src="https://img.shields.io/badge/Git-ff4f9a?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/Docker-ff4f9a?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

**Hardware**

<p>
  <img src="https://img.shields.io/badge/Raspberry%20Pi-a855e0?style=for-the-badge&logo=raspberrypi&logoColor=white" alt="Raspberry Pi">
  <img src="https://img.shields.io/badge/Embedded%20systems-a855e0?style=for-the-badge" alt="Embedded systems">
  <img src="https://img.shields.io/badge/Ultrasonic%20sensors-a855e0?style=for-the-badge" alt="Ultrasonic sensors">
  <img src="https://img.shields.io/badge/LCD%20%26%20LED%20interfaces-a855e0?style=for-the-badge" alt="LCD and LED interfaces">
  <img src="https://img.shields.io/badge/Solar%20power%20systems-a855e0?style=for-the-badge" alt="Solar power systems">
  <img src="https://img.shields.io/badge/IoT%20prototyping-a855e0?style=for-the-badge" alt="IoT prototyping">
  <img src="https://img.shields.io/badge/Skeleton%20prototyping-a855e0?style=for-the-badge" alt="Skeleton prototyping">
</p>

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Community

| Role | Where |
| --- | --- |
| **Technical Committee Lead** | Waed Students Community, King Abdulaziz University |
| **Member, Tech Department** | IEEE SB KAU, 2027 term |
| **Member, Tech Department** | Programming Club KAU, 2027 term |
| **CM Experience Member** | Google Developer Groups on Campus, KAU |
| **Organizer and Event Coordinator** | English Language Olympiad (ELO), KAU |
| **Project Coordinator, Talks X** | Engineering Day 2027 |
| **Layout & Design Specialist** | Engineering Day 2027 Planning Department |
| **Member** | Scientific Research Club, KAU |
| **Coordinator** | Annual Waed Workshop 2027 |
| **Mawhiba Alumna** | National programme for gifted students (classes 2022–2025) |

<p align="center"><img src="assets/divider.svg" width="600" alt=""></p>

## Get in touch

I'm open to research collaboration. The fastest way to reach me is [LinkedIn](https://www.linkedin.com/in/nelmkt/) or [email](mailto:scifinel@gmail.com), and you can also find me on [X](https://x.com/nelmkt). Or press start at [nelmkt.com](https://nelmkt.com).

I speak Arabic and English.

<p align="center"><i>stay curious</i></p>
