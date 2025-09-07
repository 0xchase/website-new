export default function Cybersecurity() {
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Cybersecurity</h1>
          <p className="text-muted-foreground">
            Security research, penetration testing, and defensive strategies.
          </p>
        </section>
        
        <section className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Security Research</h2>
            <p className="text-muted-foreground mb-4">
              Investigating vulnerabilities and developing security solutions to protect digital infrastructure.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Network Security Analysis</h3>
                <p className="text-sm text-muted-foreground">Wireshark, Nmap, Metasploit, Custom tools</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Web Application Security</h3>
                <p className="text-sm text-muted-foreground">OWASP Top 10, Burp Suite, Custom scanners</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Penetration Testing</h2>
            <p className="text-muted-foreground mb-4">
              Comprehensive security assessments to identify and remediate vulnerabilities.
            </p>
            <div className="space-y-3">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Red Team Operations</h3>
                <p className="text-sm text-muted-foreground">Social engineering, Physical security, Advanced persistent threats</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-medium">Vulnerability Assessment</h3>
                <p className="text-sm text-muted-foreground">Automated scanning, Manual testing, Risk analysis</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Security Tools & Technologies</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Defensive Tools</h3>
                <p className="text-sm text-muted-foreground">SIEM, IDS/IPS, Firewalls, Endpoint protection</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Offensive Tools</h3>
                <p className="text-sm text-muted-foreground">Kali Linux, Cobalt Strike, Custom exploits</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Programming</h3>
                <p className="text-sm text-muted-foreground">Python, PowerShell, C/C++, Assembly</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Certifications</h3>
                <p className="text-sm text-muted-foreground">CEH, OSCP, CISSP, Security+</p>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}