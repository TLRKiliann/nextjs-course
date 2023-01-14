# nextjs-course (under construction)

nextjs crash course with Vishwas (youtube nextjs 79 lessons)

---

**Home page is the main route of this project**

index.tsx is the master file by folder.
It maps routing through files into same folder.

---

## Home route :

```
pages/index.tsx
localhost:3000
```

## Main page of params :

```
pages/docs/index.tsx
localhost:3000/docs
```

## Main page of product :

```
pages/product/index.tsx
localhost:3000/product/index.js
```

## Dynamiques segments routes

```
localhost:3000/docs/features/X/concepts/X
[productId] folder & [[reviewId]].tsx files
```

## Dynamiques routing 

you can route by id without create multiple files.

```
localhost:3000/product/1
localhost:3000/product/2
localhost:3000/product/3
```

```
localhost:3000/docs/features/X/concepts/X
[productId].tsx & [[reviewId]].tsx
```

you can go back to home page with a link tag provide by nextjs.

Enter:

`localhost:3000/product/`

and click on `Home`. You will see that Home page is accessible by UI.
