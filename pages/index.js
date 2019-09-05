import Layout from '../components/Layout';

const Homepage = () => (
    <div className="centerText">
        <Layout>
                <h1>Welcome to our website!</h1>
        </Layout>
        
        <style jsx>{`
            div.centerText{
                top: 50%;
            }
        `}</style>
    </div>
);

export default Homepage;