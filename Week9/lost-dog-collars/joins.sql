-- # YOUR SQL CODE GOES HERE
-- Which collars have a known owner? Display only collars with known owners and those owners' names.
SELECT dog_owners.name, lost_dog_collars.dog_name
FROM dog_owners
  JOIN lost_dog_collars
  ON (dog_owners.dog_name = lost_dog_collars.dog_name);

-- For which collars is there no known owner? Display only collars without known owners.
-- Left table == lost_dog_collars
-- Right table == dog_owners

SELECT lost_dog_collars.dog_name
FROM lost_dog_collars
  LEFT JOIN dog_owners ON lost_dog_collars.dog_name = dog_owners.dog_name
WHERE dog_owners.dog_name IS NULL;


-- What collars are in our possession? Display all collars in our possession. If an owner exists for a given collar, display that also.
-- Left table == lost_dog_collars
-- Right table == dog_owners

SELECT lost_dog_collars.dog_name, dog_owners.name
FROM lost_dog_collars
  LEFT OUTER JOIN dog_owners
  ON dog_owners.dog_name = lost_dog_collars.dog_name;


-- What owners do we know about? Display all owners known to us. If a collar matches that owner, display the collar also.

-- Left table == dog_owners
-- Right table == lost_dog_collars

SELECT dog_owners.name AS "Owner Name", dog_owners.dog_name AS "Dog Name"
FROM dog_owners
  RIGHT OUTER JOIN lost_dog_collars
  ON lost_dog_collars.dog_name = dog_owners.dog_name
WHERE dog_owners.name IS NOT NULL;