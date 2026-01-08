import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            marginTop: 'auto',
            padding: '3rem 2rem 2rem 2rem',
            borderTop: '1px solid var(--glass-border)',
            background: 'rgba(15, 23, 42, 0.4)',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
        }}>
            <div className="glass-card" style={{
                maxWidth: '800px',
                margin: '0 auto 2rem auto',
                padding: '1.5rem',
                textAlign: 'left',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(248, 113, 113, 0.2)' // Red-ish border for caution
            }}>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '0.5rem' }}>⚠️</span> ご利用にあたっての注意
                </h4>
                <ul style={{ listStyle: 'none', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
                    <li>本サイトのコンテンツに関して、著作者の事前の許可なく以下の行為を行うことを固く禁じます。</li>
                    <li style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>• <strong>複製（コピー）</strong></li>
                    <li style={{ marginLeft: '1rem' }}>• <strong>転載・引用</strong></li>
                    <li style={{ marginLeft: '1rem' }}>• <strong>改変・加工</strong></li>
                    <li style={{ marginLeft: '1rem' }}>• <strong>他者への二次配布（再共有）</strong></li>
                    <li style={{ marginTop: '1rem' }}>必要が生じた場合は、必ず作成者までご連絡ください。</li>
                </ul>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <div>
                        <strong>作成者</strong>: 昭和医科大学横浜市北部病院消化器センター　三澤将史
                    </div>
                    <a href="https://www.instagram.com/masa_ai_med/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-accent)' }}>
                        <span>Instagram: @masa_ai_med</span>
                        <span style={{ marginLeft: '0.3rem' }}>↗</span>
                    </a>
                </div>
            </div>

            <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>
                &copy; {new Date().getFullYear()} Masashi Misawa. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
