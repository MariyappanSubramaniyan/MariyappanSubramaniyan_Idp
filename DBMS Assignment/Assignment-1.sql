 -- 1. Find out the PG-13 rated comedy movies
SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE f.rating = 'PG-13' AND c.name = 'Comedy';

-- 2. finds the top 3 most rented horror movie
SELECT f.title, COUNT(*) AS rental_count
FROM film f
JOIN inventory i USING(film_id)
JOIN rental r USING(inventory_id)
JOIN film_category fc USING(film_id)
JOIN category c USING(category_id)
WHERE c.name = 'Horror'
GROUP BY f.film_id
ORDER BY rental_count DESC
LIMIT 3;

-- 3. Customers from India who rented Sports movies

SELECT DISTINCT cu.first_name, cu.last_name
FROM customer cu
JOIN address a USING(address_id)
JOIN city ci USING(city_id)
JOIN country co USING(country_id)
JOIN rental r USING(customer_id)
JOIN inventory i USING(inventory_id)
JOIN film f USING(film_id)
JOIN film_category fc USING(film_id)
JOIN category c USING(category_id)
WHERE co.country = 'India' AND c.name = 'Sports';

-- 4. Customers from Canada who rented “NICK WAHLBERG” movies
SELECT DISTINCT c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a2 ON fa.actor_id = a2.actor_id
WHERE co.country = 'Canada'
  AND a2.first_name = 'NICK'
  AND a2.last_name = 'WAHLBERG';

-- 5. Number of movies “SEAN WILLIAMS” acted in:
SELECT COUNT(*) AS movie_count
FROM film_actor fa
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'SEAN' AND a.last_name = 'WILLIAMS';
