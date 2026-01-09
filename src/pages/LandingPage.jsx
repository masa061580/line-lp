import React, { useEffect, useRef, useState } from 'react';
import '../styles/lp.css';

// Testimonials data - defined outside component to avoid dependency issues
const allTestimonials = [
    { text: '目から鱗の講義でした。なんとなくChatGPTに課金していましたが、全然使いこなせていませんでした。' },
    { text: '臨床業務でお忙しい中、医療に特化したAI活用法を惜しみなく講義くださりありがとうございます。研究方面で大きな時間短縮になりそうです。' },
    { text: 'とても分かりやすかったです！基礎の基礎から学べましたのは大きな収穫です。' },
    { text: '先生のご活動は世界を変えるものです。これからも情報発信をお願いいたします！' },
    { text: '実際の臨床現場でどう使えるかが具体的にイメージできました。明日から早速試してみます。' },
    { text: 'プロンプトの書き方一つでこんなに結果が変わるとは驚きでした。' },
    { text: '忙しい中でも隙間時間で学べる構成がありがたいです。' },
    { text: '医療者向けに特化した内容なので、すぐに業務に活かせそうです。' },
    { text: '論文執筆の効率が格段に上がりそうです。もっと早く知りたかった！' },
    { text: 'AIに対する漠然とした不安が解消されました。正しく使えば強力なツールになりますね。' },
    { text: '同僚にもぜひ勧めたい内容でした。チーム全体の生産性向上につながりそうです。' },
    { text: '基礎から応用まで体系的に学べて、自分のレベルに合わせて進められました。' },
];

const LandingPage = () => {
    const observerRef = useRef(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [showStickyCta, setShowStickyCta] = useState(false);

    // Shuffle testimonials - initialize with shuffled array
    const [testimonials] = useState(() =>
        [...allTestimonials].sort(() => Math.random() - 0.5)
    );

    useEffect(() => {
        // Intersection Observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.fade-in-up, .stagger-children').forEach((el) => {
            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    // Scroll progress bar
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);

            // Show sticky CTA after 300px scroll
            setShowStickyCta(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Testimonial auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const LINE_URL = 'https://lin.ee/8d8H1Cu';

    return (
        <div className="lp-container">
            {/* Scroll Progress Bar */}
            <div className="lp-progress-bar" />

            {/* Hero Section */}
            <header className="lp-hero">
                <div className="lp-hero-content">
                    <h1 className="lp-title">
                        医療者のための生成AI<br />
                        <span className="lp-title-accent">「今日から使える形」で無料配布</span>
                    </h1>
                    <p className="lp-subtitle">
                        ChatGPTが便利そうだけど、まだ触れていない。自信がない。<br />
                        そんな医療者の皆さまへ、忙しくても最短で成果が出るように<br />
                        "型（テンプレ）"に絞ったプロンプト集と動画を無料でお届けします。
                    </p>
                    <div className="lp-hero-image">
                        <img src="/assets/hero.png" alt="医療者のための生成AIプロンプト集" />
                    </div>
                    <a href={LINE_URL} className="lp-cta-button" target="_blank" rel="noopener noreferrer">
                        <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINEで無料特典を受け取る
                    </a>
                    <p className="lp-note">※いつでもブロック・解除できます</p>
                    <div className="lp-social-proof">
                        <span className="lp-social-proof-badge">8,000人以上が受講</span>
                    </div>
                </div>
            </header>

            {/* Gifts Section */}
            <section className="lp-section lp-gifts">
                <div className="lp-section-inner">
                    <div className="lp-gifts-header">
                        <div className="lp-gifts-text">
                            <h2 className="lp-section-title fade-in-up">無料プレゼントの内容</h2>
                            <p className="lp-section-subtitle fade-in-up">
                                ※LINE友だち追加後、アンケート回答で受け取れます
                            </p>
                        </div>
                        <div className="lp-gifts-image fade-in-up">
                            <img src="/assets/free_gift.png" alt="無料プレゼント" />
                        </div>
                    </div>

                    <div className="lp-gift-grid stagger-children">
                        <div className="lp-gift-item">
                            <span className="lp-gift-number">01</span>
                            <h3>医療者のためのプロンプト集</h3>
                            <p>臨床・教育・研究で使える"コピペ用"テンプレート</p>
                        </div>

                        <div className="lp-gift-item">
                            <span className="lp-gift-number">02</span>
                            <h3>2025年6月セミナー動画（約3.5時間）</h3>
                            <p>基礎から応用まで体系的に学べます</p>
                        </div>

                        <div className="lp-gift-item">
                            <span className="lp-gift-number">03</span>
                            <h3>【最新】GPT-5対応：初学者向け動画（約1時間）</h3>
                            <p>2025年最新モデルの使い方を解説</p>
                        </div>
                    </div>

                    <div className="lp-cta-inline fade-in-up">
                        <span className="lp-badge-small">30秒で完了</span>
                        <a href={LINE_URL} className="lp-cta-button" target="_blank" rel="noopener noreferrer">
                            <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                            </svg>
                            無料で受け取る
                        </a>
                    </div>
                </div>
            </section>

            {/* Target Section */}
            <section className="lp-section lp-target">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">こんな医療者の方へ</h2>
                    <div className="lp-target-grid stagger-children">
                        <div className="lp-target-item">
                            <span className="lp-target-check">□</span>
                            <p>便利そうだけど、画像生成くらいしか使ったことがない</p>
                        </div>
                        <div className="lp-target-item">
                            <span className="lp-target-check">□</span>
                            <p>上司は使っていないし、普段の診療が忙しくて勉強は後回し</p>
                        </div>
                        <div className="lp-target-item">
                            <span className="lp-target-check">□</span>
                            <p>何から始めるべきか分からず、結局触らなくなっている</p>
                        </div>
                        <div className="lp-target-item">
                            <span className="lp-target-check">□</span>
                            <p>情報が多すぎて、現場で再現できる形に落とせない</p>
                        </div>
                    </div>
                    <p className="lp-message fade-in-up">
                        まず<strong>「今日から使える」</strong>ことを優先して特典をお渡しします。
                    </p>
                </div>
            </section>

            {/* Prompt Preview Section */}
            <section className="lp-section lp-preview">
                <div className="lp-section-inner">
                    <div className="lp-toc-header">
                        <div className="lp-toc-header-text">
                            <h2 className="lp-section-title fade-in-up">プロンプト集の目次</h2>
                            <p className="lp-section-subtitle fade-in-up">生成AIプロンプト集・マニュアル</p>
                        </div>
                        <div className="lp-toc-header-image fade-in-up">
                            <img src="/assets/toc.png" alt="プロンプト集" />
                        </div>
                    </div>
                    <div className="lp-toc fade-in-up">
                        <div className="lp-toc-chapter">
                            <h3>Chapter 1: AI利用の基本</h3>
                            <ul>
                                <li>初期設定と基本操作 (ChatGPT)</li>
                                <li>Promptの基本設計</li>
                            </ul>
                        </div>
                        <div className="lp-toc-chapter">
                            <h3>Chapter 2: 学習に役立つプロンプト</h3>
                            <ul>
                                <li>英会話練習</li>
                                <li>英作文練習</li>
                                <li>スケジュール</li>
                                <li>テスト問題生成</li>
                            </ul>
                        </div>
                        <div className="lp-toc-chapter">
                            <h3>Chapter 3: 日常業務効率化</h3>
                            <ul>
                                <li>情報収集・Web検索</li>
                                <li>カレンダー一括登録 Gemini</li>
                                <li>翻訳 (Japanese ↔ English)</li>
                                <li>メール返信・作成</li>
                                <li>文書・報告書作成</li>
                            </ul>
                        </div>
                        <div className="lp-toc-chapter">
                            <h3>Chapter 4: 医療・看護実務</h3>
                            <ul>
                                <li>看護計画作成</li>
                                <li>患者説明資料作成</li>
                                <li>手順書・マニュアル作成</li>
                                <li>臨床推論・SBARトレーニング</li>
                                <li>MedGen Japan アプリ</li>
                                <li>多職種連携カンファレンス資料</li>
                            </ul>
                        </div>
                        <div className="lp-toc-chapter">
                            <h3>Chapter 5: 研究・論文執筆</h3>
                            <ul>
                                <li>抄読会・論文読解</li>
                                <li>研究リサーチ (Research Scouting)</li>
                                <li>データ解析・可視化</li>
                                <li>論文執筆 (Writing)</li>
                                <li>校正・管理</li>
                                <li>科研費調書の要約部分の添削</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapters Section */}
            <section className="lp-section lp-chapters">
                <div className="lp-section-inner">
                    <div className="lp-chapters-header">
                        <div className="lp-chapters-header-text">
                            <h2 className="lp-section-title fade-in-up">セミナー動画のチャプター</h2>
                        </div>
                        <div className="lp-chapters-header-image fade-in-up">
                            <img src="/assets/chapters.png" alt="セミナー動画" />
                        </div>
                    </div>
                    <ul className="lp-chapter-list stagger-children">
                        <li className="lp-chapter-item">生成AIで「できるようになること」</li>
                        <li className="lp-chapter-item">知っておきたいリスク（医療での注意点）</li>
                        <li className="lp-chapter-item">初期設定と基本操作、プロンプトのおさらい</li>
                        <li className="lp-chapter-item">スライド生成</li>
                        <li className="lp-chapter-item">文献検索の型：MCPを使った検索設計</li>
                    </ul>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="lp-section lp-instructor">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">講師</h2>
                    <div className="lp-instructor-content fade-in-up">
                        <div className="lp-instructor-image">
                            <img src="/assets/instructor.jpg" alt="三澤 将史医師" />
                        </div>
                        <div className="lp-instructor-info">
                            <h3 className="lp-instructor-name">三澤 将史 医師 / EndoBRAIN®開発者</h3>
                            <span className="lp-instructor-title">Masashi Misawa, MD, PhD</span>
                            <p className="lp-instructor-bio">
                                新潟大学医学部卒業。昭和大学横浜市北部病院消化器センター勤務。
                                国内初の薬事承認を取得したAI内視鏡画像診断支援ソフトウェア
                                「EndoBRAIN®」の開発者の一人。
                            </p>
                            <div className="lp-instructor-achievements">
                                <h4>【実績】</h4>
                                <ul>
                                    <li>日本初の医療機器AIであるEndoBRAINの開発メンバー</li>
                                    <li>生成AIに関する情報発信、総フォロワー数2万人超</li>
                                    <li>のべ8,000人がAIセミナーに参加、満足度90%超</li>
                                </ul>
                            </div>
                            <div className="lp-social-links">
                                <a href="https://www.instagram.com/masa_ai_med/" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                                <a href="https://www.threads.com/@masa_ai_med?hl=ja" target="_blank" rel="noopener noreferrer">
                                    Threads
                                </a>
                                <a href="https://x.com/masa_ai_med" target="_blank" rel="noopener noreferrer">
                                    X
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="lp-section lp-testimonials">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">受講者の声</h2>
                    {testimonials.length > 0 && (
                        <div className="lp-testimonial-carousel fade-in-up">
                            <div
                                className="lp-testimonial-track"
                                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div className="lp-testimonial-slide" key={index}>
                                        <blockquote className="lp-testimonial-text">
                                            "{testimonial.text}"
                                        </blockquote>
                                    </div>
                                ))}
                            </div>
                            <div className="lp-testimonial-dots">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`lp-testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
                                        onClick={() => setCurrentTestimonial(index)}
                                        aria-label={`Testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA after testimonials */}
            <section className="lp-section lp-cta-section">
                <div className="lp-section-inner">
                    <a href={LINE_URL} className="lp-cta-button fade-in-up" target="_blank" rel="noopener noreferrer">
                        <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINEで無料特典を受け取る
                    </a>
                </div>
            </section>

            {/* Steps Section */}
            <section className="lp-section lp-steps">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">無料特典の受け取り方</h2>
                    <p className="lp-section-subtitle fade-in-up">たった30秒で完了</p>
                    <div className="lp-steps-grid stagger-children">
                        <div className="lp-step-item">
                            <span className="lp-step-number">01</span>
                            <p>下のボタンからLINE友だち追加</p>
                        </div>
                        <div className="lp-step-item">
                            <span className="lp-step-number">02</span>
                            <p>アンケートに答えて、プロンプト集・動画を受け取る</p>
                        </div>
                    </div>
                    <a href={LINE_URL} className="lp-cta-button fade-in-up" target="_blank" rel="noopener noreferrer">
                        <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        無料で受け取る（LINE友だち追加）
                    </a>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="lp-section lp-faq">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">よくある質問</h2>
                    <div className="lp-faq-list stagger-children">
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-q">Q.</span>
                                本当に無料ですか？
                            </h4>
                            <p>はい。LINE友だち追加で、プロンプト集と動画を無料でお届けします。</p>
                        </div>
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-q">Q.</span>
                                どんな端末が必要ですか？
                            </h4>
                            <p>PCと安定したインターネット環境を推奨します。</p>
                        </div>
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-q">Q.</span>
                                動画はいつでも見られますか？
                            </h4>
                            <p>はい、いつでもご覧いただけます。※公開は予告なく終了する場合があります。</p>
                        </div>
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-q">Q.</span>
                                配信は止められますか？
                            </h4>
                            <p>はい。LINEのブロックでいつでも停止できます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes Section */}
            <section className="lp-section lp-notes-section">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">注記</h2>
                    <ul className="lp-notes-list fade-in-up">
                        <li>本特典は医療行為の代替ではありません</li>
                        <li>生成AIの出力は誤りを含む可能性があります</li>
                        <li>個人情報や患者情報は入力しない運用を推奨します</li>
                        <li>配布物の第三者への転載・再配布は禁止します</li>
                        <li>配信内容は予告なく変更・終了する場合があります</li>
                    </ul>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="lp-section lp-footer-cta">
                <div className="lp-section-inner">
                    <h2 className="lp-footer-cta-title fade-in-up">今すぐ無料特典を受け取る</h2>
                    <a href={LINE_URL} className="lp-cta-button fade-in-up" target="_blank" rel="noopener noreferrer">
                        <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                        </svg>
                        LINEで無料特典を受け取る
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="lp-footer">
                <div className="lp-section-inner">
                    <p className="lp-copyright">© 2026 Masashi Misawa</p>
                </div>
            </footer>

            {/* Sticky CTA */}
            <div className={`lp-sticky-cta ${showStickyCta ? 'visible' : ''}`}>
                <a href={LINE_URL} className="lp-sticky-cta-button" target="_blank" rel="noopener noreferrer">
                    <svg className="lp-line-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    <span>無料で受け取る</span>
                </a>
            </div>
        </div>
    );
};

export default LandingPage;
