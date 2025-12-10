export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🤖 AgentForge DevOps
          </h1>
          <p className="text-xl text-purple-200">
            AI-Powered Code Review & Deployment Automation System
          </p>
          <p className="text-sm text-purple-300 mt-2">
            AssembleHack25 - Built with Cline, Kestra, Oumi, Vercel & CodeRabbit
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-purple-200 text-sm">Automation Scripts</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-2xl font-bold text-white">2</div>
            <div className="text-purple-200 text-sm">AI Agents Active</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-3xl mb-2">🧠</div>
            <div className="text-2xl font-bold text-white">1</div>
            <div className="text-purple-200 text-sm">RL Models Trained</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-purple-200 text-sm">System Uptime</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Cline CLI */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🛠️</div>
              <h3 className="text-xl font-bold text-white">Cline CLI</h3>
            </div>
            <p className="text-purple-200 mb-4">
              Automated code generation and development workflows
            </p>
            <ul className="text-sm text-purple-300 space-y-2">
              <li>✅ Component Generator</li>
              <li>✅ API Route Generator</li>
              <li>✅ Test Runner</li>
            </ul>
          </div>

          {/* Kestra Workflows */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🔄</div>
              <h3 className="text-xl font-bold text-white">Kestra AI</h3>
            </div>
            <p className="text-purple-200 mb-4">
              AI agents that orchestrate and make intelligent decisions
            </p>
            <ul className="text-sm text-purple-300 space-y-2">
              <li>✅ GitHub Data Analyzer</li>
              <li>✅ Code Quality Agent</li>
              <li>✅ Deployment Decisions</li>
            </ul>
          </div>

          {/* Oumi RL */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-orange-500/30 hover:border-orange-400 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🧠</div>
              <h3 className="text-xl font-bold text-white">Oumi RL</h3>
            </div>
            <p className="text-purple-200 mb-4">
              Reinforcement Learning for code quality prediction
            </p>
            <ul className="text-sm text-purple-300 space-y-2">
              <li>✅ GRPO Algorithm</li>
              <li>✅ Quality Predictor</li>
              <li>✅ Model Fine-tuning</li>
            </ul>
          </div>

          {/* Vercel Deployment */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🚀</div>
              <h3 className="text-xl font-bold text-white">Vercel</h3>
            </div>
            <p className="text-purple-200 mb-4">
              Lightning-fast deployment and hosting
            </p>
            <ul className="text-sm text-purple-300 space-y-2">
              <li>✅ Auto-deploy on push</li>
              <li>✅ Edge network CDN</li>
              <li>✅ Live production site</li>
            </ul>
          </div>

          {/* CodeRabbit */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30 hover:border-pink-400 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">🐰</div>
              <h3 className="text-xl font-bold text-white">CodeRabbit</h3>
            </div>
            <p className="text-purple-200 mb-4">
              AI-powered code reviews and quality checks
            </p>
            <ul className="text-sm text-purple-300 space-y-2">
              <li>✅ Automated PR reviews</li>
              <li>✅ Code quality insights</li>
              <li>✅ Best practices</li>
            </ul>
          </div>

          {/* System Status */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">📊</div>
              <h3 className="text-xl font-bold text-white">Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-200 text-sm">Cline</span>
                <span className="text-green-400 text-xs font-semibold">● ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 text-sm">Kestra</span>
                <span className="text-green-400 text-xs font-semibold">● ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 text-sm">Oumi</span>
                <span className="text-green-400 text-xs font-semibold">● TRAINED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 text-sm">Vercel</span>
                <span className="text-green-400 text-xs font-semibold">● DEPLOYED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-200 text-sm">CodeRabbit</span>
                <span className="text-green-400 text-xs font-semibold">● MONITORING</span>
              </div>
            </div>
          </div>
        </div>

      

        {/* Footer */}
        <div className="mt-12 text-center text-purple-300 text-sm">
          <p>Built for AssembleHack25 by Pavithra Ebbali</p>
          <p className="mt-2">December 2025</p>
        </div>
      </div>
    </main>
  );
}
