import React from 'react';

const CV = () => {
    return (
        <div className="w-full bg-white p-4">
            <div className="flex justify-between items-baseline border-b-2 border-blue-900 pb-2">
                <h1 className="text-3xl text-blue-800 mb-0">Ching Jui Young</h1>
                <div className="text-right text-gray-600">
                    <a href="tel:+16265395134" className="text-blue-800 hover:underline">+1 (626) 539-5134</a> | <a
                        href="mailto:young.chingjui@youngandai.com" className="text-blue-800 hover:underline">young.chingjui@youngandai.com</a> | <a
                        href="https://github.com/youngchingjui" className="text-blue-800 hover:underline">Github</a> | <a
                        href="https://www.linkedin.com/in/chingjuiyoung/" className="text-blue-800 hover:underline">LinkedIn</a>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Summary</h2>
                <p>Dynamic AI Product Manager with over 13 years of experience in leading the development of scalable AI solutions and ML-powered products. Proven track record in managing cross-functional teams, developing strategic partnerships, and delivering products that enhance AI research and model performance. Proficient in Python, SQL, and advanced machine learning techniques. Eager to leverage technical expertise and leadership skills at Scale to drive the next generation of AI applications.</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Professional Experience</h2>
                <div className="mb-4">
                    <div className="font-bold text-blue-900">Partner</div>
                    <div className="italic text-blue-900">Young & AI, Shanghai, China (Jan 2018 – Present)</div>
                    <ul className="list-disc pl-4">
                        <li className="mb-1">Led sales and project discussions as technical advisor to strategic clients, embedding deeply to support the development of innovative AI applications using open-source models.</li>
                        <li className="mb-1">Prototyped and demonstrated AI solutions, showcasing platform capabilities to maximize business impact.</li>
                        <li className="mb-1">Built and maintained strong relationships with C-suite clients, ensuring successful deployment and scaling of AI solutions.</li>
                        <li className="mb-1">Developed and managed machine learning models for a two-sided marketplace startup, creating a Health Index Score from dietary data; built digital products and advised on platform strategy. Python, Databricks, AWS, PyTorch.</li>
                        <li className="mb-1">Developed an AI system for German manufacturing company to efficiently extract key information from RFQs. Used various Retrieval Augmented Generation (RAG) methods, including vector database embeddings, re-rankers, and full context injections. Architected a multi-agent architecture system, where multiple LLMs are coordinated to complete a more complex task. Led to order of magnitude improved accuracy and complete responses over baseline GPT-4 responses. OpenAI, LangChain, LangSmith, LangGraph, postgresql, Python, FastAPI, nginx, Microsoft Azure services (OpenAI Studio, Azure VMs, Blob Storage)</li>
                        <li className="mb-1">Designed, built, tested, and implemented an image classification deep convolutional neural network for an Australian real estate company to identify residential housing features from Google Street View Images. Fine-tuned the model to achieve over 70% accuracy in labeling and describing houses within images. AWS SageMaker, Mechanical Turk, Python, PyTorch</li>
                        <li className="mb-1">Developed trend prediction engine for global FMCG company. Collaborated with across international teams to identify user needs and ensure usability and reliability of dashboards.</li>
                        <li className="mb-1">Developed performant Tableau dashboards for internal and external client usage for a French audit company. Managed databases with millions of data points on Tableau servers.</li>
                        <li className="mb-1">Managed, re-designed, and built a new publication website for Swiss publishing company. Created user analytics dashboards for internal tracking and incremental improvements. Developed front-end webpage with a new design, content management system, and search functionality. NextJS, React, Django, Wagtail, Github Actions, docker-compose, Python, PostgreSQL, grafana, headless CMS, SEO-optimization</li>
                        <li className="mb-1">Developed a web scraping service to auto-fill government website forms for French travel services company. Selenium, puppeteer, Electron, React.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <div className="font-bold text-blue-900">Senior Analyst</div>
                    <div className="italic text-blue-900">McKinsey and Co. | Finalta, Singapore (Jan 2016 – Jan 2018)</div>
                    <ul className="list-disc pl-4">
                        <li className="mb-1">Conducted analysis on Big Data sets to identify complex data relationships and pattern sets.</li>
                        <li className="mb-1">Advised retail banks on strategic and operational solutions driven by data analytics and best practice case studies.</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <div className="font-bold text-blue-900">Management Consultant</div>
                    <div className="italic text-blue-900">PricewaterhouseCoopers Consulting, Singapore (Jun 2013 – Jan 2016)</div>
                    <ul className="list-disc pl-4">
                        <li className="mb-1">Conducted statistical tests to validate stress test models for major U.S. banks, utilizing SAS and R programming.</li>
                        <li className="mb-1">Developed strategic IT frameworks and efficiency improvements for multinational clients.</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="w-1/2 pr-2">
                    <div className="mb-4">
                        <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Skills</h2>
                        <p>Generative AI • Large Language Models • OpenAI • Python • JavaScript • Prototyping • API Platforms • Customer Engagement • Cross-Functional Collaboration • LangChain • LangSmith • LangGraph • Mylvus • React • NextJS • PyTorch • TensorFlow • AWS Services • FastAPI • Microsoft Azure services • Docker • Healthcare AI</p>
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <div className="mb-4">
                        <h2 className="text-xl border-b border-blue-400 pb-1 text-blue-800">Education</h2>
                        <p><strong>University of California, San Diego</strong><br />
                            B.S. Management Science with Distinction | GPA: 3.8/4.0<br />
                            B.A. Communication with Distinction | GPA: 3.8/4.0<br />
                            Cum Laude, Phi Beta Kappa Scholar, Omicron Delta Epsilon Honors Society</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CV;