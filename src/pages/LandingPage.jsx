import React from 'react';
import '../styles/lp.css';

const LandingPage = () => {
    return (
        <div className="lp-container">
            {/* Hero Section */}
            <header className="lp-hero">
                <div className="lp-hero-content fadeIn">
                    <h1 className="lp-title">
                        医療者のために生成AIを<br />
                        <span className="lp-accent">「今日から使える形」</span>で無料配布
                    </h1>
                    <p className="lp-subtitle">
                        忙しい医療現場で役立つ“型（テンプレ）”に絞ったプロンプト集と動画をプレゼント
                    </p>
                    <a href="https://lin.ee/8d8H1Cu" className="lp-cta-button shine-effect" target="_blank" rel="noopener noreferrer">
                        LINEで無料特典を受け取る（友だち追加）
                    </a>
                    <p className="lp-note">※いつでもブロック・解除できます。</p>
                </div>
            </header>

            {/* Target Section */}
            <section className="lp-section lp-target">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title">こんな医療者の方へ</h2>
                    <div className="lp-cards">
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
                    <p className="lp-message">
                        まず<strong>“今日から使える”</strong>ことを優先して特典をお渡しします。
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="lp-section lp-benefits">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title">無料特典の中身</h2>

                    <div className="lp-benefit-item">
                        <h3>1）医療者のためのプロンプト集</h3>
                        <p>臨床・教育・研究で使える“コピペ用”テンプレート</p>
                        <div className="lp-benefit-image-placeholder">
                            <div className="mock-ui">PROMPT COLLECTION</div>
                        </div>
                    </div>

                    <div className="lp-benefit-item">
                        <h3>2）セミナー動画（合計約4.5時間）</h3>
                        <ul className="lp-benefit-list">
                            <li>生成AIで「できるようになること」</li>
                            <li>知っておきたいリスク（医療での注意点）</li>
                            <li>初期設定と基本操作、プロンプトのおさらい</li>
                            <li>スライド生成</li>
                            <li>文献検索の型：MCPを使った検索設計</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Instructor Section (Placeholder) */}
            <section className="lp-section lp-instructor">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title">発信者（講師）</h2>
                    <div className="lp-profile">
                        <div className="lp-profile-image"></div>
                        <div className="lp-profile-text">
                            <h3>[講師名]</h3>
                            <p>ここに講師の経歴と業績が入ります。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="lp-section lp-faq">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title">よくある質問（FAQ）</h2>
                    <div className="lp-faq-item">
                        <h4>Q. 本当に無料ですか？</h4>
                        <p>はい。LINE友だち追加で、プロンプト集と動画を無料でお届けします。</p>
                    </div>
                    <div className="lp-faq-item">
                        <h4>Q. どんな端末が必要ですか？</h4>
                        <p>PCと安定したインターネット環境を推奨します。</p>
                    </div>
                    <div className="lp-faq-item">
                        <h4>Q. 動画はいつでも見られますか？</h4>
                        <p>はい、いつでも見ることができます。※公開は予告なく終了する場合があります。</p>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="lp-section lp-footer-cta">
                <div className="lp-section-inner">
                    <h2 className="lp-section-title">無料特典の受け取り方（30秒）</h2>
                    <ol className="lp-steps">
                        <li>下のボタンからLINE友だち追加</li>
                        <li>アンケートに答えて、プロンプト集・動画を受け取る</li>
                    </ol>
                    <a href="https://lin.ee/8d8H1Cu" className="lp-cta-button shine-effect" target="_blank" rel="noopener noreferrer">
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
