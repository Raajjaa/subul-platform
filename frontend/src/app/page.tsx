"use client";

import { SetStateAction, useState } from "react";

export default function HomePage() {
  // État pour la vue active : "dashboard", "profile", "course", "quiz", "results", "certificate"
  const [view, setView] = useState("dashboard");

  // État pour la gestion du quiz, cours, certificats, etc. à compléter selon besoin
  // Pour l'exemple, je me concentre sur la navigation et la structure

  // Fonctions pour changer de vue
  const showView = (viewName: SetStateAction<string>) => {
    setView(viewName);
  };

  // Fonctions factices pour les boutons qui appelaient des fonctions JS externes
  const startQuiz = () => alert("Démarrage du quiz");
  const nextLesson = () => alert("Passer au cours suivant");
  const closeQuiz = () => showView("dashboard");
  const prevQuestion = () => alert("Question précédente");
  const nextQuestion = () => alert("Question suivante");
  const submitQuiz = () => alert("Soumettre le quiz");
  const closeResults = () => showView("dashboard");
  const retakeQuiz = () => alert("Reprendre le quiz");
  const getCertificate = () => alert("Obtenir le certificat");
  const closeCertificate = () => showView("dashboard");
  const downloadCertificate = () => alert("Télécharger le certificat");
  const printCertificate = () => alert("Imprimer le certificat");

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-book-open"></i>
              <span>سبل</span>
            </div>
            <nav className="nav">
              <button
                className={`nav-btn ${view === "dashboard" ? "active" : ""}`}
                onClick={() => showView("dashboard")}
              >
                <i className="fas fa-book-open"></i>
                <span>دوراتي</span>
              </button>
              <button
                className={`nav-btn ${view === "profile" ? "active" : ""}`}
                onClick={() => showView("profile")}
              >
                <i className="fas fa-user"></i>
                <span>الملف الشخصي</span>
              </button>
              <button
                id="auth-btn"
                className="nav-btn login-nav-btn"
                onClick={() => alert("Login/Logout")}
              >
                <i id="auth-icon" className="fas fa-sign-in-alt"></i>
                <span id="auth-text">تسجيل الدخول</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Dashboard View */}
        {view === "dashboard" && (
          <div id="dashboard-view" className="view active">
            <div className="container">
              <div className="welcome-section">
                <h1>أهلاً بك مرة أخرى!</h1>
                <p>تابع رحلة التعلم مع دوراتنا التفاعلية</p>
              </div>
              {/* Search and Filter Section */}
              <div className="search-filter-section">
                <div className="search-container">
                  <i className="fas fa-search"></i>
                  <input
                    id="search-input"
                    type="text"
                    placeholder="ابحث عن الدورات..."
                  />
                </div>
                <div className="filter-container">
                  <select id="category-filter">
                    <option value="">جميع الفئات</option>
                    <option value="programming">البرمجة</option>
                    <option value="design">التصميم</option>
                    <option value="business">الأعمال</option>
                    <option value="language">اللغات</option>
                  </select>
                  <select id="level-filter">
                    <option value="">جميع المستويات</option>
                    <option value="beginner">مبتدئ</option>
                    <option value="intermediate">متوسط</option>
                    <option value="advanced">متقدم</option>
                  </select>
                  <select id="duration-filter">
                    <option value="">جميع المدد</option>
                    <option value="short">أقل من 3 ساعات</option>
                    <option value="medium">3-6 ساعات</option>
                    <option value="long">أكثر من 6 ساعات</option>
                  </select>
                </div>
              </div>

              {/* Stats Section */}
              <div className="stats-grid">
                <div className="stat-card">
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <h3 id="completed-courses">0</h3>
                    <p>الدورات المكتملة</p>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3 id="total-hours">0</h3>
                    <p>ساعات التعلم</p>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-trophy"></i>
                  <div>
                    <h3 id="quiz-score">0%</h3>
                    <p>متوسط درجات الاختبارات</p>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-certificate"></i>
                  <div>
                    <h3 id="certificates-count">0</h3>
                    <p>الشهادات المحصلة</p>
                  </div>
                </div>
              </div>

              {/* Courses Section */}
              <div className="courses-section">
                <h2>الدورات المتاحة</h2>
                <div className="courses-grid" id="courses-grid">
                  {/* Chargement des cours via API ou données statiques */}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile View */}
        {view === "profile" && (
          <div id="profile-view" className="view active">
            <div className="container">
              <div className="profile-header">
                <div className="profile-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="profile-info">
                  <h1>الملف الشخصي</h1>
                  <p>تتبع تقدمك في التعلم وإنجازاتك</p>
                </div>
              </div>
              <div className="profile-stats">
                <div className="achievement-cards">
                  <div className="achievement-card">
                    <i className="fas fa-medal"></i>
                    <h3>متعلم سريع</h3>
                    <p>أكمل أول دورة</p>
                  </div>
                  <div className="achievement-card">
                    <i className="fas fa-brain"></i>
                    <h3>خبير الاختبارات</h3>
                    <p>حصل على 90%+ في الاختبار</p>
                  </div>
                  <div className="achievement-card locked">
                    <i className="fas fa-lock"></i>
                    <h3>بطل الدورات</h3>
                    <p>أكمل 5 دورات</p>
                  </div>
                </div>

                {/* Certificates Section */}
                <div className="certificates-section">
                  <h2>شهاداتي</h2>
                  <div className="certificates-grid" id="certificates-grid">
                    {/* Chargement des certificats via API ou données statiques */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Course Player View */}
        {view === "course" && (
          <div id="course-view" className="view active">
            <div className="course-container">
              <div className="course-sidebar">
                <button className="back-btn" onClick={() => showView("dashboard")}>
                  <i className="fas fa-arrow-right"></i>
                  العودة للدورات
                </button>
                <div className="course-info">
                  <h3 id="course-title">عنوان الدورة</h3>
                  <div className="progress-bar">
                    <div className="progress-fill" id="course-progress"></div>
                  </div>
                  <span id="progress-text">0% مكتمل</span>
                </div>
                <div className="lessons-list" id="lessons-list">
                  {/* Leçons chargées dynamiquement */}
                </div>
              </div>
              <div className="course-content">
                <div className="video-player" id="video-player">
                  <div className="video-placeholder">
                    <i className="fas fa-play"></i>
                    <p>اختر درساً لبدء التعلم</p>
                  </div>
                </div>
                <div className="lesson-content">
                  <h2 id="lesson-title">مرحباً بك في الدورة</h2>
                  <p id="lesson-description">
                    اختر درساً من الشريط الجانبي لبدء رحلة التعلم.
                  </p>
                  <div className="lesson-actions">
                    <button
                      className="btn-primary"
                      id="take-quiz-btn"
                      onClick={startQuiz}
                      style={{ display: "none" }}
                    >
                      <i className="fas fa-question-circle"></i>
                      خذ الاختبار
                    </button>
                    <button
                      className="btn-secondary"
                      id="next-lesson-btn"
                      onClick={nextLesson}
                      style={{ display: "none" }}
                    >
                      الدرس التالي
                      <i className="fas fa-arrow-left"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {view === "quiz" && (
          <div id="quiz-modal" className="modal">
            <div className="modal-content">
              <div className="quiz-header">
                <h2 id="quiz-title">اختبار الدرس</h2>
                <button className="close-btn" onClick={closeQuiz}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="quiz-body">
                <div className="quiz-progress">
                  <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" id="quiz-progress"></div>
                  </div>
                  <span id="quiz-counter">السؤال 1 من 3</span>
                </div>
                <div className="question-container">
                  <h3 id="question-text">السؤال سيظهر هنا</h3>
                  <div className="options-container" id="options-container">
                    {/* Quiz options ici */}
                  </div>
                </div>
                <div className="quiz-actions">
                  <button
                    className="btn-secondary"
                    id="prev-question-btn"
                    onClick={prevQuestion}
                    disabled
                  >
                    السابق
                  </button>
                  <button
                    className="btn-primary"
                    id="next-question-btn"
                    onClick={nextQuestion}
                  >
                    السؤال التالي
                  </button>
                  <button
                    className="btn-primary"
                    id="submit-quiz-btn"
                    onClick={submitQuiz}
                    style={{ display: "none" }}
                  >
                    إرسال الاختبار
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Results Modal */}
        {view === "results" && (
          <div id="results-modal" className="modal">
            <div className="modal-content">
              <div className="results-header">
                <h2>نتائج الاختبار</h2>
              </div>
              <div className="results-body">
                <div className="score-display">
                  <div className="score-circle">
                    <span id="final-score">0%</span>
                  </div>
                  <h3 id="score-message">عمل رائع!</h3>
                  <p id="pass-status"></p>
                </div>
                <div className="results-actions">
                  <button className="btn-primary" onClick={closeResults}>
                    متابعة التعلم
                  </button>
                  <button className="btn-secondary" onClick={retakeQuiz}>
                    إعادة الاختبار
                  </button>
                  <button
                    className="btn-success"
                    id="get-certificate-btn"
                    onClick={getCertificate}
                    style={{ display: "none" }}
                  >
                    <i className="fas fa-certificate"></i>
                    احصل على الشهادة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {view === "certificate" && (
          <div id="certificate-modal" className="modal">
            <div className="modal-content certificate-content">
              <div className="certificate-header">
                <h2>شهادة إتمام الدورة</h2>
                <button className="close-btn" onClick={closeCertificate}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="certificate-body">
                <div className="certificate" id="certificate">
                  <div className="certificate-border">
                    <div className="certificate-inner">
                      <div className="certificate-logo">
                        <i className="fas fa-graduation-cap"></i>
                        <h1>سبل</h1>
                      </div>
                      <h2>شهادة إتمام</h2>
                      <p className="certificate-text">هذا يشهد أن</p>
                      <h3 className="student-name">الطالب</h3>
                      <p className="certificate-text">قد أتم بنجاح دورة</p>
                      <h3 className="course-name" id="cert-course-name">
                        اسم الدورة
                      </h3>
                      <div className="certificate-details">
                        <p>
                          تاريخ الإتمام: <span id="cert-date"></span>
                        </p>
                        <p>
                          الدرجة النهائية: <span id="cert-score"></span>
                        </p>
                      </div>
                      <div className="certificate-signature">
                        <div className="signature-line">
                          <p>منصة سبل للتعلم الإلكتروني</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="certificate-actions">
                  <button className="btn-primary" onClick={downloadCertificate}>
                    <i className="fas fa-download"></i>
                    تحميل الشهادة
                  </button>
                  <button className="btn-secondary" onClick={printCertificate}>
                    <i className="fas fa-print"></i>
                    طباعة الشهادة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
