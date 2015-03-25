ModPE.setItem(460, "record_11", 0, "Machete");
ModPE.setItem(461, "record_13", 0, "Golf Club");
ModPE.setItem(462, "record_blocks", 0, "Crowbar");
ModPE.setItem(463, "record_cat", 0, "Dagger");

function attackHook(a, v) {
if(getCarriedItem() == 460) {
Entity.setHealth(v, Entity.getHealth(v) - 8);
} else if(getCarriedItem() == 461) {
Entity.setHealth(v, Entity.getHealth(v) - 5);
} else if(getCarriedItem() == 462) {
Entity.setHealth(v, Entity.getHealth(v) - 6);
} else if(getCarriedItem() == 463) {
Entity.setHealth(v, Entity.getHealth(v) - 4);
}
}
