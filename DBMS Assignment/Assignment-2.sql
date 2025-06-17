-- 1. Find out the number of documentaries with deleted scenes.
SELECT COUNT(*) AS documentary_with_deleted_scenes
FROM film
JOIN film_category USING(film_id)
JOIN category USING(category_id)
WHERE name = 'Documentary' AND special_features LIKE '%Deleted Scenes%';

-- 2. Find out the number of sci-fi movies rented by the store managed by Jon Stephens.
SELECT COUNT(*) AS scifi_rented_by_jon_stephens
FROM rental
JOIN inventory USING(inventory_id)
JOIN film_category USING(film_id)
JOIN category USING(category_id)
JOIN staff USING(staff_id)
WHERE name = 'Sci-Fi' AND first_name = 'Jon' AND last_name = 'Stephens';

-- 3. Find out the total sales from Animation movies.
SELECT SUM(amount) AS total_sales_from_animation
FROM payment
JOIN rental USING(rental_id)
JOIN inventory USING(inventory_id)
JOIN film_category USING(film_id)
JOIN category USING(category_id)
WHERE name = 'Animation';

-- 4. Find out the top 3 rented category of movies by “PATRICIA JOHNSON”.
SELECT name AS category_name, COUNT(*) AS rentals
FROM customer
JOIN rental USING(customer_id)
JOIN inventory USING(inventory_id)
JOIN film_category USING(film_id)
JOIN category USING(category_id)
WHERE first_name = 'PATRICIA' AND last_name = 'JOHNSON'
GROUP BY name
ORDER BY rentals DESC
LIMIT 3;

-- 5. Find out the number of R rated movies rented by “SUSAN WILSON”.
SELECT COUNT(*) AS r_rated_movies_by_susan
FROM customer
JOIN rental USING(customer_id)
JOIN inventory USING(inventory_id)
JOIN film USING(film_id)
WHERE first_name = 'SUSAN' AND last_name = 'WILSON' AND rating = 'R';
