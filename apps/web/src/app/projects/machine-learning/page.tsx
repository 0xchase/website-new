export default function MachineLearning() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Machine Learning</h1>
          <p className="text-muted-foreground">
            AI models, data analysis, and intelligent systems development.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Deep Learning Models</h2>
            <p className="text-muted-foreground mb-4">
              Building and training neural networks for various applications and domains.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Computer Vision</h3>
                <p className="text-sm text-muted-foreground">CNN, Object detection, Image segmentation, GANs</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Natural Language Processing</h3>
                <p className="text-sm text-muted-foreground">Transformers, BERT, GPT, Sentiment analysis</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Data Science & Analytics</h2>
            <p className="text-muted-foreground mb-4">
              Extracting insights from complex datasets and building predictive models.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Predictive Modeling</h3>
                <p className="text-sm text-muted-foreground">Regression, Classification, Time series, Ensemble methods</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Data Visualization</h3>
                <p className="text-sm text-muted-foreground">Interactive dashboards, Statistical plots, Storytelling</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">MLOps & Production</h2>
            <p className="text-muted-foreground mb-4">
              Deploying and maintaining machine learning models in production environments.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Model Deployment</h3>
                <p className="text-sm text-muted-foreground">Docker, Kubernetes, Cloud platforms, API development</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Monitoring & Maintenance</h3>
                <p className="text-sm text-muted-foreground">Model drift detection, Performance tracking, A/B testing</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Technologies & Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Frameworks</h3>
                <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, Keras</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Languages</h3>
                <p className="text-sm text-muted-foreground">Python, R, SQL, Julia</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Cloud Platforms</h3>
                <p className="text-sm text-muted-foreground">AWS, GCP, Azure, MLflow</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Specializations</h3>
                <p className="text-sm text-muted-foreground">Reinforcement Learning, Federated Learning, Edge AI</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}