// --- DATA & CONFIG ---
const MATERIALS_DB = [
    { name: "Concrete M20", cat: "Concrete", density: 2400, strength: "20 MPa", mod: "22360 MPa" },
    { name: "Concrete M25", cat: "Concrete", density: 2400, strength: "25 MPa", mod: "25000 MPa" },
    { name: "Concrete M30", cat: "Concrete", density: 2400, strength: "30 MPa", mod: "27386 MPa" },
    { name: "Steel Fe415", cat: "Steel", density: 7850, strength: "415 MPa", mod: "200 GPa" },
    { name: "Steel Fe500", cat: "Steel", density: 7850, strength: "500 MPa", mod: "200 GPa" },
    { name: "Brick Masonry", cat: "Masonry", density: 1900, strength: "3-10 MPa", mod: "-" },
    { name: "Soil (Loose Sand)", cat: "Soil", density: 1600, strength: "-", mod: "10-25 MPa" },
    { name: "Soil (Dense Sand)", cat: "Soil", density: 2000, strength: "-", mod: "50-80 MPa" },
    { name: "Granite", cat: "Rock", density: 2700, strength: "100+ MPa", mod: "50 GPa" },
    { name: "Timber (Teak)", cat: "Wood", density: 650, strength: "10-15 MPa", mod: "10 GPa" },
];

const CONV_FACTORS = {
    length: { m: 1, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254 },
    area: { sq_m: 1, sq_ft: 0.092903, sq_mm: 1e-6, acre: 4046.86 },
    force: { kN: 1, N: 0.001, kgf: 0.009807, tonf: 9.807 },
    pressure: { MPa: 1, Pa: 1e-6, bar: 0.1, psi: 0.006895 }
};

const MIX_RATIOS = {
    M10: { c: 1, s: 3, a: 6 },
    M15: { c: 1, s: 2, a: 4 },
    M20: { c: 1, s: 1.5, a: 3 },
    M25: { c: 1, s: 1, a: 2 }
};