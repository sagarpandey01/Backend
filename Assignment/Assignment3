// Q1
const arr1 = [10, 20, 30, 40];
for (const item of arr1) {
  console.log(item);
}

// Q2
const arr2 = [1, 2, 3, 4];
let total = 0;
for (const num of arr2) total += num;
console.log(total);

const sum = arr2.reduce((acc, n) => acc + n, 0);
console.log(sum);

// Q3
const arr3 = [5, 1, 9, 3];
let max = -Infinity;
for (const n of arr3) if (n > max) max = n;
console.log(max);

// Q4
const arr4 = [7, 3, 9, 0];
const min = arr4.reduce((m, v) => v < m ? v : m, Infinity);
console.log(min);

// Q5
const arr5 = [1, 2, 3];
const reversed = [];
for (let i = arr5.length - 1; i >= 0; i--) reversed.push(arr5[i]);
console.log(reversed);

// Q6
const arr6 = [1, 2, 2, 3, 1];
const seen = {};
const unique6 = [];
for (const n of arr6) {
  if (!seen[n]) { unique6.push(n); seen[n] = true; }
}
console.log(unique6);

// Q7
const arr7 = ['a', 'b', 'a', 'c'];
const freq = arr7.reduce((acc, x) => { acc[x] = (acc[x] || 0) + 1; return acc; }, {});
console.log(freq);

// Q8
const arr8 = [1, [2, 3], 4];
const flat8 = [];
for (const item of arr8) {
  if (Array.isArray(item)) for (const x of item) flat8.push(x);
  else flat8.push(item);
}
console.log(flat8);

// Q9
const arr9 = [1, 2, 3, 4];
const k9 = 1;
const steps = k9 % arr9.length;
const rotated = [...arr9.slice(arr9.length - steps), ...arr9.slice(0, arr9.length - steps)];
console.log(rotated);

// Q10
const arr10 = [1, 2, 3, 4, 5];
const n10 = 2;
const chunks = [];
for (let i = 0; i < arr10.length; i += n10) chunks.push(arr10.slice(i, i + n10));
console.log(chunks);

// Q11
const arr11 = [0, 1, false, 2, '', 3, null];
console.log(arr11.filter(Boolean));

// Q12
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i;
  return -1;
}
console.log(myIndexOf(['a', 'b', 'c'], 'b'));

// Q13
const a13 = [1, 2], b13 = [3, 4];
const merged13 = [...a13, ...b13];
console.log(merged13);

// Q14
const a14 = [1, 2], b14 = [10, 20];
const result14 = [];
for (let i = 0; i < Math.max(a14.length, b14.length); i++) {
  if (i < a14.length) result14.push(a14[i]);
  if (i < b14.length) result14.push(b14[i]);
}
console.log(result14);

// Q15
const arr15 = [1, 2, 3, 4], k15 = 2;
const sums15 = [];
let wSum = 0;
for (let i = 0; i < k15; i++) wSum += arr15[i];
sums15.push(wSum);
for (let i = k15; i < arr15.length; i++) { wSum += arr15[i] - arr15[i - k15]; sums15.push(wSum); }
console.log(sums15);

// Q16
function range(start, end) {
  const r = [];
  for (let i = start; i <= end; i++) r.push(i);
  return r;
}
console.log(range(3, 6));

// Q17
const arr17 = [1, 2, 3], i17 = 1;
const result17 = [...arr17.slice(0, i17), ...arr17.slice(i17 + 1)];
console.log(result17);

// Q18
const arr18 = [5, 12, 8, 20];
console.log(arr18.filter(x => x > 10).length);

// Q19
const arr19 = [3, 1, 2, 3, 2];
console.log([...new Set(arr19)].sort((a, b) => a - b));

// Q20
const arr20 = ['a', 'b'];
const indexMap = arr20.reduce((acc, val, i) => { acc[i] = val; return acc; }, {});
console.log(indexMap);


// ─────────────────────────────────────────
// SECTION B — OBJECTS (Q21–Q34)
// ─────────────────────────────────────────

// Q21
const obj21 = { name: 'Aman', age: 22 };
Object.keys(obj21).forEach(k => console.log(k, obj21[k]));

// Q22
const obj22 = { name: 'Aman' };
const new22 = { ...obj22, role: 'admin' };
console.log(new22);

// Q23
const user23 = { name: 'A', password: 'x' };
const { password: _p, ...rest23 } = user23;
console.log(rest23);

// Q24
const a24 = { x: 1 }, b24 = { y: 2 };
console.log({ ...a24, ...b24 });

// Q25
const obj25 = { a: 1, b: 2 };
const inverted = Object.entries(obj25).reduce((acc, [k, v]) => { acc[v] = k; return acc; }, {});
console.log(inverted);

// Q26
const obj26 = { a: { b: 2 } };
const clone26 = JSON.parse(JSON.stringify(obj26));
console.log(clone26);

// Q27
const obj27 = { a: 1, b: 2 };
console.log(Object.keys(obj27).length);

// Q28
const user28 = { name: 'A' };
const { name: name28, role28 = 'user' } = user28;
console.log(name28, role28);

// Q29
const obj29 = { id: 1, name: 'A', email: 'a@x' };
const keys29 = ['id', 'email'];
const picked = keys29.reduce((acc, k) => { acc[k] = obj29[k]; return acc; }, {});
console.log(picked);

// Q30
const user30 = { user: 'A', password: 'x' };
const { password: _pw30, ...safe30 } = user30;
console.log(safe30);

// Q31
const user31 = { name: 'A', address: { city: 'Old', zip: 123 } };
const updated31 = { ...user31, address: { ...user31.address, city: 'New' } };
console.log(updated31.address.city);

// Q32
const obj32 = { fullName: 'A', age: 20 };
const { fullName, ...rest32 } = obj32;
const renamed = { name: fullName, ...rest32 };
console.log(renamed);

// Q33
const defaults33 = { retries: 3 }, config33 = { timeout: 100 };
console.log({ ...defaults33, ...config33 });

// Q34
const isEmpty = obj => Object.keys(obj).length === 0;
console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));


// ─────────────────────────────────────────
// SECTION C — ARRAY OF OBJECTS (Q35–Q65)
// ─────────────────────────────────────────

const users = [
  { id: 1, name: 'Aman',  age: 22, isActive: true  },
  { id: 2, name: 'Riya',  age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true  },
  { id: 4, name: 'Neha',  age: 19, isActive: false }
];

const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending'   },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

// Q35
const spending35 = orders.reduce((acc, o) => {
  acc[o.userId] = (acc[o.userId] || 0) + o.total;
  return acc;
}, {});
console.log(spending35);

// Q36
console.log(orders.filter(o => o.status === 'completed'));

// Q37
const userById = users.reduce((m, u) => { m[u.id] = u; return m; }, {});
const joined37 = orders.map(o => ({ ...o, userName: userById[o.userId]?.name || null }));
console.log(joined37);

// Q38
const grouped38 = orders.reduce((acc, o) => {
  if (!acc[o.userId]) acc[o.userId] = [];
  acc[o.userId].push(o);
  return acc;
}, {});
console.log(grouped38);

// Q39
const N39 = 2;
const top39 = [...orders].sort((a, b) => b.total - a.total).slice(0, N39);
console.log(top39);

// Q40
const data40 = orders.reduce((acc, o) => {
  if (!acc[o.userId]) acc[o.userId] = { sum: 0, count: 0 };
  acc[o.userId].sum += o.total;
  acc[o.userId].count += 1;
  return acc;
}, {});
const avg40 = {};
for (const uid in data40) avg40[uid] = data40[uid].sum / data40[uid].count;
console.log(avg40);

// Q41
const activeIds = new Set(orders.map(o => o.userId));
console.log(users.filter(u => activeIds.has(u.id)).map(u => u.name));

// Q42
console.log(users.filter(u => !activeIds.has(u.id)).map(u => u.name));

// Q43
function paginate(data, page, limit) {
  const start = (page - 1) * limit;
  return { page, totalPages: Math.ceil(data.length / limit), data: data.slice(start, start + limit) };
}
console.log(paginate(orders, 1, 2));

// Q44
const query44 = 'am';
console.log(users.filter(u => u.name.toLowerCase().includes(query44.toLowerCase())).map(u => u.name));

// Q45
const statusCount = orders.reduce((acc, o) => { acc[o.status] = (acc[o.status] || 0) + 1; return acc; }, {});
console.log(statusCount);

// Q46
function patchStatus(orders, id, status) {
  return orders.map(o => o.id === id ? { ...o, status } : o);
}
console.log(patchStatus(orders, 2, 'completed'));

// Q47
function softDelete(orders, id) {
  return orders.map(o => o.id === id ? { ...o, deleted: true } : o);
}
console.log(softDelete(orders, 3));

// Q48
const orderMap48 = orders.reduce((acc, o) => {
  if (!acc[o.userId]) acc[o.userId] = { totalOrders: 0, totalSpent: 0 };
  acc[o.userId].totalOrders += 1;
  acc[o.userId].totalSpent += o.total;
  return acc;
}, {});
const summary48 = users.map(u => ({
  userId: u.id, name: u.name,
  totalOrders: orderMap48[u.id]?.totalOrders || 0,
  totalSpent:  orderMap48[u.id]?.totalSpent  || 0
}));
console.log(summary48);

// Q49
const grand49 = orders.reduce((s, o) => s + o.total, 0);
const per49   = orders.reduce((acc, o) => { acc[o.userId] = (acc[o.userId] || 0) + o.total; return acc; }, {});
const pct49   = {};
for (const uid in per49) pct49[uid] = Number((per49[uid] / grand49 * 100).toFixed(2));
console.log(pct49);

// Q50
console.log(orders.map(o => ({ id: o.id, total: o.total })));

// Q51
console.log(orders.map(o => {
  const tax = +(o.total * 0.18).toFixed(2);
  return { ...o, tax, grandTotal: +(o.total + tax).toFixed(2) };
}));

// Q52
console.log(orders.map(o =>
  o.status === 'completed' ? { ...o, total: +(o.total * 1.10).toFixed(2) } : o
));

// Q53
const badOrders = [
  { id: 1, userId: 1, total: 500 },
  { id: 2, total: 300 },
  { id: 3, userId: 3 }
];
console.log(badOrders.filter(o => o.id === undefined || o.userId === undefined || o.total === undefined));

// Q54
const existing54 = [{ id: 1, total: 500 }, { id: 2, total: 300 }];
const incoming54 = [{ id: 1, total: 600 }];
const map54 = {};
for (const o of existing54) map54[o.id] = o;
for (const o of incoming54) map54[o.id] = o;
console.log(Object.values(map54).sort((a, b) => a.id - b.id));

// Q55
const grouped55 = users.reduce((acc, u) => {
  const k = u.isActive ? 'active' : 'inactive';
  acc[k].push(u);
  return acc;
}, { active: [], inactive: [] });
console.log(grouped55);

// Q56
console.log(users.filter(u => u.isActive && u.age >= 18).map(u => u.name));

// Q57
const hist57 = users.reduce((acc, u) => {
  const b = u.age < 18 ? '<18' : u.age <= 24 ? '18-24' : '25+';
  acc[b] = (acc[b] || 0) + 1;
  return acc;
}, {});
console.log(hist57);

// Q58
const userById58 = Object.fromEntries(users.map(u => [u.id, u]));
console.log(userById58);

// Q59
const k59 = 2;
const spend59 = orders.reduce((acc, o) => { acc[o.userId] = (acc[o.userId] || 0) + o.total; return acc; }, {});
const uMap59  = users.reduce((m, u) => { m[u.id] = u; return m; }, {});
const top59   = Object.entries(spend59).sort(([,a],[,b]) => b - a).slice(0, k59).map(([uid]) => uMap59[uid]?.name);
console.log(top59);

// Q60
console.log([...new Set(orders.map(o => o.status))]);

// Q61
const orders61 = [
  { id: 1, products: [{ productId: 5, qty: 2 }, { productId: 6, qty: 1 }] },
  { id: 2, products: [{ productId: 7, qty: 3 }] }
];
console.log(orders61.flatMap(o => o.products.map(p => ({ orderId: o.id, productId: p.productId, qty: p.qty }))));

// Q62
const weight62 = { completed: 1.0, pending: 0.5 };
const ltv62 = orders.reduce((acc, o) => {
  acc[o.userId] = (acc[o.userId] || 0) + o.total * (weight62[o.status] || 0);
  return acc;
}, {});
console.log(ltv62);

// Q63
const header63 = Object.keys(users[0]).join(',');
const rows63   = users.map(u => Object.values(u).join(','));
console.log([header63, ...rows63].join('\n'));

// Q64
const prefs64    = [{ userId: 1, theme: 'dark' }];
const defPref64  = { theme: 'light' };
const prefMap64  = prefs64.reduce((m, p) => { m[p.userId] = p; return m; }, {});
const result64   = users.map(u => ({ ...u, preferences: { ...defPref64, ...prefMap64[u.id] } }));
console.log(result64);

// Q65
const oldUsers = [{ id: 1, name: 'A',    age: 20 }];
const newUsers = [{ id: 1, name: 'Aman', age: 20 }];
const oldMap65 = oldUsers.reduce((m, u) => { m[u.id] = u; return m; }, {});
const newMap65 = newUsers.reduce((m, u) => { m[u.id] = u; return m; }, {});
const diffs65  = [];
for (const id in newMap65) {
  const changed = Object.keys(newMap65[id]).filter(k => oldMap65[id][k] !== newMap65[id][k]);
  if (changed.length) diffs65.push({ id: Number(id), changedFields: changed });
}
console.log(diffs65);