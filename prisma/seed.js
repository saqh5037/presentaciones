import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')
  
  // Hash passwords
  const adminPassword = await bcrypt.hash('admin123', 10)
  const demoPassword = await bcrypt.hash('demo123', 10)
  const bernardoPassword = await bcrypt.hash('bernardo123', 10)
  const wbiPassword = await bcrypt.hash('wbi2025', 10)
  
  // Create users
  const users = [
    {
      username: 'admin',
      password: adminPassword,
      email: 'admin@wbi.com',
      name: 'Administrador',
      role: 'admin',
      allowedPresentations: JSON.stringify('all'),
      active: true
    },
    {
      username: 'demo',
      password: demoPassword,
      email: 'demo@fifco.com',
      name: 'Usuario Demo',
      role: 'viewer',
      allowedPresentations: JSON.stringify(['musi-kickoff', 'musi-kickoffV2']),
      active: true
    },
    {
      username: 'bernardo',
      password: bernardoPassword,
      email: 'bernardo@example.com',
      name: 'Bernardo',
      role: 'viewer',
      allowedPresentations: JSON.stringify(['etiquetas-bernardo']),
      active: true
    },
    {
      username: 'WBI',
      password: wbiPassword,
      email: 'wbi@wbi.com',
      name: 'Equipo',
      role: 'viewer',
      allowedPresentations: JSON.stringify(['labsis-expert']),
      active: true
    }
  ]
  
  for (const user of users) {
    await prisma.user.upsert({
      where: { username: user.username },
      update: {},
      create: user
    })
    console.log(`✅ Created user: ${user.username}`)
  }
  
  console.log('✨ Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })