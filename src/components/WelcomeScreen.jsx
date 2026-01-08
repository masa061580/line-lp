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
                    医療者のための<br />厳選プロンプト集
                </h1>
                <p style={subtitleStyle}>
                    Generative AI Prompt Collection for Medical Professionals. <br />
                    日々の臨床、研究、論文執筆を加速させるための、<br />
                    検証済みプロンプトと実践的な初期設定ガイドを体系化しました。
                </p>

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
