import React from 'react';
import ReactECharts from 'echarts-for-react';
import './App.css';

function App() {
  const customerOption = {
    grid: { left: '3%', right: '20%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'value',
      show: false,
      splitLine: { show: false }
    },
    yAxis: {
      type: 'category',
      data: ['South', 'Central', 'East', 'West'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { fontSize: 16, fontWeight: 'bold', color: '#6b7280' }
    },
    series: [
      {
        type: 'bar',
        data: [
          { value: 512, itemStyle: { color: '#e5e7eb' } },
          { value: 629, itemStyle: { color: '#e5e7eb' } },
          { value: 685, itemStyle: { color: '#e5e7eb' } },
          { value: 686, itemStyle: { color: '#10b981' } } 
        ],
        label: {
          show: true,
          position: 'right',
          formatter: '{c} Pelanggan',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#374151'
        },
        barWidth: '60%',
        itemStyle: { borderRadius: [0, 4, 4, 0] }
      }
    ]
  };

  const salesOption = {
    grid: { left: '5%', right: '15%', bottom: '5%', top: '15%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['2023', '2024', '2025', '2026'],
      axisLine: { show: true, lineStyle: { color: '#d1d5db', width: 2 } },
      axisTick: { show: false },
      axisLabel: { fontSize: 14, fontWeight: 'bold', color: '#6b7280' }
    },
    yAxis: {
      type: 'value',
      show: false,
      splitLine: { show: false }
    },
    series: [
      {
        name: 'South',
        type: 'line',
        data: [25, 42, 29, 55],
        itemStyle: { color: '#e5e7eb' },
        lineStyle: { width: 3 },
        symbol: 'none'
      },
      {
        name: 'Central',
        type: 'line',
        data: [57, 83, 97, 81],
        itemStyle: { color: '#e5e7eb' },
        lineStyle: { width: 3 },
        symbol: 'none'
      },
      {
        name: 'East',
        type: 'line',
        data: [50, 66, 84, 93],
        itemStyle: { color: '#e5e7eb' },
        lineStyle: { width: 3 },
        symbol: 'none'
      },
      {
        name: 'West',
        type: 'line',
        data: [78, 64, 98, 126],
        itemStyle: { color: '#10b981' },
        lineStyle: { width: 5 },
        symbolSize: 10,
        label: {
          show: true,
          formatter: (params) => {
            if (params.dataIndex === 3) return '{value}M\n(+29% YoY)';
            return '{value}M';
          },
          position: 'top',
          fontSize: 14,
          fontWeight: 'bold',
          color: '#10b981',
          distance: 10
        }
      }
    ]
  };

  const marginOption = {
    grid: { left: '5%', right: '5%', bottom: '5%', top: '20%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['South', 'Central', 'East', 'West'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { fontSize: 16, fontWeight: 'bold', color: '#6b7280' }
    },
    yAxis: {
      type: 'value',
      show: false,
      splitLine: { show: false },
      max: 3.0
    },
    series: [
      {
        type: 'bar',
        data: [
          { value: 0.55, itemStyle: { color: '#e5e7eb' } },
          { value: 0.95, itemStyle: { color: '#e5e7eb' } },
          { value: 2.48, itemStyle: { color: '#d1d5db' } },
          { value: 2.45, itemStyle: { color: '#10b981' } }
        ],
        label: {
          show: true,
          position: 'top',
          formatter: '{c}x',
          fontSize: 16,
          fontWeight: 'bold',
          color: '#374151'
        },
        barWidth: '50%',
        itemStyle: { borderRadius: [6, 6, 0, 0] },
        markLine: {
          data: [
            { yAxis: 1.5, name: 'Industry Avg' }
          ],
          lineStyle: { color: '#9ca3af', type: 'dashed', width: 2 },
          label: { 
            show: true, 
            position: 'middle', 
            formatter: 'Target Minimum (1.5x)',
            fontSize: 14,
            color: '#6b7280'
          },
          symbol: ['none', 'none']
        }
      }
    ]
  };

  return (
    <div className="slide-container bg-white font-sans text-gray-900">
      
      {/* SLIDE 1: Title & Overview */}
      <section className="slide text-center bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide mb-6 uppercase">
            Rekomendasi Ekspansi Produk
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
            Region <span className="text-emerald-500">West</span> Menunjukkan Kesiapan Tertinggi untuk Ekspansi Produk Baru
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Berdasarkan analisis performa pada tahun 2023-2026, Region West secara konsisten memimpin dalam ukuran pasar, pertumbuhan penjualan, dan stabilitas margin.
          </p>
          <div className="animate-bounce mt-12 text-gray-400">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* SLIDE 2: Customer Base */}
      <section className="slide">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="mb-10 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pasar Terbesar: <span className="text-emerald-500">West</span> Memimpin dalam Jumlah Pelanggan Unik
            </h2>
            <p className="text-lg text-gray-500">
              Dengan 686 pelanggan unik, Region West memiliki basis pasar terbesar yang siap mengadopsi produk baru kita.
            </p>
          </div>
          <div className="chart-wrapper mx-auto">
            <ReactECharts option={customerOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </section>

      {/* SLIDE 3: Sales Growth */}
      <section className="slide bg-gray-50 border-y border-gray-100">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="mb-10 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Momentum Terakselerasi: Pertumbuhan Sales <span className="text-emerald-500">West</span> Meroket 29% YoY
            </h2>
            <p className="text-lg text-gray-500">
              Berbeda dengan region lain yang stagnan, West mencatatkan rekor penjualan 126 Juta pada 2026.
            </p>
          </div>
          <div className="chart-wrapper mx-auto">
            <ReactECharts option={salesOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </section>

      {/* SLIDE 4: Margin Stability */}
      <section className="slide">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="mb-10 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ekspansi yang Berkelanjutan: <span className="text-emerald-500">West</span> Memberikan Profitabilitas Tinggi yang Stabil
            </h2>
            <p className="text-lg text-gray-500">
              Margin profitabilitas West berada jauh di atas target minimum industri, memastikan ekspansi tidak akan membebani arus kas.
            </p>
          </div>
          <div className="chart-wrapper mx-auto">
            <ReactECharts option={marginOption} style={{ height: '100%', width: '100%' }} />
          </div>
        </div>
      </section>

      {/* SLIDE 5: CTA */}
      <section className="slide bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-8 text-emerald-400">Rekomendasi Tindakan</h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Berdasarkan data <strong>basis pelanggan tertinggi</strong>, <strong>pertumbuhan sales +29%</strong>, dan <strong>stabilitas profitabilitas yang kuat</strong>, kami merekomendasikan:
          </p>
          
          <div className="bg-gray-800 rounded-2xl p-8 mb-12 text-left shadow-xl border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-6">Mulai Ekspansi Produk di Region West pada Q3</h3>
            <ul className="space-y-4 text-xl text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Alokasikan 60% anggaran marketing peluncuran produk baru ke wilayah West.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Fokuskan akuisisi pelanggan pada segmentasi konsumen eksisting yang berjumlah 686 akun.
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-emerald-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Targetkan ROI tercapai dalam 2 kuartal berkat margin yang superior.
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
