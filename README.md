# nextjs-course (under construction)

nextjs crash course with Vishwas Youtube (1 part)

---

## INSTALLATION

`> pnpm create next-app --typescript` (not correctly configured yet)

`> cd folder_name`

`> pnpm run dev`

Launch app with :

`└─ $ ▶ pnpm run dev`

and put address

http://localhost:3000

in bar of navigation of your browser.

---

## Styles

`└─ $ ▶ pnpm install --save-dev sass`

(and change filename & import by replacing file.css by file.scss)

---

**Home page is the main route of this project**

index.tsx is the master file by folder.
It maps routing through files into same folder.

---

# Structure

## Home route :

```
./pages/index.tsx
http://localhost:3000
```

## Main page of product :

```
./pages/product/index.tsx
http://localhost:3000/product/
http://localhost:3000/product/(num)
http://localhost:3000/product/(num)/review/(num)
```

## Main page of params :

```
./pages/docs/index.tsx
http://localhost:3000/docs
http://localhost:3000/docs/features/(num)
http://localhost:3000/docs/features/(num)/concepts/(num)
```

## Dynamic segment

you can route by id without create multiple files.

`[productId] folder & [[reviewId]].tsx files`

./pages/product

```
http://localhost:3000/product/(num)
http://localhost:3000/product/(num)/review/(num)
```

**Example 1**

```
http://localhost:3000/product/1
http://localhost:3000/product/2
http://localhost:3000/product/3
...
http://localhost:3000/product/101
```

## Another intersting dynamic segment :

`./pages/docs/[[...params]].tsx`

```
http://localhost:3000/docs/features/(num)
or/&
http://localhost:3000/docs/features/(num)/concepts/(num)
```

**Example 2**

You can enter this in your browser address bar.

```
http://localhost:3000/features/1/concept/1
http://localhost:3000/features/1/concept/2
http://localhost:3000/features/1/concept/3

http://localhost:3000/features/2/concept/1
http://localhost:3000/features/3/concept/1
http://localhost:3000/features/4/concept/1

http://localhost:3000/features/2/concept/2
http://localhost:3000/features/3/concept/2
http://localhost:3000/features/4/concept/2
```

etc...

## Dynamiques routing 

You can go back to home page with a link tag provide by nextjs.

Enter:

`http://localhost:3000/product/`

and click on `Home`. You will see that Home page is accessible by UI.

For `http://localhost:3000/product/101` productId is defined by 101. When you click on back page, you restart at home page.
And not go back to `http://localhost:3000/product`.
