//oh yeah
ModPE.setItem(460, "axe", 1, "Machete");

function attackHook(a, v) {
if(getCarriedItem() == 460) Entity.setHealth(v, Entity.getHealth(v) - 10);
}
