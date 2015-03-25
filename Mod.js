ModPE.setItem(460, "record_11", 0, "Machete");
ModPE.setItem(461, "record_13", 0, "Golf Club");

function attackHook(a, v) {
if(getCarriedItem() == 460) {
Entity.setHealth(v, Entity.getHealth(v) - 8);
} else if(getCarriedItem() == 461) {
Entity.setHealth(v, Entity.getHealth(v) - 5);
}
}
