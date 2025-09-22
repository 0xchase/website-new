"use client"

import { PublicationFilter } from "./publication-filter"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { useState } from "react"
import { Download } from "lucide-react"

export default function Research() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const malwareReports = [
    { name: "Generic Trojan", hash: "a1b2c3d4e5f6...", date: "2024-01-15" },
    { name: "Another Ransomware", hash: "f6e5d4c3b2a1...", date: "2024-01-12" },
    { name: "Some Backdoor", hash: "9f8e7d6c5b4a...", date: "2024-01-08" },
    { name: "Some Backdoor 2", hash: "9f8e7d6c5b4a...", date: "2024-01-08" },
    { name: "Some Backdoor 3", hash: "9f8e7d6c5b4a...", date: "2024-01-08" },
    { name: "Some Backdoor 4", hash: "9f8e7d6c5b4a...", date: "2024-01-08" },
    { name: "Another name", hash: "9f8e7d6c5b4a...", date: "2024-01-08" },
  ]
  
  const technicalReports = [
    { name: "Reverse engineered CUDA instruction set", date: "2024-01-20" },
    { name: "Reverse engineered reverberation algorithms", date: "2024-01-18" },
  ]
  
  const filteredReports = malwareReports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.hash.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <main className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Research</h1>
        <p className="text-foreground">
          I&apos;m currently investigating Target Generation Algorithms for IPv6 under <a href="https://www.cs.umd.edu/">Dave Levin</a> at the <a href="https://www.cs.umd.edu/">University of Maryland, College Park</a>.
        </p>
      </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/projects/rmap">
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer relative">
                <div className="absolute top-3 right-3 w-8 h-8 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-bold text-sm">
                  R
                </div>
                <CardHeader>
                  <CardTitle>rmap</CardTitle>
                  <CardDescription>
                    Scanning the IPv6 Internet with Target Generation Algorithms
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/projects/rmap">
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer relative">
                <div className="absolute top-3 right-3 w-8 h-8 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-bold text-sm">
                  R
                </div>
                <CardHeader>
                  <CardTitle>nvdisasm</CardTitle>
                  <CardDescription>
                    Parse and disassemble CUDA kernels
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link href="/projects/modality">
              <Card className="hover:bg-accent/50 transition-colors cursor-pointer relative">
                <div className="absolute top-3 right-3 w-8 h-8 bg-muted rounded-md flex items-center justify-center text-muted-foreground font-bold text-sm">
                  M
                </div>
                <CardHeader>
                  <CardTitle>modality</CardTitle>
                  <CardDescription>
                    Interactive symbolic execution and exploit generation
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Publications</h2>
        <PublicationFilter
          publications={[
            {
              title: "Advancing Neural Network Architectures 1",
              venue: "JMLR",
              year: 2024,
              tags: ["cybersecurity", "ipv6"],
            },
            {
              title: "User Experience in Modern Web Applications hmm",
              venue: "CHI",
              year: 2023,
              tags: ["cybersecurity", "machine learning", "mechanistic interpretability"],
            },
            {
              title: "User Experience in Modern Web Applications",
              venue: "CHI",
              year: 2023,
              tags: ["cybersecurity", "machine learning", "mechanistic interpretability"],
            },
            {
              title: "Advancing Neural Network Architectures 2",
              venue: "JMLR",
              year: 2024,
              tags: ["cybersecurity", "ipv6"],
            },
            {
              title: "User Experience in Modern Web Applications 3",
              venue: "CHI",
              year: 2023,
              tags: ["cybersecurity", "machine learning", "mechanistic interpretability"],
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Conference Talks</h2>
        <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
          <li>Radare2 Conference 2020</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Technical Reports</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Report</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-right text-xs"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {technicalReports.map((report, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-sm">{report.name}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{report.date}</TableCell>
                  <TableCell className="text-right">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Download className="h-4 w-4" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Malware Analysis</h2>
        <p className="text-muted-foreground">
          In my free time, I like to reverse engineer malware to understand how it works and how to detect it. Below are my writeups for various samples, with a link to the corresponding report.
        </p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Search malware reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Name</TableHead>
                  <TableHead className="text-xs">Hash</TableHead>
                  <TableHead className="text-xs">Date</TableHead>
                  <TableHead className="text-right text-xs"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-sm">{report.name}</TableCell>
                    <TableCell className="text-xs text-muted-foreground font-mono">{report.hash}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{report.date}</TableCell>
                    <TableCell className="text-right">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Download className="h-4 w-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  )
}