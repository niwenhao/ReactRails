# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170316171319) do

  create_table "domain_types", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "domains", force: :cascade do |t|
    t.string   "name"
    t.text     "descript"
    t.integer  "domain_type_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.boolean  "is_common"
    t.index ["domain_type_id"], name: "index_domains_on_domain_type_id"
  end

  create_table "system_users", force: :cascade do |t|
    t.string   "name"
    t.string   "mail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "words", force: :cascade do |t|
    t.string   "content"
    t.integer  "domain_id"
    t.integer  "common_word_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["common_word_id"], name: "index_words_on_common_word_id"
    t.index ["domain_id"], name: "index_words_on_domain_id"
  end

end
