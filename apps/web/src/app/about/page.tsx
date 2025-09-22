import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export default function About() {
  const certifications = [
    { short: "OSCP", full: "Offensive Security Certified Professional" },
    { short: "MalDev", full: "Malware Development" },
    { short: "RingZer0", full: "RingZer0 Team CTF" },
    { short: "CryptoHack", full: "CryptoHack" },
    { short: "CPTS", full: "Certified Penetration Testing Specialist" },
    { short: "CBBH", full: "Certified Bug Bounty Hunter" },
    { short: "CDSA", full: "Certified Digital Security Analyst" },
    { short: "CWEE", full: "Certified Web Exploitation Expert" },
    { short: "CAPE", full: "Certified Advanced Penetration Expert" },
  ]

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <div>
            <p className="text-foreground">
              Graduate of the University of Maryland with experience in vulnerability research, reverse engineering, software development, digital signal processing, and more. I prefer research-oriented work that utilizes, analyzes, or contributes to emerging technologies.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="font-medium">Programming:</span> Rust, C++, C, Dart, Python, Java, x86/ARM assembly, Javascript</li>
            <li><span className="font-medium">Reverse Engineering:</span> Radare2, Ghidra, BinaryNinja, IDA Pro, x64dbg, GDB, Angr</li>
            <li><span className="font-medium">Penetration Testing:</span> Metasploit, Nmap, Wireshark, Burp Suite, etc</li>
            <li><span className="font-medium">App Frameworks:</span> Flutter, JUCE, NextJS</li>
            <li><span className="font-medium">Visual Effects:</span> Unreal Engine 5, Blender 3D, Lightroom, Substance Painter</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Git Contribution History</h3>
            <div className="border rounded-lg p-4 bg-muted/20">
              <div className="text-sm text-muted-foreground mb-2">Contribution activity over the past year</div>
              <div className="grid grid-cols-53 gap-1 mb-2">
                {Array.from({ length: 365 }, (_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm bg-muted/30 hover:bg-muted/60 transition-colors"
                    title={`${new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000).toLocaleDateString()}: 0 contributions`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm bg-muted/30"></div>
                  <div className="w-3 h-3 rounded-sm bg-muted/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-muted/70"></div>
                  <div className="w-3 h-3 rounded-sm bg-muted/90"></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <ul className="flex flex-wrap gap-2 text-xs">
            {certifications.map((cert) => (
              <Tooltip key={cert.short}>
                <TooltipTrigger asChild>
                  <li className="rounded-md border px-2 py-1 bg-secondary text-secondary-foreground cursor-help">
                    {cert.short}
                  </li>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{cert.full}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Presentations</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Audio Developer Conference 2022</h3>
              <p className="text-muted-foreground text-sm">Piracy remains a ubiquitous and persistent problem for audio developers attempting to commercialize their products. This is in part because most custom license checking schemes contain fairly basic mistakes that make it easy for crackers to bypass them. This presentation unveils tricks and techniques commonly used by crackers and explains how they can be made more resistant to common attacks.</p>
              <div className="w-full rounded-md border overflow-hidden">
                <iframe
                  className="w-full"
                  style={{ aspectRatio: "16 / 9" }}
                  src="https://www.youtube.com/embed/EPgSaH9q8UM"
                  title="Audio Developer Conference 2022"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Radare2 Conference 2020</h3>
              <p className="text-muted-foreground text-sm">This talk is an overview the new "Modality" radare2 plugin to perform symbolic execution. The tool is built on top of angr, and provides a faster alternative to using angr than writing scripts. This integration has numerous advantages, including easy switching between concrete and symbolic execution, useful visualizations of the angr backend, as well as a suite of features for vulnerability detection and exploit generation.</p>
              <div className="w-full rounded-md border overflow-hidden">
                <iframe
                  className="w-full"
                  style={{ aspectRatio: "16 / 9" }}
                  src="https://www.youtube.com/embed/F35El30Jj80"
                  title="Radare2 Conference 2020"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-muted pl-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">MS in Applied Machine Learning</h3>
                <span className="text-xs text-muted-foreground">UMD · Expected in 2025</span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">Performed vulnerability analysis on various IOT devices as part of a “winternship” program, including several surveillance cameras and webcams. I discovered and documented various potential weaknesses in the camera firmware.</p>
              <div className="mt-2">
                <div className="text-xs font-medium">Selected Coursework</div>
                <ul className="list-disc pl-6 text-xs text-muted-foreground space-y-1 mt-1">
                  <li>CMSC720: Foundations of Deep Learning</li>
                  <li>MSML610: Deep Learning</li>
                  <li>MSML603: Principals of Machine Learning</li>
                  <li>MSML601: Probability and Statistics</li>
                </ul>
              </div>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">BS in Computer Science</h3>
                <span className="text-xs text-muted-foreground">UMD · Fall 2017 - Winter 2022</span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">Performed vulnerability analysis and reverse engineering on network devices. Developed an application in C.</p>
              <div className="mt-2">
                <div className="text-xs font-medium">Selected Coursework</div>
                <ul className="list-disc pl-6 text-xs text-muted-foreground space-y-1 mt-1">
                  <li>HACS408E: Reverse Engineering</li>
                  <li>HACS408T: Penetration Testing</li>
                  <li>HACS408L: Digital Forensics</li>
                  <li>CMSC412: Operating Systems</li>
                  <li>CMSC414: Computer and Network Security</li>
                  <li>CMSC417: Computer Networks</li>
                  <li>CMSC430: Compilers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Teaching</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-muted pl-4">
              <h3 className="font-medium">HACS408E: Applied Reverse Engineering (2024)</h3>
              <p className="text-muted-foreground text-sm mt-1">An upper-level software reverse engineering course at the University of Maryland. Topics covered include assembly language, executable file formats, operating system internals, and the static/dynamic analysis of compiled binaries. Students apply these concepts to real-world scenarios like malware analysis and vulnerability analysis with interactive labs, at-home assignments, and a final project.</p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h3 className="font-medium">CMSC388Z: Programming in Rust (2021)</h3>
              <p className="text-muted-foreground text-sm mt-1">A semester-long course at the University of Maryland on the Rust programming language. The course followed the rust book, and I was the primary lecturer for one of the sections, in addition to designing and grading the course assignments with another facilitator. The course syllabus can be found on the <a className="underline underline-offset-4" href="https://www.cs.umd.edu/class/fall2021/cmsc388Z/" target="_blank" rel="noreferrer">course website</a>.</p>
            </div>
          </div>
        </section>
    </main>
  )
}