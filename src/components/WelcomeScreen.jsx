import React, { useEffect, useState } from 'react';

const WelcomeScreen = ({ onStart }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const containerStyle = {
        textAlign: 'center',
        padding: '3rem 1rem',
        maxWidth: '900px',
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
    };

    const heroTitleStyle = {
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, #fff 0%, #94a3b8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        textShadow: '0 10px 30px rgba(0,0,0,0.3)'
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '3rem',
        lineHeight: 1.8,
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const ctaButtonStyle = {
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
        color: '#fff',
        border: 'none',
        padding: '1rem 3rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        borderRadius: '50px',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        marginTop: '2rem'
    };

    return (
        <div style={containerStyle}>
            <div style={{ marginBottom: '4rem' }}>
                <div style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                    animation: 'float 6s ease-in-out infinite'
                }}>
                    ✨
                </div>
                <h1 style={heroTitleStyle}>
                    医療者のための<br />生成AI動画講座とプロンプト集
                </h1>

                <div style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    fontWeight: '500'
                }}>
                    Ver 1.02 (2026.01.18)
                </div>

                <p style={subtitleStyle}>
                    Generative AI Prompt Collection for Medical Professionals. <br />
                    日々の臨床、研究、論文執筆を加速させるための、<br />
                    検証済みプロンプトと実践的な初期設定ガイドを体系化しました。
                </p>

                {/* Update Notice Card */}
                <div className="glass-card" style={{
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto',
                    padding: '1.5rem',
                    textAlign: 'left',
                    background: 'rgba(59, 130, 246, 0.1)', // Light blue tint
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '12px'
                }}>
                    <h4 style={{
                        color: '#60a5fa',
                        marginBottom: '0.8rem',
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{ marginRight: '0.5rem' }}>📢</span> アップデートとパスワード変更について
                    </h4>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                        <strong>Ver 1.02 更新内容:</strong><br />
                        ・Mac環境におけるデータ変換スクリプトのパス処理を修正しました。<br />
                        <br />
                        本サイトはAI技術の進化に合わせて随時アップデートを行い、コンテンツを進化させていきます。<br />
                        セキュリティ保持のためアクセスパスワードを定期的に変更する場合がありますが、その際は<strong>公式LINEにてご連絡いたします。</strong>
                    </p>
                </div>

                {/* Caution Notice Card */}
                <div className="glass-card" style={{
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto',
                    padding: '1.5rem',
                    textAlign: 'left',
                    background: 'rgba(220, 38, 38, 0.1)', // Red tint for caution
                    border: '1px solid rgba(220, 38, 38, 0.3)',
                    borderRadius: '12px'
                }}>
                    <h4 style={{
                        color: '#f87171',
                        marginBottom: '0.8rem',
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{ marginRight: '0.5rem' }}>⚠️</span> CAUTION
                    </h4>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
                        本ドキュメントは、生成AIを活用した業務効率化、研究支援、臨床実務のためのプロンプトを体系的にまとめたものです。<br />
                        プレースホルダー（例: <code>[日付]</code>, <code>[場所]</code>）は実情に合わせて書き換えてご使用ください。<br />
                        <strong style={{ color: '#fca5a5' }}>AIの出力を精査・吟味の上ご自身の責任でご活用ください。<br />
                            これらのプロンプトを活用して何らかの不利益を被ったとしても補償いたしかねます。</strong>
                    </p>
                </div>

                <button
                    style={ctaButtonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
                    }}
                    onClick={onStart}
                >
                    プロンプト集を見る
                </button>
            </div>

            {/* Video Section */}
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>📺</span>
                    <span style={{
                        background: 'linear-gradient(to right, #60a5fa, #c084fc)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '800'
                    }}>
                        ChatGPT5対応・生成AIレクチャー動画はこちら！
                    </span>
                </h3>
                <div style={{
                    maxWidth: '600px',
                    width: '100%',
                    margin: '0 auto'
                }}>
                    <div style={{
                        position: 'relative',
                        paddingBottom: '56.25%', /* 16:9 aspect ratio */
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '16px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <iframe
                            src="https://www.youtube.com/embed/Vrphwi57sG4?rel=0"
                            title="ChatGPT5対応・生成AIレクチャー動画"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                </div>

                {/* Seminar Links */}
                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>2025年6月に開催したセミナーと同様の内容の動画</h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a
                            href="https://note.com/preview/n509108dad8cf?prev_access_key=d8a524ab9c119b3ae6b648f221e744ac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button"
                            style={{
                                textDecoration: 'none',
                                padding: '0.8rem 1.5rem',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                border: '1px solid rgba(59, 130, 246, 0.3)'
                            }}
                        >
                            <span>🔰</span> 初級セミナー
                        </a>
                        <a
                            href="https://note.com/preview/n393422874d8c?prev_access_key=228b40b0ae4f203b05d3f2330d152583"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button"
                            style={{
                                textDecoration: 'none',
                                padding: '0.8rem 1.5rem',
                                fontSize: '0.95rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: 'rgba(168, 85, 247, 0.1)',
                                border: '1px solid rgba(168, 85, 247, 0.3)'
                            }}
                        >
                            <span>🚀</span> 中級セミナー
                        </a>
                    </div>
                </div>
            </div>

            <div className="glass-card" style={{
                padding: '2.5rem',
                textAlign: 'left',
                borderRadius: '16px',
                border: '1px solid rgba(248, 113, 113, 0.3)',
                background: 'rgba(255, 50, 50, 0.03)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: '#ef4444'
                }} />

                <h3 style={{
                    color: '#f87171',
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(248, 113, 113, 0.2)',
                    paddingBottom: '1rem'
                }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '0.8rem' }}>⚠️</span>
                    ご利用にあたっての注意
                </h3>

                <div style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        本サイトのコンテンツに関して、著作者の事前の許可なく以下の行為を行うことを固く禁じます。
                    </p>
                    <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>🚫 <strong>複製（コピー）</strong></li>
                        <li style={{ marginBottom: '0.5rem' }}>🚫 <strong>転載・引用</strong></li>
                        <li style={{ marginBottom: '0.5rem' }}>🚫 <strong>改変・加工</strong></li>
                        <li style={{ marginBottom: '0.5rem' }}>🚫 <strong>他者への二次配布（再共有）</strong></li>
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        必要が生じた場合は、必ず下記作成者までご連絡ください。
                    </p>
                </div>

                <div style={{
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>作成者</div>
                        <div style={{ fontWeight: '600' }}>昭和医科大学横浜市北部病院消化器センター　三澤将史</div>
                    </div>
                    <a
                        href="https://www.instagram.com/masa_ai_med/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button"
                        style={{
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.6rem 1.2rem'
                        }}
                    >
                        Instagram: @masa_ai_med ↗
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default WelcomeScreen;
