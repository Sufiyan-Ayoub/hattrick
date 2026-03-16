import { Quote } from 'lucide-react'

const Comments = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CFO at FinSecure",
            text: "This SaaS platform transformed the way we handle our finances at FinSecure Solutions. It's intuitive, efficient, and has saved us countless hours."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "CFO at FinSecure",
            text: "This SaaS platform transformed the way we handle our finances at FinSecure Solutions. It's intuitive, efficient, and has saved us countless hours."
        },
        {
            id: 3,
            name: "Sarah Johnson",
            role: "CFO at FinSecure",
            text: "This SaaS platform transformed the way we handle our finances at FinSecure Solutions. It's intuitive, efficient, and has saved us countless hours."
        }
    ];

    return (
        <section className="--comments sector rel" data-bg="#0a0a0a">
            <div className="container">
                <h1 className="s70 b900 tc heading">
                    What our <br /><span className="highlight s70">clients are saying</span>
                </h1>

                <div className="comments-grid">
                    {reviews.map((item) => (
                        <div key={item.id} className="comment-card flex cols aic tc">
                            <Quote size={40} className="quote-icon" fill="currentColor" />
                            <p className="s18 text">{item.text}</p>
                            <div className="user-meta">
                                <h3 className="s20 b700 name">{item.name}</h3>
                                <p className="s14 role">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dots flex jcc aic">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
    )
}

export default Comments