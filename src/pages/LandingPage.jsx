import React, { useEffect, useRef } from 'react';
import '../styles/lp.css';

const LandingPage = () => {
    const observerRef = useRef(null);

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

    return (
        <div className="lp-container">
            {/* Hero Section */}
            <header className="lp-hero">
                <div className="lp-hero-content">
                    <div className="lp-badge">
                        <span className="lp-badge-icon">✨</span>
                        <span>完全無料でお届け</span>
                    </div>
                    <h1 className="lp-title">
                        医療者のために生成AIを<br />
                        <span className="lp-accent">「今日から使える形」</span>で配布
                    </h1>
                    <p className="lp-subtitle">
                        忙しい医療現場で役立つ"型（テンプレ）"に絞った<br />
                        プロンプト集と動画を無料プレゼント
                    </p>
                    <a href="https://lin.ee/8d8H1Cu" className="lp-cta-button" target="_blank" rel="noopener noreferrer">
                        <span className="lp-cta-icon">💬</span>
                        LINEで無料特典を受け取る
                    </a>
                    <p className="lp-note">※ いつでもブロック・解除できます</p>
                </div>
                <div className="lp-scroll-indicator">
                    <div className="lp-scroll-arrow"></div>
                    <span>Scroll</span>
                </div>
            </header>

            {/* Target Section */}
            <section className="lp-section lp-target">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">こんな医療者の方へ</h2>
                    <p className="lp-section-subtitle fade-in-up">
                        一つでも当てはまる方は、ぜひ特典をお受け取りください
                    </p>
                    <div className="lp-cards stagger-children">
                        <div className="lp-card">
                            <div className="lp-card-icon">🤔</div>
                            <p>便利そうだけど、画像生成くらいしか使ったことがない</p>
                        </div>
                        <div className="lp-card">
                            <div className="lp-card-icon">🏥</div>
                            <p>上司は使っていないし、普段の診療が忙しくて勉強は後回し</p>
                        </div>
                        <div className="lp-card">
                            <div className="lp-card-icon">🌀</div>
                            <p>何から始めるべきか分からず、結局触らなくなっている</p>
                        </div>
                        <div className="lp-card">
                            <div className="lp-card-icon">📚</div>
                            <p>情報が多すぎて、現場で再現できる形に落とせない</p>
                        </div>
                    </div>
                    <p className="lp-message fade-in-up">
                        まず<strong>「今日から使える」</strong>ことを優先して特典をお渡しします
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="lp-section lp-benefits">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">無料特典の中身</h2>
                    <p className="lp-section-subtitle fade-in-up" style={{ color: '#94a3b8' }}>
                        LINE登録で今すぐ受け取れます
                    </p>

                    <div className="lp-benefit-grid">
                        <div className="lp-benefit-item fade-in-up">
                            <div className="lp-benefit-number">1</div>
                            <h3>医療者のためのプロンプト集</h3>
                            <p>臨床・教育・研究で使える"コピペ用"テンプレート</p>
                            <ul className="lp-benefit-list">
                                <li>すぐに使えるプロンプトテンプレート</li>
                                <li>医療現場に特化した実践的な内容</li>
                                <li>コピー&ペーストで即活用可能</li>
                            </ul>
                        </div>

                        <div className="lp-benefit-item fade-in-up">
                            <div className="lp-benefit-number">2</div>
                            <h3>セミナー動画（約4.5時間）</h3>
                            <p>基礎から応用まで体系的に学べます</p>
                            <ul className="lp-benefit-list">
                                <li>生成AIで「できるようになること」</li>
                                <li>知っておきたいリスク（医療での注意点）</li>
                                <li>初期設定と基本操作、プロンプトのおさらい</li>
                                <li>スライド生成</li>
                                <li>文献検索の型：MCPを使った検索設計</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="lp-section lp-instructor">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">発信者（講師）</h2>
                    <div className="lp-profile fade-in-up">
                        <div className="lp-profile-image-wrapper">
                            <img src="/assets/instructor.jpg" alt="三澤 将史医師" className="lp-profile-image" />
                        </div>
                        <div className="lp-profile-text">
                            <h3>三澤 将史医師 / EndoBRAIN®開発者</h3>
                            <span className="lp-title-role">Masashi Misawa, MD, PhD</span>
                            <p>
                                新潟大学医学部卒業。昭和大学横浜市北部病院消化器センター勤務。<br />
                                国内初の薬事承認を取得したAI内視鏡画像診断支援ソフトウェア「EndoBRAIN®」の開発者の一人。<br />
                                AI技術の医療現場への実装において豊富な経験を持ち、生成AIの医療活用の最前線で活動中。
                            </p>
                            <div className="lp-social-links">
                                <a href="https://www.instagram.com/masa_ai_med/" target="_blank" rel="noopener noreferrer">
                                    📷 Instagram
                                </a>
                                <a href="https://www.threads.com/@masa_ai_med?hl=ja" target="_blank" rel="noopener noreferrer">
                                    🧵 Threads
                                </a>
                                <a href="https://x.com/masa_ai_med" target="_blank" rel="noopener noreferrer">
                                    𝕏 X (Twitter)
                                </a>
                            </div>
                            <div className="lp-achievements">
                                <h4>主な実績</h4>
                                <ul>
                                    <li>日本初の医療機器AIであるEndoBRAINの開発メンバー</li>
                                    <li>生成AIに関する情報発信を行い、総フォロワー数2万人超</li>
                                    <li>のべ8000人がAIセミナーに参加、満足度90%超</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="lp-section lp-faq">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">よくある質問</h2>
                    <div className="lp-faq-list stagger-children">
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-icon">Q</span>
                                本当に無料ですか？
                            </h4>
                            <p>はい。LINE友だち追加で、プロンプト集と動画を無料でお届けします。</p>
                        </div>
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-icon">Q</span>
                                どんな端末が必要ですか？
                            </h4>
                            <p>PCと安定したインターネット環境を推奨します。</p>
                        </div>
                        <div className="lp-faq-item">
                            <h4>
                                <span className="lp-faq-icon">Q</span>
                                動画はいつでも見られますか？
                            </h4>
                            <p>はい、いつでも見ることができます。※公開は予告なく終了する場合があります。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="lp-section lp-footer-cta">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title fade-in-up">無料特典の受け取り方</h2>
                    <p className="lp-section-subtitle fade-in-up" style={{ color: '#94a3b8' }}>
                        たった30秒で完了します
                    </p>
                    <ul className="lp-steps fade-in-up">
                        <li className="lp-step-item">
                            <span className="lp-step-number">1</span>
                            <span className="lp-step-text">下のボタンからLINE友だち追加</span>
                        </li>
                        <li className="lp-step-item">
                            <span className="lp-step-number">2</span>
                            <span className="lp-step-text">アンケートに答えて、プロンプト集・動画を受け取る</span>
                        </li>
                    </ul>
                    <a href="https://lin.ee/8d8H1Cu" className="lp-cta-button fade-in-up" target="_blank" rel="noopener noreferrer">
                        <span className="lp-cta-icon">💬</span>
                        無料で受け取る（LINE友だち追加）
                    </a>
                </div>
            </section>

            <footer className="lp-footer">
                <div className="lp-section-inner">
                    <h3>注記</h3>
                    <ul className="lp-notes">
                        <li>本特典は医療行為の代替ではありません。</li>
                        <li>生成AIの出力は誤りを含む可能性があります。</li>
                        <li>個人情報や機微情報は入力しない運用を推奨します。</li>
                    </ul>
                    <p className="copyright">© 2026 Prompt Collection</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
